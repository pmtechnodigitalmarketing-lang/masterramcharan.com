import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { locationsData } from '../data/locationsData';
import { allServices } from '../data/servicesData';
import * as Icons from 'react-icons/hi';

const reviewsPool = [
  { name: 'Sarah M.', rating: 5, text: `The astrology reading I received completely changed my perspective on my career path in %LOCATION%. Highly recommended!` },
  { name: 'David L.', rating: 5, text: `I was skeptical at first, but the spiritual guidance I got here in %LOCATION% was spot on. The environment is so calming.` },
  { name: 'Elena R.', rating: 5, text: `Very insightful tarot reading. The astrologer was patient and answered all my burning questions about my life in %LOCATION%.` },
  { name: 'Michael T.', rating: 4, text: `Finding such an authentic Vedic astrologer in %LOCATION% was a blessing. My birth chart analysis was incredibly accurate.` },
  { name: 'Jessica K.', rating: 5, text: `The Vastu consultation for our new home in %LOCATION% brought so much peace and positive energy to our family.` },
  { name: 'Robert W.', rating: 5, text: `I've been to many psychics before, but the clarity I found during my session in %LOCATION% was unparalleled.` },
  { name: 'Amanda B.', rating: 5, text: `Thank you for the profound relationship reading. It really helped my partner and me understand each other better here in %LOCATION%.` },
  { name: 'Christopher J.', rating: 4, text: `Highly professional and deeply intuitive. The spiritual healing session I had in %LOCATION% lifted a weight off my shoulders.` },
  { name: 'Olivia H.', rating: 5, text: `I can't believe how accurate the palmistry reading was. It revealed things only I knew about my past in %LOCATION%.` },
  { name: 'Daniel S.', rating: 5, text: `The numerology insights gave me exactly the direction I needed for my new business venture in %LOCATION%. Truly grateful.` },
  { name: 'Sophia P.', rating: 5, text: `An eye-opening experience! The chakra balancing session left me feeling rejuvenated and aligned in %LOCATION%.` },
  { name: 'Matthew G.', rating: 4, text: `Incredible depth of knowledge. The transit reading prepared me for the upcoming year's challenges in %LOCATION%.` },
  { name: 'Isabella C.', rating: 5, text: `I was lost, but the spiritual guidance I received provided a beacon of light. Best astrologer in %LOCATION%, hands down.` },
  { name: 'William N.', rating: 5, text: `Accurate, compassionate, and empowering. The career astrology session helped me land my dream job in %LOCATION%.` },
  { name: 'Mia D.', rating: 5, text: `The gemstone recommendation worked wonders for my focus and energy levels. Such a fantastic service available in %LOCATION%.` }
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState({});

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedLocation]);

  return (
    <>
      <SEO title={selectedLocation ? `Astrology Services in ${selectedLocation.city}` : "Our Locations"} description="Find Master Ramcharan astrology services in your city across the USA." />
      
      <div className="pt-24 pb-24 min-h-screen relative overflow-hidden bg-bg-base">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            {!selectedLocation ? (
              <motion.div 
                key="locations-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header for Locations */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h1 className="text-5xl md:text-6xl font-serif text-text-dark mb-6 font-bold">
                    Our <span className="text-primary">Locations</span>
                  </h1>
                  <p className="text-xl text-text-secondary">
                    Discover profound astrological insights and spiritual guidance in major cities across the United States. Find a sanctuary near you.
                  </p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {locationsData.map((location, index) => (
                    <motion.div
                      key={location.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      onClick={() => setSelectedLocation(location)}
                      className="group cursor-pointer relative glass-dark border border-primary/20 rounded-3xl overflow-hidden hover:glass-card transition-all duration-500 h-full flex flex-col"
                    >
                      <div className="w-full h-56 overflow-hidden relative">
                        <img 
                          src={location.image} 
                          alt={location.city} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute bottom-4 left-4 z-10 bg-white px-5 py-2 rounded-2xl shadow-xl border border-primary/10">
                          <h3 className="text-2xl font-serif font-bold text-primary">
                            {location.city}, {location.state}
                          </h3>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-md text-primary w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                          <Icons.HiOutlineArrowRight className="text-xl" />
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-text-secondary mb-4 flex-grow">
                          {location.description}
                        </p>
                        <div className="flex items-center text-sm text-primary/80 mt-auto">
                          <Icons.HiOutlineLocationMarker className="mr-2 text-lg" />
                          <span>{location.address}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="location-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Back Button */}
                <button 
                  onClick={() => setSelectedLocation(null)}
                  className="mb-8 inline-flex items-center text-text-secondary hover:text-primary transition-colors font-medium group"
                >
                  <Icons.HiOutlineArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                  Back to all locations
                </button>

                {/* Location Hero */}
                <div className="relative rounded-3xl overflow-hidden h-[40vh] min-h-[300px] mb-16 shadow-2xl">
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.city} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark mb-4 drop-shadow-lg">
                        {selectedLocation.city}
                      </h1>
                      <div className="flex items-center justify-center text-text-dark/90 text-lg md:text-xl font-light">
                        <Icons.HiOutlineLocationMarker className="mr-2" />
                        {selectedLocation.address}
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
                    Services in <span className="text-primary">{selectedLocation.city}</span>
                  </h2>
                  <p className="text-lg text-text-secondary">
                    Explore our comprehensive range of spiritual, astrological, and healing services available for our clients in the {selectedLocation.city} area.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {allServices.map((service, index) => {
                    const Icon = Icons[service.icon] || Icons.HiOutlineSparkles;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        className="group relative glass-dark border border-primary/20 rounded-3xl p-8 hover:glass-card transition-all duration-500 overflow-hidden flex flex-col h-full"
                      >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                          {service.image ? (
                            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative group-hover:shadow-lg transition-all duration-500">
                              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-text-dark/70 to-transparent pointer-events-none"></div>
                              <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-text-dark flex items-center justify-center text-2xl border border-primary/20">
                                <Icon />
                              </div>
                            </div>
                          ) : (
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-dark transition-all duration-500">
                              <Icon />
                            </div>
                          )}
                          
                          <h3 className="text-2xl font-serif font-semibold mb-4 text-text-dark group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-text-secondary mb-8 line-clamp-2 flex-grow">
                            {service.desc}
                          </p>
                          <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary font-medium group-hover:underline underline-offset-4 mt-auto w-fit">
                            Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Client Feedback Section */}
                <div className="mt-24 pt-16 border-t border-primary/20">
                  <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-serif font-bold text-text-dark mb-4">
                      Client Feedback from <span className="text-primary">{selectedLocation.city}</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                      Read what our clients in {selectedLocation.city} have to say about their experiences with our astrology and spiritual services.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(() => {
                      const hash = selectedLocation.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                      const startIndex = hash % reviewsPool.length;
                      const stateReviews = [
                        reviewsPool[startIndex],
                        reviewsPool[(startIndex + 1) % reviewsPool.length],
                        reviewsPool[(startIndex + 2) % reviewsPool.length]
                      ];
                      
                      const customReviews = userReviews[selectedLocation.id] || [];
                      const allReviewsToRender = [...customReviews, ...stateReviews];

                      return allReviewsToRender.map((feedback, idx) => (
                        <div key={idx} className="glass-card border border-primary/10 p-8 rounded-3xl relative hover:-translate-y-1 transition-transform duration-300">
                          <div className="flex text-secondary mb-4 text-xl">
                            {[...Array(5)].map((_, i) => (
                              <Icons.HiStar key={i} className={i < feedback.rating ? "text-secondary" : "text-text-secondary"} />
                            ))}
                          </div>
                          <p className="text-text-secondary italic mb-6 leading-relaxed">"{feedback.text.replace(/%LOCATION%/g, selectedLocation.city)}"</p>
                        <div className="font-semibold text-text-dark font-serif text-lg">- {feedback.name}</div>
                        <Icons.HiOutlineAnnotation className="absolute top-6 right-6 text-5xl text-primary/10" />
                      </div>
                      ));
                    })()}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <button onClick={() => setIsReviewModalOpen(true)} className="bg-primary text-text-dark px-8 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium shadow-lg hover:shadow-primary/30">
                      Leave a Review
                    </button>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Review Modal */}
        <AnimatePresence>
          {isReviewModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute inset-0 bg-white/60 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-card bg-bg-base/95 p-8 rounded-3xl w-full max-w-lg relative z-10 border border-primary/20 shadow-2xl"
              >
                <button 
                  onClick={() => setIsReviewModalOpen(false)}
                  className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors"
                >
                  <Icons.HiOutlineX className="text-2xl" />
                </button>
                <h3 className="text-3xl font-serif font-bold text-text-dark mb-6">Write a Review</h3>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const newReview = {
                      name: formData.get('name'),
                      rating: Number(formData.get('rating')),
                      text: formData.get('review')
                    };
                    setUserReviews(prev => ({
                      ...prev,
                      [selectedLocation.id]: [newReview, ...(prev[selectedLocation.id] || [])]
                    }));
                    setIsReviewModalOpen(false);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label className="block text-text-secondary mb-2">Your Name</label>
                    <input required name="name" type="text" className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-2">Rating</label>
                    <select name="rating" className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary">
                      <option value="5">5 Stars - Excellent</option>
                      <option value="4">4 Stars - Very Good</option>
                      <option value="3">3 Stars - Good</option>
                      <option value="2">2 Stars - Fair</option>
                      <option value="1">1 Star - Poor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-2">Your Review</label>
                    <textarea required name="review" rows="4" className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary resize-none" placeholder={`Share your experience with our services in ${selectedLocation?.city}...`}></textarea>
                  </div>
                  <button type="submit" className="bg-primary text-text-dark rounded-full py-4 mt-4 font-medium hover:bg-primary-hover transition-colors shadow-lg hover:shadow-primary/30">
                    Submit Review
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
