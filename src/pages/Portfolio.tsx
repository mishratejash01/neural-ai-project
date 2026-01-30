import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowRight, Search, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

// Sample Data (In a real app, fetch this from Supabase)
const articles = [
  {
    id: 1,
    title: "How AI Saved a Mumbai Fashion Retailer 27% in Lost Sales",
    excerpt: "A deep dive into the implementation of conversational AI for lifestyle brands. We explore the technical challenges of Hinglish NLP and the operational impact on support teams.",
    category: "Retail & E-commerce",
    author: "Tejash Mishra",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    slug: "retail-chatbot-lifestyle-store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Predictive Analytics: Ending the Hospital Waiting Game",
    excerpt: "By analyzing 5 years of admission data, this healthcare provider reduced patient wait times by 33%. Here is the architectural breakdown of the solution.",
    category: "Healthcare",
    author: "Saurabh Shanu",
    date: "Sep 28, 2024",
    readTime: "12 min read",
    slug: "predictive-analytics-healthcare",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0674c6c?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 3,
    title: "Zero Defects: Computer Vision on the Assembly Line",
    excerpt: "Automotive parts manufacturing demands precision. See how we achieved 99.7% defect detection accuracy using edge-deployed YOLO models.",
    category: "Manufacturing",
    author: "Harshil Handoo",
    date: "Sep 15, 2024",
    readTime: "10 min read",
    slug: "computer-vision-manufacturing",
    image: "https://images.unsplash.com/photo-1565514020176-6c2235c8e899?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 4,
    title: "Scaling FinTech: The AI Marketing Revolution",
    excerpt: "Marketing automation isn't just about emails. It's about hyper-personalization at scale. A case study on increasing lead conversion by 60%.",
    category: "FinTech",
    author: "Jaydev Paul",
    date: "Aug 30, 2024",
    readTime: "6 min read",
    slug: "ai-marketing-automation-fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 5,
    title: "Breaking Language Barriers in EdTech",
    excerpt: "India speaks many languages. We built a multilingual sentiment analysis engine to help an EdTech giant understand their students better.",
    category: "Education",
    author: "Roshan Singh",
    date: "Aug 12, 2024",
    readTime: "7 min read",
    slug: "nlp-edtech",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 6,
    title: "Logistics Optimization in Chaos",
    excerpt: "Route planning in unstructured traffic environments requires more than just GPS. How we used AI to optimize fleet tracking.",
    category: "Logistics",
    author: "Srijan Anand",
    date: "Jul 22, 2024",
    readTime: "9 min read",
    slug: "logistics-optimization",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    featured: false
  }
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter articles based on search
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticle = articles.find(a => a.featured);

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-4 border-b border-border/40 bg-surface-dark/30">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Neural <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Deep dives into Artificial Intelligence, case studies from Indian markets, and engineering breakthroughs from our team.
            </p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles, topics, or industries..." 
                className="pl-10 h-12 rounded-full border-border bg-background/50 backdrop-blur-sm focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-7xl px-4 py-16">
          {/* Featured Article - Newspaper Headline Style */}
          {!searchTerm && featuredArticle && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <Link to={`/portfolio/${featuredArticle.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
                    <div className="aspect-[16/9] lg:aspect-[2/1] overflow-hidden">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                    <Badge variant="outline" className="w-fit px-3 py-1 border-primary/50 text-primary uppercase tracking-wider text-xs font-semibold">
                      Featured Story
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground/80 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <Separator className="mb-16 opacity-50" />

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/portfolio/${article.slug}`} className="group flex flex-col h-full">
                  <div className="mb-6 overflow-hidden rounded-2xl border border-border/50 shadow-card aspect-[3/2]">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="bg-secondary/30 text-secondary-foreground hover:bg-secondary/50">
                        {article.category}
                      </Badge>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" /> {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
                      <span className="text-sm font-medium text-foreground/80">
                        {article.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
             <div className="text-center py-20">
               <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
               <Button variant="link" onClick={() => setSearchTerm("")}>Clear Search</Button>
             </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
