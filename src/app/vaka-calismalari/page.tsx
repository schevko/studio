import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import CaseStudyShowcaseCard from '@/components/cards/case-study-showcase-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { LucideIconNames } from '@/components/cards/case-study-showcase-card'; // Assuming this type will be exported

const caseStudies: Array<Omit<React.ComponentProps<typeof CaseStudyShowcaseCard>, 'icon'> & { iconName: LucideIconNames }> = [
  {
    title: "E-Ticaret Firması: Müşteri Hizmetlerinde Devrim",
    iconName: "ShoppingCart",
    problem: "Yüksek müşteri hizmetleri maliyetleri ve artan müşteri talepleri nedeniyle düşen memnuniyet.",
    solution: "Assisto'nun Müşteri Destek Ajanı, firmanın web sitesine ve sosyal medya kanallarına entegre edilerek 7/24 otomatik yanıt ve kişiselleştirilmiş destek sağladı.",
    results: [
      "Müşteri hizmetleri maliyetlerinde %40 azalma.",
      "Müşteri memnuniyetinde %25 artış.",
      "İnsan temsilcilerinin daha karmaşık ve stratejik sorunlara odaklanabilmesi."
    ],
    customerQuote: "Assisto, müşteri hizmetlerimizi tamamen dönüştürdü. Artık çok daha hızlı ve verimli çalışıyoruz, müşterilerimiz de daha mutlu. Bu, işletmemiz için dönüm noktası oldu!",
    customerName: "[E-ticaret Firmasının Adı]",
    customerRole: "CEO",
    imageUrl: "https://picsum.photos/seed/ecommercecase/600/400",
    imageHint: "e-ticaret müşteri hizmetleri",
    detailsLink: "/vaka-calismalari/e-ticaret-devrimi" // Placeholder link
  },
  {
    title: "Lojistik Şirketi: Tedarik Zinciri Optimizasyonu",
    iconName: "Truck",
    problem: "Karmaşık tedarik zinciri süreçleri, gecikmeler ve yüksek operasyonel maliyetler.",
    solution: "Assisto'nun Tedarik Zinciri Optimizasyon Ajanı, rota planlama, envanter takibi ve teslimat süreçlerini otomatikleştirerek verimliliği artırdı.",
    results: [
      "Teslimat sürelerinde %20 iyileşme.",
      "Operasyonel maliyetlerde %15 düşüş.",
      "Gerçek zamanlı tedarik zinciri görünürlüğü."
    ],
    customerQuote: "Assisto ile tedarik zincirimizi optimize etmek, iş yapış şeklimizi değiştirdi. Artık daha hızlı ve daha verimli operasyonlara sahibiz.",
    customerName: "[Lojistik Şirketinin Adı]",
    customerRole: "Operasyon Direktörü",
    imageUrl: "https://picsum.photos/seed/logisticscase/600/400",
    imageHint: "lojistik optimizasyon",
    detailsLink: "/vaka-calismalari/lojistik-optimizasyonu" // Placeholder link
  },
  {
    title: "Finans Kuruluşu: Finansal Analizde Doğruluk",
    iconName: "Banknote",
    problem: "Manuel finansal analiz süreçlerinin yavaşlığı ve hata payının yüksek olması.",
    solution: "Assisto'nun Finansal Analiz Ajanı, büyük veri setlerini hızla işleyerek doğru ve zamanında raporlar oluşturdu, risk değerlendirmesini iyileştirdi.",
    results: [
      "Raporlama süresinde %50 azalma.",
      "Analiz doğruluğunda %30 artış.",
      "Daha hızlı ve veriye dayalı karar alma."
    ],
    customerQuote: "Finansal analiz süreçlerimizde Assisto sayesinde çığır açtık. Veriye dayalı kararlarımız artık çok daha sağlam.",
    customerName: "[Finans Kuruluşunun Adı]",
    customerRole: "CFO",
    imageUrl: "https://picsum.photos/seed/financecase/600/400",
    imageHint: "finansal analiz",
    detailsLink: "/vaka-calismalari/finansal-analiz" // Placeholder link
  }
];

export default function VakaCalismalariPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Assisto ile Gerçek Başarı Hikayeleri</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Assisto'nun işletmelerin karşılaştığı zorlukları nasıl aştığını, operasyonel verimliliği nasıl artırdığını ve somut sonuçlar elde etmelerine nasıl yardımcı olduğunu görün.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <ScrollAnimationWrapper key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <CaseStudyShowcaseCard {...study} />
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Sıradaki başarı hikayesini birlikte yazalım mı?
          </p>
          <Button asChild size="lg" className="btn-primary-softo rounded-full">
            <Link href="/contact?reason=start_success_story">Kendi Başarı Hikayenizi Yazmak İçin Başlayın</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
