import { Helmet } from 'react-helmet-async';

export function SEO({ 
  title, 
  description, 
  name = 'Master Ramcharan', 
  type = 'website',
  image = '/og-image.webp' // We will need to provide this in public/
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${name}` : name}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph tags */}
      <meta property='og:title' content={title ? `${title} | ${name}` : name} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:image' content={image} />
      
      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title ? `${title} | ${name}` : name} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
}
