import ContactForm from '@/components/forms/contact-form';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/assisto' },
    { label: 'Twitter', icon: Twitter, href: 'https://twitter.com/assisto' },
    { label: 'Facebook', icon: Facebook, href: 'https://facebook.com/assisto' },
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/assisto' },
    { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/assisto' },
  ];


export default function ContactPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Bizimle İletişime Geçin</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Assisto hakkında daha fazla bilgi almak, bir demo planlamak veya aklınızdaki soruları sormak için lütfen bizimle iletişime geçin. Ekibimiz en kısa sürede size yardımcı olmaktan mutluluk duyacaktır.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ScrollAnimationWrapper>
            <div className="bg-card p-8 rounded-xl shadow-lg h-full border border-border">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Doğrudan İletişim Bilgileri</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">E-posta Adresimiz</h3>
                    <a href="mailto:info@assisto.com.tr" className="hover:text-primary transition-colors">info@assisto.com.tr</a>
                    <p className="text-sm">Genel sorularınız ve demo talepleriniz için.</p>
                     <a href="mailto:destek@assisto.com.tr" className="hover:text-primary transition-colors">destek@assisto.com.tr</a>
                    <p className="text-sm">Teknik destek için.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Telefon Numaramız</h3>
                    <a href="tel:+908503072707" className="hover:text-primary transition-colors">+90 850 307 2707</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Çalışma Saatlerimiz</h3>
                    <p>Hafta içi: 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Ofis Adresimiz</h3>
                    <p>Synaptix Bilişim Teknolojileri A.Ş., OMÜ Teknopark, Samsun</p>
                    <p className="text-sm">(Ziyaretler randevu ile yapılmaktadır)</p>
                  </div>
                </div>
                 <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">Sosyal Medyada Bizi Takip Edin</h3>
                     <div className="flex space-x-4">
                        {socialLinks.map(social => (
                        <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                            <social.icon className="w-6 h-6" />
                        </Link>
                        ))}
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
