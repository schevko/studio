import ContactForm from '@/components/forms/contact-form';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            We're here to help. Reach out to us for demos, custom quotes, or any questions you may have.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ScrollAnimationWrapper>
            <div className="bg-card p-8 rounded-lg shadow-xl h-full">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch Directly</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a href="mailto:sales@assistoweb.com" className="hover:text-accent transition-colors">sales@assistoweb.com</a>
                    <p className="text-sm">For sales inquiries and custom quotes.</p>
                     <a href="mailto:support@assistoweb.com" className="hover:text-accent transition-colors">support@assistoweb.com</a>
                    <p className="text-sm">For technical support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
                    <p className="text-sm">Mon - Fri, 9am - 5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Our Office</h3>
                    <p>123 AI Avenue, Tech City, TX 75001</p>
                    <p className="text-sm">(Visits by appointment only)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <ContactForm />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
