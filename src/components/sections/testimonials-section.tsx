'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
    avatarUrl: 'https://picsum.photos/seed/ahmetceo/150/150', // Increased size
    feedback: "Assisto'nun Müşteri Destek Ajanı sayesinde müşteri hizmetleri maliyetlerimizi %40 azalttık ve memnuniyeti %25 artırdık. İnanılmaz bir dönüşüm!",
    rating: 5,
    companyLogoUrl: 'https://picsum.photos/seed/eticaretlogo/150/50',
    companyLogoHint: 'e-ticaret firma logosu',
  },
  {
    id: 2,
    name: 'Elif S.',
    role: 'Operasyon Müdürü, Üretken A.Ş.',
    avatarUrl: 'https://picsum.photos/seed/elifyonetici/150/150', // Increased size
    feedback: "Assisto'nun İş Akışı Otomasyon Ajanı, tekrarlayan görevlerimizi otomatikleştirerek ekibimizin daha stratejik işlere odaklanmasını sağladı. Verimliliğimizde gözle görülür bir artış var.",
    rating: 5,
    companyLogoUrl: 'https://picsum.photos/seed/uretimlogo/150/50',
    companyLogoHint: 'üretim firma logosu',
  },
  {
    id: 3,
    name: 'Can B.',
    role: 'Finans Direktörü, Yatırım Holding',
    avatarUrl: 'https://picsum.photos/seed/canfinans/150/150', // Increased size
    feedback: "Finansal Analiz Ajanı, karmaşık veri setlerini hızla analiz ederek karar alma süreçlerimizi iyileştirdi. Raporlama doğruluğumuz ve hızımız arttı.",
    rating: 4,
    companyLogoUrl: 'https://picsum.photos/seed/finanslogo/150/50',
    companyLogoHint: 'finans şirketi logosu',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonialsData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setCurrentTestimonial(testimonialsData[currentIndex]);
        setIsTransitioning(false);
      }, 200); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);


  const handlePrev = () => {
     if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
     if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  if (!currentTestimonial) {
    return null; 
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimationWrapper className="text-center mb-10 md:mb-12">
          <p className="section-title-sm text-primary">BAŞARI HİKAYELERİ</p>
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="relative flex flex-col items-center">
            <Card className={cn(
              "w-full max-w-2xl p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl overflow-hidden bg-card border border-border/50 transition-opacity duration-200 ease-in-out",
              isTransitioning ? 'opacity-0' : 'opacity-100'
            )}>
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 shadow-lg">
                    <Image
                      src={currentTestimonial.avatarUrl}
                      alt={currentTestimonial.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="müşteri portre"
                      priority // Load the visible testimonial avatar faster
                      sizes="(max-width: 640px) 112px, 128px" // Specify image sizes for optimization
                    />
                  </div>
                   {currentTestimonial.companyLogoUrl && (
                    <div className="h-8 mb-5"> {/* Adjusted margin */}
                      <Image 
                          src={currentTestimonial.companyLogoUrl} 
                          alt={`${currentTestimonial.role.split(', ')[1] || 'Şirket'} Logosu`}
                          width={100} // Adjusted size
                          height={32} // Adjusted size
                          className="object-contain max-h-8 filter grayscale opacity-60"
                          data-ai-hint={currentTestimonial.companyLogoHint}
                      />
                    </div>
                  )}
                  <p className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed mb-5 max-w-xl">
                    "{currentTestimonial.feedback}"
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                      />
                    ))}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">{currentTestimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                 
                </div>
              </CardContent>
            </Card>
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full max-w-3xl px-2 sm:px-0">
               <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrev} 
                  className="rounded-full border-primary/50 text-primary bg-card/80 backdrop-blur-sm hover:bg-primary/10 w-10 h-10 shadow-md"
                  aria-label="Önceki yorum"
                  disabled={isTransitioning}
                >
                  <ChevronLeft className="w-5 h-5" />
               </Button>
               <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext} 
                  className="rounded-full border-primary/50 text-primary bg-card/80 backdrop-blur-sm hover:bg-primary/10 w-10 h-10 shadow-md"
                  aria-label="Sonraki yorum"
                   disabled={isTransitioning}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
            </div>
             {/* Dots Indicator */}
             <div className="flex justify-center mt-8 space-x-2">
                {testimonialsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (index !== currentIndex && !isTransitioning) {
                             setIsTransitioning(true);
                             setCurrentIndex(index);
                        }
                    }}
                    className={cn(
                    'w-2.5 h-2.5 rounded-full transition-colors duration-200',
                    index === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
                    )}
                    aria-label={`Yorum ${index + 1}'e git`}
                    disabled={isTransitioning}
                />
                ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
