'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';

export default function InstallProCtaSection() {
  return (
    <section id="install-pro-cta" className="section-padding bg-primary">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimationWrapper className="rounded-xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Install Pro Version for Customize Everything
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Unlock advanced features, unlimited customization, and priority support with our Pro version. Take your project management to the next level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <Link href="/pricing">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <Link href="/contact-sales">Chat to an Expert</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 mt-8 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <Image
                  src="https://picsum.photos/seed/uicustomize/400/400"
                  alt="Customizable UI elements"
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint="ui elements charts"
                  className="transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
