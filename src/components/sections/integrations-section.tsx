'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import { Zap, MessageSquare, ShoppingCart, Slack, Users, FileText, BarChart2 } from 'lucide-react'; // Example icons as placeholders

const integrationLogos = [
  // Using Lucide icons as placeholders for actual logos for simplicity
  // In a real app, replace these with <Image src="/path/to/logo.svg" ... />
  { id: 1, name: 'CRM Platformu', icon: Users, hint: 'crm logo' },
  { id: 2, name: 'E-ticaret Sistemi', icon: ShoppingCart, hint: 'ecommerce logo' },
  { id: 3, name: 'Mesajlaşma Uygulaması', icon: MessageSquare, hint: 'messaging app logo' },
  { id: 4, name: 'Slack', icon: Slack, hint: 'slack logo' },
  { id: 5, name: 'Destek Yazılımı', icon: FileText, hint: 'support software logo' },
  { id: 6, name: 'Analitik Aracı', icon: BarChart2, hint: 'analytics tool logo' },
  { id: 7, name: 'Pazarlama Otomasyonu', icon: Zap, hint: 'marketing automation logo' },
  { id: 8, name: 'Veritabanı Çözümü', icon: FileText, hint: 'database logo' }, // Re-using icon for example
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollAnimationWrapper className="mb-12 md:mb-16">
          <p className="section-title-sm text-primary">ENTEGRASYONLAR</p>
          <h2 className="section-title">Popüler Platformlarla Sorunsuz Entegrasyon</h2>
          <p className="section-subtitle mx-auto max-w-xl">
            AssistoWeb, mevcut iş akışlarınızı kolaylaştırmak için kullandığınız araçlarla sorunsuz bir şekilde entegre olur.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
            {integrationLogos.map((logo) => (
              <div
                key={logo.id}
                className="p-6 rounded-xl bg-background border border-border flex flex-col items-center justify-center h-32 filter grayscale hover:grayscale-0 saturate-[.5] hover:saturate-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                title={logo.name}
              >
                <logo.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                <p className="mt-2 text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">{logo.name}</p>
                {/* For actual image logos:
                <Image
                  src={`https://picsum.photos/seed/${logo.hint}/100/40`}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-10"
                  data-ai-hint={logo.hint}
                />
                */}
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
