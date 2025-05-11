'use client';
import FeatureCard from '@/components/cards/feature-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Zap, BrainCircuit, MessageSquare, Users, ShieldCheck, Settings, BarChartHorizontalBig } from 'lucide-react';

const features = [
  {
    icon: BarChartHorizontalBig,
    title: 'Kapsamlı Proje Takibi',
    description: 'Projelerinizin her aşamasını detaylı bir şekilde takip edin, görevleri yönetin ve ilerlemeyi görün.',
    iconColorClass: 'text-primary',
  },
  {
    icon: BrainCircuit,
    title: 'Akıllı Raporlama',
    description: 'Veriye dayalı kararlar almak için kapsamlı raporlar ve analizlerle projelerinizin performansını ölçün.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Users,
    title: 'Ekip İşbirliği',
    description: 'Ekip üyeleriyle kolayca iletişim kurun, dosyaları paylaşın ve projelerde birlikte çalışın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Settings,
    title: 'Özelleştirilebilir Akışlar',
    description: 'İş akışlarınızı kendi ihtiyaçlarınıza göre özelleştirin ve proje süreçlerinizi optimize edin.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Zap,
    title: 'Hızlı Entegrasyon',
    description: 'Mevcut araçlarınızla (takvim, depolama vb.) kolayca entegre olarak kesintisiz bir çalışma deneyimi yaşayın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli Veri Yönetimi',
    description: 'Proje verilerinizi en yüksek güvenlik standartlarıyla koruyun ve gizliliğe önem verin.',
    iconColorClass: 'text-primary',
  },
];

export default function FeatureCardsSection() {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">TEMEL ÖZELLİKLER</p>
          <h2 className="section-title">Softo'nun Gücünü Keşfedin</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Projelerinizi başarıya ulaştıracak yenilikçi özelliklerle tanışın.
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
