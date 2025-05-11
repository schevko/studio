import HeroSection from '@/components/sections/hero-section';
import SolutionsShowcaseSection from '@/components/sections/solutions-showcase-section'; // Renamed to match purpose
import FeatureCardsSection from '@/components/sections/feature-cards-section';
import IntegrationsSection from '@/components/sections/integrations-section';
import PricingSection from '@/components/sections/pricing-section';
import ContactTeaserSection from '@/components/sections/contact-teaser-section';
import FaqSection from '@/components/sections/faq-section'; // Keep if relevant
import TestimonialsSection from '@/components/sections/testimonials-section'; // Keep if relevant


// Assuming some of the old sections can be repurposed or are still relevant
// import FocusSection from '@/components/sections/focus-section'; // This could be FeatureCardsSection now
// import RealtimeMonitoringSection from '@/components/sections/realtime-monitoring-section'; // May be part of Features
// import HowItWorksSection from '@/components/sections/how-it-works-section'; // Could be relevant
// import WhyChooseUsSection from '@/components/sections/why-choose-us-section'; // Could be relevant
// import CollaborateSection from '@/components/sections/collaborate-section'; // If collaboration is a feature
// import InstallProCtaSection from '@/components/sections/install-pro-cta-section'; // If there's a pro version
// import CollaborationAgencySection from '@/components/sections/collaboration-agency-section'; // If relevant

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsShowcaseSection />
      <FeatureCardsSection />
      <IntegrationsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactTeaserSection />
      {/* 
        Add other sections relevant to AssistoWeb here.
        Examples of potentially relevant sections if adapted:
        <HowItWorksSection />
        <WhyChooseUsSection />
      */}
    </>
  );
}
