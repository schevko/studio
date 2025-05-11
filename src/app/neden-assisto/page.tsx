import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Settings, Share2, Zap, Cpu, Layers, GitBranch, ShieldCheck, Repeat } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const valuePropositions = [
  {
    icon: Settings,
    title: "Özelleştirilmiş Yapay Zeka Ajanları",
    description: "Her işletmenin kendine özgü ihtiyaçları vardır. Assisto, ajanslarını kurumunuzun özel verileriyle eğiterek size %100 özelleştirilmiş çözümler sunar. RAG (Retrieval-Augmented Generation) teknolojisi sayesinde, ajanlarımız her zaman güncel ve işletmenize özel bilgilere dayalı yanıtlar verir. Bu sayede ajanlarımız, işletme verilerinizi öğrenerek geliştikçe daha iyi performans gösterir."
  },
  {
    icon: Users,
    title: "Geniş Ajan Yelpazesi",
    description: "Rakipler genellikle belirli alanlara odaklanırken, Assisto, 20'den fazla farklı departman ve fonksiyon için özelleştirilmiş ajanlarla tüm iş süreçlerinizi kapsayan entegre çözümler sunar. Sektöre özel eğitilmiş yapay zeka çözümlerimizle, işletmenizin her köşesinde verimlilik sağlayın."
  },
  {
    icon: Share2,
    title: "Kusursuz Entegrasyon Kabiliyeti",
    description: "Assisto, popüler iş uygulamalarıyla (Salesforce, HubSpot, SAP, Oracle vb.) hazır entegrasyonlar sunar. Açık API mimarimiz sayesinde özel entegrasyonlar da kolayca yapılabilir. Ortalama entegrasyon süremiz sadece 1-2 haftadır (rakiplerde 1-3 ay sürebilir), böylece dönüşüme hızla başlayabilirsiniz."
  },
  {
    icon: Zap,
    title: "Benzersiz Ölçeklenebilirlik",
    description: "Assisto'nun modüler yapısı, işletmenizin büyümesiyle birlikte kolayca genişletilebilir. Kullanım ihtiyacınıza göre ayarlanabilen kaynak tahsisi ve ajanların sayısını ve kapasitesini iş büyümenize paralel olarak artırabilme yeteneği sayesinde, hiçbir zaman yetersiz kalmazsınız."
  }
];

const techStack = [
    { name: "Doğal Dil İşleme (NLP)", description: "Müşteri etkileşimlerini anlama ve akıllı yanıtlar üretme." },
    { name: "Makine Öğrenmesi ve Bilgisayarlı Görü", description: "Veri analizi, öngörücü modelleme ve görsel içerik işleme." },
    { name: "Robotik Süreç Otomasyonu (RPA)", description: "Tekrarlayan işleri otomatikleştirme." },
    { name: "Vektör Veritabanı ve RAG Mimarisi", description: "Güvenli ve gerçek zamanlı bilgi erişimiyle halüsinasyon riskini en aza indirme." },
    { name: "Esnek Entegrasyon Katmanı", description: "Hızlı ve güvenli veri transferi için RESTful API'ler ve hazır konnektörler." }
];

export default function NedenAssistoPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Neden Assisto: İşletmenizi Geleceğe Taşıyan Rakipsiz Avantajlar</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Assisto, yapay zeka pazarındaki yoğun rekabette öne çıkan benzersiz değer önermeleri sunarak işletmenizin gerçek potansiyelini ortaya çıkarır. İşte bizi rakiplerimizden ayıran temel özellikler:
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {valuePropositions.map((prop, index) => (
            <ScrollAnimationWrapper key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border bg-card">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <prop.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground mt-1">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper className="mb-16">
          <Card className="shadow-xl bg-card border-primary/20 rounded-xl">
            <CardHeader className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-2">
                 <Layers className="h-10 w-10 text-primary flex-shrink-0" />
                <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">Gücümüzü Son Teknolojiye Borçluyuz</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Assisto platformu, en son yapay zeka teknolojilerini kullanarak çok katmanlı bir mimariye sahiptir:
              </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card className="shadow-xl bg-card border-border rounded-xl">
             <CardHeader className="p-6 md:p-8">
               <div className="flex items-center gap-4 mb-2">
                  <Repeat className="h-10 w-10 text-primary flex-shrink-0" />
                 <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">Sürekli İyileştirme ve Yenilik</CardTitle>
               </div>
             </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0">
              <p className="text-muted-foreground leading-relaxed">
                Çevik geliştirme metodolojimiz (2 haftalık sprint döngüleri) ve otomatik öğrenme süreçlerimiz sayesinde platformumuzu sürekli iyileştiriyor ve güncel tutuyoruz. Her 3 ayda bir yeni özellikler ve iyileştirmeler sunarak en son teknolojiyi size ulaştırıyoruz. Assisto, adaptif öğrenme yetenekleriyle zamanla daha akıllı hale gelir ve işletmenizin değişen ihtiyaçlarına proaktif olarak yanıt verir.
              </p>
              <div className="mt-6 text-center">
                <Button asChild size="lg" className="btn-primary-softo rounded-full">
                  <Link href="/contact?reason=tech_deep_dive">Teknolojimiz Hakkında Daha Fazla Bilgi Alın</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
