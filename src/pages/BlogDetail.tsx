import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  image_url: string;
  content: string;
  created_at: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Fetch Blog Data from Supabase
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching blog:", error);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  // 2. Reading Progress Bar Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) return;

      const scroll = totalScroll / windowHeight;
      setScrollProgress(Number(scroll));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <Link to="/about">
            <Button variant="outline">Return to Insights</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Helper: Format date to "October 24, 2024" style
  const date = new Date(blog.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Helper: Calculate approx read time
  const wordCount = blog.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <Layout>
      {/* --- SCROLL INDICATOR --- */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-black z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="bg-white min-h-screen pb-32 pt-24 font-['Inter']">
        
        {/* Main Container - Adjusted to capture 75% of the page */}
        <main className="w-[75%] mx-auto">
          
          {/* --- TOP NAV --- */}
          <nav className="mb-12">
            <Link to="/about" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-black transition-colors group">
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
              Insights
            </Link>
          </nav>

          {/* --- HEADER --- */}
          <header className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 bg-gray-50 border border-gray-200 text-gray-500 rounded">
                Engineering
              </span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 text-sm">{date}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-10 tracking-tight leading-[1.05] font-extrabold text-gray-900">
              {blog.title}
            </h1>

            <div className="flex items-center text-sm font-medium text-gray-400 space-x-4 border-b border-gray-100 pb-10">
              <span>By The Neural AI Team</span>
              <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
              <span>{readTime} min read</span>
            </div>
          </header>

          {/* --- CINEMATIC HERO IMAGE --- */}
          <div className="w-full aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden mb-20 shadow-sm border border-gray-100">
            {blog.image_url ? (
               <img 
                 src={blog.image_url} 
                 alt={blog.title} 
                 className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
               />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                    No Cover Image
                </div>
            )}
          </div>

          {/* --- ARTICLE BODY --- */}
          {/* Increased max-width to max-w-4xl to better utilize the 75% width container while maintaining readability */}
          <div className="max-w-4xl mx-auto">
            
            <div className="prose prose-lg prose-slate max-w-none text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
               {blog.content}
            </div>

            {/* --- FOOTER DETAIL --- */}
            <div className="mt-24 pt-12 border-t border-gray-100 flex items-center justify-between">
              <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Ref: Insight-{new Date(blog.created_at).getFullYear()}-{blog.id.slice(0, 4)}
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors text-gray-600"
                  aria-label="Scroll to top"
                >
                  ↑
                </button>
              </div>
            </div>

          </div>

        </main>
      </div>
    </Layout>
  );
};

export default BlogDetail;
