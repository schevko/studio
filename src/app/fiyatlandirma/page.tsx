import PricingCard from '@/components/cards/pricing-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Settings, Headphones, BookOpen } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    planName: 'Temel Paket',
    price: '$500 - $1.000',
    priceDescription: '/ay',
    planSubtitle: 'Küçük İşletmeler ve Yeni Başlayanlar İçin İdeal',
    features: [
      '1-3 yapay zeka ajanı',
      'Temel entegrasyonlar',
      'Sınırlı özelleştirme',
      'Standart destek',
    ],
    ctaText: 'Hemen Abone Ol',
    ctaLink: '/kayit?plan=temel',
  },
  {
    planName: 'Profesyonel Paket',
    price: '$1.500 - $3.000',
    priceDescription: '/ay',
    planSubtitle: 'Büyüme Hedefleyen İşletmeler İçin Gelişmiş Özellikler',
    features: [
      '4-10 yapay zeka ajanı',
      'Gelişmiş entegrasyonlar',
      'Orta düzey özelleştirme',
      'Öncelikli destek',
      'Temel raporlama ve analiz',
    ],
    ctaText: 'Profesyonel Paketi Seç',
    ctaLink: '/kayit?plan=profesyonel',
    isPopular: true,
  },
  {
    planName: 'Kurumsal Paket',
    price: '$5.000 - $15.000',
    priceDescription: '/ay',
    planSubtitle: 'Büyük Ölçekli Kurumlar İçin Kapsamlı Çözümler',
    features: [
      '10+ yapay zeka ajanı',
      'Tam entegrasyon desteği (özel entegrasyonlar dahil)',
      'İleri düzey özelleştirme ve özel ajan geliştirme danışmanlığı',
      'Özel müşteri başarı yöneticisi',
      'Kapsamlı raporlama ve performans analizi',
      'SLA garantisi',
    ],
    ctaText: 'Size Özel Teklif Alın',
    ctaLink: '/contact?reason=enterprise_quote',
  },
];

const additionalServices = [
    { icon: Settings, title: "Entegrasyon ve Danışmanlık Hizmetleri", price: "Ortalama proje değeri $10.000 - $50.000" },
    { icon: Headphones, title: "Premium Destek Planları", price: "Aylık abone başına $500 - $2.000" },
    { icon: Settings, title: "Özel Ajan Geliştirme", price: "Proje başına $15.000 - $100.000 (Kurumsal paket kapsamında indirimli/ücretsiz olabilir)" },
    { icon: BookOpen, title: "Eğitim ve Sertifikasyon Programları", price: "Kişi başı $1.000 - $5.000" }
];


export default function PricingPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Assisto Fiyatlandırma</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            İşletmenize Özel Esnek Abonelik Planları. Assisto, her büyüklükteki işletmenin ihtiyaçlarına göre ölçeklenebilen esnek abonelik modelleri sunar. Şeffaf fiyatlandırma ve ek hizmet seçenekleriyle bütçenize en uygun çözümü bulun.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimationWrapper key={plan.planName} className="flex" style={{animationDelay: `${index * 0.1}s`}}>
              <PricingCard {...plan} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper className="mb-16">
            <Card className="shadow-xl bg-card border-border rounded-xl">
                <CardHeader className="p-6 md:p-8">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">İhtiyaçlarınıza Özel Ek Hizmetler</CardTitle>
                    <p className="text-muted-foreground mt-2">Temel paketlerimize ek olarak, işletmenizin benzersiz gereksinimlerini karşılamak üzere tasarlanmış çeşitli hizmetler sunuyoruz:</p>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                                <service.icon className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                                    <p className="text-sm text-muted-foreground">{service.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Hala Kararsız mısınız?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            İşletmeniz için en uygun planı ve ek hizmetleri belirlemek üzere uzmanlarımızla görüşün.
          </p>
          <Button asChild size="lg" className="btn-primary-softo rounded-full">
            <Link href="/contact?reason=pricing_consultation">Uzmanlarımızla Konuşun</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
