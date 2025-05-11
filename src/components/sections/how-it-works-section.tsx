'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { UserPlus, Settings2, Rocket, FilePlus } from 'lucide-react'; 

interface HowItWorksStepProps {
  stepNumber: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  stepNumber,
  icon: Icon,
  title,
  description,
  iconBgColor = 'bg-primary/10',
  iconTextColor = 'text-primary',
}) => {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full rounded-xl bg-card border-border">
      <CardHeader className="items-center">
        <div className={`mb-4 p-4 rounded-full ${iconBgColor} inline-flex`}>
          <Icon className={`w-10 h-10 ${iconTextColor}`} />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const steps = [
  {
    stepNumber: '01',
    icon: UserPlus,
    title: 'Hesap Oluşturun',
    description: 'Birkaç dakika içinde kaydolun ve Softo çalışma alanınızı kurun. 30 günlük deneme için kredi kartı gerekmez.',
    iconBgColor: 'bg-accent/10', 
    iconTextColor: 'text-accent',
  },
  {
    stepNumber: '02',
    icon: FilePlus, // Changed to FilePlus for creating projects
    title: 'Projenizi Oluşturun',
    description: 'İlk projenizi oluşturun, görevleri tanımlayın, ekip üyelerini davet edin ve takviminizi ayarlayın.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
  {
    stepNumber: '03',
    icon: Rocket,
    title: 'Verimliliği Artırın',
    description: 'Softo ile projelerinizi yönetin, ekibinizle işbirliği yapın ve hedeflerinize daha hızlı ulaşın.',
    iconBgColor: 'bg-accent/10',
    iconTextColor: 'text-accent',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">SÜRECİMİZ</p>
          <h2 className="section-title">Softo Nasıl Çalışır?</h2>
          <p className="section-subtitle mx-auto">
            Softo ile üç basit adımda başlayın. Proje yönetiminizi kolaylaştırın ve üretkenliğinizi artırın.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollAnimationWrapper key={step.stepNumber} style={{animationDelay: `${index * 0.1}s`}}>
              <HowItWorksStep {...step} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
