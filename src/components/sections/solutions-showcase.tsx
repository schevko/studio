import SolutionCard from '@/components/cards/solution-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { MessageSquare, PieChart, Users, Zap } from 'lucide-react';

const solutions = [
  {
    icon: MessageSquare,
    title: 'Customer Support Automation',
    description: 'Resolve customer queries 24/7 with AI-powered chatbots and virtual agents.',
    benefits: [
      'Reduced response times',
      'Increased customer satisfaction',
      'Lower support costs',
      'Scalable support operations',
    ],
    link: '/solutions/customer-support',
  },
  {
    icon: Zap,
    title: 'Sales & Lead Generation Assistant',
    description: 'Automate lead qualification, appointment scheduling, and follow-ups.',
    benefits: [
      'Higher conversion rates',
      'More qualified leads',
      'Streamlined sales pipeline',
      'Sales team productivity boost',
    ],
    link: '/solutions/sales-assistant',
  },
  {
    icon: Users,
    title: 'HR & Onboarding Automation',
    description: 'Simplify HR processes, from candidate screening to employee onboarding.',
    benefits: [
      'Faster hiring cycles',
      'Improved employee experience',
      'Reduced administrative burden',
      'Consistent onboarding process',
    ],
    link: '/solutions/hr-automation',
  },
  {
    icon: PieChart,
    title: 'Business Process Optimization',
    description: 'Identify and automate repetitive tasks across various departments for enhanced efficiency.',
    benefits: [
      'Operational cost savings',
      'Increased accuracy and consistency',
      'Better resource allocation',
      'Data-driven insights for improvement',
    ],
    link: '/solutions/process-optimization',
  },
];

export default function SolutionsShowcase() {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="section-title">Tailored AI Solutions for Your Business</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover how AssistoWeb's virtual assistants can revolutionize your operations,
            boost productivity, and deliver exceptional results.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {solutions.map((solution, index) => (
            <ScrollAnimationWrapper key={solution.title} className={`
              ${index === 0 ? 'md:col-span-1 lg:col-span-1' : ''}
              ${index === 1 ? 'md:col-span-1 lg:col-span-1' : ''}
              ${index === 2 ? 'md:col-span-1 lg:col-span-1' : ''}
              ${index === 3 ? 'md:col-span-1 lg:col-span-1' : ''}
            `}>
              <SolutionCard {...solution} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
