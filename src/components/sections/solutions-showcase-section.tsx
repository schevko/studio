'use client';
import SolutionCard from '@/components/cards/solution-card';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Briefcase, Users, Lightbulb, ShieldCheck } from 'lucide-react'; // Project management related icons

const solutions = [
  {
    icon: Briefcase,
    title: 'Proje Planlama ve Takip',
    description: 'Projelerinizi baştan sona planlayın, görevleri atayın, zaman çizelgeleri oluşturun ve ilerlemeyi etkin bir şekilde izleyin.',
    benefits: [
      'Net proje yol haritaları oluşturun',
      'Kaynakları verimli kullanın',
      'Riskleri erken tespit edin',
      'Teslim tarihlerine uyun',
    ],
    link: '/solutions/project-planning',
    themeColorClass: 'text-primary border-primary hover:bg-primary/10'
  },
  {
    icon: Users,
    title: 'Ekip İşbirliği ve İletişim',
    description: 'Ekip üyeleri arasında sorunsuz iletişim sağlayın, dosya paylaşımını kolaylaştırın ve ortak çalışma alanları oluşturun.',
    benefits: [
      'Ekip içi şeffaflığı artırın',
      'Karar alma süreçlerini hızlandırın',
      'Bilgi akışını merkezileştirin',
      'Uzaktan çalışmayı destekleyin',
    ],
    link: '/solutions/team-collaboration',
    themeColorClass: 'text-green-500 border-green-500 hover:bg-green-500/10' // Example secondary color
  },
  {
    icon: Lightbulb, // Changed from Settings
    title: 'Kaynak ve Görev Yönetimi',
    description: 'Görevleri önceliklendirin, kaynakları atayın, iş yükünü dengeleyin ve ekip üyelerinin performansını izleyin.',
    benefits: [
      'İş yükünü optimize edin',
      'Verimliliği en üst düzeye çıkarın',
      'Görev darboğazlarını belirleyin',
      'Ekip motivasyonunu artırın',
    ],
    link: '/solutions/task-management',
    themeColorClass: 'text-blue-500 border-blue-500 hover:bg-blue-500/10' // Example tertiary color
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
            Softo, çeşitli proje yönetimi ihtiyaçlarına yönelik özelleştirilebilir çözümler sunar. İşletmenizin potansiyelini keşfedin.
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
