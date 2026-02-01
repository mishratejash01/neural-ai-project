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
  excerpt: string | null;     // Maps to Subtitle
  content: string | null;     // HTML Body
  category: string | null;    // Maps to Topic
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
        <div className="pt-32 pb-20 px-6 max-w-[680px] mx-auto">
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-16 w-full mb-6" />
          <Skeleton className="h-6 w-3/4 mb-12" />
          <Skeleton className="h-[400px] w-full rounded-sm" />
        </div>
      </Layout>
    );
  }

  if (error || !caseStudy) {
    return (
      <Layout>
        <div className="pt-40 pb-20 px-6 max-w-[680px] mx-auto text-center">
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

        .cs-container {
          max-width: 680px;
          margin: 0 auto;
          background-color: #ffffff;
          color: var(--ink);
          font-family: var(--font-serif);
          line-height: 1.8;
          -webkit-font-smoothing: antialiased;
        }

        /* Title */
        .cs-h1 {
          font-size: 3.2rem;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #000;
          /* Ensure long words break on mobile */
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* Subtitle */
        .cs-subtitle {
          font-size: 1.4rem;
          line-height: 1.5;
          color: var(--muted);
          margin-bottom: 40px;
          font-weight: 400;
        }

        /* Meta Data */
        .cs-meta {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--hairline);
          margin-bottom: 50px;
        }
        
        .cs-meta div {
          display: flex;
          align-items: center;
        }

        .cs-meta-label {
          color: var(--muted);
          margin-right: 4px;
        }

        /* Content Body Typography & Layout */
        .cs-content {
          width: 100%;
          max-width: 100%;
        }

        .cs-content p {
          font-size: 1.25rem;
          margin-bottom: 28px;
          color: #1a1a1a;
          /* Critical for text wrapping */
          overflow-wrap: break-word;
          word-wrap: break-word;
          line-height: 1.8;
        }

        /* Ensure images inside content don't overflow */
        .cs-content img {
          max-width: 100%;
          height: auto;
          border-radius: 2px;
          margin: 40px 0;
          display: block;
        }

        /* Drop Cap for first paragraph */
        .cs-content > p:first-of-type::first-letter {
          float: left;
          font-size: 4.8rem;
          line-height: 0.8;
          padding-right: 12px;
          font-weight: 700;
          color: #000;
        }

        /* Section Markers (H2) */
        .cs-content h2 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
          margin: 60px 0 30px 0;
          padding-top: 30px;
          border-top: 1px solid var(--hairline);
          color: #000;
        }

        /* Lists styling */
        .cs-content ul, .cs-content ol {
          margin-bottom: 28px;
          padding-left: 20px;
        }
        
        .cs-content li {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        /* Author Note (Last paragraph style) */
        .cs-content .author-note {
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid var(--hairline);
          font-style: italic;
          color: var(--muted);
          font-size: 1.1rem;
        }

        /* Bold text */
        .cs-content strong {
          font-weight: 600;
          color: #000;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .cs-h1 { font-size: 2.2rem; }
          .cs-subtitle { font-size: 1.2rem; }
          .cs-meta { flex-direction: column; gap: 8px; align-items: flex-start; }
          .cs-content > p:first-of-type::first-letter { font-size: 3.5rem; }
        }
      `}</style>

      <div className="min-h-screen bg-white pt-32 pb-24 px-6">
        <article className="cs-container">
          
          {/* Back Navigation */}
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-gray-400 hover:text-black transition-colors mb-12 font-sans text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-3 w-3" /> Back to Portfolio
          </Link>

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

          {/* Hero Image */}
          {caseStudy.image_url && (
            <figure className="mb-14">
              <img 
                src={caseStudy.image_url} 
                alt={caseStudy.title} 
                className="w-full h-auto max-w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-gray-100"
              />
              <figcaption className="mt-3 text-xs font-sans text-gray-400 text-center uppercase tracking-wider">
                Figure 1: {caseStudy.title}
              </figcaption>
            </figure>
          )}

          {/* Main Content */}
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
