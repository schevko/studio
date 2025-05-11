import PricingCard from '@/components/cards/pricing-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button'; // For "Contact Us" button
import Link from 'next/link'; // For "Contact Us" link

const pricingPlans = [
  {
    planName: 'Basic',
    price: '$19',
    priceDescription: '/month',
    planSubtitle: 'Billed Annually',
    features: [
      'Up to 10 users',
      'Basic project tracking',
      '5GB Storage',
      'Community support',
      'Task management',
    ],
    ctaText: 'Get Started',
    ctaLink: '/signup?plan=basic',
  },
  {
    planName: 'Pro',
    price: '$49',
    priceDescription: '/month',
    planSubtitle: 'Billed Annually',
    features: [
      'Up to 50 users',
      'Advanced project tracking',
      '50GB Storage',
      'Priority email support',
      'Time tracking & Reporting',
      'Integrations (Slack, Google)',
    ],
    ctaText: 'Choose Pro',
    ctaLink: '/signup?plan=pro',
    isPopular: true,
  },
  {
    planName: 'Enterprise',
    price: 'Custom',
    priceDescription: '',
    planSubtitle: 'Contact for pricing',
    features: [
      'Unlimited users',
      'Customizable workflows',
      'Unlimited Storage',
      'Dedicated account manager',
      'SSO & Advanced security',
      'API Access & Custom integrations',
    ],
    ctaText: 'Contact Sales',
    ctaLink: '/contact-sales?plan=enterprise',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-app-light-purple/50">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm">PRICING PLANS</p>
          <h2 className="section-title">Flexible Pricing Plans</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Choose a plan that fits your needs and budget. All plans come with powerful features to help you manage your projects.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
          {pricingPlans.map((plan) => (
            <ScrollAnimationWrapper key={plan.planName} className="flex">
              <PricingCard {...plan} />
            </ScrollAnimationWrapper>
          ))}
        </div>
        <ScrollAnimationWrapper className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Need more? Get a custom plan tailored to your specific requirements.
          </p>
          <Button asChild size="lg" className="btn-primary-img">
            <Link href="/contact-sales">Contact Us</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
