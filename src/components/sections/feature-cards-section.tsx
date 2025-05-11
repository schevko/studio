'use client';
import FeatureCard from '@/components/cards/feature-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Zap, BrainCircuit, MessageSquare, Users, ShieldCheck, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Anında Yanıtlar',
    description: 'Müşteri sorularına ve taleplerine 7/24 anında yanıt vererek bekleme sürelerini ortadan kaldırın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: BrainCircuit,
    title: 'Akıllı Öğrenme',
    description: 'Yapay zeka asistanlarımız, etkileşimlerden öğrenerek zamanla daha doğru ve etkili hale gelir.',
    iconColorClass: 'text-primary',
  },
  {
    icon: MessageSquare,
    title: 'Çok Kanallı Destek',
    description: 'Web siteniz, mobil uygulamanız ve sosyal medya platformlarınız üzerinden kesintisiz destek sunun.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Users,
    title: 'Kişiselleştirilmiş Deneyim',
    description: 'Her kullanıcıya özel, kişiselleştirilmiş etkileşimler ve çözümler sunarak bağlılığı artırın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Settings,
    title: 'Kolay Entegrasyon',
    description: 'Mevcut CRM, ERP ve diğer iş araçlarınızla sorunsuz bir şekilde entegre edin.',
    iconColorClass: 'text-primary',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli Veri Yönetimi',
    description: 'Müşteri verilerini en yüksek güvenlik standartlarıyla koruyun ve gizliliğe önem verin.',
    iconColorClass: 'text-primary',
  },
];

export default function FeatureCardsSection() {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">TEMEL ÖZELLİKLER</p>
          <h2 className="section-title">AssistoWeb'in Gücünü Keşfedin</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            İşletmenizi geleceğe taşıyacak yenilikçi özelliklerle tanışın.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="relative">
            <div className="flex overflow-x-auto pb-8 space-x-6 horizontal-scrollbar snap-x snap-mandatory">
              {features.map((feature, index) => (
                <div key={index} className="snap-center w-[300px] sm:w-[320px] md:w-[350px] flex-shrink-0">
                   <FeatureCard {...feature} />
                </div>
              ))}
            </div>
            {/* Optional: custom scrollbar or navigation buttons for better UX on non-touch devices */}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
