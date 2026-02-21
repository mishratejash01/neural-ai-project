// src/pages/Home.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client"; // Import Supabase client
import Layout from "@/components/layout/Layout";
import { SplineHero } from "@/components/layout/SplineHero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; 
import { ArrowRight, Calendar, User, Sparkles, BrainCircuit } from "lucide-react";

// Images for "Backed By" section
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";

// Interface matching your Supabase table
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string | null;
  created_at: string;
}

const Home = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch latest 3 blogs from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching blogs:', error);
        } else if (data) {
          setBlogs(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Helper to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <SplineHero />

      {/* 2. Backed By Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Incubated & Backed By
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-100 transition-all duration-500">
              <a 
                href="https://nirmaan.iitm.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={nirmaanLogo} 
                  alt="Nirmaan IIT Madras" 
                  className="h-14 md:h-16 w-auto object-contain" 
                />
              </a>
              <a 
                href="https://www.iitm.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={iitmLogo} 
                  alt="IIT Madras" 
                  className="h-14 md:h-16 w-auto object-contain" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Anant 1.0 Sovereign LLM Announcement Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white shadow-2xl border border-gray-800 transition-transform duration-500 hover:scale-[1.01]">
            {/* Abstract background ambient glows */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-medium text-blue-200 shadow-inner">
                  <Sparkles className="w-4 h-4 text-blue-300" />
                  <span>Project Announcement</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2">
                  Anant 1.0
                </h2>
                
                <p className="text-xl md:text-2xl font-light text-gray-300">
                  Our Sovereign Large Language Model
                </p>
                
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                  We are building the future of independent AI. Anant 1.0 is a highly secure, sovereign foundation model engineered for contextual depth, strict data privacy, and powerful generative capabilities tailored for the future.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Expected Launch</span>
                    <span className="text-xl font-semibold text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      May 2027
                    </span>
                  </div>
                  <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 transition-colors rounded-full px-8 py-6 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    Join the Waitlist
                  </Button>
                </div>
              </div>

              {/* Visual representation / icon */}
              <div className="hidden lg:flex items-center justify-center relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white/5 border border-white/10 p-8 rounded-full backdrop-blur-sm shadow-2xl">
                  <BrainCircuit className="w-24 h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Showcase Section */}
      <ProductShowcase />

      {/* 4. Trusted By Innovators Section */}
      <ClientLogos />

      {/* 5. Featured Blogs Section (Connected to Supabase) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-200 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                Latest Insights
              </h2>
              <p className="text-lg text-gray-600">
                Trends, strategies, and success stories from our engineering team.
              </p>
            </div>
            <Link to="/about">
              <Button variant="outline" className="hidden md:flex">
                View All Articles
              </Button>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              // Loading Skeletons
              [1, 2, 3].map((i) => (
                <div key={i} className="h-[400px] bg-white rounded-xl border border-gray-200 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-xl" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 w-1/3 rounded" />
                    <div className="h-8 bg-gray-200 w-3/4 rounded" />
                    <div className="h-20 bg-gray-200 w-full rounded" />
                  </div>
                </div>
              ))
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <Card 
                  key={blog.id} 
                  className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group flex flex-col h-full"
                >
                  {/* Blog Image */}
                  <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                    {blog.image_url ? (
                      <img 
                        src={blog.image_url} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                        No Image
                      </div>
                    )}
                    {/* Category Badge - Hardcoded for now as DB doesn't have it */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 hover:bg-white font-medium shadow-sm backdrop-blur-sm pointer-events-none">
                        AI Insights
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="flex-1 flex flex-col p-6">
                    {/* Meta Data */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(blog.created_at)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        Neural AI Team
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                      {blog.excerpt}
                    </p>

                    {/* Footer Link */}
                    <Link 
                      to={`/blog/${blog.id}`} 
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                    >
                      Read Article 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              // Empty State
              <div className="col-span-3 text-center py-12 text-gray-500">
                No articles found. Check back soon!
              </div>
            )}
          </div>
          
          {/* Mobile View All Button */}
          <div className="mt-8 md:hidden text-center">
            <Link to="/about">
              <Button variant="outline" className="w-full">
                View All Articles
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Home;
