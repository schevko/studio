'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Users, Share2, Bot } from 'lucide-react';

export default function CollaborateSection() {
  const collaborationFeatures = [
    {
      icon: Bot, // Changed to Bot icon
      title: 'AI Destekli İşbirliği',
      description: 'Sanal asistanlarınızla görevleri tartışın, geri bildirim paylaşın ve kararları hızla alın.',
    },
    {
      icon: Users,
      title: 'Merkezi Çalışma Alanları',
      description: 'Projelerinizi, dosyalarınızı ve takvimlerinizi merkezi bir yerden yöneterek herkesi aynı sayfada tutun.',
    },
    {
      icon: Share2,
      title: 'Kolay Dosya Paylaşımı',
      description: 'Belgeleri, tasarımları ve diğer proje varlıklarını sürüm kontrolüyle kolayca paylaşın.',
    },
  ];

  return (
    <section id="collaborate" className="section-padding bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper className="lg:pr-8">
            <p className="section-title-sm text-primary">EKİP İŞBİRLİĞİ</p>
            <h2 className="section-title mb-6">Ekibinizle Çalışın ve İşbirliği Yapın</h2>
            <p className="section-subtitle mb-8">
              AssistoWeb, ekip çalışmasını kusursuz hale getirir. Ekibinizi bir araya getirin, iletişimi kolaylaştırın ve güçlü işbirliği araçlarımızla üretkenliği artırın.
            </p>
            <div className="space-y-6 mb-8">
              {collaborationFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-full">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="btn-primary-assist">
              <Link href="/kayit">Ücretsiz Deneyin</Link>
            </Button>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/aiteamwork/800/600"
                alt="Ekip işbirliği arayüzü"
                layout="fill"
                objectFit="cover"
                data-ai-hint="ai team collaboration"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
