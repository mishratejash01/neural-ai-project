import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";

// Define the shape of our article for the UI
interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  featured: boolean;
}

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch articles from Supabase
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching case studies:", error);
          return;
        }

        if (data) {
          // Map database columns to UI properties
          const mappedArticles: Article[] = data.map((item) => ({
            id: item.id,
            title: item.title,
            excerpt: item.excerpt || "",
            category: item.category || "General",
            author: item.author || "Neural AI Team",
            date: item.date_published || "",
            readTime: item.read_time || "",
            slug: item.slug,
            image: item.image_url || "/placeholder.svg", // Fallback image
            featured: item.featured || false,
          }));
          setArticles(mappedArticles);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles based on search
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      industryFilter === "" ||
      article.category.toLowerCase().includes(industryFilter.toLowerCase());

    return matchesSearch && matchesIndustry;
  });

  // Separate articles for the "Top Feed" (first 4) and "Further Readings" (rest)
  const topFeedArticles = filteredArticles.slice(0, 4);
  const furtherReadingArticles = filteredArticles.slice(4);

  // Featured Briefs (random selection or specific logic, here just picking some for display)
  // Ensure we have enough articles to show briefs, otherwise reuse available ones
  const featuredBriefs = articles.length > 0 
    ? [articles[0], articles[1], articles[2]].filter(Boolean) 
    : [];

  return (
    <Layout>
      <div className="bg-background min-h-screen font-sans text-foreground">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          {/* HEADER LOGO SECTION */}
          <header className="pt-24 pb-5 border-b-2 border-foreground/10 mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-none text-foreground">
              Neural <span className="text-primary">Archive</span>
            </h1>
            <div className="text-[11px] font-medium uppercase text-muted-foreground tracking-widest mb-1">
              Viewing Latest Reports
            </div>
          </header>

          {/* MAIN GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 pb-20">
            {/* LEFT COLUMN: ARTICLE FEED */}
            <main>
              {isLoading ? (
                <div className="py-20 text-center text-muted-foreground">
                  Loading case studies...
                </div>
              ) : (
                <>
                  {/* Top Feed: Large Row Layout */}
                  <section className="flex flex-col gap-0 divide-y divide-border">
                    {topFeedArticles.length > 0 ? (
                      topFeedArticles.map((article) => (
                        <Link
                          key={article.id}
                          to={`/portfolio/${article.slug}`}
                          className="group grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 py-8 hover:bg-muted/30 transition-colors"
                        >
                          <div className="overflow-hidden bg-muted rounded-md">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col justify-start">
                            <span className="text-primary text-[11px] font-semibold uppercase tracking-wider mb-2">
                              {article.category}
                            </span>
                            <h2 className="text-2xl font-semibold leading-tight mb-3 group-hover:text-primary transition-colors">
                              {article.title}
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            <div className="text-[11px] font-medium uppercase text-muted-foreground/70 mt-auto">
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
                      <h2 className="text-xs font-semibold uppercase border-t border-foreground/10 pt-4 mb-6 tracking-widest text-muted-foreground">
                        Further Readings
                      </h2>
                      <div className="flex flex-col divide-y divide-border">
                        {furtherReadingArticles.map((article) => (
                          <Link
                            key={article.id}
                            to={`/portfolio/${article.slug}`}
                            className="group grid grid-cols-[120px_1fr] gap-5 py-6 hover:bg-muted/30 transition-colors"
                          >
                            <div className="overflow-hidden bg-muted h-20 w-full rounded-sm">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <span className="text-primary text-[10px] font-semibold uppercase mb-1">
                                {article.category}
                              </span>
                              <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                              <div className="text-[10px] font-medium uppercase text-muted-foreground mt-2">
                                {article.date}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              )}
            </main>

            {/* RIGHT COLUMN: SIDEBAR */}
            <aside className="space-y-12 lg:sticky lg:top-24 h-fit">
              {/* Filter Panel - Dark Theme Block with Slight Rounding */}
              <div className="bg-[#111111] text-white p-6 shadow-xl rounded">
                <h3 className="text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                  Refine Search
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Keyword Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#222] border border-[#333] p-3 text-sm rounded text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans"
                  />
                  <input
                    type="text"
                    placeholder="Industry (e.g. Retail)"
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full bg-[#222] border border-[#333] p-3 text-sm rounded text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all font-sans"
                  />
                  {/* Reset Button: Grey, normal case, slight rounding */}
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setIndustryFilter("");
                    }}
                    className="w-full bg-[#333] hover:bg-[#444] text-white font-medium text-sm py-3 mt-2 rounded transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>

              {/* Horizontal Scroller (Featured Briefs) */}
              <div>
                <h2 className="text-xs font-semibold uppercase border-t border-foreground/10 pt-4 mb-5 tracking-widest text-muted-foreground">
                  Featured Briefs
                </h2>
                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                  {/* Display a few items from the fetched list */}
                  {featuredBriefs.map((item) => (
                    <Link
                      to={`/portfolio/${item.slug}`}
                      key={item.id}
                      className="min-w-[180px] group"
                    >
                      <div className="aspect-[4/3] overflow-hidden mb-3 bg-muted rounded-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                        />
                      </div>
                      <h4 className="text-sm font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                  {featuredBriefs.length === 0 && !isLoading && (
                     <div className="text-muted-foreground text-xs">No featured briefs available.</div>
                  )}
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
