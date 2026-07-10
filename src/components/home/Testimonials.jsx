import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'New York, NY',
    text: 'The birth chart reading I received was incredibly accurate and profoundly moving. It gave me the clarity I needed for a major career transition.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'David Chen',
    location: 'San Francisco, CA',
    text: 'Master Ramcharan provides a truly premium experience. The astrologer was empathetic, highly knowledgeable, and the online session was flawless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Emily Roberts',
    location: 'Austin, TX',
    text: 'I was skeptical at first, but the compatibility analysis for my partner and I was spot on. Highly recommend their relationship services.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Marcus Williams',
    location: 'Chicago, IL',
    text: 'The financial astrology consultation helped me time my business launch perfectly. The results speak for themselves.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-base relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-[-10%] w-[30%] h-[60%] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-primary text-sm mb-6 font-medium shadow-sm">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
            Words from our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Radiant Community
            </span>
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Join thousands of satisfied clients across the United States who have found clarity, purpose, and peace through our premium astrological services.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {testimonials.slice(0, 3).map((t, i) => (
                <img key={i} src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20 shadow-sm object-cover" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-gray-100 shadow-sm flex items-center justify-center text-sm font-bold text-gray-500">
                +50k
              </div>
            </div>
            <div className="text-sm font-medium text-text-secondary">
              Trusted by 50,000+ clients
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-md mx-auto w-full"
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-[400px]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="bg-white rounded-3xl p-8 h-full w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="flex text-accent mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiStar key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-lg text-text-dark font-medium italic leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <h4 className="font-serif font-bold text-text-dark">{testimonial.name}</h4>
                      <p className="text-sm text-text-secondary">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
