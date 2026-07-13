import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { allServices } from '../data/servicesData';
import * as Icons from 'react-icons/hi';
import { useState } from 'react';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/common/FAQSection';

export default function Services() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(allServices.map(s => s.category))];
  
  const filteredServices = filter === 'All' 
    ? allServices 
    : allServices.filter(s => s.category === filter);

  return (
    <PageTransition>
      <SEO title="Our Services" description="Explore our comprehensive range of 19 premium astrology services." />
      
      <section className="pt-32 pb-24 min-h-screen bg-bg-base relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold text-text-dark mb-6"
            >
              Our Premium Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary"
            >
              Discover 19 specialized astrological consultations designed to bring clarity, purpose, and success into every aspect of your life.
            </motion.p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-text-dark shadow-lg shadow-primary/30' 
                    : 'glass text-text-dark hover:bg-white/50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.HiOutlineSparkles;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative glass-dark rounded-3xl p-6 hover:glass-card transition-all duration-500 flex flex-col h-full border-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {service.image ? (
                      <div className="w-full h-40 rounded-2xl overflow-hidden mb-5 relative group-hover:shadow-lg transition-all duration-500">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-text-dark flex items-center justify-center text-xl border border-primary/20">
                          <Icon />
                        </div>
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-dark transition-all duration-500">
                        <Icon />
                      </div>
                    )}
                    <div className="mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{service.category}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-text-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-6 flex-grow">
                      {service.desc}
                    </p>
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center text-primary font-medium group-hover:text-secondary mt-auto w-fit"
                    >
                      View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <FAQSection />
    </PageTransition>
  );
}
