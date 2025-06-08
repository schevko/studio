'use client';

import dynamic from 'next/dynamic';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

// Define the types for the props
interface AgentType {
  name: string;
  icon: string;
}

interface CaseStudy {
  title?: string;
  features?: string[];
  example?: string;
}

interface AgentCategory {
  categoryTitle: string;
  categoryIcon: string;
  categoryDescription: string;
  agentTypes: AgentType[];
  caseStudy?: CaseStudy;
}

interface SolutionsRendererProps {
  agentCategories: AgentCategory[];
}

// Dynamically import the AgentCategorySection with SSR turned off
const DynamicAgentCategorySection = dynamic(() => import('@/components/sections/agent-category-section'), { 
  ssr: false,
  // Optional: add a loading component
  loading: () => <div className="w-full h-48 bg-secondary/30 rounded-xl animate-pulse"></div>
});

export default function SolutionsRenderer({ agentCategories }: SolutionsRendererProps) {
  return (
    <div className="space-y-12 md:space-y-16">
      {agentCategories.map((category, index) => (
        <ScrollAnimationWrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          <DynamicAgentCategorySection {...category} />
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
}
