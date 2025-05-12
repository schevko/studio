'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, Landmark, HeartPulse, Truck, Factory, LucideIcon,
  Cpu, BookOpen, Plane, HomeIcon, Film, Zap, Leaf, Scale, Briefcase, Shield, Store
} from 'lucide-react';

interface Sector {
  name: string;
  icon: LucideIcon;
  colorClass: string; // Retained for potential future use, but icons will be primary color
}

const allSectors: Sector[] = [
  { name: 'E-ticaret', icon: ShoppingCart, colorClass: 'text-primary' },
  { name: 'Finans', icon: Landmark, colorClass: 'text-primary' },
  { name: 'Sağlık', icon: HeartPulse, colorClass: 'text-primary' },
  { name: 'Lojistik', icon: Truck, colorClass: 'text-primary' },
  { name: 'Üretim', icon: Factory, colorClass: 'text-primary' },
  { name: 'Teknoloji', icon: Cpu, colorClass: 'text-primary' },
  { name: 'Eğitim', icon: BookOpen, colorClass: 'text-primary' },
  { name: 'Turizm', icon: Plane, colorClass: 'text-primary' },
  { name: 'Gayrimenkul', icon: HomeIcon, colorClass: 'text-primary' },
  { name: 'Medya', icon: Film, colorClass: 'text-primary' },
  { name: 'Enerji', icon: Zap, colorClass: 'text-primary' },
  { name: 'Tarım', icon: Leaf, colorClass: 'text-primary' },
  { name: 'Hukuk', icon: Scale, colorClass: 'text-primary' },
  { name: 'Danışmanlık', icon: Briefcase, colorClass: 'text-primary' },
  { name: 'Kamu', icon: Shield, colorClass: 'text-primary' },
  { name: 'Perakende', icon: Store, colorClass: 'text-primary' },
];

const topRowSectors = allSectors.slice(0, 8); // E-ticaret, Finans, Sağlık, Lojistik, Üretim, Teknoloji, Eğitim, Turizm
const bottomRowSectors = allSectors.slice(8); // Gayrimenkul, Medya, Enerji, Tarım, Hukuk, Danışmanlık, Kamu, Perakende

const SectorCard = ({ sector }: { sector: Sector }) => (
  <Card className="group text-center p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 transform hover:-translate-y-1 min-w-[180px] sm:min-w-[220px] bg-card">
    <CardContent className="flex flex-col items-center justify-center p-0">
      <div className={`p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors`}>
        <sector.icon className={`h-8 w-8 ${sector.colorClass} group-hover:scale-110 transition-transform`} />
      </div>
      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{sector.name}</h3>
    </CardContent>
  </Card>
);

export default function TargetAudienceSection() {
  return (
    <section id="target-audience" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Geniş Bir Müşteri Yelpazesine Hitap Ediyoruz</h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Küçük ve orta ölçekli işletmelerden (KOBİ) büyük kurumsal firmalara kadar geniş bir müşteri yelpazesine hitap ediyoruz. Özellikle aşağıdaki ve daha birçok sektörde dönüşüme liderlik ediyoruz:
          </p>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {/* Top Row - Scrolls Right to Left */}
          <div className="overflow-hidden py-4 group">
            <div className="flex w-max animate-marquee-to-left group-hover:pause-animation">
              {[...topRowSectors, ...topRowSectors].map((sector, index) => (
                <div key={`top-${sector.name}-${index}`} className="px-3">
                  <SectorCard sector={sector} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolls Left to Right */}
          <div className="overflow-hidden py-4 group">
            <div className="flex w-max animate-marquee-to-right group-hover:pause-animation">
              {[...bottomRowSectors, ...bottomRowSectors].map((sector, index) => (
                <div key={`bottom-${sector.name}-${index}`} className="px-3">
                  <SectorCard sector={sector} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
