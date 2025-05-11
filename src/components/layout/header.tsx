'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react'; // Using Menu for mobile
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Inline SVG for AssistoWeb logo (simple placeholder, replace with actual logo if available)
const AssistoWebLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="hsl(var(--primary))" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5C25.16 5 5 25.16 5 50s20.16 45 45 45 45-20.16 45-45S74.84 5 50 5zm0 82.81c-20.87 0-37.81-16.94-37.81-37.81S29.13 12.19 50 12.19s37.81 16.94 37.81 37.81-16.94 37.81-37.81 37.81z"/>
    <path d="M50 26.56c-2.76 0-5 2.24-5 5v17.5h-17.5c-2.76 0-5 2.24-5 5s2.24 5 5 5h17.5v17.5c0 2.76 2.24 5 5 5s5-2.24 5-5v-17.5h17.5c2.76 0 5-2.24 5-5s-2.24-5-5-5h-17.5v-17.5c0-2.76-2.24-5-5-5z" fill="hsl(var(--primary-foreground))"/>
     <circle cx="50" cy="50" r="10" fill="hsl(var(--primary))"/>
  </svg>
);


const navLinks = [
  { href: '/#solutions', label: 'Çözümler' },
  { href: '/#features', label: 'Özellikler' },
  { href: '/#pricing', label: 'Fiyatlandırma' },
  { href: '/summarize-case-study', label: 'Örnek Olay Özetle' },
  { href: '/contact', label: 'İletişim' },
];

export default function Header() {
  const pathname = usePathname();

  const NavLinkItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href || (href.startsWith('/#') && pathname === '/' && href.length > 1) || (href === '/' && pathname === '/');
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
    <div className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3">
      <header className="container mx-auto max-w-6xl rounded-xl shadow-lg bg-card border border-border/70 flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <AssistoWebLogo />
          <span className="mt-1">AssistoWeb</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground">
            Giriş Yap
          </Button>
          <Button asChild className="btn-primary-assist px-5 py-2.5 text-sm">
            <Link href="/get-started">Başlayın</Link>
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
                    <AssistoWebLogo />
                    <span>AssistoWeb</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                         (pathname === link.href || (link.href.includes('#') && pathname === '/'))
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                      Giriş Yap
                    </Button>
                    <Button asChild className="w-full btn-primary-assist">
                      <Link href="/get-started">Başlayın</Link>
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
