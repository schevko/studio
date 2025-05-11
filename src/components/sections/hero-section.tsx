import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

export default function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] min-h-[600px] items-center justify-center overflow-hidden animated-gradient">
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
