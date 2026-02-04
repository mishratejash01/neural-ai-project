import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
            <Button>Return to Insights</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Format date
  const date = new Date(blog.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20 pt-24">
        {/* Header Section */}
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/about">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-gray-500 hover:text-blue-600">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
            </Button>
          </Link>

          <div className="space-y-6 mb-12">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium">
              Insight
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                5 min read
              </div>
              <Button variant="ghost" size="sm" className="ml-auto text-gray-500 hover:text-blue-600">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[600px] bg-gray-100 mb-16 overflow-hidden">
          <img 
            src={blog.image_url || "/placeholder.svg"} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-lg prose-blue mx-auto text-gray-700 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
