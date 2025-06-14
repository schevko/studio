import AdminSidebar from "@/components/layout/admin-sidebar";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// Assuming there's a hook or function to check authentication status
// import { useAuth } from '@/hooks/useAuth'; 

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  // Replace with your actual authentication check logic
  const isAuthenticated = () => { /* your auth check here, returns true or false */ return false; }; // Placeholder

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/giris');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated()) {
    // Optionally render a loading state or null while redirecting
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100/40 dark:bg-neutral-900/40">
      <AdminSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
