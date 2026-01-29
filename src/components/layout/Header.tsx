import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    // Updated z-index to z-[1000] to ensure it is above absolutely everything
    <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none font-sans">
      <div 
        className={cn(
          "pointer-events-auto mt-6 w-[95%] max-w-7xl",
          "bg-white border border-gray-100", // Solid White, No Transparency
          "rounded-lg transition-all duration-300 shadow-sm" // Added subtle shadow-sm for depth separation
        )}
      >
        <div className="px-5 md:px-8 h-16 flex items-center justify-between">
          
          {/* 1. LOGO IN BLACK CARD */}
          <Link to="/" className="flex-shrink-0 group hover:opacity-90 transition-opacity">
            <div className="bg-black rounded-md p-2 flex items-center justify-center">
              <img 
                src={neuralAILogo} 
                alt="Neural AI" 
                className="h-6 w-auto object-contain" 
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
                  location.pathname === item.href
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
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
                "group relative h-12 px-10",
                "bg-black text-white",
                "rounded-md",
                "overflow-hidden flex items-center justify-center transition-colors hover:bg-gray-900"
              )}
            >
              <div className="relative flex items-center gap-1 transition-transform duration-300 group-hover:-translate-x-1">
                <span className="font-semibold text-lg tracking-wide font-sans">Contact Us</span>
              </div>
              
              {/* Sliding Arrow */}
              <div className="absolute right-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg border border-gray-100 md:hidden flex flex-col gap-2 mx-0 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "p-4 rounded-md text-left font-sans font-semibold tracking-tight transition-colors text-lg",
                  location.pathname === item.href
                    ? "bg-gray-50 text-black"
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="mt-2 w-full h-14 bg-black text-white rounded-md font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform text-xl font-sans"
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
