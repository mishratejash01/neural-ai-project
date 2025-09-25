import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Neural AI</span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Transforming businesses with intelligent AI solutions. We help companies 
              increase revenue and drive growth with AI-powered ecosystems that learn, 
              adapt, and deliver bespoke solutions tailored to your unique needs.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-slate-300">
                <span className="text-primary mr-2">📧</span>
                office@neuralai.in
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-primary mr-2">📞</span>
                +91 8160396630
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Case Studies" },
                { to: "/demo", label: "Demo" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-slate-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Newsletter & CTA */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Stay Connected</h4>
            <p className="text-slate-300">
              Get the latest AI insights and updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" size="sm">
                Subscribe to Newsletter
              </Button>
            </div>
            <div className="pt-4">
              <Link to="/demo">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Neural AI. All rights reserved. Transforming businesses through intelligent automation.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="text-slate-400">Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
