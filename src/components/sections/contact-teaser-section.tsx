import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Mail, Phone } from 'lucide-react';

export default function ContactTeaserSection() {
  return (
    <section id="contact-teaser" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimationWrapper>
          <h2 className="section-title text-foreground">Ready to Transform Your Business?</h2>
          <p className="section-subtitle max-w-xl mx-auto text-muted-foreground">
            Let's discuss how AssistoWeb can help you achieve your goals.
            Request a personalized demo or get a custom quote today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" /> Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
              <Link href="/contact?inquiry=demo">
                <Phone className="mr-2 h-5 w-5" /> Request a Demo
              </Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
