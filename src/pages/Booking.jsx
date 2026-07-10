import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import { Button } from '../components/common/Button';
import { allServices } from '../data/servicesData';
import { HiOutlineSparkles, HiOutlineCheckBadge } from 'react-icons/hi2';

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <PageTransition>
      <SEO title="Book a Consultation | Master Ramcharan" description="Reserve a private astrology reading session." />
      
      <section className="min-h-screen bg-gray-50 pb-24">
        {/* Dark Starry Hero Section */}
        <div className="relative pt-32 pb-48 bg-white overflow-hidden">
          {/* Starry Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2090&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-text-dark/90"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary font-semibold tracking-widest text-xs mb-4 uppercase">
                Book A Consultation
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-dark mb-6">
                Reserve a private <span className="italic text-primary">session.</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Fill in a few gentle details. We'll respond within 24 hours to confirm your astrologer, time, and format.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Overlapping Cards Section */}
        <div className="container mx-auto px-6 relative z-10 max-w-6xl -mt-24">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Form */}
            <motion.div 
              className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8 border-b border-gray-100 pb-6">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2">Consultation Details</p>
                <h2 className="text-3xl font-serif text-gray-900">Your intake form</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                    <HiOutlineCheckBadge />
                  </div>
                  <h3 className="text-3xl font-serif text-text-dark mb-4">Request Received!</h3>
                  <p className="text-text-secondary text-lg">
                    Thank you for reaching out. Our team will review your details and contact you within 24 hours to schedule your session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Full Name *</label>
                      <input 
                        {...register("fullName", { required: true })} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                        placeholder="Jane Doe"
                      />
                      {errors.fullName && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Email *</label>
                      <input 
                        type="email"
                        {...register("email", { required: true })} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                        placeholder="jane@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1 block">Email is required</span>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Phone</label>
                      <input 
                        {...register("phone")} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Preferred Consultation Type *</label>
                      <select 
                        {...register("serviceId", { required: true })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {allServices.map(service => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                      </select>
                      {errors.serviceId && <span className="text-red-500 text-xs mt-1 block">Please select a service</span>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Birth Date</label>
                      <input 
                        type="date"
                        {...register("birthDate")} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Birth Time</label>
                      <input 
                        type="time"
                        {...register("birthTime")} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Birth Place (City, Country)</label>
                    <input 
                      {...register("birthPlace")} 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                      placeholder="New York, USA"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Message</label>
                    <textarea 
                      {...register("message")}
                      rows="4"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm resize-none"
                      placeholder="Share the question you'd like your astrologer to prepare for..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/30">
                      Book Consultation &rarr;
                    </Button>
                    <p className="text-xs text-text-secondary">
                      By submitting, you agree to our privacy practices. All details remain strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column - Info Cards */}
            <motion.div 
              className="lg:col-span-4 space-y-6 pt-0 lg:pt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* What Happens Next */}
              <div className="bg-secondary/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden text-text-dark">
                <HiOutlineSparkles className="text-3xl text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-8 font-semibold">What happens next</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-serif font-bold text-lg leading-none mt-1">01</span>
                    <p className="text-sm text-text-secondary leading-relaxed">A senior astrologer reviews your request within 24 hours.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-serif font-bold text-lg leading-none mt-1">02</span>
                    <p className="text-sm text-text-secondary leading-relaxed">We propose a session time and matched consultant.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-serif font-bold text-lg leading-none mt-1">03</span>
                    <p className="text-sm text-text-secondary leading-relaxed">Your astrologer prepares your chart in advance.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary font-serif font-bold text-lg leading-none mt-1">04</span>
                    <p className="text-sm text-text-secondary leading-relaxed">You meet online for a private session, recorded for you.</p>
                  </li>
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary/10">
                <h4 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">Guarantee</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If the reading doesn't resonate within 48 hours, we'll re-match you with a different astrologer at no additional cost.
                </p>
              </div>

              {/* Map Section */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64 relative bg-gray-100 mt-6">
                <iframe 
                  src="https://maps.google.com/maps?q=702+Twin+Oaks+Dr+Apt+2,+Decatur,+GA+30030&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Astrology Service Location"
                ></iframe>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
