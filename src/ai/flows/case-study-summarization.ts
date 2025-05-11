// use server'
'use server';

/**
 * @fileOverview An AI agent that summarizes case studies.
 *
 * - summarizeCaseStudy - A function that handles the case study summarization process.
 * - CaseStudySummarizationInput - The input type for the summarizeCaseStudy function.
 * - CaseStudySummarizationOutput - The return type for the summarizeCaseStudy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CaseStudySummarizationInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A case study document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type CaseStudySummarizationInput = z.infer<typeof CaseStudySummarizationInputSchema>;

const CaseStudySummarizationOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the case study.'),
});
export type CaseStudySummarizationOutput = z.infer<typeof CaseStudySummarizationOutputSchema>;

export async function summarizeCaseStudy(input: CaseStudySummarizationInput): Promise<CaseStudySummarizationOutput> {
  return summarizeCaseStudyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'caseStudySummarizationPrompt',
  input: {schema: CaseStudySummarizationInputSchema},
  output: {schema: CaseStudySummarizationOutputSchema},
  prompt: `You are an expert summarizer of case studies.  You will create a concise summary of the case study provided.  Focus on the key findings and benefits.

Case Study: {{media url=documentDataUri}}`,
});

const summarizeCaseStudyFlow = ai.defineFlow(
  {
    name: 'summarizeCaseStudyFlow',
    inputSchema: CaseStudySummarizationInputSchema,
    outputSchema: CaseStudySummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
