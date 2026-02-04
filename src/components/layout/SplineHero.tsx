import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crosshair, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeroWave } from "../ui/HeroWave";

export function SplineHero() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden pt-24 flex flex-col md:flex-row">
      
      {/* Left content - Text & CTA */}
      <div className="w-full md:w-1/2 p-6 md:p-12 relative z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="max-w-2xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight capitalize">
              We don’t wait for <br className="hidden md:block" /> thefts to happen.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-neutral-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 capitalize"
          >
            Our AI reads behavior and flags trouble before it begins.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 w-full sm:w-auto"
          >
            {/* BUTTON 1: Services */}
            <Link to="/services" className="w-full sm:w-auto">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 rounded-md font-semibold text-base h-12 px-8"
              >
                Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            {/* BUTTON 2: View Case Studies */}
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black bg-transparent rounded-md font-semibold text-base h-12 px-8"
              >
                View Case Studies
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right content - Spline Robot + Tech Interface */}
      <div className="w-full md:w-1/2 h-[500px] md:h-auto relative z-10 flex items-center justify-center bg-black">
        
        {/* HOLOGRAPHIC INTERFACE LAYER */}
        <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
           <motion.div 
             className="absolute top-[50%] left-[50%] w-0 h-0"
             animate={{ y: [-15, 15, -15] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           >
              {/* SVG CONNECTING LINES */}
              <svg className="absolute overflow-visible" width="600" height="600" viewBox="0 0 600 600" style={{ top: -300, left: -300 }}>
                 <defs>
                   <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                     <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                     <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 
                 <circle cx="300" cy="300" r="4" fill="hsl(var(--primary))" />
                 <circle cx="300" cy="300" r="20" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.5" />

                 <motion.polyline 
                   points="300,300 360,300 380,220" 
                   fill="none"
                   stroke="url(#techGradient)"
                   strokeWidth="2"
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   transition={{ duration: 1, delay: 0.5 }}
                 />
                 
                 <motion.polyline 
                   points="300,300 200,300 120,380" 
                   fill="none"
                   stroke="url(#techGradient)"
                   strokeWidth="2"
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   transition={{ duration: 1, delay: 0.5 }}
                 />
              </svg>

              {/* WIDGET A: Threat Metrics */}
              <motion.div
                className="absolute"
                style={{ top: -80, left: 80 }}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <TechBlock className="w-56 md:w-64">
                  <div className="flex justify-between items-center mb-3 border-b border-primary/20 pb-2">
                      <div className="flex items-center gap-2 text-primary">
                          <Crosshair className="w-4 h-4 animate-spin-slow" />
                          <span className="font-mono text-xs tracking-widest font-bold">TARGET_LOCKED</span>
                      </div>
                      <span className="text-[10px] text-red-500 font-mono animate-pulse">● REC</span>
                  </div>
                  
                  <div className="space-y-3">
                      <div className="flex justify-between items-end">
                          <span className="text-xs text-neutral-400 font-mono">THREAT_LEVEL</span>
                          <span className="text-lg font-bold text-white font-mono leading-none">HIGH</span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-900 border border-neutral-800">
                          <motion.div 
                              className="h-full bg-red-500"
                              animate={{ width: ["10%", "90%", "60%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-500">
                          <div>X: 492.39</div>
                          <div>Y: 102.44</div>
                      </div>
                  </div>
                </TechBlock>
              </motion.div>

              {/* WIDGET B: Identity Match */}
              <motion.div
                className="absolute"
                style={{ top: 80, left: -300 }} 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                 <TechBlock className="w-48 md:w-56" color="cyan">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center">
                          <Fingerprint className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div className="flex-1">
                          <div className="text-[10px] text-cyan-400 font-mono mb-1">IDENTITY_MATCH</div>
                          <div className="text-xl font-bold text-white font-mono tracking-tighter">99.9%</div>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-cyan-500/20 text-[10px] font-mono text-cyan-300/70 flex justify-between">
                        <span>UID: 8492-AX</span>
                        <span>VERIFIED</span>
                    </div>
                 </TechBlock>
              </motion.div>

           </motion.div>
        </div>

        <div className="w-full h-full relative">
          <Spline 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
          />
        </div>
      </div>

      {/* Floating Wave Effect at the Bottom */}
      <HeroWave />
      
    </div>
  )
}

const TechBlock = ({ children, className, color = "primary" }: { children: React.ReactNode, className?: string, color?: "primary" | "cyan" }) => {
    const borderColor = color === "primary" ? "border-primary/40" : "border-cyan-500/40";
    const bgColor = "bg-black/90";

    return (
        <div className={cn("relative p-4 backdrop-blur-sm border", borderColor, bgColor, className)}>
            <div className={cn("absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2", borderColor)} />
            <div className={cn("absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2", borderColor)} />
            <div className={cn("absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2", borderColor)} />
            <div className={cn("absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2", borderColor)} />
            {children}
        </div>
    );
};
