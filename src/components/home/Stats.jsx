import { motion } from 'framer-motion';

const stats = [
  { value: '50,000+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Astrologers' },
  { value: '20+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' }
];

export default function Stats() {
  return (
    <section className="relative z-20 mt-8 mb-12 container mx-auto px-6">
      <div className="rounded-3xl p-6 md:p-12 shadow-[0_20px_50px_rgba(139,92,246,0.3)] bg-gradient-to-r from-primary via-[#9333EA] to-[#6366F1] text-white relative overflow-hidden border border-white/20">
        
        {/* Decorative Light Flares */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 gap-x-2 divide-x divide-white/20 relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center px-2 md:px-4"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg">
                {stat.value}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
