import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustBar from '../components/TrustBar/TrustBar';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Modules from '../components/Modules/Modules';
import Testimonials from '../components/Testimonials/Testimonials';
import Pricing from '../components/Pricing/Pricing';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <TrustBar /> */}
      <Features />
      <HowItWorks />
      <Modules />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
