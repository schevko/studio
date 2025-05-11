import HeroSection from '@/components/sections/hero-section';
import SolutionsShowcase from '@/components/sections/solutions-showcase';
import FeatureCardsSection from '@/components/sections/feature-cards-section';
import PricingSection from '@/components/sections/pricing-section';
import IntegrationsSection from '@/components/sections/integrations-section';
import ContactTeaserSection from '@/components/sections/contact-teaser-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsShowcase />
      <FeatureCardsSection />
      <PricingSection />
      <IntegrationsSection />
      <ContactTeaserSection />
    </>
  );
}
