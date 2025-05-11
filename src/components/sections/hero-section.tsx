'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import { Settings, Target, PlayCircle } from 'lucide-react'; // Icons for title

export default function HeroSection() {
  return (
    <section 
      className="relative section-padding bg-gradient-to-br from-app-light-pink via-white to-app-light-purple overflow-hidden"
      style={{
        // A very subtle gradient like in the image
        // background: 'linear-gradient(135deg, #fff1ec 0%, #ffffff 50%, #e0f2fe 100%)' // Example
      }}
    >
      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <ScrollAnimationWrapper animationClassName="fade-in-up">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Project <span className="inline-flex items-center">Management<Settings className="w-8 h-8 sm:w-10 sm:h-10 text-app-green ml-2" /></span> Software Solutions <span className="inline-flex items-center"><Target className="w-8 h-8 sm:w-10 sm:h-10 text-app-orange ml-1" /></span>
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-6">
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-xl mx-auto lg:mx-0">
                Organize, track, and manage your team projects from start to finish with Craft's intuitive and powerful software.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-primary-img shadow-lg transform hover:scale-105">
                  <Link href="/get-started">
                    Get Started
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-foreground border-border hover:bg-secondary shadow-sm transform hover:scale-105">
                  <Link href="/watch-demo">
                    <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Image Placeholder */}
          <ScrollAnimationWrapper animationClassName="fade-in-up" className="mt-10 lg:mt-0">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full max-w-2xl mx-auto">
              <Image
                src="https://picsum.photos/seed/dashboardui/800/600"
                alt="Project Management Dashboard Illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-xl shadow-2xl"
                data-ai-hint="dashboard ui illustration"
                priority
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      {/* Optional: Add subtle background shapes/elements if needed later */}
    </section>
  );
}
