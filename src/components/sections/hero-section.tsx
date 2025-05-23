'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 section-padding aurora-background" // Added aurora-background class
    >
       {/* Removed static background image and gradient div */}

      <div className="container mx-auto max-w-5xl z-10 text-center">
        <ScrollAnimationWrapper animationClassName="animate-fadeInUp"> {/* Use fadeInUp animation */}
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            İşletmenizin Geleceği Artık Sanal: <span className="text-primary">Assisto</span> ile Yapay Zeka Destekli Dönüşüm!
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationClassName="animate-fadeInUp" className="mt-6" style={{ animationDelay: '0.1s' }}> {/* Use fadeInUp animation */}
          <p className="section-subtitle max-w-3xl mx-auto text-lg sm:text-xl">
            Assisto, yapay zeka tabanlı sanal çalışanlar sunan yenilikçi SaaS platformuyla operasyonel verimliliğinizi artırır, maliyetlerinizi optimize eder ve rekabet avantajı sağlar.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationClassName="animate-fadeInUp" className="mt-10" style={{ animationDelay: '0.2s' }}> {/* Use fadeInUp animation */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="btn-primary-softo shadow-lg transform hover:scale-105 px-8 py-4 text-lg rounded-full">
              <Link href="/solutions"> 
                Sanal Çalışanlarınızı Keşfedin
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-secondary-softo shadow-md transform hover:scale-105 px-8 py-4 text-lg rounded-full border-2">
              <Link href="/contact?reason=demo_request">
                Ücretsiz Demo Talep Et
              </Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
