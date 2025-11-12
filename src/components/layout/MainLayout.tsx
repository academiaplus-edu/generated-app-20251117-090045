import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggle } from '../ThemeToggle';
import { LiveChatWidget } from '../LiveChatWidget';
type MainLayoutProps = {
  children: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-brand-light dark:bg-brand-blue">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster richColors closeButton />
      <ThemeToggle className="fixed bottom-24 right-4 md:bottom-4 md:right-4" />
      <LiveChatWidget />
    </div>
  );
}