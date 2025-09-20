import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-hero border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-gradient">Neural AI</span>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses with intelligent AI solutions. 
              Increase revenue and drive business growth with AI-powered ecosystems that learn, adapt, and deliver bespoke solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Portfolio
              </Link>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                FAQ
              </Link>
              <Link
                to="/demo"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Demo
              </Link>
              <Link
                to="/careers"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Careers
              </Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Get AI insights and updates delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card border-border"
              />
              <Button className="w-full" size="sm" variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Neural AI. All rights reserved. Go Beyond Automation and Transform Your Business.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
