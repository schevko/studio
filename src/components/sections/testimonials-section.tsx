'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'; // Using Lucide Star for rating
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'; // For basic carousel logic

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  feedback: string;
  rating: number;
  companyLogoHint?: string; // For AI hint for company logo
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah L.',
    role: 'Project Manager, Tech Solutions Inc.',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
    feedback: "Craft has revolutionized how we manage projects. The real-time collaboration features and intuitive interface have significantly boosted our team's productivity. Highly recommended!",
    rating: 5,
    companyLogoHint: 'tech company logo',
  },
  {
    id: 2,
    name: 'John B.',
    role: 'CEO, Creative Agency Co.',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
    feedback: "We've tried several project management tools, and Craft stands out for its flexibility and comprehensive feature set. The customer support is also top-notch.",
    rating: 5,
    companyLogoHint: 'creative agency logo',
  },
  {
    id: 3,
    name: 'Emily K.',
    role: 'Startup Founder',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
    feedback: "As a startup, we needed a tool that could scale with us. Craft's pricing is fair, and it offers all the functionalities we need to stay organized and hit our deadlines.",
    rating: 4,
    companyLogoHint: 'startup logo',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimationWrapper className="text-center mb-10">
          <p className="section-title-sm">TESTIMONIALS</p>
          <h2 className="section-title">Customers Feedback</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Card className="p-6 sm:p-8 md:p-10 rounded-xl shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                  <Image
                    src={currentTestimonial.avatarUrl}
                    alt={currentTestimonial.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="person portrait"
                  />
                </div>
                {/* Optional Company Logo from Image - Placeholder */}
                {/* <div className="relative w-12 h-12 mb-4 opacity-50">
                  <Image src="https://picsum.photos/seed/companylogo/50/50" alt="Company Logo" layout="fill" data-ai-hint={currentTestimonial.companyLogoHint} />
                </div> */}
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  "{currentTestimonial.feedback}"
                </p>
                <h4 className="text-lg font-semibold text-foreground">{currentTestimonial.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{currentTestimonial.role}</p>
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-6 gap-3">
                <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full border-primary text-primary hover:bg-primary/10">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full border-primary text-primary hover:bg-primary/10">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
