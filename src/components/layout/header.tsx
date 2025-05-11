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

const mainNavLinks = [
  { href: '/', label: 'Anasayfa' },
  // Detaylar will be a dropdown
  { href: '/fiyatlandirma', label: 'Fiyatlandırma' },
  { href: '/contact', label: 'İletişim' },
];

const dropdownNavLinks = [
  { href: '/assisto-nedir', label: 'Assisto Nedir?' },
  { href: '/vaka-calismalari', label: 'Vaka Çalışmaları' },
  { href: '/sss', label: 'Sıkça Sorulan Sorular' },
  { href: '/neden-assisto', label: 'Neden Assisto?' },
  { href: '/hakkimizda', label: 'Şirketimiz Hakkında' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItem = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void; }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClick}
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


  return (
    <div className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "py-2" : "py-4" 
      )}>
      <header className={cn(
        "container mx-auto max-w-6xl flex h-14 items-center justify-between px-4 sm:px-6 rounded-full border transition-all duration-300",
        isScrolled ? "bg-card/90 backdrop-blur-lg shadow-xl border-border/70" : "bg-transparent border-transparent shadow-none"
      )}>
        <Link href="/" className="flex items-center text-xl font-bold">
          <AssistoFullLogo height="32" mainColorClass="text-foreground" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {mainNavLinks.slice(0,1).map((link) => ( // Anasayfa
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-primary data-[state=open]:font-semibold">
                Detaylar <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border-border shadow-lg rounded-xl">
              {dropdownNavLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <NavLinkItem href={link.href} label={link.label} />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {mainNavLinks.slice(1).map((link) => ( // Fiyatlandırma, İletişim
             <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex btn-primary-softo px-6 py-2.5 text-sm rounded-full">
            <Link href="/kayit">Hemen Deneyin</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menüyü Aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-6">
                <div className="flex flex-col items-start mb-6">
                 <Link href="/" className="flex items-center text-lg font-bold mb-4" onClick={() => setMobileMenuOpen(false)}>
                    <AssistoFullLogo height="30" mainColorClass="text-foreground" />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-2">
                  {mainNavLinks.slice(0,1).map((link) => ( // Anasayfa
                    <MobileNavLinkItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                  ))}
                  
                  <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Detaylar</p>
                  <div className="pl-3 flex flex-col space-y-1">
                    {dropdownNavLinks.map((link) => (
                       <MobileNavLinkItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                    ))}
                  </div>
                  
                  {mainNavLinks.slice(1).map((link) => ( // Fiyatlandırma, İletişim
                    <MobileNavLinkItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
                  ))}
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
