import { motion } from 'framer-motion';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const locations = [
  { city: 'New York, NY', clients: '2,500+' },
  { city: 'Los Angeles, CA', clients: '1,800+' },
  { city: 'Chicago, IL', clients: '1,200+' },
  { city: 'Houston, TX', clients: '950+' },
  { city: 'Miami, FL', clients: '800+' },
  { city: 'Seattle, WA', clients: '650+' },
];

export default function USALocations() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-base">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6"
          >
            Trusted Across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">USA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            While our consultations are 100% online, we have a strong presence and loyal client base in major cities across all 50 states.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:glass-card transition-all duration-300 group"
            >
              <HiOutlineLocationMarker className="text-3xl text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-text-dark font-medium mb-1">{loc.city}</h4>
              <p className="text-sm text-primary font-semibold">{loc.clients} Clients</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
