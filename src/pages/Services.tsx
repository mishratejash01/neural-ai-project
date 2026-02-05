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
  FileText,
  Play,
  Volume2,
  Mic,
  BookOpen,
  Megaphone,
  Tv,
  Radio
} from "lucide-react";
import { useState } from "react";

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

  // State for the custom sub-nav in Dubbing section
  const [activeTab, setActiveTab] = useState("Dubbing");

  return (
    <Layout>
      <div style={{ backgroundColor: themeColors.bg, color: themeColors.textDark, fontFamily: "'Inter', sans-serif" }} className="min-h-screen flex flex-col font-sans">
        
        {/* 1. RESTORED MINT HERO SECTION (Previous Design) */}
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

        {/* 2. DUBBING & LOCALIZATION UI SECTION (New Addition) */}
        <section className="py-20 flex flex-col items-center justify-center w-full">
            
            {/* Custom Sub-Navigation */}
            <div 
                className="flex mb-[30px] bg-white border border-[#eee] rounded-[100px] p-[4px]"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}
            >
                {["Dubbing", "Voice agents", "Enterprise Training"].map((tab) => (
                    <div 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-[24px] py-[10px] text-[14px] font-[500] cursor-pointer rounded-[100px] transition-colors duration-200 ${
                            activeTab === tab 
                            ? "bg-[#f0f2ff] text-[#3e50f7]" 
                            : "text-[#757575] hover:bg-gray-50"
                        }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Main Card Container */}
            <div 
                className="w-[95%] max-w-[1100px] bg-white border border-[#f0f0f0] rounded-[40px] flex flex-col md:flex-row p-[30px] md:p-[50px] gap-[40px] mb-[50px]"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
                {/* Left Side Content */}
                <div className="flex-1 flex flex-col">
                    <h2 className="text-[32px] font-[600] text-[#2d2d2d] mb-[8px] tracking-[-0.5px]">
                        Dubbing & localization
                    </h2>
                    <p className="text-[15px] text-[#757575] mb-[40px]">
                        High-quality multilingual voiceovers
                    </p>

                    <div className="flex flex-col gap-[12px] items-start">
                        {[
                            { text: "Public announcements", icon: <Megaphone className="w-4 h-4" /> },
                            { text: "Educational content", icon: <BookOpen className="w-4 h-4" /> },
                            { text: "Marketing promos & ads", icon: <Tv className="w-4 h-4" /> },
                            { text: "Podcast and informational videos", icon: <Mic className="w-4 h-4" /> },
                        ].map((item, idx) => (
                            <div 
                                key={idx}
                                className="flex items-center bg-[#f2f2f2] px-[18px] py-[10px] rounded-[20px] text-[14px] font-[400] text-[#444] transition-colors duration-200 hover:bg-[#e9e9e9]"
                            >
                                <span className="mr-[10px] opacity-70">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Video */}
                <div className="flex-[1.3] relative">
                    <div 
                        className="w-full h-full min-h-[380px] rounded-[24px] overflow-hidden relative flex shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        style={{ 
                            background: "linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)" 
                        }}
                    >
                        {/* Mockup Content */}
                        <div className="absolute inset-0 flex items-center justify-around p-[20px]">
                            <div 
                                className="h-[90%] w-[50%] rounded-[10px] grayscale-[20%]"
                                style={{
                                    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/c/c4/Narendra_Modi_Official_Portrait_2022.jpg')",
                                    backgroundPosition: "center top",
                                    backgroundSize: "cover"
                                }}
                            />
                            <div className="text-[#003366] text-[42px] font-[900] text-left leading-tight">
                                Mann <br/> Ki <br/> Baat
                            </div>
                        </div>

                        {/* Player Bar */}
                        <div className="absolute bottom-[12px] left-[12px] right-[12px] h-[44px] bg-black/85 rounded-[8px] flex items-center px-[15px] gap-[15px]">
                            <div className="text-white text-[14px] cursor-pointer"><Play className="w-3 h-3 fill-current"/></div>
                            <div className="flex-1 h-[4px] bg-white/20 rounded-[2px] relative cursor-pointer">
                                <div className="absolute w-[25%] h-full bg-white rounded-[2px]"></div>
                                <div className="absolute top-[-28px] left-[25%] -translate-x-1/2 bg-white text-black text-[10px] font-[700] px-[6px] py-[2px] rounded-[4px]">
                                    00:40
                                </div>
                            </div>
                            <div className="text-white opacity-80 cursor-pointer"><Volume2 className="w-4 h-4"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="py-24 px-4 relative z-10">
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
