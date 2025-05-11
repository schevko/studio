'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Assisto nedir?",
    answer: "Assisto, işletmelerin ve ekiplerin projelerini daha verimli yönetmelerine yardımcı olmak için tasarlanmış modern bir proje yönetimi yazılımıdır. Görev takibi, zaman planlaması, ekip işbirliği ve raporlama gibi özellikler sunar.",
  },
  {
    question: "Assisto işletmeme nasıl yardımcı olabilir?",
    answer: "Assisto, projelerinizi organize etmenizi, görevleri atamanızı, ilerlemeyi izlemenizi ve ekibinizle etkili bir şekilde iletişim kurmanızı sağlar. Bu sayede verimliliği artırır, teslim tarihlerine uymanıza yardımcı olur ve proje başarısını destekler.",
  },
  {
    question: "Ücretsiz deneme sürümü var mı?",
    answer: "Evet, Assisto'nun özelliklerini keşfetmeniz için 30 günlük ücretsiz deneme sürümü sunuyoruz. Deneme sürümüne kaydolmak için kredi kartı gerekmez.",
  },
  {
    question: "Hangi entegrasyonları destekliyorsunuz?",
    answer: "Assisto, popüler takvim uygulamaları, dosya depolama servisleri, iletişim araçları ve daha fazlasıyla entegre olabilir. Entegrasyon listemizi sürekli genişletiyoruz. Kurumsal planlarımız özel entegrasyon seçenekleri de sunar.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm text-primary">DESTEK</p>
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <ScrollAnimationWrapper className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b border-border last:border-b-0 mb-2 bg-card rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 text-base hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="lg:col-span-2">
            <div className="bg-card p-8 rounded-xl text-center h-full flex flex-col justify-center items-center border border-border shadow-lg">
               <div className="relative w-32 h-32 mb-6 mx-auto rounded-full overflow-hidden ring-2 ring-primary p-1">
                 <Image
                    src="https://picsum.photos/seed/supportteam/300/300"
                    alt="Destek personeli"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    data-ai-hint="friendly support team"
                  />
               </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Sorularınız mı Var?</h3>
              <p className="text-muted-foreground mb-6">
                Aradığınız cevabı bulamadınız mı? Destek ekibimiz size yardımcı olmak için burada.
              </p>
              <Button asChild className="btn-primary-softo">
                <Link href="/contact?source=faq_support"><HelpCircle className="mr-2 h-5 w-5"/> Destekle İletişime Geçin</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
