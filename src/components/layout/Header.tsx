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
      // Toggle state based on scroll position
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
          "pointer-events-auto transition-all duration-300 ease-in-out shadow-sm",
          // Base styles usually applied to inner container
          isScrolled 
            ? "mt-6 w-[95%] max-w-7xl rounded-lg bg-black border-transparent" // Floating Scrolled State (Black)
            : "mt-0 w-full max-w-full rounded-none bg-white border-b border-gray-100" // Initial Full Width State (White)
        )}
      >
        <div className="px-5 md:px-8 h-16 flex items-center justify-between">
          
          {/* 1. LOGO */}
          <Link to="/" className="flex-shrink-0 group hover:opacity-90 transition-opacity">
            <div className={cn(
              "rounded-md p-2 flex items-center justify-center transition-colors duration-300",
              // Invert logo background: White on scroll (so it pops on black header), Black initially
              isScrolled ? "bg-white" : "bg-black"
            )}>
              <img 
                src={neuralAILogo} 
                alt="Neural AI" 
                className="h-8 w-auto object-contain" 
              />
            </div>
          </Link>

          {/* 2. NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-base font-sans font-semibold tracking-tight transition-colors duration-200",
                  // Color Logic:
                  // Scrolled: White text (Active), Gray-300 (Inactive)
                  // Initial: Black text (Active), Gray-500 (Inactive)
                  isScrolled
                    ? (location.pathname === item.href ? "text-white" : "text-gray-300 hover:text-white")
                    : (location.pathname === item.href ? "text-black" : "text-gray-500 hover:text-black")
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
                "group relative h-12 px-10 rounded-md",
                "overflow-hidden flex items-center justify-center transition-all duration-300",
                // Button Colors: Scrolled = White Bg/Black Text, Initial = Black Bg/White Text
                isScrolled
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-900"
              )}
            >
              <div className="relative flex items-center gap-1 transition-transform duration-300 group-hover:-translate-x-1">
                <span className="font-semibold text-lg tracking-wide font-sans">Contact Us</span>
              </div>
              
              {/* Sliding Arrow (Color adapts to text color) */}
              <div className="absolute right-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ChevronRight className={cn("w-5 h-5", isScrolled ? "text-black" : "text-white")} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                isScrolled 
                  ? "text-white hover:bg-gray-800" 
                  : "text-black hover:bg-gray-100"
              )}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={cn(
            "absolute top-full left-0 right-0 mt-2 p-4 rounded-lg border md:hidden flex flex-col gap-2 mx-0 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl",
            // Mobile Menu Theme matches Header
            isScrolled 
              ? "bg-black border-gray-800" 
              : "bg-white border-gray-100"
          )}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "p-4 rounded-md text-left font-sans font-semibold tracking-tight transition-colors text-lg",
                  // Mobile Link Colors
                  isScrolled
                    ? (location.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-900 hover:text-white")
                    : (location.pathname === item.href ? "bg-gray-50 text-black" : "text-gray-500 hover:bg-gray-50 hover:text-black")
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className={cn(
                "mt-2 w-full h-14 rounded-md font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform text-xl font-sans",
                // Mobile Button Colors
                isScrolled
                  ? "bg-white text-black"
                  : "bg-black text-white"
              )}
            >
              Contact Us <ChevronRight size={22} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
