'use client';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Users, Share2 } from 'lucide-react';

export default function CollaborateSection() {
  const collaborationFeatures = [
    {
      icon: MessageSquare,
      title: 'Real-time Communication',
      description: 'Discuss tasks, share feedback, and make decisions faster with integrated chat and comments.',
    },
    {
      icon: Users,
      title: 'Shared Workspaces',
      description: 'Keep everyone on the same page with centralized project boards, files, and calendars.',
    },
    {
      icon: Share2,
      title: 'Seamless File Sharing',
      description: 'Easily share documents, designs, and other project assets with version control.',
    },
  ];

  return (
    <section id="collaborate" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper className="lg:pr-8">
            <p className="section-title-sm">TEAM COLLABORATION</p>
            <h2 className="section-title mb-6">Work and Collaborate with Your Team</h2>
            <p className="section-subtitle mb-8">
              Craft makes teamwork seamless. Bring your team together, streamline communication, and boost productivity with our powerful collaboration tools.
            </p>
            <div className="space-y-6 mb-8">
              {collaborationFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="btn-primary-img">
              <Link href="/signup">Try for free</Link>
            </Button>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/collaboration/800/600"
                alt="Team collaboration interface"
                layout="fill"
                objectFit="cover"
                data-ai-hint="team collaboration ui"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
