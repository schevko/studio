import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColorClass?: string; // e.g. text-primary, text-app-neon-green
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description,
  iconColorClass = 'text-primary' // Default to primary theme color
}: FeatureCardProps) {
  return (
    <Card className="w-full min-w-[280px] max-w-sm flex-shrink-0 snap-start bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border-border hover:border-primary/30 rounded-xl p-2">
      <CardHeader className="flex flex-row items-center gap-4 pb-3">
        <div className={`p-3 rounded-lg bg-primary/10`}>
          <Icon className={`h-7 w-7 ${iconColorClass}`} />
        </div>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
