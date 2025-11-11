import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsappIcon } from '../icons/WhatsappIcon';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinkItem = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <NavLink
      to={href}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        cn(
          'text-sm font-medium transition-colors hover:text-brand-gold',
          isActive ? 'text-brand-gold' : 'text-brand-blue dark:text-brand-light',
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
            <img src="https://i.imgur.com/1v3n521.png" alt="AcademiaPlus Logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} {...link} />
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://wa.me/2348155928993" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors">
              <WhatsappIcon className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <Button asChild className="hidden md:inline-flex bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col space-y-6 p-6">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 mb-6">
                     <img src="https://i.imgur.com/1v3n521.png" alt="AcademiaPlus Logo" className="h-10 w-auto" />
                  </Link>
                  {navLinks.map((link) => (
                    <NavLinkItem key={link.href} {...link} className="text-lg" />
                  ))}
                  <Button asChild className="w-full bg-brand-gold hover:bg-yellow-500 text-brand-blue font-bold mt-4">
                    <Link to="/quote" onClick={() => setIsOpen(false)}>Get a Free Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}