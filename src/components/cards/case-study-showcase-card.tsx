'use client';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface CaseStudyShowcaseCardProps {
  title: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  results: string[];
  customerQuote?: string;
  customerName?: string;
  customerRole?: string;
  imageUrl: string;
  imageHint: string;
  detailsLink: string;
}

export default function CaseStudyShowcaseCard({
  title,
  icon: Icon,
  problem,
  solution,
  results,
  customerQuote,
  customerName,
  customerRole,
  imageUrl,
  imageHint,
  detailsLink,
}: CaseStudyShowcaseCardProps) {
  return (
    <Card className="w-full overflow-hidden shadow-xl bg-card border border-border rounded-xl flex flex-col md:flex-row">
      <div className="md:w-2/5 relative min-h-[250px] md:min-h-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={imageHint}
          className="md:rounded-l-xl md:rounded-r-none rounded-t-xl"
        />
      </div>
      <div className="md:w-3/5 flex flex-col">
        <CardHeader className="p-6">
          <div className="flex items-start gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-md">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-1">Problem:</h4>
            <p className="text-sm text-muted-foreground">{problem}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-1">Çözüm:</h4>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Sonuçlar:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
          {customerQuote && (
            <blockquote className="mt-4 p-3 bg-secondary/50 border-l-4 border-primary rounded-r-md">
              <p className="text-sm italic text-muted-foreground">"{customerQuote}"</p>
              {customerName && <footer className="mt-1 text-xs text-foreground font-medium">
                {customerName}, <span className="text-muted-foreground">{customerRole}</span>
              </footer>}
            </blockquote>
          )}
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full sm:w-auto btn-secondary-softo">
            <Link href={detailsLink}>
              Hikayenin Tamamını Oku <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
