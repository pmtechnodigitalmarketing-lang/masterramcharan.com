import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import TrustedBy from '../components/home/TrustedBy';
import ServicesPreview from '../components/home/ServicesPreview';
import BookingFormWidget from '../components/home/BookingFormWidget';
import WhyChooseUs from '../components/home/WhyChooseUs';
import USALocations from '../components/home/USALocations';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <PageTransition>
      <SEO title="Home" description="Discover the Guidance Hidden in the Stars with Master Ramcharan." />
      <Hero />
      <Stats />
      <TrustedBy />
      <ServicesPreview />
      <BookingFormWidget />
      <WhyChooseUs />
      <USALocations />
      <ProcessTimeline />
      <Testimonials />
      <FinalCTA />
    </PageTransition>
  );
}
