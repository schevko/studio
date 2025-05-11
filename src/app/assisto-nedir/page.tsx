import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, CheckCircle, Users, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AssistoNedirPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Assisto Nedir?</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Assisto, işletmelerin yapay zeka (AI) tabanlı sanal çalışanlar aracılığıyla operasyonel verimliliklerini artırmalarını, maliyetlerini optimize etmelerini ve rekabet avantajı elde etmelerini sağlayan yenilikçi bir SaaS (Software as a Service) platformudur.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12">
          <Card className="shadow-xl overflow-hidden border border-border rounded-xl">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://picsum.photos/seed/aiplatform/1200/400"
                alt="Yapay zeka platformu arayüzü"
                layout="fill"
                objectFit="cover"
                data-ai-hint="AI platform interface"
              />
            </div>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Yapay Zeka ile Dönüşümün Yeni Adı</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Geleneksel iş süreçleri, tekrarlayan görevler ve artan operasyonel karmaşıklıklar, günümüz işletmelerinin büyüme potansiyelini kısıtlayabilmektedir. Assisto, bu zorlukların üstesinden gelmek için geliştirilmiştir. Platformumuz, çeşitli departman ve fonksiyonlara özel olarak tasarlanmış, eğitilebilir yapay zeka ajanları (sanal çalışanlar) sunar. Bu ajanlar, müşteri hizmetlerinden tedarik zinciri yönetimine, finansal analizden İK süreçlerine kadar geniş bir yelpazede görev alabilirler.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Assisto'nun temel amacı, işletmelerin yapay zeka teknolojilerini karmaşık ve maliyetli kurulum süreçleri olmadan, kolayca ve hızla benimsemelerini sağlamaktır. Kullanıcı dostu arayüzümüz ve esnek entegrasyon yeteneklerimiz sayesinde, mevcut sistemlerinizle sorunsuz bir şekilde çalışarak dijital dönüşüm yolculuğunuzu hızlandırıyoruz.
              </p>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12">
          <Card className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold text-foreground">Temel Değer Önerilerimiz</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle, title: "Özelleştirilmiş Çözümler", text: "İşletmenizin özel ihtiyaçlarına göre eğitilmiş ve yapılandırılmış yapay zeka ajanları." },
                  { icon: CheckCircle, title: "Geniş Ajan Yelpazesi", text: "Müşteri hizmetleri, operasyon, analiz ve destek fonksiyonları dahil 20'den fazla farklı ajan tipi." },
                  { icon: CheckCircle, title: "Kolay Entegrasyon", text: "Mevcut CRM, ERP ve diğer iş uygulamalarınızla hızlı ve sorunsuz entegrasyon." },
                  { icon: CheckCircle, title: "Ölçeklenebilirlik", text: "İşletmeniz büyüdükçe artan ihtiyaçlarınıza uyum sağlayan modüler ve esnek yapı." },
                  { icon: CheckCircle, title: "Maliyet Verimliliği", text: "Operasyonel maliyetlerde azalma ve yatırımın hızlı geri dönüşü (ROI)." }
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-3">
                    <item.icon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Assisto ile Tanışmaya Hazır mısınız?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Yapay zeka destekli sanal çalışanların işletmenize nasıl değer katabileceğini keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-primary-softo rounded-full">
              <Link href="/solutions">Çözümlerimizi Keşfedin</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-secondary-softo rounded-full">
              <Link href="/contact?reason=demo_request_assisto_nedir">Demo Talep Edin</Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
