"use client"; // Required for usePathname hook

import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { usePathname } from 'next/navigation'; // Import the hook
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ChatAssistant from '@/components/chat/chat-assistant';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Metadata cannot be used in a Client Component, so we comment it out or handle it differently.
// For now, we'll comment it out to get functionality working.
// You might need to move Metadata to a specific page or a server-side layout component.
/*
export const metadata: Metadata = {
  title: 'Assisto - Yapay Zeka Destekli Sanal Çalışan Çözümleri',
  description: 'Assisto ile işletmenizin operasyonel verimliliğini artırın, maliyetleri optimize edin ve yapay zeka destekli sanal çalışanlarla rekabet avantajı yakalayın.',
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const adminRoutes = ['/dashboard', '/agents', '/tasks', '/report', '/settings'];
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));

  return (
    <html lang="tr">
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen">
          {/* Conditionally render Header and Footer */}
          {!isAdminRoute && <Header />}
          <main className="flex-grow">
            {children}
          </main>
          {!isAdminRoute && <Footer />}
        </div>
        {!isAdminRoute && <ChatAssistant />}
        <Toaster />
      </body>
    </html>
  );
}
