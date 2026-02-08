import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Hooks for Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&family=Inter:wght@300;400&display=swap');
      `}</style>

      <div ref={containerRef} className="relative min-h-[200vh] bg-[#f6f6f2] font-sans">
        
        {/* STICKY IMAGE CONTAINER */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Animated Image Frame */}
          <motion.div 
            style={{ scale, borderRadius, filter, opacity }}
            className="absolute top-0 w-full h-full z-0 overflow-hidden shadow-2xl origin-top"
          >
            {/* Placeholder for Office/Team Image - Replace src with actual image */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Neural AI Office" 
              className="w-full h-full object-cover"
            />
            
            {/* Dark Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* TEXT CONTENT (Overlays the image initially, then sits nicely) */}
          <div className="relative z-10 flex flex-col items-center text-center mt-[20vh]">
            
            {/* "Neural AI Careers" Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <span className="font-['Inter'] text-[13px] tracking-[0.3em] uppercase text-white drop-shadow-md font-medium bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                Neural AI ; Careers
              </span>
            </motion.div>

            {/* Main Headline: "Efficiency Wanted" */}
            <motion.h1 
              style={{ y: textY }}
              className="font-['Playfair_Display'] font-light text-[clamp(60px,10vw,140px)] leading-[0.9] text-white drop-shadow-lg uppercase tracking-wide flex flex-col items-center gap-2 mix-blend-overlay"
            >
              <span className="block">Efficiency</span>
              <span className="block italic opacity-90">Wanted</span>
            </motion.h1>

          </div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-widest uppercase opacity-80">Scroll</span>
            <div className="w-[1px] h-12 bg-white/50"></div>
          </motion.div>
        </div>

        {/* EXTRA CONTENT SPACE (To allow scrolling) */}
        <div className="h-screen bg-[#f6f6f2] relative z-20 flex items-center justify-center">
            <div className="text-center max-w-2xl px-6">
                <p className="font-['Playfair_Display'] text-3xl text-[#0d1a1a] leading-relaxed">
                   "We don't just build AI. We build the minds that build the future."
                </p>
                <button className="mt-8 px-8 py-3 bg-[#0d1a1a] text-white rounded-full font-['Inter'] text-sm tracking-wider hover:bg-[#2d6a4f] transition-colors">
                    VIEW OPEN ROLES
                </button>
            </div>
        </div>

      </div>
    </Layout>
  );
}
