'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const problems = [
  {
    title: 'Teknik Uzmanlık Eksikliği',
    description: 'Gerekli bilgi ve kaynaklara sahip olmama.',
    icon: AlertTriangle,
  },
  {
    title: 'Yüksek Başlangıç Maliyetleri',
    description: 'Büyük yatırımlar gerektiren ilk kurulum ve personel giderleri.',
    icon: AlertTriangle,
  },
  {
    title: 'Entegrasyon Zorlukları',
    description: 'Mevcut sistemlerle uyum sağlama sorunları.',
    icon: AlertTriangle,
  },
  {
    title: 'Ölçeklenebilirlik Endişeleri',
    description: 'Çözümlerin işletmenin büyümesiyle birlikte genişleyememesi.',
    icon: AlertTriangle,
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper>
            <div className="mb-10">
              <h2 className="section-title mb-4">Yapay Zeka Teknolojilerini Benimsemek Neden Zor?</h2>
              <p className="section-subtitle mb-6">
                Birçok işletme, dijital dönüşüm süreçlerini hızlandırmak ve yapay zeka teknolojilerinden faydalanmak istese de, genellikle aşağıdaki temel engellerle karşılaşır:
              </p>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border shadow-sm">
                    <problem.icon className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{problem.title}</h4>
                      <p className="text-sm text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <Card className="bg-card shadow-xl border-primary/30 p-6 rounded-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-primary">Assisto Farkı: Sorunlarınıza Entegre ve Ölçeklenebilir Çözümler</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Assisto, bu boşluğu doldurmak için tasarlandı. İşletmelerin yapay zeka teknolojilerini kolayca, uygun maliyetle ve minimum teknik bilgiyle benimsemesini sağlayarak, dijital dönüşümün önündeki tüm engelleri kaldırıyoruz.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-foreground">Kolay entegrasyon ve hızlı başlangıç.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-foreground">Öngörülebilir ve uygun maliyetli abonelik modelleri.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-foreground">Teknik uzmanlık gerektirmeyen kullanıcı dostu arayüz.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-foreground">İşletmenizin büyümesiyle ölçeklenebilen esnek çözümler.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
