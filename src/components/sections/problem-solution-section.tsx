                            'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Briefcase, TrendingUp, Settings, Zap } from 'lucide-react';

const problems = [
  {
    title: 'Teknik Uzmanlık Eksikliği',
    description: 'Gerekli bilgi ve kaynaklara sahip olmama.',
    icon: Briefcase,
  },
  {
    title: 'Yüksek Başlangıç Maliyetleri',
    description: 'Büyük yatırımlar gerektiren ilk kurulum ve personel giderleri.',
    icon: TrendingUp,
  },
  {
    title: 'Entegrasyon Zorlukları',
    description: 'Mevcut sistemlerle uyum sağlama sorunları.',
    icon: Settings,
  },
  {
    title: 'Ölçeklenebilirlik Endişeleri',
    description: 'Çözümlerin işletmenin büyümesiyle birlikte genişleyememesi.',
    icon: Zap,
  },
];

const solutions = [
  "Kolay entegrasyon ve hızlı başlangıç.",
  "Öngörülebilir ve uygun maliyetli abonelik modelleri.",
  "Teknik uzmanlık gerektirmeyen kullanıcı dostu arayüz.",
  "İşletmenizin büyümesiyle ölçeklenebilen esnek çözümler."
];

export default function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Problems */}
          <ScrollAnimationWrapper className="w-full">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Yapay Zeka Teknolojilerini Benimsemek Neden Zor?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg mb-8">
                Birçok işletme, dijital dönüşüm süreçlerini hızlandırmak ve yapay zeka teknolojilerinden faydalanmak istese de, genellikle aşağıdaki temel engellerle karşılaşır:
              </p>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <ScrollAnimationWrapper 
                    key={index} 
                    animationClassName="animate-fadeInUp" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-lg">
                          <problem.icon className="h-7 w-7 text-destructive" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{problem.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{problem.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Column: Solution */}
          <ScrollAnimationWrapper 
            className="w-full lg:mt-0"  // Ensure it aligns nicely, no extra top margin on desktop
            animationClassName="animate-fadeInUp" 
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
              <Card className="relative bg-card text-card-foreground shadow-2xl rounded-2xl overflow-hidden border border-border/20">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3.5 bg-primary/10 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary leading-tight">
                      Assisto Farkı: Sorunlarınıza Entegre ve Ölçeklenebilir Çözümler
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    Assisto, bu boşluğu doldurmak için tasarlandı. İşletmelerin yapay zeka teknolojilerini kolayca, uygun maliyetle ve minimum teknik bilgiyle benimsemesini sağlayarak, dijital dönüşümün önündeki tüm engelleri kaldırıyoruz.
                  </p>
                  <ul className="space-y-4">
                    {solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start text-base">
                        <CheckCircle className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" />
                        <span className="text-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
