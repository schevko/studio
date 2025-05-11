'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactTeaserSection() {
  return (
    <section id="contact-teaser" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimationWrapper>
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
            Softo ile Tanışmaya Hazır mısınız?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Proje yönetimi çözümlerimizin işletmenize nasıl değer katabileceğini öğrenmek için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-lg transform hover:scale-105">
              <Link href="/contact?source=teaser_demo">
                <MessageCircle className="mr-2 h-5 w-5" />
                Demo Talep Edin
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold shadow-sm transform hover:scale-105">
              <Link href="/contact?source=teaser_sales">
                <Phone className="mr-2 h-5 w-5" />
                Satış Ekibiyle Görüşün
              </Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
