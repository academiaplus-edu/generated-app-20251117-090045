import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookOpenCheck, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsappIcon } from '../icons/WhatsappIcon';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/contact', label: 'Contact' },
];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinkItem = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <NavLink
      to={href}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        cn(
          'text-sm font-medium transition-colors hover:text-brand-teal',
          isActive ? 'text-brand-teal' : 'text-brand-blue dark:text-brand-light',
          className
        )
      }
    >
      {label}
    </NavLink>
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpenCheck className="h-7 w-7 text-brand-teal" />
            <span className="text-xl font-bold text-brand-blue dark:text-white">AcademiaPlus</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} {...link} />
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://wa.me/2348155928993" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors">
              <WhatsappIcon className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex items-center gap-2 border-brand-teal/30 hover:border-brand-teal">
              <Link to="/client-login"><User className="h-4 w-4" /> Client Login</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex bg-brand-teal hover:bg-cyan-400 text-brand-blue font-bold shadow-soft">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background">
                <div className="grid h-full grid-rows-[auto_1fr_auto] p-6">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 mb-6">
                     <BookOpenCheck className="h-7 w-7 text-brand-teal" />
                     <span className="text-xl font-bold text-brand-blue dark:text-white">AcademiaPlus</span>
                  </Link>
                  <nav className="grid gap-6">
                    {navLinks.map((link) => (
                      <NavLinkItem key={link.href} {...link} className="text-lg" />
                    ))}
                     <NavLink to="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium text-brand-blue dark:text-brand-light transition-colors hover:text-brand-teal">FAQ</NavLink>
                  </nav>
                  <div className="mt-6 space-y-4">
                     <Button asChild className="w-full bg-brand-teal hover:bg-cyan-400 text-brand-blue font-bold">
                      <Link to="/quote" onClick={() => setIsOpen(false)}>Get a Free Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/client-login" onClick={() => setIsOpen(false)}>Client Login</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}