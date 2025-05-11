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
import { Loader2, AlertTriangle, CheckCircle, FileText as FileTextIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function CaseStudySummarizerForm() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<CaseStudySummarizationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [progressValue, setProgressValue] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const allowedTypes = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Geçersiz dosya türü. Lütfen bir PDF, TXT veya DOCX dosyası yükleyin.');
        setFile(null);
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Dosya çok büyük. Maksimum boyut 5MB.');
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
      setError('Lütfen özetlenecek bir dosya seçin.');
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
            setError('Dosya okunamadı.');
            setProgressValue(0);
            return;
          }
          setProgressValue(50);

          const result = await summarizeCaseStudy({ documentDataUri });
          setProgressValue(100);
          setSummary(result);
        };
        
        reader.onerror = () => {
          setError('Dosya okunurken hata oluştu.');
          setProgressValue(0);
        };

      } catch (e) {
        console.error(e);
        setError(e instanceof Error ? e.message : 'Özetleme sırasında bilinmeyen bir hata oluştu.');
        setProgressValue(0);
      }
    });
  };

  return (
    <Card className="w-full shadow-xl bg-card border border-border rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Örnek Olayınızı Yükleyin</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="case-study-file" className="text-foreground/80">Örnek Olay Dokümanı</Label>
            <Input
              id="case-study-file"
              type="file"
              onChange={handleFileChange}
              className="mt-1 bg-input border-input-border text-foreground file:text-primary file:font-semibold file:border-0 file:bg-primary/10 file:mr-3 file:py-2 file:px-4 file:rounded-l-md hover:file:bg-primary/20 rounded-lg"
              accept=".pdf,.txt,.docx"
              disabled={isPending}
            />
            {file && <p className="mt-2 text-sm text-muted-foreground">Seçilen: {file.name}</p>}
          </div>

          {isPending && (
            <div className="space-y-2">
              <Progress value={progressValue} className="w-full h-2 [&>div]:bg-primary rounded-full" />
              <p className="text-sm text-primary text-center">Doküman işleniyor... lütfen bekleyin.</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="bg-destructive/10 border-destructive/50 text-destructive-foreground rounded-lg">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertTitle className="font-semibold">Hata</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {summary && !isPending && (
            <Alert className="bg-primary/10 border-primary/50 text-foreground rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary" />
              <AlertTitle className="font-semibold text-primary">Özet Başarıyla Oluşturuldu</AlertTitle>
              <AlertDescription className="mt-2">
                <h3 className="font-semibold mb-1 text-foreground">Örnek Olay Özeti:</h3>
                <Textarea
                  value={summary.summary}
                  readOnly
                  rows={10}
                  className="w-full p-3 rounded-lg border bg-background text-foreground border-border focus:ring-primary"
                  aria-label="Oluşturulan örnek olay özeti"
                />
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full btn-primary-assist" disabled={!file || isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FileTextIcon className="mr-2 h-4 w-4" />
            )}
            Örnek Olayı Özetle
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
