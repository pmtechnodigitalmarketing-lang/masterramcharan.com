import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-text-dark text-text-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen rounded-full blur-xl"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass-dark border border-primary/20 p-12 md:p-20 rounded-[3rem] shadow-2xl backdrop-blur-xl"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-orange-400 rounded-full flex items-center justify-center text-3xl mb-8">
            ✨
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Your Journey Begins <br /> With the Stars
          </h2>
          <p className="text-xl text-text-secondary mb-10 font-sans max-w-xl mx-auto">
            Take the first step towards clarity, purpose, and spiritual growth. Book a personalized consultation with our expert astrologers today.
          </p>
          <Button variant="primary" size="lg" className="text-lg px-10 py-4 h-auto shadow-xl shadow-primary/30">
            Book Your Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
