'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

// Inline SVG for Softo logo
const SoftoLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const navLinks = [
  { href: '/', label: 'Ana Sayfa' }, // Home
  { href: '/company', label: 'Şirket' }, // Company
  { href: '/contact', label: 'Bize Ulaşın' }, // Contact Us
  { href: '/404', label: '404' }, // 404 - as per image
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const NavLinkItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors',
          isActive
            ? 'text-primary font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className={cn(
        "sticky top-0 z-50 w-full py-3 transition-all duration-300",
        isScrolled ? "pt-3" : "pt-6" // Add top margin when not scrolled
      )}>
      <header className={cn(
        "container mx-auto max-w-6xl flex h-14 items-center justify-between px-6 rounded-full border transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-md shadow-lg border-border" : "bg-transparent border-transparent shadow-none"
      )}>
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <SoftoLogo />
          <span className="mt-1">Softo</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex btn-primary-softo px-5 py-2.5 text-sm">
            <Link href="/get-template">Şablonu Alın</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menüyü Aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-6">
                <div className="flex flex-col items-start mb-6">
                 <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground mb-4">
                    <SoftoLogo />
                    <span>Softo</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                         pathname === link.href
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="w-full btn-primary-softo mt-4">
                      <Link href="/get-template">Şablonu Alın</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
