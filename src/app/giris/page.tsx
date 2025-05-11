import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

// This is a placeholder login page.

export default function GirisPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-primary/10 flex items-center justify-center min-h-[calc(100vh-150px)]">
      <div className="container mx-auto max-w-md">
        <ScrollAnimationWrapper>
          <Card className="shadow-2xl border-primary/30 rounded-xl">
            <CardHeader className="text-center p-8">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                <LogIn className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Assisto Hesabınıza Giriş Yapın</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Tekrar hoş geldiniz!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-login">E-posta Adresiniz</Label>
                <Input id="email-login" type="email" placeholder="ornek@example.com" className="bg-input border-input-border rounded-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-login">Şifreniz</Label>
                <Input id="password-login" type="password" placeholder="••••••••" className="bg-input border-input-border rounded-lg" />
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center space-x-2">
                  <Checkbox id="remember-me" />
                  <Label htmlFor="remember-me" className="text-sm font-normal">Beni Hatırla</Label>
                </div> */}
                <Link href="/sifremi-unuttum" className="text-sm text-primary hover:underline">
                  Şifrenizi mi unuttunuz?
                </Link>
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full btn-primary-softo rounded-full text-base py-3">
                Giriş Yap
              </Button>
            </CardFooter>
          </Card>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Hesabınız yok mu? <Link href="/kayit" className="font-medium text-primary hover:underline">Hemen Kaydolun</Link>
          </p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
