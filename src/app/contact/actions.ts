'use server';
import type { ContactFormValues } from '@/components/forms/contact-form';

export async function handleContactSubmission(
  data: ContactFormValues
): Promise<{ success: boolean; error?: string }> {
  // In a real application, you would process the data here:
  // - Validate it again on the server-side (though Zod already does this on client)
  // - Save it to a database
  // - Send an email notification
  // - Integrate with a CRM, etc.

  console.log('Contact form submission received:', data);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  // if (data.email.includes('error@example.com')) {
  //   return { success: false, error: 'This email address is not allowed.' };
  // }

  return { success: true };
}
