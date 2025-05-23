'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Loader2, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chatWithAssistant } from '@/ai/flows/chat-assistant-flow';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial-ai-message', text: 'Merhaba! Ben Assisto asistanınız. Size nasıl yardımcı olabilirim?', sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isPending) return;

    const userMessageText = inputValue;
    setInputValue(''); // Clear input immediately

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: userMessageText,
      sender: 'user',
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    startTransition(async () => {
      try {
        const aiResponse = await chatWithAssistant({ message: userMessageText });
        const assistantMessage: Message = {
          id: `ai-${Date.now()}`,
          text: aiResponse.reply,
          sender: 'ai',
        };
        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      } catch (error) {
        console.error("Error communicating with AI:", error);
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          text: "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.",
          sender: 'ai',
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    });
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-xl btn-primary-softo z-50 flex items-center justify-center"
          aria-label="Chat'i Aç"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[calc(100%-3rem)] max-w-sm h-[calc(100vh-6rem)] sm:h-[580px] shadow-2xl z-[100] flex flex-col border border-border rounded-xl bg-card">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded-full">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold text-foreground">Assisto Asistan</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
              <span className="sr-only">Chat'i Kapat</span>
            </Button>
          </CardHeader>
          <CardContent className="flex-grow p-4 overflow-hidden">
            <ScrollArea className="h-full pr-3" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex items-end gap-2",
                      msg.sender === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    {msg.sender === 'ai' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center self-start">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "p-3 rounded-lg max-w-[80%]",
                        msg.sender === 'user'
                          ? "bg-primary text-primary-foreground rounded-br-none shadow-md"
                          : "bg-secondary text-secondary-foreground rounded-bl-none shadow-sm"
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isPending && (
                  <div className="flex items-center justify-start space-x-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                         <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="p-3 rounded-lg bg-secondary text-secondary-foreground rounded-bl-none shadow-sm">
                      <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input
                ref={inputRef}
                type="text"
                placeholder="Mesajınızı yazın..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isPending}
                className="flex-grow bg-input border-input-border rounded-lg h-10"
                autoComplete="off"
              />
              <Button type="submit" disabled={isPending || inputValue.trim() === ''} className="btn-primary-softo rounded-lg h-10 px-4">
                {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                <span className="sr-only">Gönder</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
