import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white pt-20 pb-10 relative overflow-hidden border-t border-primary/20">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <Link to="/" className="text-3xl font-serif font-bold text-white mb-6 block drop-shadow-md">
              🔱 Master Ramcharan
            </Link>
            <p className="text-white/80 mb-6 font-sans">
              Experience trusted astrology consultations across the United States. Receive personalized guidance from experienced astrologers.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebookF, hoverClass: 'hover:bg-[#1877F2]' },
                { Icon: FaTwitter, hoverClass: 'hover:bg-[#1DA1F2]' },
                { Icon: FaInstagram, hoverClass: 'hover:bg-[#E4405F]' },
                { Icon: FaYoutube, hoverClass: 'hover:bg-[#FF0000]' }
              ].map((social, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all text-white hover:scale-110 ${social.hoverClass}`}>
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/70">
              {['Home', 'About', 'Services', 'Locations', 'Blog'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-white">Services</h4>
            <ul className="flex flex-col gap-3 text-white/70">
              {['Love Astrology', 'Career Guidance', 'Birth Chart Reading', 'Tarot Reading', 'Numerology'].map(service => (
                <li key={service}>
                  <Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-white">Contact Us</h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm">
              <a href="tel:+14704520154" className="hover:text-primary transition-colors flex items-center gap-2">
                📞 +1 (470) 452-0154
              </a>
              <a href="mailto:shivakumaramuddappa19@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 break-all">
                📧 shivakumaramuddappa19@gmail.com
              </a>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>702 Twin Oaks Dr Apt 2,<br/>Decatur, GA 30030</span>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>&copy; 2017 Master Ramcharan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
