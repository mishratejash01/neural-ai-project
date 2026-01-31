import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ArrowRight,
  TrendingUp,
  Users,
  MessageCircle,
  BarChart3
} from "lucide-react";
import heroImage from "@/assets/neural-ai-hero.jpg";

const ChatbotsService = () => {
  // Case Study Data
  const caseStudy = {
    client: "StyleHub Mumbai",
    industry: "Fashion Retail",
    title: "How AI Saved a Mumbai Fashion Retailer 27% in Lost Sales",
    subtitle: "A deep dive into how automating Instagram DMs and website queries turned customer service into a revenue engine.",
    author: {
      name: "Tejash Mishra",
      image: "/placeholder.svg",
      role: "Lead AI Engineer"
    },
    date: "October 24, 2024",
    readTime: "7 min read",
    tags: ["Case Study", "Retail", "Conversational AI"],
    stats: [
      { label: "Sales Increase", value: "+27%", icon: TrendingUp },
      { label: "Response Time", value: "-90%", icon: Clock },
      { label: "Auto-Resolved", value: "85%", icon: MessageCircle },
    ]
  };

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600;700&display=swap');
        
        :root {
          --text-main: #1a1a1a;
          --text-muted: #555555;
          --border-color: #eeeeee;
        }

        /* Custom scrollbar for code blocks if needed */
        .prose pre::-webkit-scrollbar {
          height: 8px;
        }
        .prose pre::-webkit-scrollbar-thumb {
          background-color: #4a4a4a;
          border-radius: 4px;
        }
      `}</style>

      <article className="min-h-screen bg-white pt-24 pb-20 font-['Lora',serif] text-[#1a1a1a]">
        
        {/* --- Header Section --- */}
        <div className="container mx-auto px-4 mb-12 max-w-[1080px]">
          <div className="text-center md:text-left border-b border-[#eeeeee] pb-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 font-['Inter',sans-serif]">
              {caseStudy.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-black/5 text-black hover:bg-black/10 transition-colors rounded-sm px-3 py-1 uppercase tracking-wider text-xs font-bold">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-[3.2rem] leading-[1.1] font-bold mb-6 tracking-tight text-black">
              {caseStudy.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-[1.35rem] text-[#555555] mb-8 leading-[1.4] max-w-3xl italic">
              {caseStudy.subtitle}
            </p>

            {/* Author & Meta */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 font-['Inter',sans-serif] border-t border-[#eeeeee] mt-8">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-gray-200">
                  <AvatarImage src={caseStudy.author.image} />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-bold text-black text-sm uppercase tracking-wide">{caseStudy.author.name}</div>
                  <div className="text-gray-500 text-xs">{caseStudy.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-8 text-xs text-gray-500 font-semibold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{caseStudy.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{caseStudy.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Hero Image --- */}
        <div className="container mx-auto px-4 mb-16 max-w-[1080px]">
          <div className="rounded-sm overflow-hidden shadow-sm border border-gray-100">
            <img 
              src={heroImage} 
              alt="Retail Analytics Dashboard" 
              className="w-full h-auto object-cover max-h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            <div className="bg-gray-50 p-4 text-center font-['Inter',sans-serif] text-xs text-gray-500 border-t border-gray-100">
              Figure 1.1: The AI Dashboard monitoring real-time customer sentiment and order flow.
            </div>
          </div>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="container mx-auto px-4 max-w-[1080px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            
            {/* Article Body */}
            <div className="prose prose-lg prose-slate max-w-none font-['Lora',serif]">
              
              {/* Executive Summary Block */}
              <div className="bg-slate-50 border-l-4 border-black p-8 mb-12 not-prose">
                <h3 className="font-['Inter',sans-serif] font-bold text-lg mb-4 uppercase tracking-wide">Executive Summary</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Client:</strong> {caseStudy.client}<br/>
                  <strong>Problem:</strong> Overwhelmed support team and 60% cart abandonment on mobile.<br/>
                  <strong>Solution:</strong> A custom GPT-4 integrated chatbot with inventory sync.<br/>
                  <strong>Result:</strong> 27% revenue uplift in Q3 2024.
                </p>
              </div>

              <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] mb-8 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:mt-[-4px]">
                The fashion retail landscape in Mumbai is notoriously competitive. For <strong>{caseStudy.client}</strong>, a rising D2C brand, the primary bottleneck wasn't traffic—it was engagement. With over 50,000 Instagram followers, their support team was drowning in DMs asking for "price," "size," and "availability," leading to response delays of up to 6 hours.
              </p>

              <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] mb-12">
                By the time a human agent responded, the customer had often moved on. We identified this <strong>"Response Gap"</strong> as the single largest leak in their sales funnel.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-black font-['Inter',sans-serif] mt-16">The Challenge: Scaling Personal Touch</h2>
              <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] mb-6">
                The client wanted to automate responses but refused to use "dumb bots" that offer rigid menu options. Their brand voice was chic, personal, and helpful. They needed a solution that could:
              </p>
              <ul className="list-disc pl-6 mb-12 space-y-4 text-lg">
                <li>Handle Hinglish (Hindi + English) queries naturally.</li>
                <li>Check real-time inventory from their Shopify backend.</li>
                <li>Suggest matching accessories (Cross-selling).</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-black font-['Inter',sans-serif] mt-16">The Solution: Neural Context Engine</h2>
              <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] mb-8">
                We deployed our proprietary <strong>Retail-RAG (Retrieval Augmented Generation)</strong> architecture. Unlike standard chatbots, this system was fed the client's entire style guide and past 6 months of customer service logs.
              </p>
              
              <div className="my-12 p-6 border border-gray-200 rounded-lg bg-white not-prose shadow-sm">
                <h4 className="font-['Inter',sans-serif] font-bold text-sm text-gray-400 uppercase mb-4">Architecture Diagram</h4>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-sm font-['Inter',sans-serif] font-medium text-center">
                  <div className="p-4 bg-gray-100 rounded">Instagram API</div>
                  <ArrowRight className="text-gray-400" />
                  <div className="p-4 bg-blue-50 text-blue-700 border border-blue-100 rounded">Neural Middleware</div>
                  <ArrowRight className="text-gray-400" />
                  <div className="p-4 bg-gray-100 rounded">Shopify Inventory</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-black font-['Inter',sans-serif] mt-16">The Impact</h2>
              <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] mb-8">
                The results were immediate. Within the first week of deployment, the "Response Gap" dropped from 6 hours to <strong>12 seconds</strong>.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 not-prose">
                {caseStudy.stats.map((stat, index) => (
                  <div key={index} className="bg-black text-white p-6 rounded-lg text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                    <div className="text-4xl font-bold mb-2 font-['Inter',sans-serif]">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-[1.2rem] leading-[1.8] text-[#1a1a1a] mb-12">
                Most importantly, the AI didn't just answer questions—it sold. By proactively suggesting, <em>"This scarf looks great with the Kurti you're viewing,"</em> the bot increased Average Order Value (AOV) by 15%.
              </p>

              <div className="bg-gray-100 p-8 rounded-xl my-12 not-prose">
                <h3 className="text-2xl font-bold mb-4 font-['Inter',sans-serif]">Ready to replicate these results?</h3>
                <p className="text-gray-600 mb-6 font-['Lora',serif] italic">
                  We are currently accepting two new retail partners for Q4 2024.
                </p>
                <Link to="/contact">
                  <Button className="w-full md:w-auto bg-black text-white hover:bg-gray-800 font-bold px-8 py-4 rounded-none text-sm uppercase tracking-widest">
                    Request a Strategy Session
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="space-y-12 font-['Inter',sans-serif]">
              
              {/* Project Details Card */}
              <div className="bg-white border border-black/10 p-6 shadow-sm">
                <span className="block text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-2 mb-6">
                  Project Data
                </span>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Client</dt>
                    <dd className="font-bold text-black text-lg">StyleHub Mumbai</dd>
                  </div>
                  <Separator />
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Services</dt>
                    <dd className="font-medium text-black">NLP, Shopify API, Automation</dd>
                  </div>
                  <Separator />
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Duration</dt>
                    <dd className="font-medium text-black">4 Weeks (Dev + Deploy)</dd>
                  </div>
                </dl>
              </div>

              {/* More Case Studies */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-2 mb-6">
                  More Case Studies
                </span>
                <div className="space-y-6">
                  <Link to="#" className="block group border-b border-gray-100 pb-5">
                    <span className="block text-[0.7rem] font-bold uppercase text-gray-500 mb-2">
                      Logistics
                    </span>
                    <h4 className="text-md font-bold leading-tight group-hover:underline decoration-2 underline-offset-2">
                      Optimizing Last-Mile Delivery for a Delhi Courier Giant
                    </h4>
                  </Link>
                  
                  <Link to="#" className="block group border-b border-gray-100 pb-5">
                    <span className="block text-[0.7rem] font-bold uppercase text-gray-500 mb-2">
                      EdTech
                    </span>
                    <h4 className="text-md font-bold leading-tight group-hover:underline decoration-2 underline-offset-2">
                      Personalized Learning Paths for IIT Aspirants
                    </h4>
                  </Link>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-4">Share</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-white hover:bg-gray-100 border-gray-200">
                    <Share2 className="mr-2 h-3 w-3" /> Share
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-white hover:bg-gray-100 border-gray-200">
                    <Bookmark className="mr-2 h-3 w-3" /> Save
                  </Button>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ChatbotsService;
