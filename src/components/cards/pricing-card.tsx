import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react'; // Changed to Check icon from image
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
  planSubtitle?: string; // New prop for "Billed Annually" etc.
}

export default function PricingCard({
  planName,
  price,
  priceDescription,
  features,
  ctaText,
  ctaLink,
  isPopular = false,
  planSubtitle,
}: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col rounded-xl shadow-lg transition-all duration-300 ease-in-out h-full border",
      isPopular ? "border-primary bg-white ring-2 ring-primary scale-105" : "bg-white border-border hover:shadow-xl",
    )}>
      {isPopular && (
        <div className="py-1.5 px-4 bg-app-green text-center text-xs font-semibold text-white rounded-t-lg -mb-px uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <CardHeader className="p-6 text-center">
        <CardTitle className={cn("text-2xl font-bold", isPopular ? "text-primary" : "text-foreground")}>{planName}</CardTitle>
        {planSubtitle && <p className="text-sm text-muted-foreground mt-1">{planSubtitle}</p>}
        
        <div className="mt-4">
          <span className="text-4xl font-extrabold text-foreground">{price}</span>
          {priceDescription && <span className="ml-1 text-base font-medium text-muted-foreground">{priceDescription}</span>}
        </div>
        {/* <CardDescription className="mt-2 text-sm text-muted-foreground">
          Perfect for {planName === 'Basic' ? 'individuals and small teams' : planName === 'Pro' ? 'growing businesses' : 'large enterprises'}.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 p-6 pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          size="lg" 
          className={cn(
            "w-full text-base font-semibold rounded-lg py-3",
            isPopular ? "btn-primary-img" : "btn-secondary-img text-primary border-primary hover:bg-primary/10"
          )}
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
