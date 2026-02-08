import { Link } from "react-router-dom"
import Layout from "@/components/layout/Layout";
import { ProductShowcase } from "@/components/ProductShowcase"; 
import { FeaturesGrid } from "@/components/FeaturesGrid"; 
import { CtaCard } from "@/components/CtaCard"; // <--- IMPORT HERE
import { FileText } from "lucide-react";

const Services = () => {
  // Define theme colors
  const themeColors = {
    bg: "#f8faf8",
    textDark: "#1a2e1a",
    textMuted: "#556b55",
  };

  return (
    <Layout>
      <div style={{ backgroundColor: themeColors.bg, color: themeColors.textDark, fontFamily: "'Inter', sans-serif" }} className="min-h-screen flex flex-col font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="h-screen flex flex-col justify-center items-center px-4 pt-32 md:pt-40 pb-10 text-center">
          <div className="max-w-[900px] mx-auto">
            
            {/* Decorative Dots */}
            <div className="flex justify-center gap-[15px] mb-[30px] opacity-80">
              <div className="flex gap-[3px]">
                {[...Array(5)].map((_, i) => (
                  <div key={`g1-${i}`} className="w-[4px] h-[4px] rounded-[1px] bg-[#7fb07f]" />
                ))}
              </div>
              <div className="flex gap-[3px]">
                {[...Array(5)].map((_, i) => (
                  <div key={`g2-${i}`} className="w-[4px] h-[4px] rounded-[1px] bg-[#2d6a4f]" />
                ))}
              </div>
              <div className="flex gap-[3px]">
                {[...Array(5)].map((_, i) => (
                  <div key={`g3-${i}`} className="w-[4px] h-[4px] rounded-[1px] bg-[#1b4332]" />
                ))}
              </div>
            </div>

            {/* Typography */}
            <h1 className="text-[3.5rem] md:text-[5.2rem] font-[800] m-0 leading-[1.05] tracking-[-0.04em] text-[#1a2e1a]">
              Intelligence,
            </h1>
            <h1 className="text-[3.5rem] md:text-[5.2rem] font-[800] m-0 leading-[1.05] tracking-[-0.04em] bg-clip-text text-transparent bg-gradient-to-br from-[#2d6a4f] via-[#1b4332] to-[#40916c]">
              Scaled for Enterprise.
            </h1>

            {/* Subtitle */}
            <p className="mt-[35px] text-[1.1rem] md:text-[1.25rem] text-[#556b55] max-w-[600px] mx-auto leading-[1.6] font-normal">
              A suite architected to transform your raw data into security, user behaviour, and decision-making power.
            </p>

            {/* Buttons */}
            <div className="mt-[50px] flex flex-col sm:flex-row justify-center gap-[16px] items-center">
              <Link to="/contact">
                <button 
                  className="px-[32px] py-[14px] text-[0.9rem] font-[600] rounded-[8px] cursor-pointer transition-all duration-300 flex items-center gap-[10px] text-white shadow-[0_4px_14px_rgba(20,43,20,0.15)] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(20,43,20,0.25)]"
                  style={{ backgroundColor: "#142b14", border: "1px solid #142b14" }}
                >
                  Get Started
                </button>
              </Link>
              
              <Link to="/docs">
                <button 
                  className="px-[32px] py-[14px] text-[0.9rem] font-[600] rounded-[8px] cursor-pointer transition-all duration-300 flex items-center gap-[10px] bg-transparent hover:bg-[#2d6a4f]/5"
                  style={{ color: "#1a2e1a", border: "1.5px solid #cfdccf" }}
                >
                  <FileText className="w-4 h-4" />
                  Product Doc
                </button>
              </Link>
            </div>

          </div>
        </section>

        {/* 2. PRODUCT SHOWCASE SECTION */}
        <ProductShowcase />

        {/* 3. FEATURES GRID */}
        <FeaturesGrid />

        {/* 4. CTA CARD (Replaces old grid) */}
        <CtaCard />

      </div>
    </Layout>
  );
};

export default Services;
