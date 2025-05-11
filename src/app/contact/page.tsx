import ContactForm from '@/components/forms/contact-form';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Bize Ulaşın</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Yardımcı olmak için buradayız. Demolar, özel fiyat teklifleri veya Softo hakkında merak ettiğiniz her türlü soru için bize ulaşın.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ScrollAnimationWrapper>
            <div className="bg-card p-8 rounded-xl shadow-lg h-full border border-border">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Doğrudan İletişime Geçin</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">E-posta Gönderin</h3>
                    <a href="mailto:satis@softo.com" className="hover:text-primary transition-colors">satis@softo.com</a>
                    <p className="text-sm">Satış ve özel fiyat teklifleri için.</p>
                     <a href="mailto:destek@softo.com" className="hover:text-primary transition-colors">destek@softo.com</a>
                    <p className="text-sm">Teknik destek için.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Bizi Arayın</h3>
                    <a href="tel:+902120000000" className="hover:text-primary transition-colors">+90 (212) 000 00 00</a>
                    <p className="text-sm">Pzt - Cum, 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Ofisimiz</h3>
                    <p>Softo Teknoloji A.Ş., Teknopark İstanbul, Pendik, İstanbul</p>
                    <p className="text-sm">(Ziyaretler randevu ile yapılmaktadır)</p>
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
