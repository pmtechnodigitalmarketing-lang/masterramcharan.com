import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { Button } from './Button';

const faqs = [
  {
    question: 'How do I choose the right service for me?',
    answer: 'If you are unsure where to start, we recommend the Birth Chart Reading for a comprehensive overview. If you have a specific issue regarding love, career, or timing, choose the corresponding specialized service.'
  },
  {
    question: 'How long does a typical session last?',
    answer: 'Most of our standard sessions last for 45 to 60 minutes. Deep dive readings or specialized combinations may take up to 90 minutes. You will find the exact duration listed during the booking process.'
  },
  {
    question: 'Do I need to prepare anything before the reading?',
    answer: 'Yes, please have your exact date of birth, time of birth (as accurate as possible), and place of birth ready. This information is crucial for generating an accurate natal chart.'
  },
  {
    question: 'Can I record the session?',
    answer: 'Yes, you are welcome to record the audio of the session for your personal reference, or take notes. Some of our video platforms also offer built-in recording which we can enable upon request.'
  }
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-24 bg-bg-base relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: FAQs (Larger) */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-text-dark mb-4"
              >
                Service FAQs
              </motion.h2>
              <p className="text-text-secondary">Common questions about our consultations and process.</p>
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

          {/* Right Side: Small CTA / Image */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-primary/20 shadow-xl relative overflow-hidden text-center flex flex-col items-center justify-center h-full min-h-[350px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary text-4xl mb-6 shadow-inner">
                  ✨
                </div>
                <h3 className="text-2xl font-serif font-semibold text-text-dark mb-4">Still have questions?</h3>
                <p className="text-text-secondary mb-8">
                  Our support team is here to help you choose the right consultation path.
                </p>
                <Button variant="primary" size="md" to="/booking" className="w-full">
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
