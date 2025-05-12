import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card'; // Removed CardHeader, CardContent, CardTitle as they are not used directly

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColorClass?: string; // e.g. text-primary
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description,
  iconColorClass = 'text-primary' 
}: FeatureCardProps) {
  return (
    <Card className="w-full h-full flex flex-col text-left p-6 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-border hover:border-primary/40 rounded-xl group transform hover:-translate-y-1">
      <div className="mb-5"> {/* Icon container */}
        <div className={`inline-flex p-3.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 ease-in-out`}>
          <Icon className={`h-8 w-8 ${iconColorClass} transition-transform duration-300 ease-in-out group-hover:scale-110`} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2.5">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
    </Card>
  );
}
