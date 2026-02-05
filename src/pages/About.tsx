import React, { useEffect, useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Brain } from "lucide-react";
import TeamSection from "@/components/ui/team";
import placeholderHero from "@/assets/neural-ai-hero.jpg";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
    const [api, setApi] = useState<CarouselApi>();
    
    // Smooth Scroll Refs
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax Effect
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Auto-slide effect for blogs
    useEffect(() => {
        if (!api) {
            return;
        }

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [api]);

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

    return (
        <Layout>
            <div className="w-full bg-white font-['Inter']">
                
                {/* 1. HERO SECTION */}
                <div className="px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-16 bg-white">
                    <div ref={containerRef} className="relative w-full h-[85vh] md:h-[90vh] bg-gray-100 overflow-hidden rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100">
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
                </div>

                {/* 2. NEW DESIGN SECTION */}
                <div className="w-full flex flex-col items-center py-[20px] bg-[radial-gradient(circle_at_center,#e0fbf8_0%,#002d28_100%)] bg-fixed min-h-screen rounded-t-3xl md:rounded-t-[3rem] overflow-hidden">
                    
                    {/* LOGO MARQUEE */}
                    <div 
                        className="w-[95%] max-w-[1100px] py-[40px] overflow-hidden relative"
                        style={{ 
                            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                        }}
                    >
                        <div className="flex w-full">
                            {/* Loop 1 */}
                            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 md:gap-20 px-10">
                                {visionaries.length > 0 ? (
                                    visionaries.map((logo) => (
                                        <img 
                                            key={`l1-${logo.id}`} 
                                            src={logo.logo_url} 
                                            alt={logo.name} 
                                            className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
                                        />
                                    ))
                                ) : (
                                    <div className="text-white/50 text-sm">Loading Partners...</div>
                                )}
                            </div>
                            
                            {/* Loop 2 */}
                            {visionaries.length > 0 && (
                                <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 md:gap-20 px-10">
                                    {visionaries.map((logo) => (
                                        <img 
                                            key={`l2-${logo.id}`} 
                                            src={logo.logo_url} 
                                            alt={logo.name} 
                                            className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* MAIN CONTAINER CARD */}
                    <div className="bg-[#ffffff] rounded-[6px] shadow-[0_20px_50px_rgba(0,40,35,0.2)] max-w-[1100px] w-[95%] py-[70px] px-[40px] mb-[25px] text-center">
                        <h2 className="text-[28px] font-medium text-[#1a2e2b] mb-[60px]">
                            Foundational AI that businesses can rely on
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            
                            {/* Feature 1 */}
                            <div className="flex flex-col items-center px-[40px] border-r-0 md:border-r border-dashed border-[#d1e2e1] max-md:border-b max-md:pb-[50px] max-md:mb-[50px] md:mb-0">
                                <div className="w-[68px] h-[68px] bg-[#f0fdfc] rounded-full flex items-center justify-center mb-[25px] text-[#00695c] border-[2px] border-[#12f7d6] shadow-[0_0_15px_rgba(18,247,214,0.25)]">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                </div>
                                <h3 className="text-[19px] font-semibold text-[#1a2e2b] mb-[15px]">Business First ROI</h3>
                                <p className="text-[14px] leading-[1.6] text-[#506663] max-w-[260px]">
                                    Designed for efficiency and scale. Our AI solutions focus on measurable productivity gains and rapid return on investment for enterprise needs.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col items-center px-[40px] border-r-0 md:border-r border-dashed border-[#d1e2e1] max-md:border-b max-md:pb-[50px] max-md:mb-[50px] md:mb-0">
                                <div className="w-[68px] h-[68px] bg-[#f0fdfc] rounded-full flex items-center justify-center mb-[25px] text-[#00695c] border-[2px] border-[#12f7d6] shadow-[0_0_15px_rgba(18,247,214,0.25)]">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                                </div>
                                <h3 className="text-[19px] font-semibold text-[#1a2e2b] mb-[15px]">Secure & Safe</h3>
                                <p className="text-[14px] leading-[1.6] text-[#506663] max-w-[260px]">
                                    AI that works on-prem, in the cloud, or at the edge. Available wherever you need it with enterprise-grade security.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-col items-center px-[40px]">
                                <div className="w-[68px] h-[68px] bg-[#f0fdfc] rounded-full flex items-center justify-center mb-[25px] text-[#00695c] border-[2px] border-[#12f7d6] shadow-[0_0_15px_rgba(18,247,214,0.25)]">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                </div>
                                <h3 className="text-[19px] font-semibold text-[#1a2e2b] mb-[15px]">State-of-the-art AI</h3>
                                <p className="text-[14px] leading-[1.6] text-[#506663] max-w-[260px]">
                                    Advanced and affordable AI models and tools built so your business can innovate with absolute confidence.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="bg-[rgba(255,255,255,0.96)] rounded-[6px] max-w-[1100px] w-[95%] py-[50px] px-[40px] text-center shadow-[0_10px_30px_rgba(0,40,35,0.15)]">
                        <span className="text-[#00796b] font-bold text-[12px] mb-[12px] block uppercase tracking-[2px]">
                            Neural AI
                        </span>
                        <h1 className="text-[32px] font-semibold text-[#1a2e2b] leading-[1.3]">
                            Effortlessly build, customize, and launch<br className="hidden md:block"/> AI Agents tailored for your business.
                        </h1>
                    </div>

                </div>

                {/* 3. BOARD OF NEURAL AI */}
                <section className="py-24 px-4 md:px-0 bg-white">
                    <div className="text-center pb-12">
                            <h2 className="text-[36px] font-semibold text-gray-900">Board of Neural AI</h2>
                    </div>
                    <div className="text-gray-900"> 
                        <TeamSection />
                    </div>
                </section>

                {/* 4. LATEST INSIGHTS (SLIDING BLOGS) */}
                <section className="py-24 px-4 md:px-16 bg-gray-50/50 rounded-b-[2.5rem]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl px-4 md:px-0">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest <span className="text-blue-600">Insights</span></h2>
                            <p className="text-lg text-gray-600">
                                Explore our latest thoughts on AI, technology, and the future of business.
                            </p>
                        </div>
                    </div>

                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {blogs.map((blog) => (
                                <CarouselItem key={blog.id} className="pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                    <Link to={`/blog/${blog.id}`} className="block h-full"> 
                                        <div className="group h-full cursor-pointer">
                                            {/* Removed hover effects: no shadow hover, no transition for card container */}
                                            <Card className="h-full border-gray-100 shadow-sm overflow-hidden bg-white rounded-xl font-['Inter']">
                                                <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gray-100">
                                                    {blog.image_url ? (
                                                        <img 
                                                            src={blog.image_url} 
                                                            alt={blog.title}
                                                            className="h-full w-full object-cover transition-transform duration-700"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-300">
                                                            <Brain className="w-16 h-16 opacity-30" />
                                                        </div>
                                                    )}
                                                </div>

                                                <CardContent className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-14rem)]">
                                                    <div className="mb-6">
                                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-['Inter']">
                                                            Article
                                                        </span>
                                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 font-['Inter']">
                                                            {blog.title}
                                                        </h3>
                                                    </div>
                                                    
                                                    <p className="text-gray-500 mb-8 line-clamp-3 flex-grow text-sm leading-relaxed font-['Inter']">
                                                        {blog.excerpt}
                                                    </p>
                                                    
                                                    {/* Full width button as per card */}
                                                    <div className="mt-auto w-full pt-2">
                                                        <div className="w-full py-3 bg-gray-50 rounded-lg flex items-center justify-center text-sm font-bold text-gray-900 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300 font-['Inter']">
                                                            Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Removed Manual Arrow Buttons */}
                    </Carousel>
                </section>
            </div>
        </Layout>
    );
};

export default About;
