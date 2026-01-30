import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button"; // Keeping for utility if needed, though custom styled below
import { Input } from "@/components/ui/input";

// Sample Data
const articles = [
  {
    id: 1,
    title: "How AI Saved a Mumbai Fashion Retailer 27% in Lost Sales",
    excerpt: "A deep dive into the implementation of conversational AI for lifestyle brands. We explore the technical challenges of Hinglish NLP and the operational impact on support teams.",
    category: "Retail & E-commerce",
    author: "Tejash Mishra",
    date: "Oct 12, 2024",
    readTime: "8 Min Read",
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
    readTime: "12 Min Read",
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
    readTime: "10 Min Read",
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
    readTime: "6 Min Read",
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
    readTime: "7 Min Read",
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
    readTime: "9 Min Read",
    slug: "logistics-optimization",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    featured: false
  }
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  // Filter articles based on search
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = industryFilter === "" || article.category.toLowerCase().includes(industryFilter.toLowerCase());
    
    return matchesSearch && matchesIndustry;
  });

  // Separate articles for the "Top Feed" (first 4) and "Further Readings" (rest)
  const topFeedArticles = filteredArticles.slice(0, 4);
  const furtherReadingArticles = filteredArticles.slice(4);

  return (
    <Layout>
      <div className="bg-background min-h-screen font-sans text-foreground">
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          
          {/* HEADER LOGO SECTION */}
          <header className="pt-24 pb-5 border-b-4 border-foreground mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
              Neural <span className="text-primary">Archive</span>
            </h1>
            <div className="text-[11px] font-bold uppercase text-muted-foreground tracking-widest mb-1">
              Viewing Latest Reports
            </div>
          </header>

          {/* MAIN GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 pb-20">
            
            {/* LEFT COLUMN: ARTICLE FEED */}
            <main>
              {/* Top Feed: Large Row Layout */}
              <section className="flex flex-col gap-0 divide-y divide-border">
                {topFeedArticles.length > 0 ? (
                  topFeedArticles.map((article) => (
                    <Link 
                      key={article.id} 
                      to={`/portfolio/${article.slug}`} 
                      className="group grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 py-8 hover:bg-muted/30 transition-colors"
                    >
                      <div className="overflow-hidden bg-muted">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-start">
                        <span className="text-primary text-[11px] font-black uppercase tracking-wider mb-3">
                          {article.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3 group-hover:underline decoration-primary decoration-2 underline-offset-4">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="text-[11px] font-bold uppercase text-muted-foreground/70 mt-auto">
                          {article.author} • {article.readTime}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="py-12 text-center text-muted-foreground">
                    No articles match your criteria.
                  </div>
                )}
              </section>

              {/* Further Readings: Mini List Section */}
              {furtherReadingArticles.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-xs font-black uppercase border-t-2 border-foreground pt-4 mb-6 tracking-widest">
                    Further Readings
                  </h2>
                  <div className="flex flex-col divide-y divide-border">
                    {furtherReadingArticles.map((article) => (
                      <Link 
                        key={article.id}
                        to={`/portfolio/${article.slug}`}
                        className="group grid grid-cols-[120px_1fr] gap-5 py-6 hover:bg-muted/30 transition-colors"
                      >
                         <div className="overflow-hidden bg-muted h-20 w-full">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-primary text-[10px] font-black uppercase mb-1">
                            {article.category}
                          </span>
                          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <div className="text-[10px] font-bold uppercase text-muted-foreground mt-2">
                            {article.date}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </main>

            {/* RIGHT COLUMN: SIDEBAR */}
            <aside className="space-y-12 lg:sticky lg:top-24 h-fit">
              
              {/* Filter Panel - Dark Theme Block */}
              <div className="bg-[#111111] text-white p-6 md:p-8 shadow-xl">
                <h3 className="text-primary text-xs font-black uppercase tracking-widest mb-6">
                  Refine Search
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Keyword Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#222] border border-[#333] p-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                   <input
                    type="text"
                    placeholder="Industry (e.g. Retail)"
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full bg-[#222] border border-[#333] p-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button 
                    onClick={() => { setSearchTerm(""); setIndustryFilter(""); }}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest py-3 mt-2 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>

              {/* Horizontal Scroller (Featured Briefs) */}
              <div>
                <h2 className="text-xs font-black uppercase border-t-2 border-foreground pt-4 mb-5 tracking-widest">
                  Featured Briefs
                </h2>
                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {/* Reuse some articles as "Briefs" for display purposes */}
                  {[articles[2], articles[4], articles[1]].map((item, idx) => (
                    <Link to={`/portfolio/${item.slug}`} key={idx} className="min-w-[160px] group">
                      <div className="aspect-[4/3] overflow-hidden mb-3 bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                        />
                      </div>
                      <h4 className="text-xs font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
