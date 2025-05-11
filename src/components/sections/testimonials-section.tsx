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
    role: 'Pazarlama Müdürü, TeknoÇözüm A.Ş.',
    avatarUrl: 'https://picsum.photos/seed/avatarTR1/100/100',
    feedback: "AssistoWeb, müşteri hizmetleri süreçlerimizi tamamen değiştirdi. Yapay zeka asistanları sayesinde yanıt sürelerimiz kısaldı ve müşteri memnuniyetimiz arttı. Kesinlikle tavsiye ederim!",
    rating: 5,
    companyLogoHint: 'teknoloji şirketi logo',
  },
  {
    id: 2,
    name: 'Mehmet K.',
    role: 'CEO, Yaratıcı Fikirler Ltd.',
    avatarUrl: 'https://picsum.photos/seed/avatarTR2/100/100',
    feedback: "Birçok otomasyon aracı denedik ancak AssistoWeb'in esnekliği ve kapsamlı özellikleri bizi etkiledi. Özellikle satış sonrası destekleri harika.",
    rating: 5,
    companyLogoHint: 'yaratıcı ajans logo',
  },
  {
    id: 3,
    name: 'Zeynep A.',
    role: 'E-ticaret Girişimcisi',
    avatarUrl: 'https://picsum.photos/seed/avatarTR3/100/100',
    feedback: "Bir e-ticaret girişimi olarak, operasyonel yükümüzü azaltacak bir çözüme ihtiyacımız vardı. AssistoWeb'in sanal asistanları tam da aradığımız şeydi. Fiyatlandırması da çok uygun.",
    rating: 4,
    companyLogoHint: 'e-ticaret logo',
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
    return null; // Or a loading state
  }

  return (
    <section id="testimonials" className="section-padding bg-card/50">
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
                    data-ai-hint="kişi portre"
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
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} // Adjusted for dark theme
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
