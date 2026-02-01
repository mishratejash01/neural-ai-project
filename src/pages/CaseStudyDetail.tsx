import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

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
  featured: boolean | null;
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

        setCaseStudy(data);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto max-w-4xl px-4 py-24">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-80 w-full mb-8 rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !caseStudy) {
    return (
      <Layout>
        <div className="container mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">
            {error || "Case study not found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-background min-h-screen">
        <div className="container mx-auto max-w-4xl px-4 py-24">
          {/* Back Button */}
          <Link
            to="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* Category Badge */}
          {caseStudy.category && (
            <span className="inline-block text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              {caseStudy.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {caseStudy.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            {caseStudy.author && <span>By {caseStudy.author}</span>}
            {caseStudy.date_published && (
              <>
                <span className="hidden sm:inline">•</span>
                <span>{caseStudy.date_published}</span>
              </>
            )}
            {caseStudy.read_time && (
              <>
                <span className="hidden sm:inline">•</span>
                <span>{caseStudy.read_time}</span>
              </>
            )}
          </div>

          {/* Featured Image */}
          {caseStudy.image_url && (
            <div className="mb-10 rounded-lg overflow-hidden bg-muted">
              <img
                src={caseStudy.image_url}
                alt={caseStudy.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          {caseStudy.excerpt && (
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium">
              {caseStudy.excerpt}
            </p>
          )}

          {/* Main Content */}
          {caseStudy.content && (
            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: caseStudy.content }}
            />
          )}

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Interested in similar solutions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help your business achieve similar results.
              </p>
              <Button asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseStudyDetail;
