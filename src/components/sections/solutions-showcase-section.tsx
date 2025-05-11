'use client';
import SolutionCard from '@/components/cards/solution-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { MessageCircle, ShoppingCart, Settings, Zap } from 'lucide-react'; // Example icons

const solutions = [
  {
    icon: MessageCircle,
    title: 'Müşteri Hizmetleri Asistanı',
    description: '7/24 müşteri desteği sağlayın, sık sorulan soruları yanıtlayın ve sorunları anında çözün.',
    benefits: [
      'Yanıt sürelerini kısaltın',
      'Müşteri memnuniyetini artırın',
      'Destek maliyetlerini düşürün',
      'Çok dilli destek sunun',
    ],
    link: '/solutions/customer-service',
    themeColorClass: 'text-primary border-primary hover:bg-primary/10'
  },
  {
    icon: ShoppingCart,
    title: 'E-ticaret Satış Asistanı',
    description: 'Müşterilere ürün önerilerinde bulunun, sipariş takibi yapın ve satış sonrası destek sağlayın.',
    benefits: [
      'Satış dönüşüm oranlarını artırın',
      'Kişiselleştirilmiş alışveriş deneyimi sunun',
      'Sepet terk oranlarını azaltın',
      'Çapraz satış fırsatları yaratın',
    ],
    link: '/solutions/ecommerce-sales',
    themeColorClass: 'text-green-400 border-green-400 hover:bg-green-400/10' // Example secondary color
  },
  {
    icon: Settings,
    title: 'Operasyonel Verimlilik Asistanı',
    description: 'İç süreçleri otomatikleştirin, randevu planlaması yapın, veri girişi görevlerini hızlandırın.',
    benefits: [
      'Operasyonel verimliliği artırın',
      'İnsan hatasını en aza indirin',
      'Çalışanların iş yükünü hafifletin',
      'Süreçleri standardize edin',
    ],
    link: '/solutions/operational-efficiency',
    themeColorClass: 'text-blue-400 border-blue-400 hover:bg-blue-400/10' // Example tertiary color
  },
];

export default function SolutionsShowcaseSection() {
  return (
    <section id="solutions" className="section-padding bg-card">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">ÇÖZÜMLERİMİZ</p>
          <h2 className="section-title">İşletmeniz İçin Akıllı Çözümler</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            AssistoWeb, çeşitli iş ihtiyaçlarına yönelik özelleştirilebilir yapay zeka sanal asistan çözümleri sunar. İşletmenizin potansiyelini keşfedin.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollAnimationWrapper key={solution.title} className="flex" style={{animationDelay: `${index * 0.1}s`}}>
              <SolutionCard {...solution} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
