'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function RealtimeMonitoringSection() {
  const features = [
    'Track project progress with live updates.',
    'Monitor team performance and workload.',
    'Identify potential bottlenecks early.',
    'Generate insightful reports with ease.',
  ];

  return (
    <section id="realtime-monitoring" className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper className="lg:pr-8">
            <p className="section-title-sm">KEY HIGHLIGHTS</p>
            <h2 className="section-title mb-6">Real Time Project Monitoring</h2>
            <p className="section-subtitle mb-8">
              Stay on top of your projects with our advanced real-time monitoring tools. Get instant visibility into every aspect of your project lifecycle, empowering you to make data-driven decisions.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="btn-primary-img">
              <Link href="/features">Explore Features</Link>
            </Button>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/analytics/800/600"
                alt="Real-time project monitoring dashboard"
                layout="fill"
                objectFit="cover"
                data-ai-hint="analytics dashboard"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
