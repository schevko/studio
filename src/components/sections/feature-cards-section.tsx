import FeatureCard from '@/components/cards/feature-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Brain, Zap, MessageCircle, ShieldCheck, TrendingUp, Settings2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Engine',
    description: 'Powered by cutting-edge machine learning models for natural and intelligent interactions.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get your virtual assistants up and running in days, not months, with our streamlined setup.',
  },
  {
    icon: MessageCircle,
    title: 'Omnichannel Support',
    description: 'Engage with users across web, mobile apps, messaging platforms, and more.',
  },
  {
    icon: Settings2,
    title: 'Easy Customization',
    description: 'Tailor assistant personalities, workflows, and knowledge bases to your brand.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    description: 'Robust security measures to protect your data and ensure compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Our solutions grow with your business, handling increasing volumes with ease.',
  },
];

export default function FeatureCardsSection() {
  return (
    <section id="features" className="section-padding bg-background/70 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="section-title">Powerful Features, Seamless Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            AssistoWeb is packed with features designed to deliver intelligent automation and exceptional user interactions.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-6 horizontal-scrollbar snap-x snap-mandatory">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent md:hidden"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent md:hidden"></div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
