'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { createSuperAdmin } from './actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, ShieldCheck, AlertTriangle } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

const SUPER_ADMIN_EMAIL = 'sevket@jeetwork.com';

export default function SetupSuperAdminPage() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleCreateSuperAdmin = () => {
    setResult(null);
    startTransition(async () => {
      const actionResult = await createSuperAdmin(SUPER_ADMIN_EMAIL);
      setResult(actionResult);
    });
  };

  return (
    <div className="section-padding bg-gradient-to-b from-background to-primary/10 flex items-center justify-center min-h-[calc(100vh-150px)]">
      <div className="container mx-auto max-w-md">
        <ScrollAnimationWrapper>
          <Card className="shadow-2xl border-primary/30 rounded-xl">
            <CardHeader className="text-center p-8">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Süper Admin Kurulumu</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Bu sayfa, Firestore veritabanına ilk süper admin kullanıcısını eklemek için tek seferlik bir araçtır.
                Lütfen bu işlemi yalnızca bir kez çalıştırın.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-4">
              <p className="text-sm text-center text-muted-foreground">
                Aşağıdaki butona tıklayarak <strong className="text-foreground">{SUPER_ADMIN_EMAIL}</strong> e-posta adresini
                <code className="bg-muted px-1.5 py-0.5 rounded-sm text-foreground mx-1">superadmin</code> rolüyle kaydedeceksiniz.
              </p>
              {result && (
                <Alert variant={result.success ? "default" : "destructive"} className={result.success ? "bg-green-500/10 border-green-500/50 text-green-700" : "bg-destructive/10 border-destructive/50 text-destructive-foreground"}>
                  {result.success ? <ShieldCheck className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
                  <AlertTitle className="font-semibold">{result.success ? 'Başarılı' : 'Hata'}</AlertTitle>
                  <AlertDescription>{result.message}</AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button
                onClick={handleCreateSuperAdmin}
                disabled={isPending}
                className="w-full btn-primary-softo rounded-full text-base py-3"
              >
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <ShieldCheck className="mr-2 h-4 w-4" />
                )}
                Süper Admin Oluştur: {SUPER_ADMIN_EMAIL}
              </Button>
            </CardFooter>
          </Card>
           <p className="text-center mt-6 text-xs text-muted-foreground">
            <strong>Not:</strong> Bu işlem şifrenizi ayarlamaz. Gerçek bir giriş sistemi için Firebase Authentication'ı ayrıca kurmanız gerekmektedir.
            Bu sayfa yalnızca rol ataması yapar. İşlem sonrası bu sayfayı silmeniz veya erişimi kısıtlamanız önerilir.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
