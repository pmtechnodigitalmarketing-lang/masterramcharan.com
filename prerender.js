import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import http from 'http';
import sirv from 'sirv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, 'dist');

async function serve() {
  const assets = sirv(outDir, {
    maxAge: 31536000,
    immutable: true,
    single: true
  });

  const server = http.createServer((req, res) => {
    assets(req, res, () => {
      res.statusCode = 404;
      res.end('Not found');
    });
  });

  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve();
    });
  });

  return server;
}

async function prerender() {
  console.log('Starting prerender process...');
  if (!fs.existsSync(outDir)) {
    console.error('Error: dist directory does not exist. Please run build first.');
    process.exit(1);
  }

  const server = await serve();
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Local server started at ${baseUrl}`);

  const browserOptions = { headless: 'new' };
  
  // Try to use system browser to avoid downloading Chromium
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  
  for (const executablePath of possiblePaths) {
    if (fs.existsSync(executablePath)) {
      browserOptions.executablePath = executablePath;
      break;
    }
  }

  const browser = await puppeteer.launch(browserOptions);
  
  const crawled = new Set();
  const queue = ['/'];
  
  // Known core routes
  const knownRoutes = ['/about', '/services', '/locations', '/blog', '/booking'];
  for (const r of knownRoutes) {
    if (!queue.includes(r)) queue.push(r);
  }

  while (queue.length > 0) {
    const route = queue.shift();
    if (crawled.has(route)) continue;
    crawled.add(route);

    console.log(`Prerendering ${route}...`);
    
    const page = await browser.newPage();
    
    try {
      // Wait until network is idle to ensure React finishes rendering
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Give a little extra time for complex animations to settle
      await new Promise(r => setTimeout(r, 1000));

      // Get the HTML content
      const html = await page.content();
      
      // Discover internal links to crawl
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a'))
          .map(a => a.getAttribute('href'))
          .filter(href => href && href.startsWith('/'));
      });
      
      for (const link of links) {
        const cleanLink = link.split('#')[0].split('?')[0];
        if (cleanLink && !crawled.has(cleanLink) && !queue.includes(cleanLink)) {
          queue.push(cleanLink);
        }
      }
      
      // Save HTML
      let routePath = route;
      if (routePath === '/') {
          routePath = '';
      }
      
      const routeDir = path.join(outDir, routePath);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    } catch (e) {
      console.error(`Failed to prerender ${route}:`, e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
