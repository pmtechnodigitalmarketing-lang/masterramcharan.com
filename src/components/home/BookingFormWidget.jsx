import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '../common/Button';
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { allServices } from '../../data/servicesData';

export default function BookingFormWidget() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you! Your inquiry has been submitted. We will contact you shortly.');
    reset();
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 relative bg-bg-base overflow-hidden" id="booking-widget">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-dark rounded-3xl p-5 sm:p-8 md:p-12 max-w-6xl mx-auto border border-primary/10 relative overflow-hidden shadow-2xl shadow-primary/5">
          {/* Decorative backgrounds */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[120%] rounded-full bg-accent/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] rounded-full bg-secondary/10 blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left Side: Information */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex px-4 py-1 rounded-full glass border border-primary/20 text-primary text-sm mb-6 font-semibold items-center gap-2">
                  ✨ Start Your Journey
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-6 leading-tight">
                  Ready to Uncover What the Stars Hold for You?
                </h2>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                  Book a personalized consultation today. Whether you need guidance in love, career, or spiritual healing, our expert astrologers are here to help you navigate life's challenges.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xl">
                      <HiOutlineCalendar />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark text-lg mb-1">Birth Details Needed</h4>
                      <p className="text-sm text-text-secondary">Please provide your exact date, time, and place of birth for accurate readings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 text-xl">
                      <HiOutlineClock />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark text-lg mb-1">Flexible Scheduling</h4>
                      <p className="text-sm text-text-secondary">We offer morning, afternoon, and evening slots to accommodate all time zones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-primary flex items-center justify-center flex-shrink-0 text-xl">
                      <HiOutlineLocationMarker />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark text-lg mb-1">100% Online Sessions</h4>
                      <p className="text-sm text-text-secondary">Consult securely from the comfort of your home via video or audio call.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-secondary/20 p-6 md:p-10 rounded-2xl shadow-2xl relative"
              >
                <h3 className="text-2xl font-serif text-text-dark mb-2">Request a Consultation</h3>
                <p className="text-text-secondary mb-8 text-sm">Fill out the details below and we will get back to you to confirm your slot.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Name *</label>
                      <input 
                        {...register("name", { required: true })} 
                        className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-3 text-text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-400 text-xs mt-1 block">Name is required</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Email *</label>
                      <input 
                        type="email"
                        {...register("email", { required: true })} 
                        className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-3 text-text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-400 text-xs mt-1 block">Email is required</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Phone Number</label>
                    <input 
                      {...register("phone")} 
                      className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-3 text-text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Service of Interest</label>
                    <select 
                      {...register("service")}
                      className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:bg-white/10 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-900">General Inquiry</option>
                      {allServices.map(s => (
                        <option key={s.id} value={s.title} className="text-gray-900">{s.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary tracking-wider uppercase mb-2">Message / Birth Details</label>
                    <textarea 
                      {...register("message")}
                      rows="4"
                      className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-3 text-text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                      placeholder="Please share your Date, Time, and Place of birth, or any specific questions you have..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                    Submit Request &rarr;
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
