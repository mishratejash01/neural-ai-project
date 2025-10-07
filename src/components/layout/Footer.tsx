import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";

const Footer = () => {
    return (
        <footer className="bg-background-dark text-foreground-dark py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Neural AI</h3>
                        <p className="text-muted-foreground">Transforming businesses with cutting-edge artificial intelligence solutions.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
                        <p className="text-muted-foreground mb-4">Join our newsletter for the latest in AI.</p>
                        <form className="flex">
                            <Input type="email" placeholder="Enter your email" className="bg-background border-border rounded-r-none" />
                            <Button type="submit" variant="primary" className="rounded-l-none">Subscribe</Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    {/* Incubator Section */}
                    <div className="flex items-center space-x-4">
                         <p className="text-sm text-muted-foreground font-semibold">Incubated by</p>
                         <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                            <img src={nirmaanLogo} alt="Nirmaan Logo" className="h-10 w-auto"/>
                         </a>
                         <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                            <img src={iitmLogo} alt="IIT Madras Logo" className="h-10 w-auto"/>
                         </a>
                    </div>
                    
                    {/* Copyright & Socials */}
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Neural AI. All Rights Reserved.</p>
                      <div className="flex space-x-4">
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                      </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
