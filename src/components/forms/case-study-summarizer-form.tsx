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
import { Loader2, AlertTriangle, CheckCircle, FileText as FileTextIcon } from 'lucide-react'; // Renamed FileText to avoid conflict
import { Progress } from '@/components/ui/progress';

export default function CaseStudySummarizerForm() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<CaseStudySummarizationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [progressValue, setProgressValue] = useState(0); // Renamed progress to avoid conflict with Progress component

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
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
      setError(null); 
      setSummary(null); 
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
    setProgressValue(0);

    startTransition(async () => {
      try {
        setProgressValue(20);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = async () => {
          const documentDataUri = reader.result as string;
          if (!documentDataUri) {
            setError('Failed to read the file.');
            setProgressValue(0);
            return;
          }
          setProgressValue(50);

          const result = await summarizeCaseStudy({ documentDataUri });
          setProgressValue(100);
          setSummary(result);
        };
        
        reader.onerror = () => {
          setError('Error reading file.');
          setProgressValue(0);
        };

      } catch (e) {
        console.error(e);
        setError(e instanceof Error ? e.message : 'An unknown error occurred during summarization.');
        setProgressValue(0);
      }
    });
  };

  return (
    <Card className="w-full shadow-xl bg-card border border-border rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Upload Your Case Study</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="case-study-file" className="text-foreground/80">Case Study Document</Label>
            <Input
              id="case-study-file"
              type="file"
              onChange={handleFileChange}
              className="mt-1 bg-input border-input-border text-foreground file:text-primary file:font-semibold file:border-0 file:bg-primary/10 file:mr-3 file:py-2 file:px-4 file:rounded-l-md hover:file:bg-primary/20 rounded-lg"
              accept=".pdf,.txt,.docx"
              disabled={isPending}
            />
            {file && <p className="mt-2 text-sm text-muted-foreground">Selected: {file.name}</p>}
          </div>

          {isPending && (
            <div className="space-y-2">
              <Progress value={progressValue} className="w-full h-2 [&>div]:bg-primary rounded-full" />
              <p className="text-sm text-primary text-center">Processing document... please wait.</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-700 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertTitle className="font-semibold">Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {summary && !isPending && (
            <Alert className="bg-green-50 border-green-200 text-green-700 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="font-semibold text-green-800">Summary Generated Successfully</AlertTitle>
              <AlertDescription className="mt-2">
                <h3 className="font-semibold mb-1 text-foreground">Case Study Summary:</h3>
                <Textarea
                  value={summary.summary}
                  readOnly
                  rows={10}
                  className="w-full p-3 rounded-lg border bg-background text-foreground border-border focus:ring-primary"
                  aria-label="Generated case study summary"
                />
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full btn-primary-img" disabled={!file || isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FileTextIcon className="mr-2 h-4 w-4" />
            )}
            Summarize Case Study
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
