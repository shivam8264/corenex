import Navbar from '../components/Navbar/Navbar';
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar';
import Hero from '../components/Hero/Hero';
import TrustBar from '../components/TrustBar/TrustBar';
import Features from '../components/Features/Features';
import StatsSection from '../components/StatsSection/StatsSection';
import FeatureShowcase from '../components/FeatureShowcase/FeatureShowcase';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Modules from '../components/Modules/Modules';
import IntegrationGrid from '../components/IntegrationGrid/IntegrationGrid';
import ComparisonTable from '../components/ComparisonTable/ComparisonTable';
import Testimonials from '../components/Testimonials/Testimonials';
import TeamSection from '../components/TeamSection/TeamSection';
import Pricing from '../components/Pricing/Pricing';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import NewsletterBar from '../components/NewsletterBar/NewsletterBar';
import ContactSection from '../components/ContactSection/ContactSection';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar badge="🎉 NEW" message="Introducing bulk WhatsApp report delivery — 500+ patients at once." linkText="Learn more" linkHref="#" />
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <StatsSection />
      <FeatureShowcase />
      <HowItWorks />
      <Modules />
      <IntegrationGrid />
      <ComparisonTable />
      <Testimonials />
      <TeamSection />
      <Pricing />
      <FAQAccordion />
      <BlogPreview />
      <NewsletterBar />
      <ContactSection />
      <CTA />
      <Footer />
    </>
  );
}