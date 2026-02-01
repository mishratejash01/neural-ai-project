import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, AlertCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  excerpt: string | null;     
  content: string | null;     
  category: string | null;    
  author: string | null;
  date_published: string | null;
  read_time: string | null;
  image_url: string | null;
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

        if (fetchError) throw fetchError;
        if (!data) throw new Error("Case study not found");

        setCaseStudy(data as CaseStudy);
      } catch (err: any) {
        console.error("Error fetching case study:", err);
        setError(err.message || "Failed to load the case study.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        {/* Loading Skeleton matching the 75% width layout */}
        <div className="pt-32 pb-20 px-6 w-full lg:w-[75%] mx-auto">
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-16 w-full mb-6" />
          <Skeleton className="h-6 w-3/4 mb-12" />
          <Skeleton className="h-[500px] w-full rounded-sm" />
        </div>
      </Layout>
    );
  }

  if (error || !caseStudy) {
    return (
      <Layout>
        <div className="pt-40 pb-20 px-6 w-full lg:w-[75%] mx-auto text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4 font-sans">Unavailable</h1>
          <p className="text-gray-500 mb-8 font-serif">
            {error || "The article you are looking for does not exist."}
          </p>
          <Button asChild variant="outline">
            <Link to="/portfolio">Return to Portfolio</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Inter:wght@400;600&display=swap');

        :root {
          --ink: #111111;
          --muted: #666666;
          --hairline: #e5e5e5;
          --font-serif: 'Source Serif 4', serif;
          --font-sans: 'Inter', sans-serif;
        }

        /* --- CONTAINER LAYOUT (75% Width) --- */
        .cs-container {
          width: 90%;
          margin: 0 auto;
          background-color: #ffffff;
          color: var(--ink);
          font-family: var(--font-serif);
          line-height: 1.8;
          -webkit-font-smoothing: antialiased;
        }

        @media (min-width: 1024px) {
          .cs-container {
            width: 75%; /* 3/4 of the page width */
            max-width: 1400px; /* Optional cap for very large screens */
          }
        }

        /* --- HEADER TYPOGRAPHY --- */
        .cs-h1 {
          font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive headline */
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #000;
          overflow-wrap: break-word;
        }

        .cs-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          line-height: 1.5;
          color: var(--muted);
          margin-bottom: 32px;
          font-weight: 400;
          max-width: 90%;
        }

        .cs-meta {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--hairline);
          margin-bottom: 48px;
        }
        
        .cs-meta div { display: flex; align-items: center; }
        .cs-meta-label { color: var(--muted); margin-right: 8px; }

        /* --- IMAGE STYLES --- */
        .cs-hero-image {
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: 64px;
          border-radius: 2px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        /* --- CONTENT BODY STYLES --- */
        .cs-content {
          width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
        }

        .cs-content p, 
        .cs-content li, 
        .cs-content div {
          font-family: var(--font-serif);
          font-size: 1.35rem; /* Large readable text */
          line-height: 1.8;
          color: #1a1a1a;
          margin-bottom: 32px;
          max-width: 100%;
        }

        /* Section Headings */
        .cs-content h2 { 
          font-family: var(--font-sans);
          font-weight: 600;
          color: #000;
          font-size: 1.25rem; 
          text-transform: uppercase; 
          letter-spacing: 0.1em;
          margin-top: 64px;
          margin-bottom: 24px;
          border-top: 1px solid var(--hairline);
          padding-top: 32px;
        }
        
        .cs-content h3 { 
          font-family: var(--font-sans);
          font-weight: 600;
          color: #000;
          font-size: 1.8rem;
          margin-top: 48px;
          margin-bottom: 20px;
        }

        /* Content Images */
        .cs-content img, .cs-content figure {
          width: 100%;
          height: auto;
          display: block;
          margin: 50px 0;
          border-radius: 2px;
        }

        /* Blockquotes */
        .cs-content blockquote {
          border-left: 4px solid #000;
          padding-left: 32px;
          margin: 50px 0;
          font-style: italic;
          color: #444;
          font-size: 1.6rem;
          line-height: 1.5;
        }

        /* Lists */
        .cs-content ul, .cs-content ol {
          margin-bottom: 32px;
          padding-left: 2em;
        }
        .cs-content li { margin-bottom: 16px; }

        /* Links */
        .cs-content a {
          color: #000;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 600;
        }

        /* Drop Cap */
        .cs-content > p:first-of-type::first-letter {
          float: left;
          font-size: 5.5rem;
          line-height: 0.8;
          padding-right: 16px;
          font-weight: 700;
          color: #000;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cs-h1 { font-size: 2.5rem; }
          .cs-subtitle { font-size: 1.25rem; }
          .cs-content p { font-size: 1.2rem; }
          .cs-meta { flex-direction: column; gap: 12px; align-items: flex-start; }
          .cs-content > p:first-of-type::first-letter { font-size: 4rem; }
        }
      `}</style>

      <div className="min-h-screen bg-white pt-32 pb-24 px-6">
        <article className="cs-container">
          
          {/* 1. Back Navigation */}
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-gray-400 hover:text-black transition-colors mb-12 font-sans text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-3 w-3" /> Back to Portfolio
          </Link>

          {/* 2. Header Section */}
          <header>
            <h1 className="cs-h1">{caseStudy.title}</h1>
            
            {caseStudy.excerpt && (
              <p className="cs-subtitle">{caseStudy.excerpt}</p>
            )}
            
            <div className="cs-meta">
              {caseStudy.author && (
                <div><span className="cs-meta-label">By</span> {caseStudy.author}</div>
              )}
              {caseStudy.date_published && (
                <div><span className="cs-meta-label">Date</span> {caseStudy.date_published}</div>
              )}
              {caseStudy.category && (
                <div><span className="cs-meta-label">Topic</span> {caseStudy.category}</div>
              )}
              {caseStudy.read_time && (
                <div><span className="cs-meta-label">Read</span> {caseStudy.read_time}</div>
              )}
            </div>
          </header>

          {/* 3. Hero Image (Strictly below title/header) */}
          {caseStudy.image_url && (
            <img 
              src={caseStudy.image_url} 
              alt={caseStudy.title} 
              className="cs-hero-image"
            />
          )}

          {/* 4. Content Body */}
          {caseStudy.content && (
            <section 
              className="cs-content"
              dangerouslySetInnerHTML={{ __html: caseStudy.content }} 
            />
          )}

        </article>
      </div>
    </Layout>
  );
};

export default CaseStudyDetail;
