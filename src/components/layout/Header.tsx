import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import neuralAILogo from '@/assets/download__1_-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none font-sans">
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-in-out",
          // FIXED DIMENSIONS: Always Floating Pill Shape (w-[95%]), never Full Width
          "w-[95%] max-w-7xl rounded-xl border",
          
          // DYNAMIC STYLES (Based on Scroll):
          isScrolled 
            ? "mt-8 bg-black/80 border-white/10 backdrop-blur-md shadow-lg" // Scrolled: Blurry & Lower
            : "mt-5 bg-black border-transparent shadow-none" // Initial: Solid Black, No Blur, Slightly Higher
        )}
      >
        <div className="px-5 md:px-8 h-16 flex items-center justify-between">
          
          {/* 1. LOGO & TEXT */}
          <Link 
            to="/" 
            className="flex-shrink-0 group hover:opacity-80 transition-opacity flex items-center gap-3"
          >
            <img 
              src={neuralAILogo} 
              alt="Neural AI" 
              className="h-10 w-auto object-contain" 
            />
            <span className="font-sans font-bold text-xl text-white tracking-tight">
              neural AI
            </span>
          </Link>

          {/* 2. NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-base font-sans font-medium tracking-tight transition-all duration-200",
                  location.pathname === item.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 3. CONTACT BUTTON */}
          <div className="hidden md:block">
            <button
              onClick={handleContactClick}
              className={cn(
                "group relative h-10 px-8",
                "rounded-md", 
                "bg-white text-black",
                "overflow-hidden flex items-center justify-center transition-all duration-300 hover:bg-gray-200"
              )}
            >
              <div className="relative flex items-center gap-1 transition-transform duration-300 group-hover:-translate-x-1">
                <span className="font-semibold text-sm tracking-wide font-sans">Contact Us</span>
              </div>
              
              {/* Sliding Arrow */}
              <div className="absolute right-4 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ChevronRight className="w-4 h-4 text-black" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-2 p-4 rounded-xl bg-black/95 border border-white/10 md:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "p-4 rounded-lg text-left font-sans font-medium tracking-tight transition-colors text-lg",
                  location.pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="mt-2 w-full h-12 bg-white text-black rounded-md font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform text-lg font-sans"
            >
              Contact Us <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
