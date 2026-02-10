// src/pages/Home.tsx

import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { SplineHero } from "@/components/layout/SplineHero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Ensure you have this component, or use a styled span
import { ArrowRight, Calendar, User } from "lucide-react";

// Images for "Backed By" section
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";
// Placeholder image for blogs (using the svg you have)
import placeholderImage from "/placeholder.svg"; 

const Home = () => {
  const featuredBlogs = [
    {
      id: 1,
      category: "Computer Vision",
      title: "The Future of Retail Intelligence",
      excerpt: "How AI-powered computer vision is transforming loss prevention and customer analytics in modern retail stores.",
      date: "Oct 12, 2025",
      author: "Dr. Saurabh Shanu",
      image: placeholderImage // Replace with real image imports if available
    },
    {
      id: 2,
      category: "Enterprise AI",
      title: "Building Custom LLMs for Business",
      excerpt: "A deep dive into fine-tuning large language models on proprietary data for secure and accurate business applications.",
      date: "Sep 28, 2025",
      author: "Tejash Mishra",
      image: placeholderImage
    },
    {
      id: 3,
      category: "Logistics",
      title: "Optimizing Routes with Predictive AI",
      excerpt: "Case study: Reducing delivery times by 30% using neural network-based route optimization algorithms.",
      date: "Sep 15, 2025",
      author: "Srijan Anand",
      image: placeholderImage
    }
  ];

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
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
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

      {/* 5. Featured Blogs Section (Professional / Corporate Design) */}
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
            {featuredBlogs.map((blog) => (
              <Card 
                key={blog.id} 
                className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group flex flex-col h-full"
              >
                {/* Blog Image */}
                <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover text-gray-400 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white font-medium shadow-sm backdrop-blur-sm pointer-events-none">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col p-6">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {blog.author}
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
            ))}
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
