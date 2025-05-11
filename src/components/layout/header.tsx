'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, GanttChartSquare } from 'lucide-react'; // Using GanttChartSquare for "Craft" logo
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Navigation links based on the image (Product, Template, Blog, Pricing)
// For a real app, these would point to actual routes.
const navLinks = [
  { href: '/#features', label: 'Product' }, // Example mapping
  { href: '/templates', label: 'Template' }, // Placeholder
  { href: '/blog', label: 'Blog' },         // Placeholder
  { href: '/#pricing', label: 'Pricing' },   // Example mapping
];

export default function Header() {
  const pathname = usePathname();

  const NavLinkItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href || (href.startsWith('/#') && pathname === '/');
    return (
      <Link
        href={href}
        className={cn(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors',
          isActive
            ? 'text-primary font-semibold' // Active: Primary color text
            : 'text-foreground/70 hover:text-foreground' // Inactive: Muted text, hover to foreground
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <GanttChartSquare className="h-7 w-7 text-primary" />
          <span>Craft</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground">
            Log In
          </Button>
          <Button asChild className="btn-primary-img px-5 py-2.5 text-sm">
            <Link href="/get-started">Get Started</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col items-start mb-6">
                 <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground mb-4">
                    <GanttChartSquare className="h-6 w-6 text-primary" />
                    <span>Craft</span>
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
                          : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button variant="outline" className="w-full mt-4">
                      Log In
                    </Button>
                    <Button className="w-full btn-primary-img">
                      Get Started
                    </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
