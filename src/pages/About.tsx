import React, { useEffect, useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Zap, Shield, Brain, ArrowRight } from "lucide-react";
import TeamSection from "@/components/ui/team";
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
import { motion, useScroll, useTransform } from "framer-motion";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
}

interface Visionary {
    id: string;
    name: string;
    logo_url: string;
    website_url?: string;
}

const About = () => {
    const [heroImage, setHeroImage] = useState<string>(placeholderHero);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [visionaries, setVisionaries] = useState<Visionary[]>([]);
    
    // Smooth Scroll Refs
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax Effect
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    useEffect(() => {
        const fetchData = async () => {
            // 1. Fetch Hero Image
            const { data: imgData } = await supabase
                .from('about_hero_images')
                .select('image_url')
                .eq('is_active', true)
                .limit(1)
                .single();

            if (imgData?.image_url) setHeroImage(imgData.image_url);

            // 2. Fetch Blogs
            const { data: blogData } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (blogData) setBlogs(blogData);

            // 3. Fetch Visionaries (Partners/Incubators)
            const { data: visData, error: visError } = await supabase
                .from('visionaries')
                .select('*')
                .order('sort_order', { ascending: true });
            
            if (visData) setVisionaries(visData);
            if (visError) console.error("Error fetching visionaries:", visError);
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
            <div className="w-full bg-white font-['Inter']">
                
                {/* 1. HERO SECTION */}
                <div ref={containerRef} className="relative w-full h-screen bg-gray-100 overflow-hidden">
                    <motion.div 
                        style={{ y }} 
                        className="absolute inset-0 w-full h-full"
                    >
                        <img 
                            src={heroImage} 
                            alt="Neural AI Hero" 
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                </div>

                {/* 2. THE NEURAL AI EDGE */}
                <section className="py-24 px-8 md:px-16">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                            The Neural AI <span className="text-blue-600">Edge</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
                            Why industry leaders choose us to power their intelligence infrastructure.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {edgeFeatures.map((feature, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. VISIONARIES (STATIC LOGOS) */}
                <section className="py-24 px-8 md:px-16 bg-gray-50/30">
                    <div className="container mx-auto">
                        {/* Static Flex Container for Logos */}
                        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
                            {visionaries.length > 0 ? (
                                visionaries.map((v) => (
                                    <div key={v.id} className="group">
                                        <img 
                                            src={v.logo_url} 
                                            alt={v.name} 
                                            className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-400 text-sm italic">Loading Partners...</div>
                            )}
                        </div>

                        {/* TEXT BELOW LOGOS */}
                        <div className="text-center mt-12">
                            <p className="text-gray-400 italic text-lg font-['Inter']">
                                Backing from
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. MANAGEMENT PORTFOLIO */}
                <section className="py-24 px-4 md:px-0 bg-white">
                    <div className="text-center pb-12">
                            <span className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-4 block">
                            Leadership & Engineering
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900">Management Portfolio</h2>
                    </div>
                    <div className="text-gray-900"> 
                        {/* Renders the dynamic TeamSection */}
                        <TeamSection />
                    </div>
                </section>

                {/* 5. LATEST INSIGHTS (SLIDING BLOGS) */}
                <section className="py-24 px-8 md:px-16 bg-gray-50/50 rounded-b-[2.5rem]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest <span className="text-blue-600">Insights</span></h2>
                            <p className="text-lg text-gray-600">
                                Explore our latest thoughts on AI, technology, and the future of business.
                            </p>
                        </div>
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {blogs.map((blog) => (
                                <CarouselItem key={blog.id} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                    <Link to={`/blog/${blog.id}`} className="block h-full"> 
                                        <div className="group h-full cursor-pointer">
                                            <Card className="h-full border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white rounded-3xl">
                                                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                                                    {blog.image_url ? (
                                                        <img 
                                                            src={blog.image_url} 
                                                            alt={blog.title}
                                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-300">
                                                            <Brain className="w-16 h-16 opacity-30" />
                                                        </div>
                                                    )}
                                                </div>

                                                <CardContent className="p-8 flex flex-col h-[calc(100%-14rem)]">
                                                    <div className="mb-6">
                                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                                                            Article
                                                        </span>
                                                        <h3 className="text-xl font-bold text-gray-900 mt-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                                            {blog.title}
                                                        </h3>
                                                    </div>
                                                    
                                                    <p className="text-gray-500 mb-8 line-clamp-3 flex-grow text-sm leading-relaxed">
                                                        {blog.excerpt}
                                                    </p>
                                                    
                                                    <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
                                                        Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Conditionally Render Arrows only if more than 3 blogs */}
                        {blogs.length > 3 && (
                            <div className="flex justify-end gap-3 mt-10">
                                <CarouselPrevious className="static translate-y-0 border-gray-200 hover:bg-white hover:shadow-md w-12 h-12" />
                                <CarouselNext className="static translate-y-0 border-gray-200 hover:bg-white hover:shadow-md w-12 h-12" />
                            </div>
                        )}
                    </Carousel>
                </section>
            </div>
        </Layout>
    );
};

export default About;
