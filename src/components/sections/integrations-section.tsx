'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import { Zap, MessageSquare, ShoppingCart, Slack, Users, FileText, BarChart2, CalendarDays, Github } from 'lucide-react';

const integrationLogos = [
  { id: 1, name: 'Google Takvim', icon: CalendarDays, hint: 'calendar logo' },
  { id: 2, name: 'Slack', icon: Slack, hint: 'slack logo' },
  { id: 3, name: 'GitHub', icon: Github, hint: 'github logo' },
  { id: 4, name: 'Dosya Depolama', icon: FileText, hint: 'storage logo' },
  { id: 5, name: 'CRM Platformu', icon: Users, hint: 'crm logo' },
  { id: 6, name: 'Analitik Aracı', icon: BarChart2, hint: 'analytics tool logo' },
  { id: 7, name: 'Destek Yazılımı', icon: MessageSquare, hint: 'support software logo' },
  { id: 8, name: 'Zapier', icon: Zap, hint: 'zapier logo' }, 
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollAnimationWrapper className="mb-12 md:mb-16">
          <p className="section-title-sm text-primary">ENTEGRASYONLAR</p>
          <h2 className="section-title">Popüler Araçlarla Sorunsuz Entegrasyon</h2>
          <p className="section-subtitle mx-auto max-w-xl">
            Assisto, mevcut iş akışlarınızı kolaylaştırmak için kullandığınız araçlarla sorunsuz bir şekilde entegre olur.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
            {integrationLogos.map((logo) => (
              <div
                key={logo.id}
                className="group p-6 rounded-xl bg-background border border-border flex flex-col items-center justify-center h-32 filter grayscale hover:grayscale-0 saturate-50 hover:saturate-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                title={logo.name}
              >
                <logo.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                <p className="mt-2 text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">{logo.name}</p>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
