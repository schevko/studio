                            'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Lightbulb, Zap, Briefcase, TrendingUp, Settings } from 'lucide-react';

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

export default function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Changed items-center to items-start */}
          <ScrollAnimationWrapper>
            <div className="mb-10 lg:mb-0">
              <h2 className="section-title mb-4 text-foreground">Yapay Zeka Teknolojilerini Benimsemek Neden Zor?</h2>
              <p className="section-subtitle mb-8 text-muted-foreground">
                Birçok işletme, dijital dönüşüm süreçlerini hızlandırmak ve yapay zeka teknolojilerinden faydalanmak istese de, genellikle aşağıdaki temel engellerle karşılaşır:
              </p>
              <div className="space-y-4"> {/* Reduced space for tighter look */}
                {problems.map((problem, index) => (
                  <ScrollAnimationWrapper key={index} animationClassName="animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}> {/* Faster animation delay */}
                    <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:border-primary/40"> {/* Subtle hover effects */}
                      <div className="p-2.5 bg-destructive/10 rounded-md"> {/* Changed icon background to destructive/10 for warning feel */}
                        <problem.icon className="h-6 w-6 text-destructive" /> {/* Changed icon color to destructive */}
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-foreground">{problem.title}</h4> {/* Smaller title */}
                        <p className="text-xs text-muted-foreground mt-0.5">{problem.description}</p> {/* Smaller description */}
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationClassName="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
              <Card className="relative bg-card text-card-foreground shadow-xl rounded-xl overflow-hidden border border-border">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-bold text-primary">Assisto Farkı: Sorunlarınıza Entegre ve Ölçeklenebilir Çözümler</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    Assisto, bu boşluğu doldurmak için tasarlandı. İşletmelerin yapay zeka teknolojilerini kolayca, uygun maliyetle ve minimum teknik bilgiyle benimsemesini sağlayarak, dijital dönüşümün önündeki tüm engelleri kaldırıyoruz.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Kolay entegrasyon ve hızlı başlangıç.",
                      "Öngörülebilir ve uygun maliyetli abonelik modelleri.",
                      "Teknik uzmanlık gerektirmeyen kullanıcı dostu arayüz.",
                      "İşletmenizin büyümesiyle ölçeklenebilen esnek çözümler."
                    ].map((solution, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
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
