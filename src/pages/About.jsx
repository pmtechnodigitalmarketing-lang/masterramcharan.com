import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { Button } from '../components/common/Button';
import Testimonials from '../components/home/Testimonials';

const faqs = [
  {
    question: 'How does an online astrology consultation work?',
    answer: 'Once you book a consultation, you will receive a secure video link for your session. Our expert astrologers will analyze your birth details prior to the meeting and discuss insights, predictions, and remedies with you during the call.'
  },
  {
    question: 'Are your astrologers certified and experienced?',
    answer: 'Yes, all our astrologers have over 10+ years of experience and hold certifications in various branches of astrology including Vedic, Western, and Tarot. We have a rigorous vetting process to ensure you get the best guidance.'
  },
  {
    question: 'Do you offer services specifically for the USA timezone?',
    answer: 'Absolutely. We cater primarily to clients in the USA, and our astrologers are available across all major US time zones (EST, CST, MST, PST) to ensure convenient booking times.'
  },
  {
    question: 'Is my personal information kept confidential?',
    answer: '100%. We adhere to strict privacy policies. Your birth details, consultation discussions, and personal information are never shared with third parties.'
  }
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageTransition>
      <SEO title="About Us" description="Learn about the expert astrologers at Master Ramcharan." />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-bg-base">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-dark mb-6">
                Guiding Your Path <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Since 2010</span>
              </h1>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Master Ramcharan was founded with a singular vision: to demystify the cosmic energies and provide actionable, profound guidance to individuals across the United States. For over a decade, we have been the trusted compass for those navigating the complexities of modern life.
              </p>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Our team of seasoned astrologers combines ancient Vedic and Western wisdom with modern psychological insights. This unique synthesis allows us to offer a truly holistic approach to your life's most pressing questions—from navigating career transitions and financial hurdles to uncovering deep soulmate connections and karmic patterns.
              </p>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                We believe that astrology is not about rigid predestination, but about empowerment. By understanding the planetary influences at play in your birth chart, you gain the free will and clarity needed to make confident, life-altering decisions. We don't just predict the future; we help you create it.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Every astrologer on our platform goes through a rigorous multi-stage vetting process, ensuring that you receive guidance from only the most experienced, empathetic, and highly-rated professionals. Your confidentiality, spiritual growth, and personal well-being are always our highest priorities.
              </p>
              
              <div className="flex gap-8 border-t border-primary/20 pt-8 mt-8">
                <div>
                  <h3 className="text-3xl font-serif text-text-dark font-bold">10k+</h3>
                  <p className="text-accent font-semibold text-sm">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-text-dark font-bold">50</h3>
                  <p className="text-accent font-semibold text-sm">US States Served</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-text-dark font-bold">15+</h3>
                  <p className="text-accent font-semibold text-sm">Expert Astrologers</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button variant="primary" size="lg" to="/booking">Book Consultation</Button>
                <Button variant="outline" size="lg" to="/services">Explore Services</Button>
              </div>

              <div className="mt-8 flex items-center gap-4 bg-white/5 p-3 rounded-2xl w-fit border border-primary/10">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-bg-base object-cover relative z-0" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-bg-base object-cover relative z-10" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-bg-base object-cover relative z-20" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full border-2 border-bg-base object-cover relative z-30" />
                  <div className="w-10 h-10 rounded-full border-2 border-bg-base bg-primary text-text-dark flex items-center justify-center text-xs font-bold relative z-40">10k+</div>
                </div>
                <div className="text-sm text-text-secondary">
                  <div className="flex text-accent text-base tracking-tighter mb-0.5">★★★★★</div>
                  <span className="font-medium text-text-dark">Rated 4.9/5</span> by thousands
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-2 rounded-3xl overflow-hidden relative shadow-2xl shadow-primary/10 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <img 
                  src="/images/Mahadev Blessings  _ Divine Lord Shiva Wallpaper.jpg" 
                  alt="Mahadev Blessings" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-24 bg-bg-base relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-text-dark mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-text-secondary">Everything you need to know about our astrology services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark border border-primary/20 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-white/50 transition-colors"
                >
                  <span className="text-lg font-medium text-text-dark">{faq.question}</span>
                  <span className="text-primary text-xl">
                    {openFaq === index ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                  </span>
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-6 text-text-secondary leading-relaxed bg-white/30 pt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
