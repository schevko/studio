"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Bot, BarChart, Settings } from 'lucide-react';
import AssistoFullLogo from '../brand/assisto-full-logo';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/agents', label: 'Ajanlar', icon: Bot },
  { href: '/tasks', label: 'Görevler', icon: Users },
  { href: '/report', label: 'Rapor', icon: BarChart },
  { href: '/settings', label: 'Ayarlar', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-background border-r">
      <div className="h-16 flex items-center px-6 border-b">
        <Link href="/dashboard">
          <AssistoFullLogo className="h-8" />
        </Link>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
         {/* Can add user profile section here later */}
      </div>
    </aside>
  );
}
