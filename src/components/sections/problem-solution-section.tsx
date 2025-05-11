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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollAnimationWrapper>
            <div className="mb-10 lg:mb-0">
              <h2 className="section-title mb-4">Yapay Zeka Teknolojilerini Benimsemek Neden Zor?</h2>
              <p className="section-subtitle mb-6">
                Birçok işletme, dijital dönüşüm süreçlerini hızlandırmak ve yapay zeka teknolojilerinden faydalanmak istese de, genellikle aşağıdaki temel engellerle karşılaşır:
              </p>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow">
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
            <Card className="bg-card shadow-xl border-2 border-primary rounded-xl">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4"> 
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full"> 
                    <Lightbulb className="h-8 w-8 text-primary" /> 
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-primary">Assisto Farkı: Sorunlarınıza Entegre ve Ölçeklenebilir Çözümler</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-4"> 
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Assisto, bu boşluğu doldurmak için tasarlandı. İşletmelerin yapay zeka teknolojilerini kolayca, uygun maliyetle ve minimum teknik bilgiyle benimsemesini sağlayarak, dijital dönüşümün önündeki tüm engelleri kaldırıyoruz.
                </p>
                <ul className="space-y-3">
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
