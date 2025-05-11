import PricingCard from '@/components/cards/pricing-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pricingPlans = [
  {
    planName: 'Temel Plan',
    price: '₺199',
    priceDescription: '/ay',
    planSubtitle: 'Yıllık faturalandırılır',
    features: [
      '1 Proje',
      'Temel görev yönetimi',
      'Sınırlı entegrasyonlar',
      'E-posta desteği',
      'Aylık 1000 görev',
    ],
    ctaText: 'Başla',
    ctaLink: '/kayit?plan=temel',
  },
  {
    planName: 'Profesyonel Plan',
    price: '₺499',
    priceDescription: '/ay',
    planSubtitle: 'Yıllık faturalandırılır',
    features: [
      'Sınırsız Proje',
      'Gelişmiş görev yönetimi',
      'Popüler platform entegrasyonları',
      'Öncelikli e-posta ve telefon desteği',
      'Aylık 5000 görev',
      'Detaylı raporlama',
    ],
    ctaText: 'Profesyonel Seç',
    ctaLink: '/kayit?plan=profesyonel',
    isPopular: true,
  },
  {
    planName: 'Kurumsal Çözüm',
    price: 'Özel',
    priceDescription: '',
    planSubtitle: 'Fiyat için iletişime geçin',
    features: [
      'Sınırsız Proje ve Kullanıcı',
      'Özelleştirilmiş iş akışları',
      'Özel API entegrasyonları',
      'Atanmış müşteri temsilcisi',
      'SSO ve Gelişmiş güvenlik',
      'Sınırsız görev',
    ],
    ctaText: 'Satışla İletişime Geç',
    ctaLink: '/contact?source=enterprise_pricing',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">FİYATLANDIRMA PLANLARI</p>
          <h2 className="section-title">Esnek Fiyatlandırma Planları</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            İhtiyaçlarınıza ve bütçenize uygun bir plan seçin. Tüm planlarımız, projelerinizi yönetmenize yardımcı olacak güçlü özelliklerle birlikte gelir.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimationWrapper key={plan.planName} className="flex" style={{animationDelay: `${index * 0.1}s`}}>
              <PricingCard {...plan} />
            </ScrollAnimationWrapper>
          ))}
        </div>
        <ScrollAnimationWrapper className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Daha fazlasına mı ihtiyacınız var? Özel gereksinimlerinize göre uyarlanmış bir plan edinin.
          </p>
          <Button asChild size="lg" className="btn-primary-softo">
            <Link href="/contact?source=custom_plan">Bize Ulaşın</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
