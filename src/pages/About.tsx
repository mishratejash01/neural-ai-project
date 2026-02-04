import React, { useEffect, useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Zap, Shield, Brain, ArrowRight } from "lucide-react";
import TeamSection from "@/components/ui/team";
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";
import placeholderHero from "@/assets/neural-ai-hero.jpg";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
}

const About = () => {
    const [heroImage, setHeroImage] = useState<string>(placeholderHero);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    // Refs for scroll effects
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax effect for the hero image (moves slower than scroll)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: imgData } = await supabase
                .from('about_hero_images')
                .select('image_url')
                .eq('is_active', true)
                .limit(1)
                .single();

            if (imgData?.image_url) setHeroImage(imgData.image_url);

            const { data: blogData, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (blogData) setBlogs(blogData);
            if (error) console.error("Error fetching blogs:", error);
        };

        fetchData();
    }, []);

    const edgeFeatures = [
        { icon: Brain, title: "Research-Driven Core", description: "Solutions built on deep-tech research from IIT Madras." },
        { icon: Zap, title: "Real-Time Processing", description: "Edge computing models delivering instant insights." },
        { icon: Shield, title: "Ethical & Secure", description: "Security protocols designed to protect data integrity." },
        { icon: Target, title: "Business-First ROI", description: "Engineered to solve problems and deliver measurable ROI." }
    ];

    return (
        <Layout>
            {/* ZOOMED OUT WRAPPER 
                scale-90 reduces size to 90%.
                w-[111.11%] compensates for the width loss (100/0.9 = 111.11).
                -ml-[5.55%] centers the scaled content ((111.11 - 100) / 2 = 5.55).
            */}
            <div className="relative w-full overflow-hidden">
                 <div className="transform-gpu scale-90 w-[111.11%] -ml-[5.55%] origin-top will-change-transform">
                    
                    {/* 1. HERO - With Parallax Smoothness */}
                    <div ref={containerRef} className="relative w-full h-[111vh] bg-gray-100 overflow-hidden">
                        <motion.div 
                            style={{ y, opacity }} 
                            className="absolute inset-0 w-full h-full"
                        >
                            <img 
                                src={heroImage} 
                                alt="Neural AI Hero" 
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </motion.div>
                        {/* Optional Gradient Overlay for text readability if needed later */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* 2. THE NEURAL AI EDGE */}
                    <section className="py-32 bg-white text-gray-900">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                                        The Neural AI <span className="text-blue-600">Edge</span>
                                    </h2>
                                    <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
                                        Why industry leaders choose us to power their intelligence infrastructure.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                {edgeFeatures.map((feature, index) => (
                                    <motion.div 
                                        key={index} 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 group"
                                    >
                                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                                            <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. BACKED BY VISIONARIES */}
                    <section className="py-32 bg-gray-50 border-y border-gray-200">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="text-left space-y-8"
                                >
                                    <h2 className="text-5xl font-bold text-gray-900">
                                        Backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Visionaries</span>
                                    </h2>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        Neural AI is proud to be incubated by <span className="text-gray-900 font-bold">Nirmaan</span>, 
                                        the deep-tech startup hub at <span className="text-gray-900 font-bold">IIT Madras</span>. 
                                    </p>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex items-center justify-center"
                                >
                                     <div className="relative p-12 bg-white rounded-[2rem] border border-gray-200 w-full max-w-xl shadow-2xl">
                                        <div className="relative flex justify-around items-center gap-10">
                                            <img src={nirmaanLogo} alt="Nirmaan" className="h-24 md:h-28 w-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100" />
                                            <div className="h-20 w-px bg-gray-200"></div>
                                            <img src={iitmLogo} alt="IIT Madras" className="h-24 md:h-28 w-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 4. MANAGEMENT PORTFOLIO */}
                    <section className="bg-white relative">
                        <div className="py-28 bg-gradient-to-b from-white to-gray-50">
                            <div className="text-center pb-12">
                                 <span className="text-sm font-mono text-blue-600 tracking-[0.2em] uppercase mb-4 block font-bold">
                                    Leadership & Engineering
                                 </span>
                                 <h2 className="text-5xl font-bold text-gray-900">Management Portfolio</h2>
                            </div>
                            <div className="text-gray-900 px-4"> 
                                <TeamSection />
                            </div>
                        </div>
                    </section>

                    {/* 5. LATEST INSIGHTS (SLIDING BLOGS) */}
                    <section className="py-32 bg-white relative overflow-hidden">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                                <div className="max-w-3xl">
                                    <h2 className="text-5xl font-bold text-gray-900 mb-6">Latest <span className="text-blue-600">Insights</span></h2>
                                    <p className="text-xl text-gray-600">
                                        Explore our latest thoughts on AI, technology, and the future of business.
                                    </p>
                                </div>
                            </div>

                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-4">
                                    {blogs.map((blog) => (
                                        <CarouselItem key={blog.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                            <Link to={`/blog/${blog.id}`} className="block h-full"> 
                                                <div className="p-2 h-full">
                                                    <Card className="h-full border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white rounded-3xl">
                                                        {/* Blog Image */}
                                                        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                                            {blog.image_url ? (
                                                                <img 
                                                                    src={blog.image_url} 
                                                                    alt={blog.title}
                                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                                />
                                                            ) : (
                                                                <div className="flex items-center justify-center h-full text-gray-400">
                                                                    <Brain className="w-16 h-16 opacity-20" />
                                                                </div>
                                                            )}
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                                        </div>

                                                        <CardContent className="p-8 flex flex-col h-[calc(100%-16rem)]">
                                                            <div className="mb-6">
                                                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                                                                    Article
                                                                </span>
                                                                <h3 className="text-2xl font-bold text-gray-900 mt-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                                                    {blog.title}
                                                                </h3>
                                                            </div>
                                                            
                                                            <p className="text-gray-600 mb-8 line-clamp-3 flex-grow text-base leading-relaxed">
                                                                {blog.excerpt}
                                                            </p>
                                                            
                                                            <div className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
                                                                Read More <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </Link>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="flex justify-end gap-3 mt-10">
                                    <CarouselPrevious className="static translate-y-0 border-gray-300 hover:bg-gray-100 w-12 h-12" />
                                    <CarouselNext className="static translate-y-0 border-gray-300 hover:bg-gray-100 w-12 h-12" />
                                </div>
                            </Carousel>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default About;
