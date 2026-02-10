// src/pages/Home.tsx

import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { SplineHero } from "@/components/layout/SplineHero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Images for "Backed By" section
import nirmaanLogo from "@/assets/nirmaan.png";
import iitmLogo from "@/assets/iitm.svg.png";

const Home = () => {
  // Dummy data for Featured Blogs since we don't have a dynamic blog backend yet
  const featuredBlogs = [
    {
      id: 1,
      category: "Computer Vision",
      title: "The Future of Retail Intelligence",
      excerpt: "How AI-powered computer vision is transforming loss prevention and customer analytics in modern retail stores.",
      date: "Oct 12, 2025"
    },
    {
      id: 2,
      category: "Generative AI",
      title: "Building Custom LLMs for Enterprise",
      excerpt: "A deep dive into fine-tuning large language models on proprietary data for secure business applications.",
      date: "Sep 28, 2025"
    },
    {
      id: 3,
      category: "Automation",
      title: "Optimizing Logistics with Predictive AI",
      excerpt: "Case study: Reducing delivery times by 30% using neural network-based route optimization algorithms.",
      date: "Sep 15, 2025"
    }
  ];

  return (
    <Layout>
      {/* 1. Hero Section */}
      <SplineHero />

      {/* 2. Backed By Section */}
      <section className="py-12 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Incubated & Backed By
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
              <a 
                href="https://nirmaan.iitm.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={nirmaanLogo} 
                  alt="Nirmaan IIT Madras" 
                  className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </a>
              <a 
                href="https://www.iitm.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={iitmLogo} 
                  alt="IIT Madras" 
                  className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
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

      {/* 5. Featured Blogs Section */}
      <section className="py-24 bg-surface-dark relative overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="text-gradient">Insights</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Latest updates, technology deep dives, and success stories from our engineering team.
              </p>
            </div>
            <Link to="/about">
              <Button variant="outline" className="group">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <Card 
                key={blog.id} 
                className="bg-card/40 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-card/60 transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative gradient top bar */}
                <div className="h-2 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {blog.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Read Article 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
