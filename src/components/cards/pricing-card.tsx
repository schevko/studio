import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  planName: string;
  price: string;
  priceDescription: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
}

export default function PricingCard({
  planName,
  price,
  priceDescription,
  features,
  ctaText,
  ctaLink,
  isPopular = false,
}: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col rounded-lg shadow-xl transition-all duration-300 ease-in-out",
      isPopular ? "border-2 border-accent bg-card ring-2 ring-accent/50 scale-105" : "bg-card/80 border-border hover:shadow-2xl",
      "backdrop-blur-sm"
    )}>
      {isPopular && (
        <div className="py-1.5 px-4 bg-accent text-center text-sm font-semibold text-accent-foreground rounded-t-md -mb-px">
          Most Popular
        </div>
      )}
      <CardHeader className="p-6">
        <CardTitle className={cn("text-2xl font-bold", isPopular ? "text-accent" : "text-foreground")}>{planName}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-extrabold text-foreground">{price}</span>
          <span className="ml-1 text-base font-medium text-muted-foreground">{priceDescription}</span>
        </div>
        <CardDescription className="mt-2 text-sm text-muted-foreground">
          Perfect for {planName === 'Starter' ? 'individuals and small teams' : planName === 'Professional' ? 'growing businesses' : 'large enterprises'}.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-6 pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild size="lg" className={cn("w-full", isPopular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
