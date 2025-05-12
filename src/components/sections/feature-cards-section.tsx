'use client';
import FeatureCard from '@/components/cards/feature-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { TrendingUp, DollarSign, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Operasyonel Verimlilikte Artış',
    description: 'Tekrarlayan görevleri otomatikleştirin, insan hatasını azaltın ve süreçlerinizi hızlandırın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: DollarSign,
    title: 'Maliyet Optimizasyonu',
    description: 'Personel ve operasyonel giderlerde önemli tasarruflar sağlayarak karlılığınızı artırın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Users,
    title: 'İnsan Kaynağını Güçlendirme',
    description: 'Çalışanlarınızın monoton işlerden kurtularak stratejik ve yaratıcı görevlere odaklanmasını sağlayın.',
    iconColorClass: 'text-primary',
  },
  {
    icon: Award,
    title: 'Sürdürülebilir Rekabet Avantajı',
    description: 'Özelleştirilmiş yapay zeka çözümleriyle pazar liderliğinizi güçlendirin ve geleceğe hazır olun.',
    iconColorClass: 'text-primary',
  },
];

export default function FeatureCardsSection() {
  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">ASSİSTO İLE</p>
          <h2 className="section-title">İşletmenize Değer Katın</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Assisto'nun sunduğu temel faydalarla işletmenizin potansiyelini en üst düzeye çıkarın.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {benefits.map((benefit, index) => (
                <div key={index} className="w-full flex"> {/* Added flex to make child h-full work effectively */}
                   <FeatureCard {...benefit} />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
