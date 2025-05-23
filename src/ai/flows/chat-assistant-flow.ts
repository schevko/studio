'use server';
/**
 * @fileOverview A simple AI chat assistant flow.
 *
 * - chatWithAssistant - A function that handles chat interactions.
 * - ChatAssistantInput - The input type for the chatWithAssistant function.
 * - ChatAssistantOutput - The return type for the chatWithAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit'; // Correct import for Zod from Genkit

const ChatAssistantInputSchema = z.object({
  message: z.string().describe("The user's message to the assistant."),
});
export type ChatAssistantInput = z.infer<typeof ChatAssistantInputSchema>;

const ChatAssistantOutputSchema = z.object({
  reply: z.string().describe("The assistant's reply to the user."),
});
export type ChatAssistantOutput = z.infer<typeof ChatAssistantOutputSchema>;

export async function chatWithAssistant(input: ChatAssistantInput): Promise<ChatAssistantOutput> {
  return chatAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatAssistantPrompt',
  input: { schema: ChatAssistantInputSchema },
  output: { schema: ChatAssistantOutputSchema },
  prompt: `Sen Assisto için bir müşteri hizmetleri asistanısın. Kullanıcının mesajlarına kısa, samimi ve yardımsever cevaplar ver. Markanın adı Assisto.
Kullanıcı: {{{message}}}
Asistan:`,
});

const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatAssistantInputSchema,
    outputSchema: ChatAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    // Ensure output is not null. For a simple chat, we expect a reply.
    // If the model might not reply, you might want to add a default or error handling.
    if (!output) {
        return { reply: "Üzgünüm, şu an bir sorunla karşılaştım. Lütfen daha sonra tekrar deneyin." };
    }
    return output;
  }
);
