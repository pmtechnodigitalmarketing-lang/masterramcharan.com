import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'react-icons/hi';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaShareAlt } from 'react-icons/fa';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const socials = [
    { Icon: FaFacebookF, color: 'text-[#1877F2]', link: '#' },
    { Icon: FaTwitter, color: 'text-[#1DA1F2]', link: '#' },
    { Icon: FaInstagram, color: 'text-[#E4405F]', link: '#' },
    { Icon: FaYoutube, color: 'text-[#FF0000]', link: '#' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 40 }}
            className="flex flex-col items-end gap-3 mb-2 pointer-events-auto relative"
          >
            {/* Expandable Socials Menu (pops out to the left) */}
            <AnimatePresence>
              {showSocials && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.5, x: 20 }}
                  className="flex flex-row-reverse gap-3 absolute right-16 top-0"
                >
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg border border-gray-100 hover:scale-110 transition-transform"
                      title="Social Media"
                    >
                      <social.Icon className={social.color} />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Smart Socials Button */}
            <button 
              onClick={() => setShowSocials(!showSocials)}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-all duration-300 relative z-10 ${showSocials ? 'bg-primary text-white rotate-180' : 'bg-white text-primary border border-gray-100'}`}
              title="Social Media Links"
            >
              <FaShareAlt />
            </button>

            <a href="https://maps.google.com/?q=702+Twin+Oaks+Dr+Apt+2,+Decatur,+GA+30030" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary text-2xl shadow-xl hover:scale-110 transition-all border border-gray-100" title="Find Location">
              <Icons.HiOutlineLocationMarker />
            </a>
            
            <a href="mailto:shivakumaramuddappa19@gmail.com" className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white text-2xl shadow-[0_4px_15px_rgba(180,225,235,0.6)] hover:scale-110 transition-all" title="Email Us">
              <Icons.HiOutlineMail />
            </a>

            <a href="tel:+14704520154" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary text-2xl shadow-xl hover:scale-110 transition-all border border-gray-100" title="Call Now">
              <Icons.HiOutlinePhone />
            </a>

            <a href="https://wa.me/14704520154" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-all" title="WhatsApp Us">
              <FaWhatsapp />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Master Toggle Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) setShowSocials(false); // close socials if master is closed
        }}
        className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition-all duration-300 pointer-events-auto border-2 border-white z-50 relative"
        title="Contact Options"
      >
        <motion.div animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: 0.3 }}>
          <Icons.HiPlus />
        </motion.div>
      </button>

    </div>
  );
}
