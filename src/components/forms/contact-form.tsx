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
import { handleContactSubmission } from '@/app/contact/actions'; // Assuming action path is still valid
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTransition } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  inquiryType: z.enum(['demo', 'quote', 'sales', 'general'], {
    required_error: 'Please select an inquiry type.',
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1000),
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
        // Assuming handleContactSubmission is adapted or generic enough
        const result = await handleContactSubmission(values);
        if (result.success) {
          toast({
            title: 'Message Sent!',
            description: 'Thank you for contacting us. We will get back to you shortly.',
          });
          form.reset();
        } else {
          toast({
            title: 'Error',
            description: result.error || 'Failed to send message. Please try again.',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <Card className="shadow-xl bg-card border border-border rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
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
                  <FormLabel className="text-foreground/80">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
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
                  <FormLabel className="text-foreground/80">Company (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company Inc." {...field} className="bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg" />
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
                  <FormLabel className="text-foreground/80">Inquiry Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input border-input-border text-foreground rounded-lg">
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-popover text-popover-foreground rounded-lg">
                      <SelectItem value="demo">Request a Demo</SelectItem>
                      <SelectItem value="quote">Get a Custom Quote</SelectItem>
                      <SelectItem value="sales">Contact Sales</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
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
                  <FormLabel className="text-foreground/80">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your needs..."
                      className="resize-none bg-input border-input-border text-foreground placeholder:text-muted-foreground rounded-lg"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full btn-primary-img" disabled={isPending}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
