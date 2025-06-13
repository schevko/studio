"use client";

import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function GirisPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleLogin called with:", { email, password }); // Log input values
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: any) {
      console.error("Firebase Login Error:", err); // Log the full error object
      // Provide user-friendly error messages
      switch (err.code) {
        case 'auth/user-not-found':
          setError('Bu e-posta adresi ile kayıtlı bir kullanıcı bulunamadı.');
          break;
        case 'auth/wrong-password':
          setError('Hatalı şifre. Lütfen tekrar deneyin.');
          break;
        case 'auth/invalid-email':
          setError('Geçersiz e-posta adresi formatı.');
          break;
        default:
          setError('Giriş yapılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
          break;
      }
    } finally {
      setLoading(false);
    }
  };

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
            <form id="login-form" onSubmit={handleLogin}>
              <CardContent className="p-8 pt-0 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email-login">E-posta Adresiniz</Label>
                  <Input
                    id="email-login"
                    type="email"
                    placeholder="ornek@example.com"
                    className="bg-input border-input-border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-login">Şifreniz</Label>
                  <Input
                    id="password-login"
                    type="password"
                    placeholder="••••••••"
                    className="bg-input border-input-border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/sifremi-unuttum" className="text-sm text-primary hover:underline">
                    Şifrenizi mi unuttunuz?
                  </Link>
                </div>
                {error && (
                  <Alert variant="destructive">
                    <AlertTitle>Giriş Hatası</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button type="submit" form="login-form" className="w-full btn-primary-softo rounded-full text-base py-3" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Lütfen Bekleyin
                    </>
                  ) : (
                    'Giriş Yap'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Hesabınız yok mu? <Link href="/kayit" className="font-medium text-primary hover:underline">Hemen Kaydolun</Link>
          </p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
