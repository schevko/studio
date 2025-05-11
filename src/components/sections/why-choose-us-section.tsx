'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, Users, BarChart2, MessageSquare } from 'lucide-react'; // Example icons

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description, iconBgColor = 'bg-primary/10', iconTextColor = 'text-primary' }) => (
  <div className="flex items-start gap-4">
    <div className={`p-3 rounded-full ${iconBgColor} flex-shrink-0`}>
      <Icon className={`w-6 h-6 ${iconTextColor}`} />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Robust security measures to protect your project data and ensure uptime.',
    iconBgColor: 'bg-app-light-purple',
    iconTextColor: 'text-primary',
  },
  {
    icon: Users,
    title: 'Collaborative Platform',
    description: 'Seamless team collaboration with shared tasks, files, and communication.',
    iconBgColor: 'bg-app-light-green',
    iconTextColor: 'text-app-green',
  },
  {
    icon: BarChart2,
    title: 'Insightful Analytics',
    description: 'Gain valuable insights into project performance and team productivity.',
    iconBgColor: 'bg-app-light-orange',
    iconTextColor: 'text-app-orange',
  },
   {
    icon: MessageSquare,
    title: 'Dedicated Support',
    description: 'Access to our expert support team to help you every step of the way.',
    iconBgColor: 'bg-blue-100', // Example blue
    iconTextColor: 'text-blue-600',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper>
             <div className="relative aspect-[1/1] sm:aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/startupteam/600/600"
                alt="Team collaborating on a project"
                layout="fill"
                objectFit="cover"
                data-ai-hint="startup team collaboration"
              />
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="lg:pl-8">
            <p className="section-title-sm">WHY CHOOSE US</p>
            <h2 className="section-title mb-6">Why You Choose Us for Your Startup?</h2>
            <p className="section-subtitle mb-8">
              Craft is designed to help startups and growing businesses manage their projects effectively, save time, and achieve their goals faster.
            </p>
            <div className="space-y-6">
              {features.map((feature) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
