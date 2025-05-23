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

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);


const formSchema = z.object({
  name: z.string().min(2, { message: 'Adınız en az 2 karakter olmalıdır.' }),
  email: z.string().email({ message: 'Lütfen geçerli bir e-posta adresi girin.' }),
  phone: z.string().regex(phoneRegex, 'Geçersiz telefon numarası formatı.').optional().or(z.literal('')), // Optional phone number
  company: z.string().optional(),
  subject: z.enum(['demo', 'sales', 'support', 'partnership', 'other'], { // Updated inquiry types
    required_error: 'Lütfen bir konu seçin.',
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
      phone: '',
      company: '',
      subject: undefined,
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
                    <Input placeholder="Adınız Soyadınız" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
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
                    <Input type="email" placeholder="ornek@example.com" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Telefon Numaranız (İsteğe Bağlı)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+90 555 123 4567" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
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
                  <FormLabel className="text-foreground/80">Şirket Adınız (İsteğe Bağlı)</FormLabel>
                  <FormControl>
                    <Input placeholder="Şirket Adınız A.Ş." {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Konu</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input border-input-border text-foreground rounded-lg data-[placeholder]:text-muted-foreground">
                        <SelectValue placeholder="Bir konu seçin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-popover text-popover-foreground rounded-lg border-border">
                      <SelectItem value="demo">Demo Talebi</SelectItem>
                      <SelectItem value="sales">Satış Sorusu</SelectItem>
                      <SelectItem value="support">Teknik Destek</SelectItem>
                      <SelectItem value="partnership">İş Ortaklığı</SelectItem>
                      <SelectItem value="other">Diğer</SelectItem>
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
                      placeholder="Mesajınızı buraya yazın..."
                      className="resize-none bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full btn-primary-softo rounded-full" disabled={isPending}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Gönder
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
