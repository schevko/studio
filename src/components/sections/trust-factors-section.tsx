'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckBadgeIcon, RocketLaunchIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline'; // Using Heroicons for variety
import { Zap, Users, ShieldCheck, Percent, Award, FileText } from 'lucide-react';


const trustFactors = [
  {
    icon: Zap, // Represents speed/completion
    title: 'Beta Sürümü Tamamlandı',
    description: '5 temel ajan başarıyla geliştirildi ve test edildi.',
    value: '',
  },
  {
    icon: Users,
    title: 'Pilot Müşteri Çalışmaları',
    description: '10 pilot müşteri ile aktif çalışmalar başlatıldı.',
    value: '',
  },
  {
    icon: Percent, // Represents percentage/satisfaction
    title: 'Yüksek Memnuniyet & Verimlilik',
    description: '%90 müşteri memnuniyeti ve %40 verimlilik artışı raporlandı.',
    value: '',
  },
  {
    icon: FileText, // Represents documents/patents
    title: 'Fikri Mülkiyet Güvencesi',
    description: '3 patent başvurusu ile yenilikçi çözümlerimiz koruma altında.',
    value: '',
  },
];

export default function TrustFactorsSection() {
  return (
    <section id="trust-factors" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
           <p className="section-title-sm text-primary">BAŞARIMIZIN TEMELLERİ</p>
          <h2 className="section-title">Assisto ile İlk Adımlar ve Güven Faktörleri</h2>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <ScrollAnimationWrapper key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="text-center h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border hover:border-primary/30">
                <CardHeader className="items-center pb-3">
                  <div className="p-4 bg-primary/10 rounded-full mb-3 inline-flex">
                    <factor.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                  {factor.value && <p className="text-3xl font-bold text-primary mt-2">{factor.value}</p>}
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
