import CaseStudySummarizerForm from '@/components/forms/case-study-summarizer-form';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { FileText, Lightbulb } from 'lucide-react';

export default function SummarizeCaseStudyPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <h1 className="section-title">Yapay Zeka Örnek Olay Özetleyici</h1>
          <p className="section-subtitle">
            Örnek olay dokümanınızı (PDF, TXT, DOCX) yükleyin ve yapay zekamızın temel bulguları ve faydaları vurgulayan kısa bir özet oluşturmasına izin verin.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <CaseStudySummarizerForm />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mt-12">
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Nasıl Çalışır?</h3>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
                  <li>"Dosya Seç"e tıklayın ve örnek olay dokümanınızı seçin.</li>
                  <li>Desteklenen formatlar: PDF, TXT, DOCX (iyi metin kalitesi sağlayın).</li>
                  <li>"Örnek Olayı Özetle"ye tıklayın.</li>
                  <li>Yapay zekamız dokümanı işleyecek ve aşağıda bir özet oluşturacaktır.</li>
                  <li>Lütfen dikkat: İşlem, doküman boyutuna bağlı olarak birkaç dakika sürebilir.</li>
                </ol>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
