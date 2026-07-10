import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { blogPosts } from '../data/blogData';
import * as Icons from 'react-icons/hi';

export default function Blog() {
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filter]);

  return (
    <PageTransition>
      <SEO title="Editorial | Master Ramcharan" description="Cosmic insights, astrological transits, and spiritual guidance." />
      
      <div className="bg-white min-h-screen font-sans text-text-secondary">
        
        {/* Luxury Hero Section */}
        <div className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden border-b border-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary),0.15),transparent_50%)] pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/20 bg-white/5 backdrop-blur-md mb-8"
            >
              <Icons.HiOutlineBookOpen className="text-3xl text-text-dark/80" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-dark mb-6 tracking-tight drop-shadow-2xl"
            >
              The Editorial.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-dark/50 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Astrological transits, spiritual growth, and profound cosmic insights curated for the modern soul.
            </motion.p>
          </div>
        </div>

        {/* Dynamic Category Filter */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-primary/20">
          <div className="container mx-auto px-6 py-4 overflow-x-auto hide-scrollbar">
            <div className="flex items-center justify-start lg:justify-center gap-3 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                      : 'bg-transparent text-text-dark/50 hover:text-text-dark border border-primary/20 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => {
                // First item gets featured treatment if it's the 'All' view or if there are multiple posts
                const isFeatured = index === 0;

                return (
                  <Link 
                    to={`/blog/${post.id}`}
                    key={post.id}
                    className={`group relative rounded-[2rem] overflow-hidden bg-white/[0.02] border border-primary/20 hover:border-primary/20 transition-all duration-500 flex flex-col ${
                      isFeatured ? 'md:col-span-2 lg:col-span-2 md:row-span-2 min-h-[500px]' : 'h-full min-h-[400px]'
                    }`}
                  >
                    {/* Image Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110 ease-out opacity-40 group-hover:opacity-50"
                        style={{ backgroundImage: `url('${post.image}')` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className={`relative z-10 flex flex-col justify-end h-full p-8 md:p-12 ${isFeatured ? 'lg:p-16' : ''}`}>
                      <div className="mb-auto flex justify-between items-start">
                        <span className="px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-primary/20 text-text-dark/80 text-[10px] font-bold tracking-[0.2em] uppercase">
                          {post.category}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <Icons.HiOutlineArrowRight className="text-xl" />
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <div className="flex items-center gap-4 text-text-dark/50 text-xs font-bold tracking-widest uppercase mb-4">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-primary"></span>
                          <span>{post.author}</span>
                        </div>
                        <h2 className={`font-serif text-text-dark group-hover:text-primary transition-colors leading-tight mb-4 ${
                          isFeatured ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl'
                        }`}>
                          {post.title}
                        </h2>
                        {isFeatured && (
                          <p className="text-lg text-text-dark/60 font-light leading-relaxed max-w-2xl line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-32 text-text-dark/50">
              <Icons.HiOutlineDocumentSearch className="text-6xl mx-auto mb-4 opacity-50" />
              <p className="text-xl font-light">No articles found for this category.</p>
            </div>
          )}
        </div>

      </div>
    </PageTransition>
  );
}
