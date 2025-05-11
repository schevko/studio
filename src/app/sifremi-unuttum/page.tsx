import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { KeyRound } from 'lucide-react';
import Link from 'next/link';

// This is a placeholder "Forgot Password" page.

export default function SifremiUnuttumPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-primary/10 flex items-center justify-center min-h-[calc(100vh-150px)]">
      <div className="container mx-auto max-w-md">
        <ScrollAnimationWrapper>
          <Card className="shadow-2xl border-primary/30 rounded-xl">
            <CardHeader className="text-center p-8">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                <KeyRound className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Şifrenizi mi Unuttunuz?</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Endişelenmeyin! E-posta adresinizi girin, şifrenizi sıfırlamanız için size bir bağlantı gönderelim.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-forgot">Kayıtlı E-posta Adresiniz</Label>
                <Input id="email-forgot" type="email" placeholder="ornek@example.com" className="bg-input border-input-border rounded-lg" />
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full btn-primary-softo rounded-full text-base py-3">
                Sıfırlama Bağlantısı Gönder
              </Button>
            </CardFooter>
          </Card>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Şifrenizi hatırladınız mı? <Link href="/giris" className="font-medium text-primary hover:underline">Giriş Yapın</Link>
          </p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
