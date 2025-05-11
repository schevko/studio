import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="w-72 min-w-[280px] flex-shrink-0 snap-start bg-card/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border-border hover:border-accent/30">
      <CardHeader className="flex flex-row items-center gap-3 pb-3">
        <Icon className="h-7 w-7 text-accent" />
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
