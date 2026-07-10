import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { Button } from '../components/common/Button';
import { allServices } from '../data/servicesData';
import * as Icons from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

// Fallback Data
const genericFaqs = [
  { question: "How should I prepare for my session?", answer: "Find a quiet, comfortable space where you won't be interrupted. Have your exact birth time, date, and location ready. It's also helpful to write down a few specific questions or areas of life you want to focus on." },
  { question: "Are the sessions confidential?", answer: "Absolutely. We maintain strict client confidentiality. Your personal information, birth details, and the content of our discussion will never be shared with any third party." },
  { question: "How will the session be conducted?", answer: "All our sessions are conducted securely online via high-quality video or audio call, depending on your preference. You will receive a link to join the meeting upon booking confirmation." }
];

const genericReviewsPool = [
  { name: 'Michael T.', rating: 5, text: 'Incredibly insightful and deeply transformative. This session gave me the clarity I had been seeking for months. Highly recommended!' },
  { name: 'Sarah J.', rating: 5, text: 'I felt so understood and validated. The guidance provided was practical, accurate, and delivered with so much compassion.' },
  { name: 'David L.', rating: 5, text: 'This was my first time getting a professional reading and it blew my mind. The accuracy regarding my past and present was uncanny.' }
];

const getBenefitsByCategory = (category) => {
  switch (category) {
    case 'Relationships':
      return [
        "Deep insights into compatibility and interpersonal dynamics.",
        "Strategies to resolve ongoing conflicts and misunderstandings.",
        "Clear timelines for significant relationship milestones."
      ];
    case 'Professional':
    case 'Wealth':
      return [
        "Identification of your innate talents and best career paths.",
        "Optimal timelines for job changes, investments, or business launches.",
        "Strategies to overcome financial blockages and attract abundance."
      ];
    case 'Healing':
    case 'Health':
      return [
        "Identification of energy blockages and emotional holding patterns.",
        "Personalized remedies, mantras, and lifestyle adjustments.",
        "A holistic roadmap to restoring inner peace and physical vitality."
      ];
    default:
      return [
        "Deep, personalized insights based on your unique cosmic blueprint.",
        "Actionable remedies and guidance to navigate current life challenges.",
        "A renewed sense of clarity, purpose, and spiritual alignment."
      ];
  }
};

const SlideIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ServiceDetail() {
  const { id } = useParams();
  const service = allServices.find(s => s.id === id);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = Icons[service.icon] || Icons.HiOutlineSparkles;
  const benefits = getBenefitsByCategory(service.category);
  const displayReviews = service.reviews && service.reviews.length > 0 ? service.reviews : genericReviewsPool;
  const displayFaqs = service.faqs && service.faqs.length > 0 ? service.faqs : genericFaqs;

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <SEO title={`${service.title} | Master Ramcharan`} description={service.desc} />
      
      <div className="bg-white relative font-sans text-text-secondary">
        
        {/* Fixed Cinematic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* The Image */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image || "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2090&auto=format&fit=crop"}')` }}
          ></motion.div>
          {/* Moody Vignette & Dark Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>

        {/* Main Scrollable Content */}
        <div className="relative z-10">
          
          {/* SLIDE 1: The Title Sequence */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative">
            <div className="absolute top-24 lg:top-32 left-6 lg:left-12 z-20">
              <Link to="/services" className="inline-flex items-center text-white/70 hover:text-white transition-colors text-xs font-bold tracking-[0.3em] uppercase">
                <Icons.HiOutlineArrowLeft className="mr-3 text-lg" /> Return
              </Link>
            </div>

            <SlideIn delay={0.2} className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <Icon className="text-4xl text-white/90" />
              </div>
            </SlideIn>
            
            <SlideIn delay={0.4}>
              <h2 className="text-accent text-sm font-bold tracking-[0.5em] uppercase mb-6 drop-shadow-md">
                {service.category}
              </h2>
            </SlideIn>

            <SlideIn delay={0.6}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl drop-shadow-lg">
                {service.title}
              </h1>
            </SlideIn>

            <SlideIn delay={0.8}>
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                {service.desc}
              </p>
            </SlideIn>

            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-4xl drop-shadow-md"
            >
              <Icons.HiOutlineChevronDown />
            </motion.div>
          </section>

          {/* SLIDE 2: The Revelation (Overview & Benefits) */}
          <section className="min-h-screen flex items-center p-6 lg:p-24 bg-white/90 backdrop-blur-[2px] border-t border-primary/20">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              
              <SlideIn>
                <div className="space-y-8">
                  <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase">The Experience</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-text-dark leading-tight">A journey into clarity.</h2>
                  <div className="w-16 h-[1px] bg-white/20"></div>
                  <p className="text-xl md:text-2xl text-text-dark/70 font-light leading-relaxed">
                    {service.details.split('.')[0]}.
                  </p>
                  <p className="text-lg text-text-dark/50 font-light leading-relaxed">
                    {service.details.substring(service.details.indexOf('.') + 1).trim()}
                  </p>
                  
                  <div className="pt-8 flex flex-wrap gap-6">
                    <a 
                      href="tel:+14704520154" 
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold tracking-widest text-sm uppercase hover:scale-105 transition-transform shadow-xl"
                    >
                      <Icons.HiPhone className="text-xl" /> Call Now
                    </a>
                    <a 
                      href="https://wa.me/14704520154" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-primary/20 text-text-dark font-bold tracking-widest text-sm uppercase hover:bg-white/10 transition-colors"
                    >
                      <FaWhatsapp className="text-xl text-[#25D366]" /> WhatsApp
                    </a>
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.3}>
                <div className="bg-white/[0.03] border border-primary/20 p-10 md:p-14 rounded-3xl backdrop-blur-xl shadow-2xl">
                  <h3 className="text-text-dark text-2xl font-serif mb-10 pb-6 border-b border-primary/20">What awaits you</h3>
                  <ul className="space-y-8">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-6 group">
                        <span className="text-accent text-2xl mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                          <Icons.HiOutlineStar />
                        </span>
                        <span className="text-xl text-text-dark/80 font-light leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideIn>

            </div>
          </section>

          {/* SLIDE 3: The Path & Voices (Process & Reviews) */}
          <section className="min-h-screen flex items-center p-6 lg:p-24 bg-white/90 backdrop-blur-md border-t border-primary/20">
            <div className="max-w-7xl mx-auto w-full">
              
              <SlideIn className="text-center mb-20">
                <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">The Impact</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-text-dark">Voices of the transformed.</h2>
              </SlideIn>

              <div className="grid md:grid-cols-3 gap-8">
                {displayReviews.map((review, idx) => (
                  <SlideIn key={idx} delay={idx * 0.2}>
                    <div className="p-10 rounded-3xl bg-white/[0.02] border border-primary/20 h-full flex flex-col hover:bg-white/[0.05] transition-colors">
                      <div className="flex text-accent mb-8 text-xl opacity-80">
                        {[...Array(review.rating)].map((_, i) => <Icons.HiStar key={i} />)}
                      </div>
                      <p className="text-text-dark/70 italic text-xl leading-relaxed font-light flex-grow mb-10">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <p className="font-bold text-text-dark/90 tracking-widest text-sm uppercase">{review.name}</p>
                      </div>
                    </div>
                  </SlideIn>
                ))}
              </div>

            </div>
          </section>

          {/* SLIDE 4: The Gateway (Booking Form) */}
          <section className="min-h-screen flex items-center justify-center p-6 lg:p-24 bg-white/90 backdrop-blur-xl border-t border-primary/20 pb-32">
            <div className="max-w-4xl mx-auto w-full">
              
              <SlideIn className="text-center mb-16">
                <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">The Gateway</h3>
                <h2 className="text-5xl md:text-6xl font-serif text-text-dark mb-6">Begin your journey.</h2>
                <p className="text-xl text-text-dark/50 font-light">Secure your private consultation below.</p>
              </SlideIn>

              <SlideIn delay={0.3}>
                <div className="bg-white/[0.02] border border-primary/20 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden">
                  
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-20"
                      >
                        <div className="inline-block p-6 rounded-full bg-green-500/10 border border-green-500/20 mb-8 text-green-400 text-6xl">
                          <Icons.HiOutlineCheck />
                        </div>
                        <h4 className="text-text-dark font-serif text-4xl mb-6">The stars align.</h4>
                        <p className="text-text-dark/50 text-xl font-light">Your request has been received. We will reach out shortly.</p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)} 
                        className="space-y-12"
                      >
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="relative group">
                            <input 
                              {...register("firstName", { required: true })} 
                              className="w-full bg-transparent border-b border-primary/20 px-0 py-4 text-text-dark placeholder-transparent focus:outline-none focus:border-primary/20 transition-colors text-xl peer"
                              placeholder="First Name"
                              id="firstName"
                            />
                            <label htmlFor="firstName" className="absolute left-0 -top-6 text-xs font-bold tracking-[0.2em] text-text-dark/40 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:tracking-normal peer-focus:-top-6 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:text-text-dark">
                              First Name *
                            </label>
                          </div>
                          
                          <div className="relative group">
                            <input 
                              {...register("lastName", { required: true })} 
                              className="w-full bg-transparent border-b border-primary/20 px-0 py-4 text-text-dark placeholder-transparent focus:outline-none focus:border-primary/20 transition-colors text-xl peer"
                              placeholder="Last Name"
                              id="lastName"
                            />
                            <label htmlFor="lastName" className="absolute left-0 -top-6 text-xs font-bold tracking-[0.2em] text-text-dark/40 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:tracking-normal peer-focus:-top-6 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:text-text-dark">
                              Last Name *
                            </label>
                          </div>
                        </div>
                        
                        <div className="relative group">
                          <input 
                            type="email"
                            {...register("email", { required: true })} 
                            className="w-full bg-transparent border-b border-primary/20 px-0 py-4 text-text-dark placeholder-transparent focus:outline-none focus:border-primary/20 transition-colors text-xl peer"
                            placeholder="Email Address"
                            id="email"
                          />
                          <label htmlFor="email" className="absolute left-0 -top-6 text-xs font-bold tracking-[0.2em] text-text-dark/40 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:tracking-normal peer-focus:-top-6 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:text-text-dark">
                            Email Address *
                          </label>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 pt-4">
                          <div className="relative">
                            <select 
                              {...register("state")}
                              className="w-full bg-transparent border-b border-primary/20 px-0 py-4 text-text-dark focus:outline-none focus:border-primary/20 transition-colors text-xl appearance-none cursor-pointer"
                            >
                              <option value="" className="bg-[#111]">Select Region</option>
                              <option value="US" className="bg-[#111]">United States</option>
                              <option value="UK" className="bg-[#111]">United Kingdom</option>
                              <option value="CA" className="bg-[#111]">Canada</option>
                              <option value="AU" className="bg-[#111]">Australia</option>
                              <option value="OTHER" className="bg-[#111]">Other</option>
                            </select>
                            <label className="absolute left-0 -top-6 text-xs font-bold tracking-[0.2em] text-text-dark/40 uppercase">
                              Region
                            </label>
                          </div>
                          
                          <div className="relative">
                            <select 
                              {...register("timePreference")}
                              className="w-full bg-transparent border-b border-primary/20 px-0 py-4 text-text-dark focus:outline-none focus:border-primary/20 transition-colors text-xl appearance-none cursor-pointer"
                            >
                              <option value="morning" className="bg-[#111]">Morning (EST)</option>
                              <option value="afternoon" className="bg-[#111]">Afternoon (EST)</option>
                              <option value="evening" className="bg-[#111]">Evening (EST)</option>
                            </select>
                            <label className="absolute left-0 -top-6 text-xs font-bold tracking-[0.2em] text-text-dark/40 uppercase">
                              Preferred Timing
                            </label>
                          </div>
                        </div>
                        
                        <div className="relative pt-4 group">
                          <textarea 
                            {...register("message")}
                            rows="2"
                            className="w-full bg-transparent border-b border-primary/20 px-0 py-4 text-text-dark placeholder-transparent focus:outline-none focus:border-primary/20 transition-colors text-xl resize-none peer"
                            placeholder="Birth Details"
                            id="message"
                          ></textarea>
                          <label htmlFor="message" className="absolute left-0 -top-2 text-xs font-bold tracking-[0.2em] text-text-dark/40 uppercase transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-xl peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:text-text-dark">
                            Birth Details / Intentions
                          </label>
                        </div>
                        
                        <div className="pt-12 text-center">
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold tracking-[0.2em] uppercase text-black bg-white overflow-hidden rounded-full transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                          >
                            <span className="relative z-10">{isSubmitting ? "Processing..." : "Awaken Your Journey"}</span>
                            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </SlideIn>
            </div>
          </section>

          {/* SLIDE 5: Epilogue (FAQs) */}
          <section className="min-h-[50vh] flex items-center justify-center p-6 lg:p-24 bg-white/90 backdrop-blur-2xl border-t border-primary/20 pb-40">
            <div className="max-w-4xl mx-auto w-full">
              
              <SlideIn className="text-center mb-16">
                <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">Epilogue</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-text-dark">Curiosities, answered.</h2>
              </SlideIn>

              <div className="space-y-2">
                {displayFaqs.map((faq, index) => (
                  <SlideIn key={index} delay={index * 0.1}>
                    <div className="border-b border-primary/20">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
                      >
                        <span className="text-2xl font-serif text-text-dark/80 group-hover:text-text-dark transition-colors">{faq.question}</span>
                        <span className={`text-text-dark/30 text-3xl transition-transform duration-500 ${openFaq === index ? 'rotate-180 text-text-dark' : ''}`}>
                          <Icons.HiOutlineChevronDown />
                        </span>
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-text-dark/50 text-xl leading-relaxed pb-8 font-light">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </SlideIn>
                ))}
              </div>

            </div>
          </section>

        </div>

      </div>
    </PageTransition>
  );
}
