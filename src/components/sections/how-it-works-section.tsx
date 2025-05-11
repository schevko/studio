'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { ListChecks, UserPlus, Send } from 'lucide-react'; // Example icons

interface HowItWorksStepProps {
  stepNumber: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  stepNumber,
  icon: Icon,
  title,
  description,
  iconBgColor = 'bg-primary/10',
  iconTextColor = 'text-primary',
}) => {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full rounded-xl">
      <CardHeader className="items-center">
        <div className={`mb-4 p-4 rounded-full ${iconBgColor} inline-flex`}>
          <Icon className={`w-8 h-8 ${iconTextColor}`} />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
         {/* Step number can be styled differently if needed */}
         {/* <span className="text-sm text-primary font-bold">{stepNumber}</span> */}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const steps = [
  {
    stepNumber: '01',
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up in minutes and set up your workspace. No credit card required for trial.',
    iconBgColor: 'bg-app-light-purple',
    iconTextColor: 'text-primary',
  },
  {
    stepNumber: '02',
    icon: ListChecks,
    title: 'Setup Project',
    description: 'Define your project, add tasks, assign team members, and set deadlines with our easy tools.',
    iconBgColor: 'bg-app-light-green',
    iconTextColor: 'text-app-green',
  },
  {
    stepNumber: '03',
    icon: Send,
    title: 'Start Tracking',
    description: 'Monitor progress, collaborate with your team, and achieve your project goals efficiently.',
    iconBgColor: 'bg-app-light-orange',
    iconTextColor: 'text-app-orange',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm">OUR PROCESS</p>
          <h2 className="section-title">How Does It Work?</h2>
          <p className="section-subtitle mx-auto">
            Get started with Craft in three simple steps. Streamline your project management workflow and boost productivity.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <ScrollAnimationWrapper key={step.stepNumber}>
              <HowItWorksStep {...step} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
