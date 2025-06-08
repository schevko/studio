import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import SolutionsRenderer from '@/components/solutions-renderer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const agentCategories = [
  {
    categoryTitle: "Müşteri Deneyimi Ajanları",
    categoryIcon: "Heart",
    categoryDescription: "Müşteri sadakatini ve memnuniyetini artırmak için tasarlanmış akıllı çözümler. Müşterilerinizle her temas noktasında kusursuz bir deneyim sunun.",
    agentTypes: [
      { name: "7/24 Akıllı Müşteri Destek Ajanı", icon: "HelpCircle" },
      { name: "Proaktif Satış ve Müşteri İlişkileri Ajanı", icon: "ShoppingBag" },
      { name: "Sosyal Medya ve Topluluk Yönetim Ajanı", icon: "Users" },
      { name: "Müşteri Geri Bildirim Analiz Ajanı", icon: "Smile" },
      { name: "Kişiselleştirilmiş Pazarlama ve E-posta Ajanı", icon: "Mail" },
      { name: "Randevu ve Rezervasyon Planlama Ajanı", icon: "Calendar" },
    ],
    caseStudy: {
      title: "E-Ticaret Devi, Müşteri Memnuniyetini Nasıl %40 Artırdı?",
      features: [
        "Sipariş takibi, iade ve kargo durumu sorgularını %95 oranında otomatize etme.",
        "Müşteri davranışlarını analiz ederek kişiselleştirilmiş ürün önerileri sunma.",
        "7/24 anında yanıt ile müşteri bekleme sürelerini sıfıra indirme.",
        "Geri bildirimleri duygu analizi ile sınıflandırıp ilgili departmanlara anında raporlama.",
      ],
      example: "Global bir e-ticaret markası, Assisto'nun Müşteri Deneyimi Ajanlarını entegre ederek destek maliyetlerini %50 düşürdü ve müşteri memnuniyetini (NPS) 35'ten 55'e çıkardı."
    }
  },
  {
    categoryTitle: "Operasyonel Verimlilik Ajanları",
    categoryIcon: "Zap",
    categoryDescription: "İşletmenizin omurgasını oluşturan operasyonel süreçleri otomatikleştirin. Zaman ve maliyetten tasarruf ederek kaynaklarınızı stratejik hedeflere yönlendirin.",
    agentTypes: [
      { name: "Akıllı Fatura ve Gider İşleme Ajanı", icon: "FileText" },
      { name: "Tedarik Zinciri ve Lojistik Optimizasyon Ajanı", icon: "Truck" },
      { name: "İnsan Kaynakları (İK) Süreç Otomasyon Ajanı", icon: "Users" },
      { name: "Üretim ve Envanter Yönetim Ajanı", icon: "Factory" },
      { name: "Kalite Kontrol ve Standart Uyumluluk Ajanı", icon: "ShieldCheck" },
      { name: "İş Akışı ve Görev Otomasyon Ajanı", icon: "Settings" },
    ],
    caseStudy: {
      title: "Üretim Şirketi Operasyonel Maliyetleri Nasıl %25 Azalttı?",
       features: [
        "Günlük 5.000'den fazla faturanın otomatik olarak işlenmesi ve muhasebe sistemine kaydedilmesi.",
        "Tedarikçi siparişlerinin ve teslimat süreçlerinin gerçek zamanlı takibi ve optimizasyonu.",
        "Yeni işe alım ve oryantasyon süreçlerinin %80 oranında otomatikleştirilmesi.",
      ],
      example: "Orta ölçekli bir üretim firması, Operasyonel Verimlilik Ajanları sayesinde manuel veri girişini ortadan kaldırarak yıllık 20.000 adam/saat tasarruf sağladı ve operasyonel verimliliğini %25 artırdı."
    }
  },
  {
    categoryTitle: "Stratejik Analiz ve Karar Destek Ajanları",
    categoryIcon: "BarChart3",
    categoryDescription: "Veriye dayalı kararlar alarak rekabette bir adım öne geçin. Büyük veri setlerinden anlamlı içgörüler üreten stratejik ajanlarla tanışın.",
    agentTypes: [
      { name: "Finansal Raporlama ve Analiz Ajanı", icon: "Banknote" },
      { name: "Pazar Araştırması ve Rakip Analizi Ajanı", icon: "Search" },
      { name: "Yatırım ve Portföy Analiz Ajanı", icon: "TrendingUp" },
      { name: "Risk Değerlendirme ve Tahmin Ajanı", icon: "Activity" },
      { name: "Hukuki ve Yasal Metin Analiz Ajanı", icon: "Gavel" },
      { name: "Veri Görselleştirme ve Raporlama Ajanı", icon: "PieChart" },
    ],
    caseStudy: {}
  },
  {
    categoryTitle: "Yazılım Geliştirme ve IT Operasyonları",
    categoryIcon: "Code",
    categoryDescription: "Teknoloji ekiplerinizin verimliliğini artırın. Kod yazımından test ve dağıtım süreçlerine kadar tüm IT operasyonlarınızı hızlandırın.",
    agentTypes: [
      { name: "Kod Geliştirme ve Hata Ayıklama Asistanı", icon: "Terminal" },
      { name: "Otomatik Test Senaryosu Üretme Ajanı", icon: "Beaker" },
      { name: "DevOps ve CI/CD Süreç Yönetim Ajanı", icon: "GitBranch" },
      { name: "Siber Güvenlik ve Tehdit Analiz Ajanı", icon: "Shield" },
      { name: "BT Destek (IT Helpdesk) ve Olay Yönetim Ajanı", icon: "Wrench" },
      { name: "Veritabanı Yönetim ve Optimizasyon Ajanı", icon: "Database" },
    ],
    caseStudy: {
      title: "Teknoloji Start-up'ı Geliştirme Süresini Nasıl Yarıya İndirdi?",
      features: [
        "Tekrarlayan kod bloklarını (boilerplate) otomatik oluşturarak geliştirme süresini %30 kısaltma.",
        "Uygulama loglarını 7/24 analiz ederek olası hataları ve güvenlik zafiyetlerini proaktif olarak tespit etme.",
        "Yeni bir özellik için gereken test senaryolarını %90 oranında otomatik oluşturma.",
      ],
      example: "Hızla büyüyen bir SaaS şirketi, Yazılım Geliştirme Ajanları'nı kullanarak yeni özellik çıkarma (time-to-market) süresini 8 haftadan 4 haftaya indirdi ve kritik hata sayısını %60 azalttı."
    }
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

        <SolutionsRenderer agentCategories={agentCategories} />

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
