import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { allServices } from '../../data/servicesData';
import * as Icons from 'react-icons/hi';

export default function ServicesPreview() {
  const previewServices = allServices.slice(0, 6);

  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-bg-base relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6"
          >
            Featured Astrology Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Explore our most popular consultations designed to bring clarity, peace, and success into your life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewServices.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.HiOutlineSparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative glass-dark border border-primary/20 rounded-3xl p-8 hover:glass-card transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {service.image ? (
                    <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative group-hover:shadow-lg transition-all duration-500">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-text-dark flex items-center justify-center text-2xl border border-primary/20">
                        <Icon />
                      </div>
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-dark transition-all duration-500">
                      <Icon />
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-text-dark group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-8 line-clamp-2 flex-grow">
                    {service.desc}
                  </p>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary font-medium group-hover:underline underline-offset-4 mt-auto w-fit">
                    Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" to="/services">View All 19 Services</Button>
        </div>
      </div>
    </section>
  );
}
