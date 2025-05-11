import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'], // Added more weights if needed by new design
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Craft - Project Management Software Solutions',
  description: 'Organize, track, and manage your projects efficiently with Craft.',
  // Add keywords or other metadata if desired
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=""> {/* Removed "dark" class to default to light theme */}
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen page-fade-in">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
