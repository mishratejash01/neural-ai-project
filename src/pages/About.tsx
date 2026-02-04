import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Target, Zap, Shield, Brain, ArrowRight } from "lucide-react";
import TeamSection from "@/components/ui/team";
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";
import placeholderHero from "@/assets/neural-ai-hero.jpg"; // Default fallback
import { supabase } from "@/integrations/supabase/client"; // Ensure this path is correct

const About = () => {
    // State for the Hero Image
    const [heroImage, setHeroImage] = useState<string>(placeholderHero);

    // Fetch Image from Backend
    useEffect(() => {
        const fetchHeroImage = async () => {
            try {
                const { data, error } = await supabase
                    .from('about_hero_images')
                    .select('image_url')
                    .eq('is_active', true)
                    .limit(1)
                    .single();

                if (data?.image_url) {
                    setHeroImage(data.image_url);
                }
                if (error) {
                    console.error("Error fetching hero image:", error);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            }
        };

        fetchHeroImage();
    }, []);

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
            <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
                {/* Background Image (Dynamic) */}
                <div className="absolute inset-0">
                    <img 
                        src={heroImage} 
                        alt="Neural AI Hero" 
                        className="w-full h-full object-cover"
                    />
                    {/* Light Theme Overlay: White tint to ensure text readability if needed, or keep dark overlay for contrast */}
                    {/* For a "Light Theme" vibe, we often still use dark overlays on photos for white text, OR a white overlay for dark text. 
                        Let's stick to a classic Dark Overlay for White Text as it's the standard for hero legibility. */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Text Overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-md">
                        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Neural AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium drop-shadow-sm">
                        Building the intelligence layer for the next generation of businesses.
                    </p>
                </div>
            </div>

            {/* 2. THE NEURAL AI EDGE - Light Theme */}
            <section className="py-24 bg-white text-gray-900 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            The Neural AI <span className="text-blue-600">Edge</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Why industry leaders choose us to power their intelligence infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {edgeFeatures.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BACKED BY VISIONARIES - Light Theme (Alt Background) */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Visionaries</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Neural AI is proud to be incubated by <span className="text-gray-900 font-bold">Nirmaan</span>, 
                                the deep-tech startup hub at <span className="text-gray-900 font-bold">IIT Madras</span>. 
                                This incubation provides us with elite mentorship, access to cutting-edge research facilities, 
                                and a world-class ecosystem to build the future of artificial intelligence.
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-center">
                             <div className="relative p-10 bg-white rounded-3xl border border-gray-200 w-full max-w-lg shadow-xl">
                                {/* Subtle Glow behind logos */}
                                <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                                
                                <div className="relative flex justify-around items-center gap-8">
                                    <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="group">
                                        <img src={nirmaanLogo} alt="Nirmaan IIT Madras" className="h-20 md:h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105" />
                                    </a>
                                    <div className="h-16 w-px bg-gray-200"></div>
                                    <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className="group">
                                        <img src={iitmLogo} alt="IIT Madras" className="h-20 md:h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MANAGEMENT PORTFOLIO (Team Section) - Light Theme */}
            <section className="bg-white relative">
                <div className="py-20 bg-gradient-to-b from-white to-gray-50">
                    <div className="text-center pb-8">
                         <span className="text-sm font-mono text-blue-600 tracking-widest uppercase mb-2 block font-bold">Leadership & Engineering</span>
                         <h2 className="text-4xl font-bold text-gray-900">Management Portfolio</h2>
                    </div>
                    {/* TeamSection will inherit text colors. Ensure it looks good on light bg. */}
                    <div className="text-gray-900"> 
                        <TeamSection />
                    </div>
                </div>
            </section>

            {/* 5. HAVE A LOOK TO OUR SERVICES - Light Theme */}
            <section className="py-32 bg-white text-center relative overflow-hidden">
                {/* Subtle light gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                        Have a look at our <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                        From Computer Vision to Predictive Analytics, discover how our AI solutions can transform your business today.
                    </p>
                    
                    <Link to="/services">
                        <Button 
                            size="lg" 
                            className="h-14 px-10 text-lg bg-black text-white hover:bg-gray-800 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
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
