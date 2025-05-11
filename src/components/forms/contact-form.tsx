'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { handleContactSubmission } from '@/app/contact/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTransition } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Adınız en az 2 karakter olmalıdır.' }),
  email: z.string().email({ message: 'Lütfen geçerli bir e-posta adresi girin.' }),
  company: z.string().optional(),
  inquiryType: z.enum(['demo', 'quote', 'sales', 'general'], {
    required_error: 'Lütfen bir talep türü seçin.',
  }),
  message: z.string().min(10, { message: 'Mesajınız en az 10 karakter olmalıdır.' }).max(1000),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      inquiryType: undefined,
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      try {
        const result = await handleContactSubmission(values);
        if (result.success) {
          toast({
            title: 'Mesaj Gönderildi!',
            description: 'Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede size geri döneceğiz.',
          });
          form.reset();
        } else {
          toast({
            title: 'Hata',
            description: result.error || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: 'Hata',
          description: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.',
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <Card className="shadow-xl bg-card border border-border rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">Bize Mesaj Gönderin</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Adınız Soyadınız</FormLabel>
                  <FormControl>
                    <Input placeholder="Ali Veli" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">E-posta Adresiniz</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="ali.veli@example.com" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Şirket (İsteğe Bağlı)</FormLabel>
                  <FormControl>
                    <Input placeholder="Şirket Adınız A.Ş." {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Talep Türü</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input border-input-border text-foreground rounded-lg data-[placeholder]:text-muted-foreground">
                        <SelectValue placeholder="Bir talep türü seçin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-popover text-popover-foreground rounded-lg border-border">
                      <SelectItem value="demo">Demo Talebi</SelectItem>
                      <SelectItem value="quote">Özel Fiyat Teklifi</SelectItem>
                      <SelectItem value="sales">Satış Ekibiyle İletişim</SelectItem>
                      <SelectItem value="general">Genel Soru</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Mesajınız</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="İhtiyaçlarınız hakkında bize daha fazla bilgi verin..."
                      className="resize-none bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full btn-primary-softo" disabled={isPending}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Mesajı Gönder
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
