import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Target, Zap, Shield, Brain, ArrowRight } from "lucide-react";
import TeamSection from "@/components/ui/team";
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";
import placeholderHero from "@/assets/neural-ai-hero.jpg"; // Using existing asset as placeholder

const About = () => {
    
    // Data for "The Neural AI Edge"
    const edgeFeatures = [
        {
            icon: Brain,
            title: "Research-Driven Core",
            description: "Our solutions aren't just wrappers—they are built on deep-tech research from IIT Madras, ensuring state-of-the-art performance."
        },
        {
            icon: Zap,
            title: "Real-Time Processing",
            description: "We optimize for speed. Our edge computing models deliver instant insights, crucial for security and automation."
        },
        {
            icon: Shield,
            title: "Ethical & Secure",
            description: "We build AI that respects privacy. Our security protocols are designed to protect data integrity at every step."
        },
        {
            icon: Target,
            title: "Business-First ROI",
            description: "We don't do AI for hype. Every solution is engineered to solve a specific business problem and deliver measurable ROI."
        }
    ];

    return (
        <Layout>
            
            {/* 1. IMAGE PLACEHOLDER (Full Landing Page Size) */}
            <div className="relative w-full h-screen bg-black overflow-hidden">
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0">
                    <img 
                        src={placeholderHero} 
                        alt="Neural AI Team" 
                        className="w-full h-full object-cover opacity-50 hover:scale-105 transition-transform duration-[20s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Text Overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
                        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Neural AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                        Building the intelligence layer for the next generation of businesses.
                    </p>
                </div>
            </div>

            {/* 2. THE NEURAL AI EDGE */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            The Neural AI <span className="text-blue-500">Edge</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Why industry leaders choose us to power their intelligence infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {edgeFeatures.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BACKED BY VISIONARIES */}
            <section className="py-24 bg-zinc-950 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6">
                            <h2 className="text-4xl font-bold text-white">
                                Backed by <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Visionaries</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Neural AI is proud to be incubated by <span className="text-white font-semibold">Nirmaan</span>, 
                                the deep-tech startup hub at <span className="text-white font-semibold">IIT Madras</span>. 
                                This incubation provides us with elite mentorship, access to cutting-edge research facilities, 
                                and a world-class ecosystem to build the future of artificial intelligence.
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-center">
                             <div className="relative p-10 bg-black rounded-3xl border border-white/10 w-full max-w-lg shadow-2xl">
                                <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                                <div className="relative flex justify-around items-center gap-8">
                                    <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="group">
                                        <img src={nirmaanLogo} alt="Nirmaan IIT Madras" className="h-20 md:h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100" />
                                    </a>
                                    <div className="h-16 w-px bg-white/10"></div>
                                    <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="group">
                                        <img src={iitmLogo} alt="IIT Madras" className="h-20 md:h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MANAGEMENT PORTFOLIO (Team Section) */}
            <section className="bg-black relative">
                <div className="py-12 bg-gradient-to-b from-black to-zinc-900/50">
                    <div className="text-center pt-16 pb-4">
                         {/* Optional Title Wrapper if you want to explicitly say "Management Portfolio" above the component's title */}
                         <span className="text-sm font-mono text-blue-500 tracking-widest uppercase mb-2 block">Leadership & Engineering</span>
                         <h2 className="text-4xl font-bold text-white">Management Portfolio</h2>
                    </div>
                    {/* The TeamSection component contains the grid of founders and engineers */}
                    <TeamSection />
                </div>
            </section>

            {/* 5. HAVE A LOOK TO OUR SERVICES */}
            <section className="py-32 bg-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Have a look at our <span className="text-blue-500">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        From Computer Vision to Predictive Analytics, discover how our AI solutions can transform your business today.
                    </p>
                    
                    <Link to="/services">
                        <Button 
                            size="lg" 
                            className="h-14 px-10 text-lg bg-white text-black hover:bg-gray-200 rounded-full font-semibold transition-all hover:scale-105"
                        >
                            View All Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

        </Layout>
    );
};

export default About;
