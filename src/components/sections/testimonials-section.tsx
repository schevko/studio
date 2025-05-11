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
  companyLogoHint?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Ayşe Y.',
    role: 'Proje Yöneticisi, TeknoGelişim Ltd.',
    avatarUrl: 'https://picsum.photos/seed/avatarPM1/100/100',
    feedback: "Assisto, proje yönetimi süreçlerimizi inanılmaz derecede kolaylaştırdı. Görev takibi ve ekip işbirliği özellikleri sayesinde projelerimizi zamanında ve bütçe dahilinde tamamlıyoruz.",
    rating: 5,
    companyLogoHint: 'teknoloji firması logo',
  },
  {
    id: 2,
    name: 'Mehmet K.',
    role: 'CEO, Kreatif Çözümler A.Ş.',
    avatarUrl: 'https://picsum.photos/seed/avatarCEO2/100/100',
    feedback: "Birçok proje yönetim aracı denedik ancak Assisto'nun kullanıcı dostu arayüzü ve esnekliği bizi gerçekten etkiledi. Raporlama özellikleri de harika.",
    rating: 5,
    companyLogoHint: 'ajans logo',
  },
  {
    id: 3,
    name: 'Zeynep A.',
    role: 'Startup Kurucusu',
    avatarUrl: 'https://picsum.photos/seed/avatarStartup3/100/100',
    feedback: "Bir startup olarak, kaynaklarımızı verimli kullanmak bizim için çok önemli. Assisto, projelerimizi düzenli tutmamıza ve ekibimizle senkronize kalmamıza yardımcı oluyor.",
    rating: 4,
    companyLogoHint: 'startup logo',
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
    <section id="testimonials" className="section-padding bg-card/50"> {/* bg-card is white, so card/50 is still white. Changed to bg-secondary/20 for slight tint */}
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimationWrapper className="text-center mb-10">
          <p className="section-title-sm text-primary">MÜŞTERİ YORUMLARI</p>
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
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
                    data-ai-hint="kullanıcı portre"
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
              </div>
              <div className="flex justify-center mt-6 gap-3">
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
