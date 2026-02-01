import React from "react";
import Layout from "@/components/layout/Layout";

const ChatbotsService = () => {
  return (
    <Layout>
      {/* Injecting specific styles for this case study design */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Inter:wght@400;600&display=swap');

        :root {
          --ink: #111111;
          --muted: #666666;
          --hairline: #e5e5e5;
          --font-serif: 'Source Serif 4', serif;
          --font-sans: 'Inter', sans-serif;
        }

        .case-study-body {
          background-color: #ffffff;
          color: var(--ink);
          font-family: var(--font-serif);
          -webkit-font-smoothing: antialiased;
          line-height: 1.8;
          padding: 80px 24px;
        }

        .case-study-article {
          max-width: 680px; /* Optimal reading width for single column */
          margin: 0 auto;
        }

        /* Title Styling */
        .case-study-h1 {
          font-size: 3.2rem;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #000;
        }

        .case-study-subtitle {
          font-size: 1.4rem;
          line-height: 1.5;
          color: var(--muted);
          margin-bottom: 40px;
          font-weight: 400;
        }

        /* Metadata Styling */
        .case-study-meta {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          display: flex;
          gap: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--hairline);
          margin-bottom: 50px;
        }

        .case-study-meta-label {
          color: var(--muted);
          margin-right: 4px;
        }

        /* Content Styling */
        .case-study-content p {
          font-size: 1.25rem;
          margin-bottom: 28px;
          color: #1a1a1a;
        }

        /* Subtle Section Markers */
        .case-study-h2 {
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

        /* Drop Cap */
        .case-study-intro::first-letter {
          float: left;
          font-size: 4.8rem;
          line-height: 0.8;
          padding-right: 12px;
          font-weight: 700;
          color: #000;
        }

        /* Bold terms but subtle */
        .case-study-strong {
          font-weight: 600;
          color: #000;
        }

        /* Italicized concluding note */
        .case-study-author-note {
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid var(--hairline);
          font-style: italic;
          color: var(--muted);
          font-size: 1.1rem;
        }

        /* Responsive Adjustments */
        @media (max-width: 600px) {
          .case-study-body { padding: 40px 20px; }
          .case-study-h1 { font-size: 2.2rem; }
          .case-study-subtitle { font-size: 1.2rem; }
          .case-study-meta { flex-direction: column; gap: 8px; }
        }
      `}</style>

      <div className="case-study-body pt-24 min-h-screen">
        <article className="case-study-article">
          <header>
            <h1 className="case-study-h1">How AI Saved a Mumbai Fashion Retailer 27% in Lost Sales</h1>
            <p className="case-study-subtitle">A technical investigation into how automated conversational commerce turned customer service into a primary revenue engine for StyleHub Mumbai.</p>
            
            <div className="case-study-meta">
              <div><span className="case-study-meta-label">By</span> Tejash Mishra</div>
              <div><span className="case-study-meta-label">Date</span> Oct 24, 2024</div>
              <div><span className="case-study-meta-label">Topic</span> Neural Engineering</div>
            </div>
          </header>

          <section className="case-study-content">
            <p className="case-study-intro">
              The fashion retail landscape in Mumbai is notoriously competitive. For StyleHub Mumbai, a rising D2C brand, the primary bottleneck wasn't traffic—it was engagement. With over 50,000 Instagram followers, their support team was drowning in direct messages asking for pricing, sizing, and stock availability. This volume led to response delays of up to six hours.
            </p>

            <p>
              By the time a human agent responded, the customer had often moved on to a competitor. We identified this <strong className="case-study-strong">"Response Gap"</strong> as the single largest leak in their sales funnel. The solution required a system that didn't just automate, but understood the nuances of the brand's voice and the regional dialect of its urban customer base.
            </p>

            <h2 className="case-study-h2">The Neural Architecture</h2>

            <p>
              Instead of using standard decision-tree chatbots, we deployed a custom Neural Context Engine. This system utilized <strong className="case-study-strong">Retrieval Augmented Generation (RAG)</strong> to process the brand's unique style guides and historical logs. This allowed the bot to answer complex fashion queries in "Hinglish"—a natural blend of Hindi and English common in modern India.
            </p>

            <p>
              Integration with the Shopify backend allowed for real-time inventory checks. If a customer inquired about a specific Kurti size, the AI could verify stock levels and offer a direct checkout link in under twelve seconds. This immediacy effectively eliminated the friction of the traditional support-to-sales pipeline.
            </p>

            <h2 className="case-study-h2">Economic Impact</h2>

            <p>
              Within ninety days of deployment, StyleHub reported a significant shift in their operational efficiency. <strong className="case-study-strong">Eighty-five percent</strong> of all incoming queries were resolved without human intervention. This allowed the human support team to focus on high-value escalations and VIP client relations.
            </p>

            <p>
              Beyond support efficiency, the system acted as a digital personal shopper. By analyzing current cart contents, the AI proactively suggested matching accessories. This cross-selling capability increased the brand’s average order value (AOV) by 15%.
            </p>

            <p>
              The transition to automated conversational commerce has proven that in the modern retail market, the speed of response is as critical as the quality of the product itself. For StyleHub, the return on investment was realized within the first month of operation.
            </p>

            <p className="case-study-author-note">
              Tejash Mishra is the Lead AI Engineer at Neural Systems, where he focuses on the intersection of Large Language Models and D2C commerce operations.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default ChatbotsService;
