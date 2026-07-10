import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Book Consultation', desc: 'Select your preferred service and schedule a time.' },
  { id: '02', title: 'Share Details', desc: 'Provide your exact birth date, time, and location.' },
  { id: '03', title: 'Analysis', desc: 'Our experts analyze your astrological charts deeply.' },
  { id: '04', title: 'The Reading', desc: 'A personalized 1-on-1 session to discuss insights.' },
  { id: '05', title: 'Guidance', desc: 'Receive ongoing remedies and spiritual support.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-bg-base overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6"
          >
            Our Astrological Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            A seamless, confidential, and deeply transformative journey from your first booking to lifelong spiritual guidance.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2"></div>
          
          {/* Vertical Line for Mobile */}
          <div className="lg:hidden absolute top-0 left-8 w-[2px] h-full bg-gray-200"></div>

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 group"
              >
                {/* Number node */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-white border-4 border-gray-100 shadow-lg flex items-center justify-center font-serif font-bold text-xl text-primary relative z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className="lg:text-center mt-2 lg:mt-0">
                  <h3 className="text-xl font-serif font-semibold text-text-dark mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm max-w-[200px] lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
