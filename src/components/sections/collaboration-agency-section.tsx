'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // For logos if available, otherwise placeholders

// Placeholder for logos. In a real app, these would be actual image URLs or SVGs.
const agencyLogos = [
  { id: 1, name: 'Agency Alpha', hint: 'creative agency logo' },
  { id: 2, name: 'Beta Solutions', hint: 'tech company logo' },
  { id: 3, name: 'Gamma Digital', hint: 'marketing agency logo' },
  { id: 4, name: 'Delta Web', hint: 'web design logo' },
  { id: 5, name: 'Epsilon SEO', hint: 'seo company logo' },
  { id: 6, name: 'Zeta Ads', hint: 'advertising agency logo' },
  { id: 7, name: 'Eta Marketing', hint: 'digital marketing logo' },
  { id: 8, name: 'Theta Creative', hint: 'brand agency logo' },
];

// Function to generate a pseudo-random, visually distinct color based on ID
const getLogoPlaceholderBg = (id: number) => {
  const colors = [
    'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 
    'bg-purple-100', 'bg-pink-100', 'bg-indigo-100', 'bg-teal-100'
  ];
  return colors[id % colors.length];
};
const getLogoPlaceholderText = (id: number) => {
  const colors = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 
    'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-teal-500'
  ];
  return colors[id % colors.length];
};


export default function CollaborationAgencySection() {
  return (
    <section id="collaboration-agency" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollAnimationWrapper className="mb-12">
          <p className="section-title-sm">OUR PARTNERS</p>
          <h2 className="section-title">Collaboration with 200+ Digital Agencies</h2>
          <p className="section-subtitle mx-auto max-w-xl">
            We partner with leading digital agencies to provide comprehensive project management solutions to a wide range of clients.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6 items-center justify-center">
            {agencyLogos.map((logo) => (
              <div 
                key={logo.id} 
                className={`p-3 rounded-full aspect-square flex items-center justify-center filter grayscale-[50%] hover:grayscale-0 transition-all duration-300 hover:scale-110 ${getLogoPlaceholderBg(logo.id)}`}
                title={logo.name}
                data-ai-hint={logo.hint}
              >
                {/* Placeholder: simple initials or an icon could go here */}
                <span className={`font-bold text-xl ${getLogoPlaceholderText(logo.id)}`}>{logo.name.substring(0,1)}</span>
                {/* <Image src={`https://picsum.photos/seed/${logo.id}/60/60`} alt={logo.name} width={40} height={40} className="opacity-70 group-hover:opacity-100" /> */}
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mt-12">
          <Button asChild size="lg" className="btn-primary-img">
            <Link href="/partners">Become a Partner</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
