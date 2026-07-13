import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const reasons = [
  "Experienced Astrologers",
  "Confidential Consultations",
  "Personalized Guidance",
  "Accurate Predictions",
  "Online Sessions",
  "Thousands of Happy Clients",
  "Ethical Practices",
  "24/7 Appointment Requests"
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-text-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
              Why Thousands Trust <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent whitespace-nowrap">Master Ramcharan</span>
            </h2>
            <p className="text-lg text-white/80 mb-10 font-sans leading-relaxed">
              We bring centuries-old astrological wisdom into the modern world. Our approach combines traditional accuracy with contemporary empathy to provide guidance that truly transforms lives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="text-primary text-2xl shrink-0" />
                  <span className="font-medium text-white">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass p-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-10"></div>
              <img 
                src="/images/17170042324803373.webp" 
                alt="Master Ramcharan Guidance" 
                className="rounded-2xl w-full h-[500px] object-cover"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
