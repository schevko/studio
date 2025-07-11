'use client';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

interface AgentType {
  name: string;
  icon: string;
}

interface CaseStudy {
  title?: string;
  features?: string[];
  example?: string;
}

interface AgentCategorySectionProps {
  categoryTitle: string;
  categoryIcon: string;
  categoryDescription: string;
  agentTypes: AgentType[];
  caseStudy?: CaseStudy;
}

const GetAgentIcon = (iconName: string) => dynamic<LucideIcon>(() =>
  import('lucide-react').then((mod) => mod[iconName as keyof typeof mod] as LucideIcon), { ssr: false });

export default function AgentCategorySection({
  categoryTitle,
  categoryIcon,
  categoryDescription,
  agentTypes,
  caseStudy, // Added caseStudy to props destructuring
}: AgentCategorySectionProps) {

  const CategoryIcon = dynamic<LucideIcon>(() =>
    import('lucide-react').then((mod) => mod[categoryIcon as keyof typeof mod] as LucideIcon), { ssr: false }
  );

  return (
    <Card className="w-full shadow-xl bg-card border border-border rounded-xl overflow-hidden">
      <CardHeader className="p-6 bg-secondary/50 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <CategoryIcon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">{categoryTitle}</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">{categoryDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h4 className="text-lg font-semibold text-foreground mb-4">Bu Kategorideki Ajan Tipleri:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {agentTypes.map((agent, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <GetAgentIcon iconName={agent.icon} className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{agent.name}</span>
            </div>
          ))}
        </div>

        {caseStudy && (caseStudy.title || (caseStudy.features && caseStudy.features.length > 0) || caseStudy.example) && (
          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="case-study" className="border border-border rounded-lg bg-background">
              {caseStudy.title && (
                <AccordionTrigger className="px-4 py-3 font-semibold text-primary hover:no-underline">
                  {caseStudy.title}
                </AccordionTrigger>
              )}
              <AccordionContent className="px-4 pb-4">
                {(caseStudy.features && caseStudy.features.length > 0) && (
                  <>
                    <p className="text-sm text-muted-foreground mb-3"><strong>Özellikler:</strong></p>
                    <ul className="space-y-1.5 mb-4 text-sm text-muted-foreground">
                      {caseStudy.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {caseStudy.example && (
                  <p className="text-sm text-muted-foreground italic"><strong>Uygulama Örneği:</strong> {caseStudy.example}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}
