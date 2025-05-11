'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  feedback: string;
  rating: number;
  companyLogoUrl?: string;
  companyLogoHint?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmet Ç.',
    role: 'CEO, Örnek E-Ticaret Ltd.',
    avatarUrl: 'https://picsum.photos/seed/ahmetceo/100/100',
    feedback: "Assisto'nun Müşteri Destek Ajanı sayesinde müşteri hizmetleri maliyetlerimizi %40 azalttık ve memnuniyeti %25 artırdık. İnanılmaz bir dönüşüm!",
    rating: 5,
    companyLogoUrl: 'https://picsum.photos/seed/eticaretlogo/150/50',
    companyLogoHint: 'e-ticaret firma logosu',
  },
  {
    id: 2,
    name: 'Elif S.',
    role: 'Operasyon Müdürü, Üretken A.Ş.',
    avatarUrl: 'https://picsum.photos/seed/elifyonetici/100/100',
    feedback: "Assisto'nun İş Akışı Otomasyon Ajanı, tekrarlayan görevlerimizi otomatikleştirerek ekibimizin daha stratejik işlere odaklanmasını sağladı. Verimliliğimizde gözle görülür bir artış var.",
    rating: 5,
    companyLogoUrl: 'https://picsum.photos/seed/uretimlogo/150/50',
    companyLogoHint: 'üretim firma logosu',
  },
  {
    id: 3,
    name: 'Can B.',
    role: 'Finans Direktörü, Yatırım Holding',
    avatarUrl: 'https://picsum.photos/seed/canfinans/100/100',
    feedback: "Finansal Analiz Ajanı, karmaşık veri setlerini hızla analiz ederek karar alma süreçlerimizi iyileştirdi. Raporlama doğruluğumuz ve hızımız arttı.",
    rating: 4,
    companyLogoUrl: 'https://picsum.photos/seed/finanslogo/150/50',
    companyLogoHint: 'finans şirketi logosu',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonialsData[0]);

  useEffect(() => {
    setCurrentTestimonial(testimonialsData[currentIndex]);
  }, [currentIndex]);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  if (!currentTestimonial) {
    return null; 
  }

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimationWrapper className="text-center mb-10 md:mb-12">
          <p className="section-title-sm text-primary">BAŞARI HİKAYELERİ</p>
          <h2 className="section-title">Başarı Hikayelerimizden Bazıları</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card className="p-6 sm:p-8 md:p-10 rounded-xl shadow-xl overflow-hidden bg-card border-border">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                  <Image
                    src={currentTestimonial.avatarUrl}
                    alt={currentTestimonial.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="müşteri portre"
                  />
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  "{currentTestimonial.feedback}"
                </p>
                <h4 className="text-lg font-semibold text-foreground">{currentTestimonial.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{currentTestimonial.role}</p>
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                    />
                  ))}
                </div>
                {currentTestimonial.companyLogoUrl && (
                  <div className="h-10 mt-4">
                    <Image 
                        src={currentTestimonial.companyLogoUrl} 
                        alt={`${currentTestimonial.role.split(', ')[1] || 'Şirket'} Logosu`}
                        width={120} 
                        height={40} 
                        className="object-contain max-h-10 filter grayscale opacity-70"
                        data-ai-hint={currentTestimonial.companyLogoHint}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-8 gap-3">
                <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full border-primary text-primary hover:bg-primary/10">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full border-primary text-primary hover:bg-primary/10">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
