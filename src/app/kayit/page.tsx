import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

// This is a placeholder registration page.
// In a real application, this would involve a proper form, validation, and backend integration.

export default function KayitPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-primary/10 flex items-center justify-center min-h-[calc(100vh-150px)]"> {/* Adjust min-height as needed */}
      <div className="container mx-auto max-w-md">
        <ScrollAnimationWrapper>
          <Card className="shadow-2xl border-primary/30 rounded-xl">
            <CardHeader className="text-center p-8">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Assisto'ya Kaydolun</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Yapay zeka destekli sanal çalışanlarla işletmenizi geleceğe taşıyın.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              {/* Placeholder for a registration form */}
              <div className="space-y-2">
                <Label htmlFor="email-register">E-posta Adresiniz</Label>
                <Input id="email-register" type="email" placeholder="ornek@example.com" className="bg-input border-input-border rounded-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-register">Şifreniz</Label>
                <Input id="password-register" type="password" placeholder="••••••••" className="bg-input border-input-border rounded-lg" />
              </div>
               <p className="text-xs text-muted-foreground text-center">
                Kaydolarak <Link href="/kullanim-sartlari" className="underline hover:text-primary">Kullanım Şartları</Link>mızı ve <Link href="/gizlilik-politikasi" className="underline hover:text-primary">Gizlilik Politikası</Link>mızı kabul etmiş olursunuz.
              </p>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full btn-primary-softo rounded-full text-base py-3">
                Hesap Oluştur
              </Button>
            </CardFooter>
          </Card>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Zaten bir hesabınız var mı? <Link href="/giris" className="font-medium text-primary hover:underline">Giriş Yapın</Link>
          </p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
