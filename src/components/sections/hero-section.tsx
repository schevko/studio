'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import { Bot, Brain, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-hero 
                 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--secondary))] to-[hsl(var(--background))]
                 px-4 sm:px-6 lg:px-8 py-16 lg:py-0" // py-0 for lg to allow true vertical centering in full screen
    >
      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <ScrollAnimationWrapper animationClassName="fade-in-up">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="inline-flex items-center">AssistoWeb<Bot className="w-10 h-10 sm:w-12 sm:h-12 text-primary ml-2 transform -rotate-12" /></span>
                <br />
                Yapay Zeka Sanal Asistan Çözümleri
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-6" style={{ animationDelay: '0.2s' }}>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-xl mx-auto lg:mx-0">
                İşletmenizin potansiyelini AssistoWeb'in akıllı sanal asistanları ile açığa çıkarın. Verimliliği artırın, maliyetleri düşürün ve müşteri deneyimini zirveye taşıyın.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-8" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-primary-assist shadow-lg transform hover:scale-105">
                  <Link href="/#solutions">
                    <Zap className="mr-2 h-5 w-5" />
                    Çözümleri Keşfedin
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-secondary-assist border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-sm transform hover:scale-105 bg-background/30 backdrop-blur-sm">
                  <Link href="/contact">
                    <Brain className="mr-2 h-5 w-5" />
                    Demo Talep Et
                  </Link>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Image Placeholder */}
          <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-10 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full max-w-2xl mx-auto">
              <Image
                src="https://picsum.photos/seed/aiassistant/800/600"
                alt="Yapay Zeka Sanal Asistan Arayüzü"
                layout="fill"
                objectFit="contain"
                className="rounded-xl shadow-2xl"
                data-ai-hint="ai assistant interface"
                priority
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      {/* Subtle overlay for better text readability if needed */}
      {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}
    </section>
  );
}
