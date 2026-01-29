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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none font-sans">
      <div 
        className={cn(
          "pointer-events-auto mt-4 w-[95%] max-w-5xl",
          "bg-white/80 backdrop-blur-md border border-white/20 shadow-lg",
          "rounded-full transition-all duration-300"
        )}
      >
        <div className="px-6 md:px-8 h-16 flex items-center justify-between">
          
          {/* 1. LOGO - Clean, no boxing */}
          <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={neuralAILogo} 
              alt="Neural AI" 
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* 2. NAVIGATION (Tabs) - Inter Font */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative",
                  location.pathname === item.href
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {item.label}
                {/* Active Indicator Dot */}
                {location.pathname === item.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* 3. CONTACT BUTTON - Black Block with Arrow Reveal */}
          <div className="hidden md:block">
            <button
              onClick={handleContactClick}
              className="group relative h-10 px-6 bg-black text-white rounded-full overflow-hidden flex items-center justify-center transition-all hover:bg-gray-900 shadow-md hover:shadow-lg"
            >
              <div className="relative flex items-center gap-1 transition-transform duration-300 group-hover:-translate-x-1">
                <span className="font-medium text-sm">Contact Us</span>
              </div>
              
              {/* Sliding Arrow */}
              <div className="absolute right-3 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-3xl border border-gray-100 shadow-xl md:hidden flex flex-col gap-2 mx-2 animate-in fade-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "p-3 rounded-xl text-center font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-gray-100 text-black"
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="mt-2 w-full h-12 bg-black text-white rounded-xl font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              Contact Us <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
