import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  Printer, 
  TrendingUp, 
  Clock, 
  MessageCircle, 
  ChevronRight,
  ArrowRight,
  AlertCircle
} from "lucide-react";

// --- Extended Interface for the Premium Layout ---
// We extend your basic interface to support optional rich fields (JSONB) 
// for stats and related links if you decide to add them to Supabase later.
interface ArticleStat {
  label: string;
  value: string;
  icon: "trending" | "clock" | "message";
}

interface RelatedLink {
  category: string;
  title: string;
  url: string;
}

interface CaseStudy {
  id: string;
  title: string;
  excerpt: string | null;     // Mapped to Subtitle
  content: string | null;     // HTML Content
  category: string | null;
  author: string | null;
  author_role?: string;       // Optional: Default to "Contributor" if missing
  author_image?: string;      // Optional: Default placeholder if missing
  date_published: string | null;
  read_time: string | null;
  image_url: string | null;
  featured: boolean | null;
  stats?: ArticleStat[];       // Optional JSONB field
  related_links?: RelatedLink[]; // Optional JSONB field
}

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) return;

      setIsLoading(true);
      setError(null);

      try {
        const { data, error: fetchError } = await supabase
          .from("case_studies")
          .select("*")
          .eq("slug", slug)
          .maybeSingle();

        if (fetchError) {
          console.error("Error fetching case study:", fetchError);
          setError("Failed to load the case study.");
          return;
        }

        if (!data) {
          setError("Case study not found.");
          return;
        }

        setCaseStudy(data as any as CaseStudy);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  // Helper to render icons dynamically
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "trending": return <TrendingUp className="w-6 h-6 text-gray-400 mx-auto mb-2" />;
      case "clock": return <Clock className="w-6 h-6 text-gray-400 mx-auto mb-2" />;
      case "message": return <MessageCircle className="w-6 h-6 text-gray-400 mx-auto mb-2" />;
      default: return null;
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto max-w-[1080px] px-4 py-24">
          <Skeleton className="h-4 w-32 mb-6" />
          <Skeleton className="h-16 w-3/4 mb-6" />
          <Skeleton className="h-6 w-1/2 mb-10" />
          <Skeleton className="h-[400px] w-full rounded-sm" />
        </div>
      </Layout>
    );
  }

  if (error || !caseStudy) {
    return (
      <Layout>
        <div className="container mx-auto max-w-[1080px] px-4 py-32 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-4 font-['Inter',sans-serif]">
            {error || "Case study not found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you are looking for is currently unavailable or has been removed.
          </p>
          <Button asChild variant="outline">
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Portfolio
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* --- Premium Newspaper Styles --- */}
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
        
        /* Typography for Dynamic HTML Content */
        .db-content p { margin-bottom: 1.5rem; line-height: 1.8; font-size: 1.25rem; color: #1a1a1a; }
        .db-content h2 { font-family: var(--font-sans); font-weight: 700; font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 1rem; color: #000; border-left: 4px solid #b91c1c; padding-left: 1rem; }
        .db-content h3 { font-family: var(--font-sans); font-weight: 600; font-size: 1.3rem; margin-top: 2rem; margin-bottom: 0.8rem; color: #1a1a1a; }
        .db-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .db-content li { margin-bottom: 0.5rem; font-family: var(--font-serif); font-size: 1.15rem; }
        .db-content strong { color: #000; font-weight: 700; }
        .db-content blockquote { border-left: 2px solid #e5e5e5; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #555; }
      `}</style>

      <article className="min-h-screen bg-[#fcfcfc] text-gray-900 pt-24 pb-20 font-[var(--font-serif)]">
        
        {/* --- Header Section --- */}
        <header className="container mx-auto px-4 mb-10 max-w-[1080px] border-b border-gray-200 pb-10">
          <div className="flex items-center justify-between mb-6">
             <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors font-[var(--font-sans)] flex items-center">
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Portfolio
             </Link>
             
             {caseStudy.category && (
               <div className="flex items-center gap-2 font-[var(--font-sans)] text-xs font-bold uppercase tracking-widest text-red-700">
                 <span className="w-2 h-2 bg-red-700 rounded-full inline-block"></span>
                 {caseStudy.category}
               </div>
             )}
          </div>

          <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold mb-6 tracking-tight text-black">
            {caseStudy.title}
          </h1>

          {caseStudy.excerpt && (
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl font-normal mb-8">
              {caseStudy.excerpt}
            </p>
          )}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 font-[var(--font-sans)]">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-gray-200">
                <AvatarImage src={caseStudy.author_image || "/placeholder.svg"} />
                <AvatarFallback className="bg-gray-100 text-gray-900 font-bold">
                  {caseStudy.author ? caseStudy.author.charAt(0) : "A"}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                  By {caseStudy.author || "Neural AI Team"}
                </div>
                <div className="text-gray-500 text-xs">
                  {caseStudy.author_role || "Contributor"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold uppercase tracking-widest">
              {caseStudy.date_published && <span>{caseStudy.date_published}</span>}
              {caseStudy.read_time && (
                <>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{caseStudy.read_time}</span>
                </>
              )}
              <div className="flex gap-2 ml-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100"><Share2 className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100"><Printer className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
        </header>

        {/* --- Hero Image --- */}
        {caseStudy.image_url && (
          <div className="container mx-auto px-4 mb-14 max-w-[1080px]">
            <figure>
              <div className="rounded-sm overflow-hidden shadow-sm border border-gray-100 relative group">
                <img
                  src={caseStudy.image_url}
                  alt={caseStudy.title}
                  className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 ease-in-out group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-0 left-0 bg-black/70 text-white px-4 py-2 font-[var(--font-sans)] text-xs uppercase tracking-wider backdrop-blur-sm">
                  Exhibit A: {caseStudy.title}
                </div>
              </div>
            </figure>
          </div>
        )}

        {/* --- Content Grid --- */}
        <div className="container mx-auto px-4 max-w-[1080px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20">
            
            {/* Main Article Body */}
            <div className="prose prose-lg prose-slate max-w-none font-[var(--font-serif)] text-gray-800">
              
              {/* Dynamic Content Injection */}
              {caseStudy.content && (
                <div 
                  className="db-content"
                  dangerouslySetInnerHTML={{ __html: caseStudy.content }}
                />
              )}

              {/* Stats Section (Rendered if available) */}
              {caseStudy.stats && caseStudy.stats.length > 0 && (
                <div className="my-12 grid grid-cols-3 gap-4 border-y border-black py-8 not-prose">
                  {caseStudy.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      {getIcon(stat.icon)}
                      <div className="text-3xl font-bold font-[var(--font-sans)] text-black">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-[var(--font-sans)] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom CTA */}
              <div className="bg-black text-white p-8 rounded-sm my-12 not-prose">
                <h3 className="text-2xl font-[var(--font-sans)] font-bold mb-4">Interested in similar solutions?</h3>
                <p className="text-gray-300 mb-6 font-[var(--font-serif)] italic text-lg">
                  Let's discuss how we can help your business achieve similar results with our AI expertise.
                </p>
                <Link to="/contact">
                  <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 text-sm uppercase tracking-widest w-full md:w-auto">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* --- Sticky Sidebar --- */}
            <aside className="border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-10 mt-12 lg:mt-0 font-[var(--font-sans)]">
              <div className="sticky top-24">
                
                {/* Newsletter Box */}
                <div className="bg-gray-100 p-6 mb-10 text-center">
                    <h4 className="font-bold text-lg mb-2">Neural Intelligence</h4>
                    <p className="text-xs text-gray-500 mb-4">Weekly analysis of AI in enterprise.</p>
                    <Button className="w-full bg-black text-white h-8 text-xs uppercase tracking-widest">Subscribe</Button>
                </div>

                {/* Related Links */}
                {caseStudy.related_links && caseStudy.related_links.length > 0 ? (
                  <>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-red-700">Read Next</span>
                    </div>
                    <Separator className="mb-6 bg-black h-[2px]" />
                    <div className="space-y-8">
                      {caseStudy.related_links.map((link, idx) => (
                        <Link key={idx} to={link.url} className="group block">
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
                  </>
                ) : (
                  // Default Fallback Links if none in DB
                  <>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-red-700">More Work</span>
                    </div>
                    <Separator className="mb-6 bg-black h-[2px]" />
                    <div className="space-y-8">
                      <Link to="/portfolio" className="group block">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-red-700 transition-colors">
                          Portfolio
                        </div>
                        <h4 className="text-base font-bold text-gray-900 leading-tight group-hover:underline decoration-1 underline-offset-4">
                          View All Case Studies
                        </h4>
                      </Link>
                    </div>
                  </>
                )}

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
      </article>
    </Layout>
  );
};

export default CaseStudyDetail;
