'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

// Green Stacks Icon for "Project"
const GreenStacksIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mx-1 w-10 h-10 sm:w-12 sm:h-12">
    <rect width="48" height="48" rx="12" fill="#22C55E"/> {/* bg-green-500 */}
    <path d="M12 31L24 25L36 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 25L24 19L36 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 13V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19V31M36 19V31M24 25V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// Orange Pencil Icon for "Solutions"
const OrangePencilIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mx-1 w-10 h-10 sm:w-12 sm:h-12">
    <rect width="48" height="48" rx="24" fill="#F97316"/> {/* bg-orange-500 */}
    <path d="M29 14L34 19L21 32H16V27L29 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 17L31 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Pink Squiggle
const PinkSquiggle = () => (
  <svg width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[20%] left-[5%] transform -translate-x-1/2 -translate-y-1/2 opacity-70 w-16 h-14 sm:w-20 sm:h-18 z-0">
    <path d="M3.5 66.5C12.8333 53.8333 32.2 24.3 38 4C38.1667 13.6667 29.8 42.4 44 62.5" stroke="#EC4899" strokeOpacity="0.6" strokeWidth="6" strokeLinecap="round"/>
    <path d="M44.5 62C53.8333 49.3333 73.2 19.8 79 0.5C79.1667 10.1667 70.8 38.9 56.5 59" stroke="#EC4899" strokeOpacity="0.6" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

// Orange Spring Squiggle
const OrangeSpringSquiggle = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[20%] right-[5%] transform translate-x-1/2 translate-y-1/2 opacity-70 w-12 h-12 sm:w-16 sm:h-16 z-0">
    <path d="M3 35.5C3 29.4583 6.83333 18.0833 16 12.5C25.1667 6.91667 33.1 9.41667 35.5 17C37.9 24.5833 31.5 31.8333 24 34C16.5 36.1667 10.3333 40.6667 12.5 47.5C14.6667 54.3333 26.1 59.9167 37 60.5C47.9 61.0833 59.8333 55.1667 64.5 45.5" stroke="#F59E0B" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      // Gradient from image: very light pink/lavender to light green/blue
      style={{ background: 'linear-gradient(120deg, #fdf0f7 0%, #edfdf7 100%)' }} 
    >
      <PinkSquiggle />
      <OrangeSpringSquiggle />
      <div className="container mx-auto max-w-4xl z-10 text-center py-16 lg:py-0">
        <ScrollAnimationWrapper animationClassName="fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Proje <GreenStacksIcon /> Yönetimi Yazılım Çözümleri <OrangePencilIcon />
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-10" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="btn-primary-softo shadow-lg transform hover:scale-105 px-8 py-4 text-lg">
            <Link href="/trial">
              30 Günlük Denemeyi Başlatın
            </Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
