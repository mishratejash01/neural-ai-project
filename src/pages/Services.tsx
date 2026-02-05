import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  MessageSquare,
  BarChart,
  Eye,
  Brain,
  Cog,
  Zap,
  ArrowRight,
  FileText
} from "lucide-react";

const Services = () => {
  // Define the custom colors from your design to use in the grid
  const themeColors = {
    bg: "#f8faf8",
    textDark: "#1a2e1a",
    textMuted: "#556b55",
    primary: "#142b14",
    cardBg: "#ffffff",
    border: "#cfdccf",
    iconColor: "#2d6a4f"
  };

  const services = [
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbots",
      description: "Streamline customer support with intelligent chatbots that understand natural language.",
      slug: "chatbots"
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "Tailored AI systems that solve unique business challenges with scalable architecture.",
      slug: "custom-ai"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform raw data into actionable intelligence with advanced machine learning models.",
      slug: "data-analytics"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Harness visual intelligence for object detection, quality control, and monitoring.",
      slug: "computer-vision"
    },
    {
      icon: Brain,
      title: "NLP & LLMs",
      description: "Create AI models that understand, interpret, and generate human language at scale.",
      slug: "nlp"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Boost marketing with AI-driven personalization and automated campaign optimization.",
      slug: "marketing-automation"
    }
  ];

  return (
    <Layout>
      <div style={{ backgroundColor: themeColors.bg, color: themeColors.textDark, fontFamily: "'Inter', sans-serif" }} className="min-h-screen flex flex-col font-sans">
        
        {/* HERO SECTION */}
        {/* Changed to h-screen to ensure it takes up the full initial viewport */}
        {/* Added pt-32 md:pt-40 to create significant space between navbar and content */}
        <section className="h-screen flex flex-col justify-center items-center px-4 pt-32 md:pt-40 pb-10 text-center">
          <div className="max-w-[900px] mx-auto">
            
            {/* Decorative Dots */}
            <div className="flex justify-center gap-[15px] mb-[30px] opacity-80">
              {/* Group 1 - Soft Sage */}
              <div className="flex gap-[3px]">
                {[...Array(5)].map((_, i) => (
                  <div key={`g1-${i}`} className="w-[4px] h-[4px] rounded-[1px] bg-[#7fb07f]" />
                ))}
              </div>
              {/* Group 2 - Emerald Green */}
              <div className="flex gap-[3px]">
                {[...Array(5)].map((_, i) => (
                  <div key={`g2-${i}`} className="w-[4px] h-[4px] rounded-[1px] bg-[#2d6a4f]" />
                ))}
              </div>
              {/* Group 3 - Deep Forest */}
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

        {/* SERVICES GRID */}
        <section className="py-24 px-4 relative z-10 bg-[#f8faf8]">
          <div className="container mx-auto max-w-6xl">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service, index) => (
                 <div 
                   key={index}
                   className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                   style={{ 
                     backgroundColor: themeColors.cardBg, 
                     border: `1px solid ${themeColors.border}`,
                     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)"
                   }}
                 >
                   <div className="mb-6 inline-flex p-3 rounded-xl bg-[#7fb07f]/10 group-hover:bg-[#7fb07f]/20 transition-colors">
                     <service.icon className="w-8 h-8" style={{ color: themeColors.iconColor }} />
                   </div>
                   <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.textDark }}>
                     {service.title}
                   </h3>
                   <p className="mb-6 leading-relaxed" style={{ color: themeColors.textMuted }}>
                     {service.description}
                   </p>
                   <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold transition-colors hover:opacity-80" style={{ color: themeColors.primary }}>
                     Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                   </Link>
                 </div>
               ))}
             </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;
