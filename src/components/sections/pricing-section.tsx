import PricingCard from '@/components/cards/pricing-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

const pricingPlans = [
  {
    planName: 'Starter',
    price: '$49',
    priceDescription: '/month',
    features: [
      '1 AI Virtual Assistant',
      'Basic Integrations',
      '1,000 Monthly Interactions',
      'Standard Support',
      'Knowledge Base Access',
    ],
    ctaText: 'Get Started',
    ctaLink: '/contact?plan=starter',
  },
  {
    planName: 'Professional',
    price: '$199',
    priceDescription: '/month',
    features: [
      '5 AI Virtual Assistants',
      'Advanced Integrations (CRM, Helpdesk)',
      '10,000 Monthly Interactions',
      'Priority Support',
      'Customizable Workflows',
      'Analytics Dashboard',
    ],
    ctaText: 'Choose Professional',
    ctaLink: '/contact?plan=professional',
    isPopular: true,
  },
  {
    planName: 'Enterprise',
    price: 'Custom',
    priceDescription: '',
    features: [
      'Unlimited AI Assistants',
      'Custom Integrations & API Access',
      'Scalable Interactions',
      'Dedicated Account Manager',
      'Premium Security Features',
      'On-Premise Deployment Option',
    ],
    ctaText: 'Contact Sales',
    ctaLink: '/contact?plan=enterprise',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="section-title">Clear, Flexible Pricing</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Choose a plan that scales with your business needs. All plans come with our commitment to value and ROI.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-x-8">
          {pricingPlans.map((plan) => (
            <ScrollAnimationWrapper key={plan.planName}>
              <PricingCard {...plan} />
            </ScrollAnimationWrapper>
          ))}
        </div>
        <ScrollAnimationWrapper className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution? <a href="/contact" className="font-medium text-accent hover:underline">Contact us</a> for a personalized quote.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
