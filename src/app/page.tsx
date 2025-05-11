import HeroSection from '@/components/sections/hero-section';
import FocusSection from '@/components/sections/focus-section';
import RealtimeMonitoringSection from '@/components/sections/realtime-monitoring-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import PricingSection from '@/components/sections/pricing-section'; // Will be restyled
import CollaborateSection from '@/components/sections/collaborate-section';
import InstallProCtaSection from '@/components/sections/install-pro-cta-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FaqSection from '@/components/sections/faq-section';
import CollaborationAgencySection from '@/components/sections/collaboration-agency-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FocusSection />
      <RealtimeMonitoringSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <PricingSection />
      <CollaborateSection />
      <InstallProCtaSection />
      <TestimonialsSection />
      <FaqSection />
      <CollaborationAgencySection />
      {/* 
        Old sections removed:
        <SolutionsShowcase />
        <FeatureCardsSection />
        <IntegrationsSection />
        <ContactTeaserSection />
      */}
    </>
  );
}
