import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  // 1. Fetch Blog Data
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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

  // Helper: Date Formatting
  const date = new Date(blog.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      {/* --- SCROLL PROGRESS BAR --- */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#2563eb] z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* ADDED: pt-28 to push content below the fixed navbar 
         KEPT: selection colors and Inter font
      */}
      <div className="bg-white min-h-screen pb-40 pt-28 font-['Inter'] selection:bg-gray-100 selection:text-black">
        
        {/* MAIN CONTAINER: W-75% */}
        <main className="w-[75%] mx-auto">
          
          {/* --- TOP METADATA --- */}
          <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex flex-col">
               <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">
                  Engineering Insights
               </Link>
               <span className="text-sm font-medium text-gray-900 mt-2">{date}</span>
            </div>
            <Link to="/about" className="group flex items-center text-gray-400 hover:text-black transition-colors">
                <span className="text-xs font-medium mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Back</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* --- HERO IMAGE --- */}
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-gray-100 shadow-sm relative group">
            {blog.image_url ? (
               <img 
                 src={blog.image_url} 
                 alt={blog.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                    No Cover Image
                </div>
            )}
          </div>

          {/* --- MAIN HEADING --- */}
          <h1 className="text-5xl md:text-[4rem] leading-[1.1] font-extrabold tracking-[-0.04em] text-black mb-16 max-w-none">
             {blog.title}
          </h1>

          {/* --- CONTENT BODY --- */}
          <div className="w-full">
            <div className="prose prose-xl max-w-none text-[1.25rem] leading-[1.8] text-gray-800 font-normal whitespace-pre-wrap">
               {blog.content}
            </div>
          </div>

          {/* --- FOOTER (Doc ID Removed) --- */}
          <div className="mt-32 pt-10 border-t border-gray-100 flex justify-end items-center">
            {/* Removed Doc ID Section */}
            <div className="flex items-center space-x-3">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">System Active</span>
            </div>
          </div>

        </main>
      </div>
    </Layout>
  );
};

export default BlogDetail;
