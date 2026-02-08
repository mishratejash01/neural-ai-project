import { useRef, useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client"; 
import { JobApplicationModal } from "@/components/JobApplicationModal";

// --- Types based on your SQL Schema ---
type Advisor = {
  id: string;
  name: string;
  logo_url: string;
};

type Career = {
  id: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  salary_range: string | null;
  experience_required: string | null;
  is_active: boolean | null;
};

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [positions, setPositions] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("General Application");

  // Fetch Data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Advisors
        const { data: advisorsData } = await supabase
          .from('advisors')
          .select('*');
        
        // Fetch Active Careers
        const { data: careersData } = await supabase
          .from('careers')
          .select('*')
          .eq('is_active', true); // Using your new column name 'is_active'
        
        if (advisorsData) setAdvisors(advisorsData);
        if (careersData) setPositions(careersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Animation Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.8], ["0px", "40px"]);
  const filter = useTransform(scrollYProgress, [0.4, 0.9], ["blur(0px)", "blur(10px)"]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  // Handle Application Click
  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&family=Inter:wght@300;400;500;600&display=swap');
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      {/* --- APPLICATION MODAL --- */}
      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />

      {/* --- SECTION 1: HERO --- */}
      <div className="h-[90vh] bg-[#f6f6f2] flex flex-col items-center justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* BLACK TEXT as requested */}
            <span className="font-['Inter'] text-[13px] tracking-[0.25em] uppercase text-black font-medium">
              Neural AI Careers
            </span>
          </motion.div>

          <h1 className="text-center font-['Playfair_Display'] text-[clamp(60px,12vw,160px)] leading-[0.9] text-[#0d1a1a] tracking-wide">
            <span className="block font-light animate-in slide-in-from-bottom-8 fade-in duration-1000">Efficiency</span>
            <span className="block italic font-light opacity-90 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200">Wanted</span>
          </h1>
      </div>

      {/* --- SECTION 2: IMAGE FRAME --- */}
      <div ref={containerRef} className="h-[150vh] relative bg-[#f6f6f2]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <motion.div 
            style={{ scale, borderRadius, filter, opacity: imageOpacity }}
            className="w-full h-full z-0 overflow-hidden bg-black shadow-2xl origin-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Neural AI Office" 
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>
        </div>
      </div>

      {/* --- SECTION 3: B2B ROI CONTENT --- */}
      <div className="relative z-20 bg-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0d1a1a] mb-8 leading-tight">
            "Stop losing money to inefficiency.<br/>Start automating your growth."
          </h2>
          <p className="font-['Inter'] text-[#556b55] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            We help businesses turn their CCTV cables into profit pipelines. Our AI doesn't just watch; it analyzes, predicts, and optimizes operations to increase ROI and reduce shrinkage. We need people who understand the value of data.
          </p>
        </div>
      </div>

      {/* --- SECTION 4: ADVISORS (Dynamic) --- */}
      <div className="relative z-20 bg-white py-16 border-t border-gray-100">
        <div className="text-center mb-10">
            <span className="font-['Inter'] text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold">
                We are backed by advisors from
            </span>
        </div>
        
        {advisors.length > 0 ? (
            <div className="overflow-hidden relative w-full">
                <div className="flex w-[200%] animate-scroll">
                    {/* First Set */}
                    <div className="flex w-1/2 justify-around items-center px-10 gap-8">
                        {advisors.map((advisor) => (
                            <img 
                              key={advisor.id} 
                              src={advisor.logo_url} 
                              alt={advisor.name} 
                              className="h-8 md:h-12 w-auto object-contain opacity-40 grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        ))}
                    </div>
                    {/* Duplicate Set for Loop */}
                    <div className="flex w-1/2 justify-around items-center px-10 gap-8">
                        {advisors.map((advisor) => (
                            <img 
                              key={`dup-${advisor.id}`} 
                              src={advisor.logo_url} 
                              alt={advisor.name} 
                              className="h-8 md:h-12 w-auto object-contain opacity-40 grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
          <div className="text-center text-sm text-gray-400">Loading advisors...</div>
        )}
      </div>

      {/* --- SECTION 5: OPEN POSITIONS (Dynamic) --- */}
      <div className="relative z-20 bg-[#f9fafb] py-32 px-6">
        <div className="max-w-4xl mx-auto">
            <h3 className="font-['Playfair_Display'] text-3xl text-[#0d1a1a] mb-12 text-center">Open Roles</h3>
            
            <div className="flex flex-col gap-4">
                {isLoading ? (
                    <div className="text-center text-gray-400 py-10">Loading positions...</div>
                ) : positions.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">No open positions at the moment. Check back soon.</div>
                ) : (
                    positions.map((pos) => (
                        <div 
                            key={pos.id} 
                            onClick={() => handleApply(pos.title)}
                            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 flex items-center justify-between cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <div>
                                <h4 className="font-['Inter'] font-semibold text-lg text-[#0d1a1a] group-hover:text-[#2d6a4f] transition-colors">
                                  {pos.title}
                                </h4>
                                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500 font-['Inter']">
                                    {pos.department && <span>{pos.department}</span>}
                                    {pos.department && <span>•</span>}
                                    
                                    {pos.type && <span>{pos.type}</span>}
                                    {pos.type && pos.location && <span>•</span>}
                                    
                                    {pos.location && <span>{pos.location}</span>}
                                </div>
                            </div>
                            <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#2d6a4f] group-hover:text-white transition-all">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>

      {/* --- SECTION 6: CTA CARD --- */}
      <div className="relative z-20 bg-[#f9fafb] pb-32 px-6 flex justify-center">
        <div className="w-full max-w-4xl bg-[#eaf4f4] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#dceaea]">
            
            <div className="text-center md:text-left">
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0d1a1a] mb-2">
                    Can't find your interested role?
                </h3>
                <p className="font-['Inter'] text-[#556b55] text-base md:text-lg">
                    We are always looking for exceptional talent. Send us your CV.
                </p>
            </div>

            <button 
                onClick={() => handleApply("General Application")}
                className="shrink-0 bg-[#ff6b35] hover:bg-[#e85d2a] text-white px-8 py-3 rounded-lg font-['Inter'] font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
                <Mail className="w-4 h-4" />
                Send CV
            </button>

        </div>
      </div>

    </Layout>
  );
}
