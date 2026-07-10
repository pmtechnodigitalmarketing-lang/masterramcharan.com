import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '../common/Button';

const TEXTS = [
  "Love & Relationship",
  "Black Magic Removal",
  "Marriage Compatibility"
];

const IMAGES = [
  "/images/love-relationship.jpg",
  "/images/black-magic-removal.webp",
  "/images/marriage.webp"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Hero() {
  const { scrollY } = useScroll();
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-base">
      {/* Galaxy Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2090&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-base/50 to-bg-base"></div>
        
        {/* Animated Aurora */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1 rounded-full glass border border-primary/20 text-primary text-sm mb-6 font-semibold">
            ✨ Premium Astrology Services in the USA
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-text-dark leading-tight mb-6">
            Discover the Guidance for <br />
            <span className="text-primary block min-h-[2.5em] md:min-h-[1.5em] mt-2 pb-2 overflow-visible whitespace-normal md:whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="inline-block whitespace-normal md:whitespace-nowrap text-[0.8em] md:text-inherit"
                >
                  {TEXTS[textIndex].split('').map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-lg text-text-secondary mb-8 font-sans leading-relaxed">
            Experience trusted astrology consultations. Receive personalized spiritual solutions for love and relationships, effective black magic removal, and deep insights into marriage compatibility from our expert astrologers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" to="/services">Book Consultation</Button>
            <Button variant="outline" size="lg" to="/services">Explore Services</Button>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div 
          style={{ y: y1 }}
          className="relative flex justify-center items-center h-full mt-12 mb-32 lg:mt-0 lg:mb-0"
        >
          <div className="relative w-full max-w-[320px] lg:max-w-none lg:w-[480px] aspect-square lg:h-[480px] lg:aspect-auto">
            {/* Glowing wheel */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 glass-dark flex items-center justify-center"
            >
              <div className="w-full h-full rounded-full border border-primary/10 opacity-30 bg-[url('https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
            </motion.div>

            {/* Dynamic Images */}
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary/20 z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={textIndex}
                  src={IMAGES[textIndex]}
                  alt={TEXTS[textIndex]}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-4 rounded-2xl flex items-center gap-4 text-text-dark border-primary/10 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-text-dark text-xl">
                ⭐
              </div>
              <div>
                <p className="font-bold">98%</p>
                <p className="text-xs text-text-secondary">Client Satisfaction</p>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-10 glass-card p-4 rounded-2xl flex items-center gap-4 text-text-dark border-primary/10 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center text-text-dark text-xl">
                🌍
              </div>
              <div>
                <p className="font-bold">All 50 States</p>
                <p className="text-xs text-text-secondary">Online Consultations</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
