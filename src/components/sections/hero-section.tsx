'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

interface StarProps {
  // No props needed for now, randomness handled internally
}

const Star: React.FC<StarProps> = () => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [starType, setStarType] = useState<string>('');

  useEffect(() => {
    const type = Math.floor(Math.random() * 3) + 1;
    setStarType(`star-type${type}`);

    // Randomize delays for both twinkle and movement animations
    // Twinkle delay: 0-10s, Movement delay: 0-120s (example values)
    const twinkleDelay = Math.random() * 10;
    const moveDelay = Math.random() * 120;


    setStyle({
      left: `${Math.random() * 100}%`,
      // Start stars from below the viewport (100%) up to one viewport height further down (200%)
      // This ensures they appear to fly in from the bottom over time
      top: `${Math.random() * 100 + 100}%`, 
      animationDelay: `${twinkleDelay}s, ${moveDelay}s`,
      // animationDuration is set by .star-typeX classes
    });
  }, []);

  // Don't render star until style is calculated to prevent flash of unstyled content or incorrect initial position
  if (Object.keys(style).length === 0) {
    return null;
  }

  return <div className={`star ${starType}`} style={style} />;
};

export default function HeroSection() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const numStars = 150; // Adjust for desired density
    const generatedStars = Array.from({ length: numStars }).map((_, i) => (
      <Star key={i} />
    ));
    setStars(generatedStars);
  }, []);


  return (
    <section className="relative flex h-[calc(100vh-4rem)] min-h-[600px] items-center justify-center overflow-hidden space-background">
      {stars}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animationClassName="scroll-reveal">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground">Elevate Your Business with</span>
            <span className="block text-accent">AI-Powered Assistants</span>
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationClassName="scroll-reveal" className="mt-6">
          <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-2xl">
            AssistoWeb provides intelligent virtual assistants tailored to streamline your operations, enhance customer engagement, and drive growth.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animationClassName="scroll-reveal" className="mt-8">
          <div className="mt-10 flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link href="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link href="/#solutions">
                Explore Solutions
              </Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
