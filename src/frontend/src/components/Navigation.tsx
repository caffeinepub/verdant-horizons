import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/map', label: 'Interactive Map' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-forest-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-forest-800/50 dark:bg-forest-950/95">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-forest-600 dark:hover:text-forest-400 ${
                currentPath === link.path
                  ? 'text-forest-700 dark:text-forest-300'
                  : 'text-forest-900/70 dark:text-forest-100/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-white dark:bg-forest-950">
            <div className="flex flex-col gap-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-forest-600 dark:hover:text-forest-400 ${
                    currentPath === link.path
                      ? 'text-forest-700 dark:text-forest-300'
                      : 'text-forest-900/70 dark:text-forest-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
