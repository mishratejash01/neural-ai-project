import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import neuralAILogo from '@/assets/download__1_-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={cn(
          'transition-all duration-300 ease-in-out mx-auto bg-card/95 backdrop-blur-lg',
          isScrolled
            ? 'mt-2 max-w-5xl rounded-2xl border border-border/50'
            : 'mt-0 max-w-none border-b border-border/50'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={neuralAILogo} alt="Neural AI" className="h-10 w-auto" />
              </Link>
            </div>

            <nav className="hidden lg:flex lg:space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-4 pb-3 pt-2 bg-background/80 backdrop-blur-lg border-t border-border/50">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors',
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
