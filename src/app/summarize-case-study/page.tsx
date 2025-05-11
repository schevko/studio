import CaseStudySummarizerForm from '@/components/forms/case-study-summarizer-form';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { FileText, Lightbulb } from 'lucide-react';

export default function SummarizeCaseStudyPage() {
  return (
    <div className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/20 mb-4">
            <FileText className="h-10 w-10 text-accent" />
          </div>
          <h1 className="section-title">AI Case Study Summarizer</h1>
          <p className="section-subtitle">
            Upload your case study document (PDF, TXT, DOCX) and let our AI generate a concise summary,
            highlighting key findings and benefits.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <CaseStudySummarizerForm />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mt-12">
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How it Works</h3>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
                  <li>Click "Choose File" and select your case study document.</li>
                  <li>Supported formats: PDF, TXT, DOCX (ensure good text quality).</li>
                  <li>Click "Summarize Case Study".</li>
                  <li>Our AI will process the document and generate a summary below.</li>
                  <li>Please note: Processing may take a few moments depending on document size.</li>
                </ol>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
