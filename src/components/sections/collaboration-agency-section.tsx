'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; 
import { Handshake } from 'lucide-react';

const partnerLogos = [
  { id: 1, name: 'Teknoloji Partneri A', hint: 'tech partner logo', imgSrc: 'https://picsum.photos/seed/techpartnerA/100/60' },
  { id: 2, name: 'Çözüm Ortağı B', hint: 'solution partner logo', imgSrc: 'https://picsum.photos/seed/solutionpartnerB/100/60' },
  { id: 3, name: 'Entegrasyon Uzmanı C', hint: 'integration expert logo', imgSrc: 'https://picsum.photos/seed/integrationC/100/60' },
  { id: 4, name: 'Yapay Zeka Danışmanı D', hint: 'ai consultant logo', imgSrc: 'https://picsum.photos/seed/aiconsultantD/100/60' },
  { id: 5, name: 'Veri Analitik Firması E', hint: 'data analytics logo', imgSrc: 'https://picsum.photos/seed/dataanalyticsE/100/60' },
  { id: 6, name: 'Bulut Hizmet Sağlayıcı F', hint: 'cloud provider logo', imgSrc: 'https://picsum.photos/seed/cloudproviderF/100/60' },
  { id: 7, name: 'CRM Partneri G', hint: 'crm partner logo', imgSrc: 'https://picsum.photos/seed/crmpartnerG/100/60' },
  { id: 8, name: 'Stratejik Ortak H', hint: 'strategic alliance logo', imgSrc: 'https://picsum.photos/seed/strategicH/100/60' },
];


export default function CollaborationAgencySection() {
  return (
    <section id="partners" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollAnimationWrapper className="mb-12">
          <p className="section-title-sm text-primary">İŞ ORTAKLARIMIZ</p>
          <h2 className="section-title">Güçlü İş Ortaklıkları Kuruyoruz</h2>
          <p className="section-subtitle mx-auto max-w-xl">
            Lider teknoloji sağlayıcıları ve çözüm ortaklarıyla işbirliği yaparak müşterilerimize en kapsamlı yapay zeka çözümlerini sunuyoruz.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center">
            {partnerLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="p-4 rounded-lg flex items-center justify-center h-20 filter grayscale hover:grayscale-0 hover:bg-secondary/20 transition-all duration-300 ease-in-out transform hover:scale-105"
                title={logo.name}
              >
                <Image 
                    src={logo.imgSrc} 
                    alt={logo.name} 
                    width={100} 
                    height={40} 
                    className="object-contain max-h-10"
                    data-ai-hint={logo.hint}
                />
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mt-12">
          <Button asChild size="lg" className="btn-primary-assist">
            <Link href="/contact?source=partner_program"><Handshake className="mr-2 h-5 w-5"/> İş Ortağımız Olun</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
