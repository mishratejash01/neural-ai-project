import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ProductShowcase } from "@/components/ProductShowcase"; 
import { FeaturesGrid } from "@/components/FeaturesGrid"; 
import { CtaCard } from "@/components/CtaCard"; 
import { ContactForm } from "@/components/ContactForm"; // Importing the Chatbot Form
import { useIsMobile } from "@/hooks/use-mobile";
import { FileText, MessageSquareText } from "lucide-react";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";

const Services = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const isMobile = useIsMobile();

  const themeColors = {
    bg: "#f8faf8",
    textDark: "#1a2e1a",
    textMuted: "#556b55",
  };

  return (
    <Layout>
      <div 
        style={{ backgroundColor: themeColors.bg, color: themeColors.textDark, fontFamily: "'Inter', sans-serif" }} 
        className="min-h-screen flex flex-col font-sans transform scale-[0.95] origin-top relative"
      >
        
        {/* 1. HERO SECTION */}
        <section className="h-screen flex flex-col justify-center items-center px-4 pt-32 md:pt-40 pb-10 text-center">
          <div className="max-w-[900px] mx-auto">
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

            <h1 className="text-[3.5rem] md:text-[5.2rem] font-[800] m-0 leading-[1.05] tracking-[-0.04em] text-[#1a2e1a]">
              Intelligence,
            </h1>
            <h1 className="text-[3.5rem] md:text-[5.2rem] font-[800] m-0 leading-[1.05] tracking-[-0.04em] bg-clip-text text-transparent bg-gradient-to-br from-[#2d6a4f] via-[#1b4332] to-[#40916c]">
              Scaled for Enterprise.
            </h1>

            <p className="mt-[35px] text-[1.1rem] md:text-[1.25rem] text-[#556b55] max-w-[600px] mx-auto leading-[1.6] font-normal">
              A suite architected to transform your raw data into security, user behaviour, and decision-making power.
            </p>

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

        {/* 2. PRODUCT SHOWCASE */}
        <ProductShowcase />

        {/* 3. FEATURES GRID */}
        <FeaturesGrid />

        {/* 4. CTA CARD (Triggers Chat) */}
        <CtaCard onOpenChat={() => setIsChatOpen(true)} />

      </div>

      {/* --- CHAT WIDGET IMPLEMENTATION --- */}
      
      {/* Floating Action Button (Always Visible) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-[#142b14] hover:bg-[#2d6a4f] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          {isChatOpen ? (
            <span className="text-xl font-bold">×</span>
          ) : (
            <MessageSquareText className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Desktop Chat Window (Bottom Right Popover) */}
      {!isMobile && isChatOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[600px] z-50 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <ContactForm onClose={() => setIsChatOpen(false)} />
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DrawerContent className="h-[85vh] outline-none">
             <div className="h-full pt-4">
                <ContactForm onClose={() => setIsChatOpen(false)} />
             </div>
          </DrawerContent>
        </Drawer>
      )}

    </Layout>
  );
};

export default Services;
