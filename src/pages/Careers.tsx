import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the Image Section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  // Animation Values
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.8], ["0px", "40px"]);
  const filter = useTransform(scrollYProgress, [0.4, 0.9], ["blur(0px)", "blur(10px)"]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      {/* --- SECTION 1: TEXT HERO (Landing) --- */}
      <div className="h-screen bg-[#f6f6f2] flex flex-col items-center justify-center relative z-10">
          
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-['Inter'] text-[12px] tracking-[0.25em] uppercase text-[#7d8484] font-medium">
              Neural AI ; Careers
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-center font-['Playfair_Display'] text-[clamp(60px,12vw,160px)] leading-[0.9] text-[#0d1a1a] tracking-wide">
            <span className="block font-light animate-in slide-in-from-bottom-8 fade-in duration-1000">Efficiency</span>
            <span className="block italic font-light opacity-90 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200">Wanted</span>
          </h1>

      </div>

      {/* --- SECTION 2: IMAGE FRAME (Scroll to Shrink) --- */}
      <div ref={containerRef} className="h-[150vh] relative bg-[#f6f6f2]">
        
        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Animated Image Frame */}
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

      {/* --- SECTION 3: CONTENT --- */}
      <div className="relative z-20 bg-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0d1a1a] mb-8 leading-tight">
            "We don't just build AI.<br/>We build the minds that build the future."
          </h2>
          
          <p className="font-['Inter'] text-[#556b55] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            At Neural AI, we are solving the hardest problems in computer vision and machine learning. 
            We are looking for engineers, researchers, and designers who are obsessed with efficiency and scale.
          </p>

          <button className="px-10 py-4 bg-[#0d1a1a] text-white rounded-full font-['Inter'] text-xs font-semibold tracking-widest hover:bg-[#2d6a4f] hover:scale-105 transition-all duration-300 shadow-xl">
            VIEW OPEN POSITIONS
          </button>

        </div>
      </div>

    </Layout>
  );
}
