'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { summarizeCaseStudy } from '@/ai/flows/case-study-summarization';
import type { CaseStudySummarizationOutput } from '@/ai/flows/case-study-summarization';
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function CaseStudySummarizerForm() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<CaseStudySummarizationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [progress, setProgress] = useState(0);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Basic validation for file type and size (example)
      const allowedTypes = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Invalid file type. Please upload a PDF, TXT, or DOCX file.');
        setFile(null);
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File is too large. Maximum size is 5MB.');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setError(null); // Clear previous errors
      setSummary(null); // Clear previous summary
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError('Please select a file to summarize.');
      return;
    }

    setError(null);
    setSummary(null);
    setProgress(0);

    startTransition(async () => {
      try {
        // Simulate progress for reading file
        setProgress(20);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = async () => {
          const documentDataUri = reader.result as string;
          if (!documentDataUri) {
            setError('Failed to read the file.');
            setProgress(0);
            return;
          }
          setProgress(50);

          const result = await summarizeCaseStudy({ documentDataUri });
          setProgress(100);
          setSummary(result);
        };
        
        reader.onerror = () => {
          setError('Error reading file.');
          setProgress(0);
        };

      } catch (e) {
        console.error(e);
        setError(e instanceof Error ? e.message : 'An unknown error occurred during summarization.');
        setProgress(0);
      }
    });
  };

  return (
    <Card className="w-full shadow-xl bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Upload Your Case Study</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="case-study-file" className="text-muted-foreground">Case Study Document</Label>
            <Input
              id="case-study-file"
              type="file"
              onChange={handleFileChange}
              className="mt-1 bg-input text-foreground file:text-accent file:font-semibold file:border-0 file:bg-accent/10 file:mr-3 file:py-2 file:px-4 file:rounded-l-md hover:file:bg-accent/20"
              accept=".pdf,.txt,.docx"
              disabled={isPending}
            />
            {file && <p className="mt-2 text-sm text-muted-foreground">Selected: {file.name}</p>}
          </div>

          {isPending && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full h-2 [&>div]:bg-accent" />
              <p className="text-sm text-accent text-center">Processing document... please wait.</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="bg-destructive/10 border-destructive/30 text-destructive">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {summary && !isPending && (
            <Alert className="bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
              <AlertTitle className="text-green-700 dark:text-green-300">Summary Generated Successfully</AlertTitle>
              <AlertDescription className="mt-2">
                <h3 className="font-semibold mb-1">Case Study Summary:</h3>
                <Textarea
                  value={summary.summary}
                  readOnly
                  rows={10}
                  className="w-full p-3 rounded-md border bg-background text-foreground border-border focus:ring-accent"
                  aria-label="Generated case study summary"
                />
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={!file || isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FileText className="mr-2 h-4 w-4" />
            )}
            Summarize Case Study
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
