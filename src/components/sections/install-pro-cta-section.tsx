'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function InstallProCtaSection() {
  return (
    <section id="install-pro-cta" className="section-padding bg-primary"> {/* Primary is neon green */}
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimationWrapper className="rounded-xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                AssistoWeb Pro ile Her Şeyi Özelleştirin!
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Pro sürümümüzle gelişmiş özelliklerin, sınırsız özelleştirmenin ve öncelikli desteğin kilidini açın. Sanal asistan deneyiminizi bir üst seviyeye taşıyın.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold text-base px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <Link href="/#pricing"> <Star className="mr-2 h-5 w-5" /> Pro'ya Geçin</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold text-base px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <Link href="/contact?source=pro_cta">Uzmanla Görüşün</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 mt-8 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <Image
                  src="https://picsum.photos/seed/aiprofeatures/400/400"
                  alt="Özelleştirilebilir AI arayüz elementleri"
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint="ai ui customization"
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
