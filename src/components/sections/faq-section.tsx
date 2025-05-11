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

const faqData = [
  {
    question: "What is Craft project management software?",
    answer: "Craft is a comprehensive project management tool designed to help teams plan, track, and collaborate on projects of all sizes. It offers features like task management, real-time monitoring, team collaboration, and reporting.",
  },
  {
    question: "How can Craft help my startup?",
    answer: "Craft provides startups with an affordable and scalable solution to organize workflows, improve team productivity, manage resources effectively, and ensure projects are delivered on time and within budget.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, Craft offers a 14-day free trial for you to explore its features. No credit card is required to sign up for the trial.",
  },
  {
    question: "What integrations does Craft support?",
    answer: "Craft integrates with popular tools like Slack, Google Workspace, GitHub, and more. We are continuously expanding our list of integrations. Enterprise plans also offer custom integration options.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <p className="section-title-sm">SUPPORT</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <ScrollAnimationWrapper className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b border-border last:border-b-0 mb-2 bg-secondary/30 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 text-base">
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
            <div className="bg-primary/5 p-8 rounded-xl text-center h-full flex flex-col justify-center items-center">
               <div className="relative w-40 h-40 mb-6 mx-auto">
                 <Image
                    src="https://picsum.photos/seed/supportperson/300/300"
                    alt="Support person"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    data-ai-hint="support person friendly"
                  />
               </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">General Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help you.
              </p>
              <Button asChild className="btn-primary-img">
                <Link href="/contact-support">Contact Support</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
