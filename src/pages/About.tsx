import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";
import TeamSection from "@/components/ui/team";
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";
import { BackgroundCells } from "@/components/ui/background-cells";

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Innovation First",
            description: "We push the boundaries of what's possible with AI, always staying ahead of the curve."
        },
        {
            icon: Users,
            title: "Client Success",
            description: "Your success is our success. We're committed to delivering results that matter."
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, from code quality to customer service."
        }
    ];

    return (
        <Layout>
            {/* Animated Hero Section */}
            <BackgroundCells>
              <div className="text-center">
                <h1 className="md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
                    About <span className="text-gradient">Neural AI</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
                    We're a team of AI experts, engineers, and innovators dedicated to making
                    artificial intelligence accessible and transformative for businesses of all sizes.
                </p>
              </div>
            </BackgroundCells>
            
            {/* "Backed by Visionaries" Section with restored text */}
            <section className="py-24 bg-surface-dark">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">
                            Backed by <span className="text-gradient">Visionaries</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* --- THIS IS THE RESTORED TEXT --- */}
                        <div className="text-center lg:text-left">
                            <p className="text-2xl text-muted-foreground font-semibold">
                                Incubated by Nirmaan IIT Madras
                            </p>
                        </div>
                        {/* --- END OF RESTORED TEXT --- */}
                        <div className="flex items-center justify-center">
                             <div className="relative p-8 bg-card/50 rounded-2xl border border-border w-full max-w-md">
                                <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-full"></div>
                                <div className="relative flex justify-center items-center space-x-8">
                                    <a href="https://www.nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                                        <img src={nirmaanLogo} alt="Nirmaan IIT Madras Logo" className="h-20 sm:h-24 w-auto transition-transform duration-300 hover:scale-105" />
                                    </a>
                                    <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                                        <img src={iitmLogo} alt="IIT Madras Logo" className="h-20 sm:h-24 w-auto transition-transform duration-300 hover:scale-105" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="gradient-card border-border shadow-card">
                            <CardHeader>
                                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4"><Target className="w-6 h-6 text-white" /></div>
                                <CardTitle className="text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground">To democratize artificial intelligence by creating intelligent, ethical, and accessible AI solutions that empower businesses to achieve breakthrough results.</p></CardContent>
                        </Card>
                        <Card className="gradient-card border-border shadow-card">
                            <CardHeader>
                                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4"><Eye className="w-6 h-6 text-white" /></div>
                                <CardTitle className="text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground">To be the world's most trusted AI partner, leading the transformation of how businesses operate in the digital age.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold mb-6">Our Values</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="gradient-card border-border shadow-card text-center">
                                <CardHeader>
                                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><value.icon className="w-8 h-8 text-white" /></div>
                                    <CardTitle className="text-xl">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-muted-foreground">{value.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Unique Value Section */}
            <section className="py-20 gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">What Makes Neural AI Different?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="space-y-4"><div className="text-3xl font-bold text-gradient">Research-Driven</div><p className="text-muted-foreground">Solutions built on cutting-edge research, not just existing tools.</p></div>
                            <div className="space-y-4"><div className="text-3xl font-bold text-gradient">Business-Focused</div><p className="text-muted-foreground">AI is only valuable if it drives real business outcomes.</p></div>
                            <div className="space-y-4"><div className="text-3xl font-bold text-gradient">Human-Centric</div><p className="text-muted-foreground">We design AI that enhances human capabilities, not replace them.</p></div>
                        </div>
                        <Link to="/services"><Button variant="hero" size="lg">Discover Our Approach <ArrowRight className="ml-2" /></Button></Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
