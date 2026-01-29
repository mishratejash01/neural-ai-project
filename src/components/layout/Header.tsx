import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import neuralAILogo from '@/assets/download__1_-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans pointer-events-none">
      <div
        className={cn(
          'pointer-events-auto mx-auto bg-white/90 backdrop-blur-md transition-all duration-300 ease-in-out',
          // Always Floating Style
          'mt-4 max-w-5xl rounded-2xl border border-gray-200 shadow-sm'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo - No Outline/Boxing */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src={neuralAILogo} 
                  alt="Neural AI" 
                  className="h-10 w-auto object-contain" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    location.pathname === item.href
                      ? 'text-black font-semibold'
                      : 'text-gray-600 hover:text-black'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              <Button 
                onClick={handleContactClick}
                className={cn(
                  "group relative overflow-hidden rounded-lg px-6 font-medium transition-all duration-300",
                  "bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg"
                )}
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  {/* Arrow Reveal Animation */}
                  <ChevronRight 
                    className="h-4 w-4 transition-all duration-300 ease-in-out opacity-0 -translate-x-2 w-0 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100" 
                  />
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-4 pb-4 pt-2 bg-white rounded-b-2xl border-t border-gray-100">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className={cn(
                    'block py-3 text-base font-medium transition-colors border-b border-gray-50',
                    location.pathname === item.href
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-black text-white hover:bg-gray-900 h-12 text-base group flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
