'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Target, BarChartBig, Settings, Zap, Palette, Users } from 'lucide-react'; // Example icons
import type { LucideIcon } from 'lucide-react';

interface FocusItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string; // e.g., 'bg-primary/10'
  iconTextColor: string; // e.g., 'text-primary'
}

const FocusItem: React.FC<FocusItemProps> = ({ icon: Icon, title, description, iconBgColor, iconTextColor }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className={`mb-4 p-4 rounded-full ${iconBgColor}`}>
        <Icon className={`w-8 h-8 ${iconTextColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const focusItemsData = [
  {
    icon: Zap, // Assuming first icon from image
    title: 'Project Planning',
    description: 'Create detailed project plans, set milestones, and allocate resources effectively for seamless execution.',
    iconBgColor: 'bg-app-light-purple',
    iconTextColor: 'text-primary',
  },
  {
    icon: Palette, // Assuming second icon
    title: 'Task Management',
    description: 'Organize tasks, assign responsibilities, track progress, and ensure deadlines are met efficiently.',
    iconBgColor: 'bg-app-light-green', // Example green
    iconTextColor: 'text-app-green',
  },
  {
    icon: Users, // Assuming third icon
    title: 'Team Collaboration',
    description: 'Foster teamwork with shared workspaces, real-time communication, and version control for documents.',
    iconBgColor: 'bg-app-light-orange', // Example orange
    iconTextColor: 'text-app-orange',
  },
];

export default function FocusSection() {
  return (
    <section id="focus" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm">OUR FEATURES</p>
          <h2 className="section-title">Focus On Your Need</h2>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusItemsData.map((item, index) => (
            <ScrollAnimationWrapper key={index}>
                {/* Cards are not explicitly shown in the image for this section, but can be added for structure */}
                {/* Using direct items for now to match simplicity of image */}
              <FocusItem {...item} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
