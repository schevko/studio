'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, BrainCircuit, Users, TrendingUp, Settings } from 'lucide-react';

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
    title: 'Kullanıcı Dostu Arayüz',
    description: 'Karmaşık proje yönetimi süreçlerini basitleştiren sezgisel ve kolay kullanımlı bir arayüz sunar.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
  {
    icon: Settings, // Changed from TrendingUp
    title: 'Esnek ve Özelleştirilebilir',
    description: 'Farklı proje türleri ve ekip büyüklükleri için esnek çözümler ve özelleştirme seçenekleri sunar.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli ve Güvenilir',
    description: 'Veri güvenliğiniz bizim için önceliklidir. En son güvenlik standartlarıyla proje bilgileriniz korunur.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
   {
    icon: Users, // Changed from MessageSquareText
    title: 'Kapsamlı Destek',
    description: 'Her adımda size yardımcı olacak uzman destek ekibimize ve kapsamlı bilgi kaynaklarımıza kolayca ulaşın.',
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
                src="https://picsum.photos/seed/projectteam/600/600"
                alt="Proje yönetimi çözümleri üzerinde çalışan ekip"
                layout="fill"
                objectFit="cover"
                data-ai-hint="project team planning"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="lg:pl-8">
            <p className="section-title-sm text-primary">NEDEN BİZ?</p>
            <h2 className="section-title mb-6">Neden Assisto'yu Seçmelisiniz?</h2>
            <p className="section-subtitle mb-8">
              Assisto, işletmelerin ve ekiplerin proje yönetimi süreçlerini optimize etmelerine, verimliliklerini artırmalarına ve hedeflerine daha hızlı ulaşmalarına yardımcı olmak için tasarlanmıştır.
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
