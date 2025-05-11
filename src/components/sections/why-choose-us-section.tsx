'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, BrainCircuit, MessageSquareText, TrendingUp } from 'lucide-react'; // Updated icons for AI context

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description, iconBgColor = 'bg-primary/10', iconTextColor = 'text-primary' }) => (
  <div className="flex items-start gap-4">
    <div className={`p-3 rounded-full ${iconBgColor} flex-shrink-0`}>
      <Icon className={`w-7 h-7 ${iconTextColor}`} />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const features = [
  {
    icon: BrainCircuit,
    title: 'Akıllı Otomasyon',
    description: 'Tekrarlayan görevleri yapay zeka ile otomatikleştirin, zamandan tasarruf edin ve insan hatasını azaltın.',
    iconBgColor: 'bg-accent/10', // Using accent for item icons
    iconTextColor: 'text-accent',
  },
  {
    icon: TrendingUp,
    title: 'Ölçeklenebilir Çözümler',
    description: 'İşletmeniz büyüdükçe ihtiyaçlarınıza uyum sağlayan esnek ve ölçeklenebilir sanal asistanlar.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli ve Güvenilir',
    description: 'Veri güvenliğiniz bizim için önceliklidir. En son güvenlik standartlarıyla bilgileriniz korunur.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
   {
    icon: MessageSquareText,
    title: 'Uzman Destek Ekibi',
    description: 'Her adımda size yardımcı olacak uzman destek ekibimize kolayca ulaşın.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-padding bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper>
             <div className="relative aspect-[1/1] sm:aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/aiteam/600/600"
                alt="Yapay zeka çözümleri üzerinde çalışan ekip"
                layout="fill"
                objectFit="cover"
                data-ai-hint="ai team working"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="lg:pl-8">
            <p className="section-title-sm text-primary">NEDEN BİZ?</p>
            <h2 className="section-title mb-6">Neden AssistoWeb'i Seçmelisiniz?</h2>
            <p className="section-subtitle mb-8">
              AssistoWeb, işletmelerin yapay zeka destekli sanal asistanlarla verimliliklerini artırmalarına, maliyetlerini düşürmelerine ve daha hızlı büyümelerine yardımcı olmak için tasarlanmıştır.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem key={feature.title} {...feature} />
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
