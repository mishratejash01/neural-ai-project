import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Printer,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/neural-ai-hero.jpg";

// --- Types representing Backend Data Schema ---
interface ArticleStats {
  label: string;
  value: string;
  icon: string; // stored as string in DB, mapped to component
}

interface ArticleData {
  id: string;
  headline: string;
  subheadline: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  published_at: string;
  read_time: string;
  hero_image: string;
  content_html: string; // Simulating rich text from backend
  stats: ArticleStats[];
}

interface RelatedLink {
  id: string;
  category: string;
  title: string;
  url: string;
}

const ChatbotsService = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  // --- Simulate Backend Fetch (e.g., Supabase .select()) ---
  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Mock Data Response
      setArticle({
        id: "cs-retail-001",
        category: "Retail Intelligence",
        headline: "How AI Saved a Mumbai Fashion Retailer 27% in Lost Sales",
        subheadline: "A deep dive into how automating Instagram DMs and website queries turned customer service into a revenue engine.",
        author: {
          name: "Tejash Mishra",
          role: "Lead AI Engineer",
          image: "/placeholder.svg"
        },
        published_at: "October 24, 2024",
        read_time: "7 min read",
        hero_image: heroImage,
        // In a real app, this would be sanitized HTML from a CMS
        content_html: "", 
        stats: [
          { label: "Sales Increase", value: "+27%", icon: "trending" },
          { label: "Response Time", value: "-90%", icon: "clock" },
          { label: "Auto-Resolved", value: "85%", icon: "message" },
        ]
      });
      setLoading(false);
    };

    fetchArticle();
  }, []);

  // --- Icon Mapper ---
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "trending": return <TrendingUp className="w-6 h-6 text-gray-400 mx-auto mb-2" />;
      case "clock": return <Clock className="w-6 h-6 text-gray-400 mx-auto mb-2" />;
      case "message": return <MessageCircle className="w-6 h-6 text-gray-400 mx-auto mb-2" />;
      default: return null;
    }
  };

  // --- Related Links Data (Hardcoded to point to current page as requested) ---
  const relatedLinks: RelatedLink[] = [
    { id: "1", category: "Logistics", title: "Optimizing Last-Mile Delivery for a Delhi Courier Giant", url: "/retail-chatbot" },
    { id: "2", category: "EdTech", title: "Personalized Learning Paths for IIT Aspirants", url: "/retail-chatbot" },
    { id: "3", category: "Market Analysis", title: "The State of AI in Indian E-Commerce 2025", url: "/retail-chatbot" }
  ];

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
          --font-serif: 'Lora', serif;
          --font-sans: 'Inter', sans-serif;
        }
        
        .drop-cap::first-letter {
          font-size: 3.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.8;
          margin-right: 0.5rem;
          margin-top: 0.2rem;
        }
      `}</style>

      <main className="min-h-screen bg-[#fcfcfc] text-gray-900 pt-24 pb-20 font-[var(--font-serif)]">
        
        {loading ? (
          // --- Loading Skeleton ---
          <div className="container mx-auto px-4 max-w-[1080px]">
             <Skeleton className="h-8 w-32 mb-4" />
             <Skeleton className="h-16 w-3/4 mb-4" />
             <Skeleton className="h-6 w-1/2 mb-8" />
             <Skeleton className="h-[400px] w-full rounded-sm" />
          </div>
        ) : article ? (
          <>
            {/* --- Article Header --- */}
            <header className="container mx-auto px-4 mb-10 max-w-[1080px] border-b border-gray-200 pb-10">
              <div className="flex items-center gap-2 mb-6 font-[var(--font-sans)] text-xs font-bold uppercase tracking-widest text-red-700">
                <span className="w-2 h-2 bg-red-700 rounded-full inline-block"></span>
                {article.category}
              </div>

              <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold mb-6 tracking-tight text-black">
                {article.headline}
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl font-normal mb-8">
                {article.subheadline}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 font-[var(--font-sans)]">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-gray-200">
                    <AvatarImage src={article.author.image} />
                    <AvatarFallback className="bg-gray-100 text-gray-900 font-bold">TM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-gray-900 text-sm uppercase tracking-wide">By {article.author.name}</div>
                    <div className="text-gray-500 text-xs">{article.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold uppercase tracking-widest">
                  <span>{article.published_at}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{article.read_time}</span>
                  <div className="flex gap-2 ml-4">
                     <Button variant="ghost" size="icon" className="h-8 w-8"><Share2 className="w-4 h-4" /></Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8"><Printer className="w-4 h-4" /></Button>
                  </div>
                </div>
              </div>
            </header>

            {/* --- Hero Image --- */}
            <div className="container mx-auto px-4 mb-14 max-w-[1080px]">
              <figure>
                <div className="rounded-sm overflow-hidden shadow-sm border border-gray-100 relative">
                  <img 
                    src={article.hero_image} 
                    alt="Dashboard" 
                    className="w-full h-auto object-cover max-h-[600px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 bg-black/70 text-white px-4 py-2 font-[var(--font-sans)] text-xs uppercase tracking-wider backdrop-blur-sm">
                    Figure 1.0: Real-time Analytics
                  </div>
                </div>
                <figcaption className="mt-3 text-sm text-gray-500 font-[var(--font-sans)] text-center italic">
                  The Neural AI dashboard monitoring live customer interactions in Mumbai.
                </figcaption>
              </figure>
            </div>

            {/* --- Main Content Grid --- */}
            <div className="container mx-auto px-4 max-w-[1080px]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20">
                
                {/* --- Article Body --- */}
                <article className="prose prose-lg prose-slate max-w-none font-[var(--font-serif)] text-gray-800">
                  
                  {/* Executive Summary Card */}
                  <div className="bg-gray-50 border-y border-gray-200 p-6 mb-10 not-prose font-[var(--font-sans)]">
                    <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3">Project Brief</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="font-bold text-gray-900">Client:</span> StyleHub Mumbai</div>
                      <div><span className="font-bold text-gray-900">Duration:</span> 4 Weeks</div>
                      <div className="col-span-2"><span className="font-bold text-gray-900">Core Tech:</span> RAG, GPT-4o, Shopify API</div>
                    </div>
                  </div>

                  <div className="drop-cap text-xl leading-8 mb-8">
                    The fashion retail landscape in Mumbai is notoriously competitive. For <span className="font-semibold text-black">StyleHub</span>, a rising D2C brand, the primary bottleneck wasn't traffic—it was engagement. With over 50,000 Instagram followers, their support team was drowning in DMs asking for "price," "size," and "availability," leading to response delays of up to 6 hours.
                  </div>

                  <p className="text-xl leading-8 mb-10">
                    By the time a human agent responded, the customer had often moved on. We identified this <strong>"Response Gap"</strong> as the single largest leak in their sales funnel. The objective was clear: automate the conversation without losing the "Mumbai chic" voice that defined their brand.
                  </p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 font-[var(--font-sans)] text-black border-l-4 border-red-700 pl-4">
                    The Challenge: Scaling the Personal Touch
                  </h2>
                  <p className="text-xl leading-8 mb-6">
                    The client wanted to automate responses but refused to use "dumb bots" that offer rigid menu options. Their brand voice was personal and helpful. They needed a solution that could:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-10 font-[var(--font-sans)] text-base text-gray-700">
                    <li>Handle <strong>Hinglish</strong> (Hindi + English) queries naturally.</li>
                    <li>Check real-time inventory from their Shopify backend.</li>
                    <li>Suggest matching accessories (Cross-selling).</li>
                  </ul>

                  {/* Stats Breakout */}
                  <div className="my-12 grid grid-cols-3 gap-4 border-y border-black py-8 not-prose">
                    {article.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        {getIcon(stat.icon)}
                        <div className="text-3xl font-bold font-[var(--font-sans)] text-black">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-[var(--font-sans)] mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6 font-[var(--font-sans)] text-black border-l-4 border-red-700 pl-4">
                    The Solution: Neural Context Engine
                  </h2>
                  <p className="text-xl leading-8 mb-8">
                    We deployed our proprietary <strong>Retail-RAG</strong> architecture. Unlike standard chatbots, this system was fed the client's entire style guide and past 6 months of customer service logs. It allows the AI to "remember" context across platforms—if a user asks about a dress on Instagram and follows up on the website, the bot knows.
                  </p>
                  
                  <div className="bg-black text-white p-8 rounded-sm my-12 not-prose">
                    <h3 className="text-2xl font-[var(--font-sans)] font-bold mb-4">Ready to replicate these results?</h3>
                    <p className="text-gray-300 mb-6 font-[var(--font-serif)] italic text-lg">
                      We are currently accepting two new retail partners for Q4 2024 strategies.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 text-sm uppercase tracking-widest w-full md:w-auto">
                        Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>

                {/* --- Sidebar --- */}
                <aside className="border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-10 mt-12 lg:mt-0 font-[var(--font-sans)]">
                  <div className="sticky top-24">
                    
                    {/* Newsletter Widget */}
                    <div className="bg-gray-100 p-6 mb-10 text-center">
                       <h4 className="font-bold text-lg mb-2">Neural Intelligence</h4>
                       <p className="text-xs text-gray-500 mb-4">Weekly analysis of AI in enterprise.</p>
                       <Button className="w-full bg-black text-white h-8 text-xs uppercase tracking-widest">Subscribe</Button>
                    </div>

                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-red-700">Read Next</span>
                    </div>
                    <Separator className="mb-6 bg-black h-[2px]" />

                    <div className="space-y-8">
                      {relatedLinks.map((link) => (
                        <Link key={link.id} to={link.url} className="group block">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-red-700 transition-colors">
                            {link.category}
                          </div>
                          <h4 className="text-base font-bold text-gray-900 leading-tight group-hover:underline decoration-1 underline-offset-4">
                            {link.title}
                          </h4>
                          <div className="mt-2 text-xs text-gray-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            Read Case Study <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Separator className="my-8" />
                    
                    <div className="text-center">
                       <h5 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Share this story</h5>
                       <div className="flex justify-center gap-2">
                          <Button variant="outline" size="icon" className="rounded-full border-gray-300"><Share2 className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon" className="rounded-full border-gray-300"><Bookmark className="w-4 h-4" /></Button>
                          <Button variant="outline" size="icon" className="rounded-full border-gray-300"><Printer className="w-4 h-4" /></Button>
                       </div>
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-red-600">Failed to load content.</div>
        )}
      </main>
    </Layout>
  );
};

export default ChatbotsService;
