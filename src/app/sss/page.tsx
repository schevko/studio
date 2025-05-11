'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  {
    question: "Ajanların eğitimi ne kadar sürer?",
    answer: "İşletmenin veri hacmine ve ajanın karmaşıklığına bağlı olarak 1-4 hafta arasında değişmektedir. Standart ajanlar için bu süre 5-7 iş günüdür."
  },
  {
    question: "Veri güvenliği nasıl sağlanıyor?",
    answer: "Uçtan uca şifreleme, izole vektör veritabanları, düzenli güvenlik denetimleri ve SOC2 uyumluluğu ile veri güvenliği en üst düzeyde sağlanmaktadır. Verileriniz bizimle güvendedir."
  },
  {
    question: "Minimum sözleşme süresi ne kadardır?",
    answer: "Standart sözleşmelerimiz 12 aylıktır, ancak 3 aylık deneme süresi seçeneği de sunulmaktadır. Deneme süresi sonunda memnunsanız 12 aylık sözleşmeye geçebilirsiniz."
  },
  {
    question: "Assisto'nun rakiplerinden en büyük farkı nedir?",
    answer: "Assisto'yu rakiplerimizden ayıran en önemli özellikler; işletmenize özel olarak eğitilebilen özelleştirilmiş ajanlar, çok geniş bir departman yelpazesine yönelik çözümler sunmamız, mevcut sistemlerle kusursuz ve hızlı entegrasyon kabiliyeti ve işletmenizin büyümesiyle kolayca ölçeklenebilen modüler yapımızdır."
  },
  {
    question: "Yeni bir teknoloji geliştiğinde Assisto nasıl adapte olacak?",
    answer: "Modüler mimarimiz ve çevik geliştirme metodolojimiz sayesinde, yapay zeka alanındaki yeni teknolojileri ve gelişmeleri hızla platformumuza entegre edebilecek şekilde tasarlandık. Her 3 ayda bir düzenli güncellemeler sunarak en son yeniliklerden faydalanmanızı sağlıyoruz."
  },
  {
    question: "Sanal çalışanlar insan çalışanların yerini mi alacak?",
    answer: "Hayır, vizyonumuz insan çalışanların stratejik ve yaratıcı görevlere odaklanmasını sağlamaktır. Sanal çalışanlar, tekrarlayan ve rutin görevleri üstlenerek insan kaynaklarının daha verimli ve değerli işlere kanalize olmasına olanak tanır. İnsan ve yapay zeka işbirliğine inanıyoruz."
  },
  {
    question: "Assisto'nun uygulanması ne kadar sürer?",
    answer: "Entegrasyon süresi, mevcut sistemlerinizin karmaşıklığına ve ajanların özelleştirme düzeyine bağlı olarak ortalama 1-2 hafta sürmektedir. Ajanların eğitimi için 1-4 hafta arasında bir süre gerekebilir."
  }
];

export default function SSSPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Sıkça Sorulan Sorular: Merak Ettikleriniz</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Assisto platformu hakkında en çok merak edilen soruları ve yanıtlarını burada bulabilirsiniz. Daha fazla bilgi için lütfen bizimle iletişime geçin.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border border-border bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 px-5 text-base hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4 px-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Sormak İstediğiniz Başka Bir Soru Mu Var?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.
          </p>
          <Button asChild size="lg" className="btn-primary-softo rounded-full">
            <Link href="/contact?reason=faq_more_questions"><HelpCircle className="mr-2 h-5 w-5"/> Bize Ulaşın</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
