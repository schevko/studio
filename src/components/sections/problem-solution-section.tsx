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
    <section className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Part 1: Problems */}
        <ScrollAnimationWrapper className="w-full mb-16 md:mb-20">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="section-title">
              Yapay Zeka Teknolojilerini Benimsemek Neden Zor?
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Birçok işletme, dijital dönüşüm süreçlerini hızlandırmak ve yapay zeka teknolojilerinden faydalanmak istese de, genellikle aşağıdaki temel engellerle karşılaşır:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animationClassName="animate-fadeInUp" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-lg">
                      <problem.icon className="h-7 w-7 text-destructive" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{problem.title}</h4>
                      <p className="text-sm text-muted-foreground">{problem.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Part 2: Solution */}
        <ScrollAnimationWrapper 
          className="w-full"
          animationClassName="animate-fadeInUp" 
          style={{ animationDelay: '0.3s' }} // Ensure this animates after problems
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
            <Card className="relative bg-card text-card-foreground shadow-2xl rounded-2xl overflow-hidden border border-primary/20">
              <CardHeader className="p-8">
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5">
                  <div className="flex-shrink-0 p-3.5 bg-primary/10 rounded-full">
                    <Lightbulb className="h-9 w-9 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-3xl font-bold text-primary leading-tight mb-2">
                      Assisto Farkı: Sorunlarınıza Entegre ve Ölçeklenebilir Çözümler
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-2">
                <p className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg text-center md:text-left">
                  Assisto, bu boşluğu doldurmak için tasarlandı. İşletmelerin yapay zeka teknolojilerini kolayca, uygun maliyetle ve minimum teknik bilgiyle benimsemesini sağlayarak, dijital dönüşümün önündeki tüm engelleri kaldırıyoruz.
                </p>
                <ul className="space-y-5">
                  {solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start text-base">
                      <CheckCircle className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" />
                      <span className="text-foreground font-medium">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
