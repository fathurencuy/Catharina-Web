'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Instagram, Mail, Stethoscope, LogOut, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  

  // Skip semua check untuk halaman login
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    // Kalau di halaman login, skip check
    if (isLoginPage) {
      setIsChecking(false);
      return;
    }

    // Check apakah ada cookie session
    const checkAuth = () => {
      // Cek cookie secara manual di client
      const cookies = document.cookie.split(';');
      const sessionCookie = cookies.find(c => c.trim().startsWith('admin_session='));
      
      if (sessionCookie && sessionCookie.includes('authenticated')) {
        setIsAuthenticated(true);
        setIsChecking(false);
      } else {
        // Tidak ada session, redirect ke login
        router.replace('/admin/login');
      }
    };

    checkAuth();
  }, [pathname, router, isLoginPage]);

  // Kalau di halaman login, render tanpa layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Kalau masih checking auth, tampilkan loading
  if (isChecking) {
    return (
      <div className="min-h-screen bg-neutral-light flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-foreground/70 font-medium">Memverifikasi akses...</p>
        </div>
      </div>
    );
  }

  // Kalau belum authenticated, jangan render apa-apa (sedang redirect)
  if (!isAuthenticated) {
    return null;
  }  

  const menuItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/feeds', icon: Instagram, label: 'IG Feeds' },
    { href: '/admin/messages', icon: Mail, label: 'Pesan Masuk' },
    { href: '/admin/doctors', icon: Stethoscope, label: 'Kelola Dokter' },
  ];

  const logoutAdmin = async () => {
    if(!confirm("Yakin Anda Keluar?")) 
      return;

    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-neutral-light flex">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex md:flex-col md:w-48 bg-white border-r border-border">
        <div className="p-4 py-5 border-b border-border">
          <h1 className="text-xl font-serif font-bold text-primary">Admin Panel</h1>
          <p className="text-xs text-foreground/70 mt-1">RSU Catharina 1914</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-foreground hover:bg-neutral-light'
                }`}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <button
            onClick={logoutAdmin}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
          <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-border z-50">
            <div className="px-6 py-5 border-b border-border flex items-center justify-between">
              <div>
                <h1 className="text-xl font-serif font-bold text-primary">Admin Panel</h1>
                <p className="text-sm text-foreground/70 mt-1">RS Catharina 1914</p>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-1.5 hover:bg-neutral-light rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
            
            navigation
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-foreground hover:bg-neutral-light'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-border">
              <button
                onClick={logoutAdmin}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header Mobile */}
        <header className="md:hidden bg-white border-b border-border p-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-serif font-bold text-primary">Admin Panel</h1>
          <div className="w-10"></div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 sm:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}