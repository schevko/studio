// Ensure this component is treated as a client component
'use client';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';
import AssistoFullLogo from '@/components/brand/assisto-full-logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define navigation links
const mainNavLinks = [
  { href: '/', label: 'Anasayfa' },
  // Detaylar will be a dropdown
  { href: '/fiyatlandirma', label: 'Fiyatlandırma' },
  { href: '/contact', label: 'İletişim' },
];

// Define dropdown links
const dropdownNavLinks = [
  { href: '/assisto-nedir', label: 'Assisto Nedir?' },
  { href: '/vaka-calismalari', label: 'Vaka Çalışmaları' },
  { href: '/sss', label: 'Sıkça Sorulan Sorular' },
  { href: '/neden-assisto', label: 'Neden Assisto?' },
  { href: '/hakkimizda', label: 'Şirketimiz Hakkında' },
];

// Header component
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Handle scroll effect for header background/styling
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reusable NavLink component for main navigation
  const NavLinkItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          // Common styles
          'text-sm font-medium transition-colors block w-full text-left',
          // Conditional padding: Use DropdownMenuItem's padding if it's a dropdown item
          'px-3 py-2 rounded-md',
          // Active/inactive styles
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

  // Reusable NavLink component for mobile navigation
  const MobileNavLinkItem = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => {
    const isActive = pathname === href;
    return (
      <SheetClose asChild>
        <Link
          href={href}
          onClick={onClick}
          className={cn(
            'block px-3 py-2 rounded-md text-base font-medium transition-colors',
            isActive
              ? 'bg-primary/10 text-primary font-semibold'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
          )}
        >
          {label}
        </Link>
      </SheetClose>
    );
  };

  // Render the header
  return (
    <div className={cn(
        // Sticky container with padding transition based on scroll
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "pt-4 pb-4" : "pt-6 pb-6" // Increased bottom padding further
      )}>
      <header className={cn(
        // Actual header bar: centered, rounded, with transitions
        "container mx-auto max-w-6xl flex h-14 items-center justify-between px-4 sm:px-6 rounded-full border transition-all duration-300",
        isScrolled
          ? "bg-card/90 backdrop-blur-lg shadow-xl border-border/70"
          : "bg-transparent border-transparent shadow-none" // Transparent when not scrolled
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center text-xl font-bold shrink-0"> {/* Removed mr-4 */}
           <AssistoFullLogo height="28" mainColorClass="text-foreground" />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-2 mx-auto"> {/* Added mx-auto to center */}
          {/* Main links before dropdown */}
          {mainNavLinks.slice(0,1).map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-primary data-[state=open]:font-semibold">
                Detaylar <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            {/* Dropdown Content: Styled for vertical layout */}
            <DropdownMenuContent className="w-56 bg-popover border-border shadow-lg rounded-xl p-1">
              {dropdownNavLinks.map((link) => (
                 // Pass Link directly as the child when using asChild
                <DropdownMenuItem key={link.href} asChild className="p-0 cursor-pointer my-[6px]"> {/* Increased vertical margin further */}
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors block w-full text-left px-3 py-2 rounded-md', // Re-apply styles from NavLinkItem
                      pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                    )}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Main links after dropdown */}
          {mainNavLinks.slice(1).map((link) => (
             <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* CTA Button and Mobile Menu Trigger */}
        <div className="flex items-center gap-2"> {/* Removed ml-auto */}
          <Button asChild className="hidden sm:inline-flex btn-primary-softo px-6 py-2.5 text-sm rounded-full">
            <Link href="/kayit">Hemen Deneyin</Link>
          </Button>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menüyü Aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-6">
                {/* Mobile Menu Header */}
                <div className="flex flex-col items-start mb-6">
                 <Link href="/" className="flex items-center text-lg font-bold mb-4" onClick={() => setMobileMenuOpen(false)}>
                    <AssistoFullLogo height="30" mainColorClass="text-foreground" />
                  </Link>
                </div>
                {/* Mobile Menu Navigation */}
                <nav className="flex flex-col space-y-2">
                  {/* Main links */}
                  {mainNavLinks.slice(0,1).map((link) => (
                    <MobileNavLinkItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                  ))}

                  {/* Dropdown section */}
                  <p className="px-3 pt-3 pb-1 text-sm font-semibold text-muted-foreground">Detaylar</p>
                  <div className="flex flex-col space-y-1">
                    {dropdownNavLinks.map((link) => (
                       <MobileNavLinkItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                    ))}
                  </div>

                  {/* Rest of main links */}
                  {mainNavLinks.slice(1).map((link) => (
                    <MobileNavLinkItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                  ))}
                  {/* Mobile CTA */}
                  <Button asChild className="w-full btn-primary-softo mt-4 rounded-full">
                      <Link href="/kayit" onClick={() => setMobileMenuOpen(false)}>Hemen Deneyin</Link>
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
