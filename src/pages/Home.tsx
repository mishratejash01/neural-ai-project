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
import { ArrowRight, Calendar, User } from "lucide-react";

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
