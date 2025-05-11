import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { cn } from '@/lib/utils';
import { Globe, MessageSquare, Users, ShoppingCart, Zap, Database } from 'lucide-react'; // Using Lucide icons as placeholders

// Placeholder for actual brand SVGs if needed
const PlaceholderLogo = ({ icon: Icon, name }: { icon: React.ElementType, name: string }) => (
  <div className="group flex flex-col items-center justify-center p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-all duration-300 filter grayscale-[80%] hover:grayscale-0 aspect-square transform hover:scale-105">
    <Icon className="h-12 w-12 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
    <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{name}</p>
  </div>
);


const integrations = [
  { name: 'Web Platforms', icon: Globe, hint: "website platform" },
  { name: 'Messaging Apps', icon: MessageSquare, hint: "chat communication" },
  { name: 'CRM Systems', icon: Users, hint: "customer relationship" },
  { name: 'E-commerce', icon: ShoppingCart, hint: "online store" },
  { name: 'Automation Tools', icon: Zap, hint: "workflow task" },
  { name: 'Databases', icon: Database, hint: "data storage" },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="section-padding bg-background/70 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="section-title">Seamless Integrations</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            AssistoWeb connects effortlessly with your favorite platforms and tools, enhancing your existing workflows.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {integrations.map((integration) => (
              <PlaceholderLogo 
                key={integration.name} 
                icon={integration.icon} 
                name={integration.name} 
                data-ai-hint={integration.hint}
              />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
