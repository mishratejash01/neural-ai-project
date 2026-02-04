import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom"; // Import Link
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

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  // link is no longer needed since we use dynamic routing
}

const About = () => {
    const [heroImage, setHeroImage] = useState<string>(placeholderHero);
    const [blogs, setBlogs] = useState<Blog[]>([]);

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
            {/* 1. HERO - Clean Image, No Text */}
            <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={heroImage} 
                        alt="Neural AI Hero" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* 2. THE NEURAL AI EDGE */}
            <section className="py-24 bg-white text-gray-900">
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
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BACKED BY VISIONARIES */}
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
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                             <div className="relative p-10 bg-white rounded-3xl border border-gray-200 w-full max-w-lg shadow-xl">
                                <div className="relative flex justify-around items-center gap-8">
                                    <img src={nirmaanLogo} alt="Nirmaan" className="h-20 md:h-24 w-auto grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100" />
                                    <div className="h-16 w-px bg-gray-200"></div>
                                    <img src={iitmLogo} alt="IIT Madras" className="h-20 md:h-24 w-auto grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MANAGEMENT PORTFOLIO */}
            <section className="bg-white relative">
                <div className="py-20 bg-gradient-to-b from-white to-gray-50">
                    <div className="text-center pb-8">
                         <span className="text-sm font-mono text-blue-600 tracking-widest uppercase mb-2 block font-bold">Leadership & Engineering</span>
                         <h2 className="text-4xl font-bold text-gray-900">Management Portfolio</h2>
                    </div>
                    <div className="text-gray-900"> 
                        <TeamSection />
                    </div>
                </div>
            </section>

            {/* 5. LATEST INSIGHTS (SLIDING BLOGS) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest <span className="text-blue-600">Insights</span></h2>
                            <p className="text-lg text-gray-600">
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
                                    <Link to={`/blog/${blog.id}`} className="block h-full"> {/* CLICKABLE LINK */}
                                        <div className="p-1 h-full">
                                            <Card className="h-full border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
                                                {/* Blog Image */}
                                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                                    {blog.image_url ? (
                                                        <img 
                                                            src={blog.image_url} 
                                                            alt={blog.title}
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-400">
                                                            <Brain className="w-12 h-12 opacity-20" />
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                                </div>

                                                <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                                                    <div className="mb-4">
                                                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                                            Article
                                                        </span>
                                                        <h3 className="text-xl font-bold text-gray-900 mt-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                            {blog.title}
                                                        </h3>
                                                    </div>
                                                    
                                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                                                        {blog.excerpt}
                                                    </p>
                                                    
                                                    <div className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
                                                        Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-end gap-2 mt-8">
                            <CarouselPrevious className="static translate-y-0 border-gray-300 hover:bg-gray-100" />
                            <CarouselNext className="static translate-y-0 border-gray-300 hover:bg-gray-100" />
                        </div>
                    </Carousel>
                </div>
            </section>

        </Layout>
    );
};

export default About;
