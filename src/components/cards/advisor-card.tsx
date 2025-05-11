'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AdvisorCardProps {
  name: string;
  role: string;
  imageUrl: string;
  expertise: string;
}

export default function AdvisorCard({ name, role, imageUrl, expertise }: AdvisorCardProps) {
  return (
    <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl border border-border bg-card h-full">
      <CardHeader className="items-center p-4 pb-2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 ring-2 ring-primary/10">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
             data-ai-hint="danışman portre"
          />
        </div>
        <CardTitle className="text-md font-semibold text-foreground">{name}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-1">
        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
          {expertise}
        </Badge>
      </CardContent>
    </Card>
  );
}
