'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Landmark, HeartPulse, Truck, Factory, LucideIcon } from 'lucide-react';

interface Sector {
  name: string;
  icon: LucideIcon;
  colorClass: string;
}

const sectors: Sector[] = [
  { name: 'E-ticaret', icon: ShoppingCart, colorClass: 'text-sky-500' },
  { name: 'Finans', icon: Landmark, colorClass: 'text-emerald-500' },
  { name: 'Sağlık', icon: HeartPulse, colorClass: 'text-rose-500' },
  { name: 'Lojistik', icon: Truck, colorClass: 'text-amber-500' },
  { name: 'Üretim', icon: Factory, colorClass: 'text-indigo-500' },
];

export default function TargetAudienceSection() {
  return (
    <section id="target-audience" className="section-padding bg-card">
      <div className="container mx-auto max-w-5xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Geniş Bir Müşteri Yelpazesine Hitap Ediyoruz</h2>
          <p className="section-subtitle mx-auto">
            Küçük ve orta ölçekli işletmelerden (KOBİ) büyük kurumsal firmalara kadar geniş bir müşteri yelpazesine hitap ediyoruz. Özellikle aşağıdaki sektörlerde dönüşüme liderlik ediyoruz:
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector) => (
              <Card key={sector.name} className="group text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <div className={`p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors`}>
                    <sector.icon className={`h-10 w-10 ${sector.colorClass} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{sector.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
