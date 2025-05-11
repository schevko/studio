'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export default function TeamMemberCard({ name, role, bio, imageUrl, linkedinUrl }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border bg-card overflow-hidden">
      <CardHeader className="items-center p-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="ekip üyesi portre"
          />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{name}</CardTitle>
        <CardDescription className="text-primary font-medium">{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
      </CardContent>
      {linkedinUrl && (
        <div className="p-6 pt-0 mt-auto">
          <Button asChild variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
        </div>
      )}
    </Card>
  );
}
