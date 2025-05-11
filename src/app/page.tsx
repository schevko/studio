import HeroSection from '@/components/sections/hero-section';
import ProblemSolutionSection from '@/components/sections/problem-solution-section';
import FeatureCardsSection from '@/components/sections/feature-cards-section'; // For "Assisto Ne Sunar?"
import TargetAudienceSection from '@/components/sections/target-audience-section';
import TrustFactorsSection from '@/components/sections/trust-factors-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactTeaserSection from '@/components/sections/contact-teaser-section'; // For final CTA

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <FeatureCardsSection /> {/* This will be "Assisto Ne Sunar?" */}
      <TargetAudienceSection />
      <TrustFactorsSection />
      <TestimonialsSection />
      <ContactTeaserSection />
    </>
  );
}
