import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import AgentCategorySection from '@/components/sections/agent-category-section';
import { Button } from '@/components/ui/button';
import { MessageSquare, Zap, BarChart3, Users, Brain, ShoppingBag, Banknote, Stethoscope, Truck, Factory, Settings, FileText, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const agentCategories = [
  {
    categoryTitle: "Müşteri Deneyimi Ajanları",
    categoryIcon: MessageSquare,
    categoryDescription: "Müşterilerinizle etkileşiminizi yeniden tanımlayın. Müşteri deneyimi ajanlarımız, 7/24 kesintisiz destek sunarak müşteri memnuniyetini en üst seviyeye taşır.",
    agentTypes: [
      { name: "24/7 Müşteri Destek Ajanı", icon: HelpCircle },
      { name: "Sosyal Medya Yönetim Ajanı", icon: Users },
      { name: "İçerik Üretim ve Pazarlama Ajanı", icon: Brain },
      { name: "Satış Destek Ajanı", icon: ShoppingBag },
    ],
    caseStudy: {
      title: "Müşteri Destek Ajanı: Gerçek Bir Başarı Hikayesi",
      features: [
        "Doğal dil işleme ile gerçek zamanlı müşteri sorularını yanıtlama.",
        "Müşteri verilerini analiz ederek kişiselleştirilmiş öneriler sunma.",
        "Çok dilli destek (15+ dil desteği).",
        "Karmaşık sorunları otomatik olarak insan temsilcisine yönlendirme.",
      ],
      example: "Bir e-ticaret firması, Assisto'nun müşteri destek ajanını entegre ettikten sonra müşteri hizmetleri maliyetlerini %40 azaltırken, müşteri memnuniyetini %25 artırdığını raporladı."
    }
  },
  {
    categoryTitle: "Operasyonel Verimlilik Ajanları",
    categoryIcon: Zap,
    categoryDescription: "Operasyonel ajanlarımız, tekrarlayan görevleri otomatikleştirerek ve süreçlerinizi optimize ederek işletmenizin daha hızlı, daha akıllı ve daha verimli çalışmasını sağlar.",
    agentTypes: [
      { name: "Tedarik Zinciri Optimizasyon Ajanı", icon: Truck },
      { name: "Envanter Yönetim Ajanı", icon: Factory },
      { name: "Kalite Kontrol Ajanı", icon: ShieldCheck },
      { name: "İş Akışı Otomasyon Ajanı", icon: Settings },
    ]
  },
  {
    categoryTitle: "Stratejik Analiz Ajanları",
    categoryIcon: BarChart3,
    categoryDescription: "Stratejik analiz ajanlarımızla, büyük veri setlerini hızla işleyerek pazar eğilimlerini, rekabet koşullarını ve finansal performansınızı derinlemesine anlayın.",
    agentTypes: [
      { name: "Finansal Analiz Ajanı", icon: Banknote },
      { name: "Pazar Araştırma Ajanı", icon: Brain },
      { name: "Rekabet İstihbarat Ajanı", icon: Users },
      { name: "Risk Değerlendirme Ajanı", icon: ShieldCheck },
    ]
  },
  {
    categoryTitle: "Destek Fonksiyon Ajanları",
    categoryIcon: Users,
    categoryDescription: "Destek fonksiyon ajanlarımız, İK'dan BT'ye, yasal uyumluluktan dokümantasyona kadar tüm dahili süreçlerinizi kolaylaştırır.",
    agentTypes: [
      { name: "İK ve Yetenek Ajanı", icon: Users },
      { name: "Yasal Uyumluluk Ajanı", icon: ShieldCheck },
      { name: "Dokümantasyon ve Bilgi Yönetimi Ajanı", icon: FileText },
      { name: "BT Destek Ajanı", icon: Settings },
    ]
  }
];

export default function SolutionsPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Assisto Ajan Ekosistemi</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            İşletmenizin Her İhtiyacına Özel Yapay Zeka Çözümleri. Assisto platformunda sunulan yapay zeka ajanları, iş süreçlerinizin her aşamasında size destek olmak üzere tasarlanmıştır. Her biri, belirli bir departman veya fonksiyon için optimize edilmiştir.
          </p>
        </ScrollAnimationWrapper>

        <div className="space-y-12 md:space-y-16">
          {agentCategories.map((category, index) => (
            <ScrollAnimationWrapper key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <AgentCategorySection {...category} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Size Özel Çözüm İçin Bize Ulaşın</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            İşletmenizin benzersiz ihtiyaçlarına en uygun yapay zeka ajanlarını ve stratejilerini belirlemek için uzmanlarımızla görüşün.
          </p>
          <Button asChild size="lg" className="btn-primary-softo rounded-full">
            <Link href="/contact?reason=custom_solution_request">Uzmanla Görüşün</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
