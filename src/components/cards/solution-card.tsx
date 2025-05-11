import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  link: string;
  themeColorClass?: string; // e.g. text-app-neon-green, border-app-neon-green
}

export default function SolutionCard({ 
  icon: Icon, 
  title, 
  description, 
  benefits, 
  link,
  themeColorClass = 'text-primary border-primary hover:bg-primary/10' // Default to primary accent
}: SolutionCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300 border-border hover:border-primary/50 rounded-xl">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
        <div className={`rounded-lg bg-primary/10 p-3`}>
          <Icon className={`h-8 w-8 ${themeColorClass.split(' ')[0]}`} aria-hidden="true" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0">
        <div>
          <CardDescription className="mb-4 text-muted-foreground">{description}</CardDescription>
          <h4 className="mb-2 font-semibold text-foreground">Temel Faydalar:</h4>
          <ul className="mb-6 space-y-1.5 text-sm text-muted-foreground">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className={`mr-2 mt-1 h-4 w-4 flex-shrink-0 ${themeColorClass.split(' ')[0]}`} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className={`mt-auto w-full ${themeColorClass} hover:text-primary-foreground`}>
          <Link href={link}>
            Daha Fazla Bilgi Edinin <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
