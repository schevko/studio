import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  link: string;
}

export default function SolutionCard({ icon: Icon, title, description, benefits, link }: SolutionCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border hover:border-accent/50">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
        <div className="rounded-lg bg-accent/20 p-3">
          <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0">
        <div>
          <p className="mb-4 text-muted-foreground">{description}</p>
          <h4 className="mb-2 font-semibold text-foreground">Key Benefits:</h4>
          <ul className="mb-6 space-y-1.5 text-sm text-muted-foreground">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild variant="outline" className="mt-auto w-full border-accent text-accent hover:bg-accent/10 hover:text-accent">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
