import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { blogPosts } from '../data/blogData';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageTransition>
      <SEO title={`${post.title} | Master Ramcharan Blog`} description={post.excerpt} />
      
      <article className="pt-32 pb-24 min-h-screen bg-bg-base relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="mb-8">
            <Link to="/blog" className="text-primary hover:text-secondary transition-colors inline-flex items-center font-medium">
              &larr; Back to all posts
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-dark mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-text-secondary mb-10 border-b border-primary/10 pb-10">
              <span className="font-medium text-text-dark">{post.author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              <span>{post.date}</span>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-primary/10">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-80"></div>
            </div>
            
            <div 
              className="prose prose-lg prose-p:text-text-secondary prose-headings:font-serif prose-headings:text-text-dark prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-primary/10 flex justify-between items-center">
              <p className="text-text-secondary font-medium">Share this article:</p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark transition-colors border-primary/20 shadow-sm">
                  <span className="sr-only">Twitter</span>
                  𝕏
                </button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-dark hover:bg-primary hover:text-text-dark transition-colors border-primary/20 shadow-sm">
                  <span className="sr-only">Facebook</span>
                  f
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </PageTransition>
  );
}
