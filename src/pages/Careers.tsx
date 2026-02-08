import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the Hero Section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation Values
  // 1. Scale: Shrinks from full width (1) to smaller (0.85)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  // 2. Border Radius: Corners round as it shrinks
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  // 3. Blur: Image gets blurry as you scroll away
  const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(10px)"]);
  // 4. Opacity: Fades slightly
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      {/* --- SECTION 1: HERO (Scroll to Shrink) --- */}
      <div ref={containerRef} className="h-[150vh] relative bg-[#f6f6f2]">
        
        {/* Sticky Wrapper: Keeps image visible while we scroll the 150vh height */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Animated Image Frame */}
          <motion.div 
            style={{ scale, borderRadius, filter: blur, opacity: imageOpacity }}
            className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Neural AI Office" 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

          {/* Text Content (Centered on top of image) */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Top Label */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="font-['Inter'] text-[12px] tracking-[0.25em] uppercase text-white/90 font-medium bg-black/20 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                Neural AI ; Careers
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-['Playfair_Display'] text-[clamp(60px,10vw,120px)] leading-[0.9] text-white tracking-wide mix-blend-overlay">
              <span className="block font-light">Efficiency</span>
              <span className="block italic font-light opacity-90">Wanted</span>
            </h1>

          </div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-widest uppercase opacity-70">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce opacity-70" />
          </motion.div>

        </div>
      </div>

      {/* --- SECTION 2: CONTENT (Normal Flow - No Overlap) --- */}
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
