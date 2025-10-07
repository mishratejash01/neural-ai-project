import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";
import neuralAILogo from "@/assets/download__1_-removebg-preview.png";

const Footer = () => {
    return (
        <footer className="bg-background-dark text-foreground-dark border-t border-border">
            <div className="container mx-auto px-4 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2">
                          <img src={neuralAILogo} alt="Neural AI Logo" className="h-10 w-auto" />
                        </Link>
                        <p className="text-muted-foreground">
                            Transforming businesses with intelligent AI solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
                        <p className="text-muted-foreground mb-4">Join our newsletter for the latest in AI.</p>
                        <form className="flex">
                            <Input type="email" placeholder="Enter your email" className="bg-background border-border rounded-r-none" />
                            <Button type="submit" variant="neon" className="rounded-l-none">Subscribe</Button>
                        </form>
                    </div>
                </div>

                {/* Incubator Section */}
                <div className="border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground font-semibold mb-4">Incubated by Nirmaan IIT Madras</p>
                    <div className="flex justify-center items-center space-x-6">
                         <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <img src={nirmaanLogo} alt="Nirmaan Logo" className="h-12 w-auto"/>
                         </a>
                         <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <img src={iitmLogo} alt="IIT Madras Logo" className="h-12 w-auto"/>
                         </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Neural AI. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
