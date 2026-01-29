import Spline from '@splinetool/react-spline';
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crosshair, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SplineHero() {
  return (
    <Card className="w-full h-screen md:-mt-16 bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      
      {/* Removed Spotlight (Star Shot) */}
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content - Text & CTA */}
        <div className="w-full md:w-1/2 p-8 relative z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left pointer-events-none">
          <div className="pointer-events-auto max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* NEW HEADLINE */}
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 capitalize">
                We don’t wait for thefts to happen.
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-300 text-lg max-w-lg capitalize"
            >
              {/* NEW SUBTEXT */}
              Our AI reads behavior and flags trouble before it begins.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-8"
            >
              {/* BUTTON 1: Services */}
              <Link to="/services">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold group">
                  Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              {/* BUTTON 2: View Case Studies */}
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/10">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right content - Spline Robot + Tech Interface */}
        <div className="w-full md:w-1/2 h-full relative z-10 flex items-center justify-center">
          
          {/* HOLOGRAPHIC INTERFACE LAYER */}
          <div className="absolute inset-0 z-20 pointer-events-none">
             
             {/* HAND NODE CONTAINER */}
             <motion.div 
               className="absolute top-[50%] left-[50%] w-0 h-0"
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
                {/* 1. SVG CONNECTING LINES */}
                <svg className="absolute overflow-visible" width="600" height="600" viewBox="0 0 600 600" style={{ top: -300, left: -300 }}>
                   <defs>
                     <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                       <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                       <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                     </linearGradient>
                     <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                   </defs>
                   
                   {/* Center Reticle */}
                   <circle cx="300" cy="300" r="4" fill="hsl(var(--primary))" filter="url(#glow)" />
                   <circle cx="300" cy="300" r="20" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.5" />

                   {/* Line to Top-Right Widget */}
                   <motion.polyline 
                     points="300,300 360,300 380,220" 
                     fill="none"
                     stroke="url(#techGradient)"
                     strokeWidth="2"
                     filter="url(#glow)"
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{ pathLength: 1, opacity: 1 }}
                     transition={{ duration: 1, delay: 0.5 }}
                   />
                   
                   {/* Line to Bottom-Left Widget */}
                   <motion.polyline 
                     points="300,300 200,300 120,380" 
                     fill="none"
                     stroke="url(#techGradient)"
                     strokeWidth="2"
                     filter="url(#glow)"
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{ pathLength: 1, opacity: 1 }}
                     transition={{ duration: 1, delay: 0.5 }}
                   />
                </svg>

                {/* 2. TECH WIDGETS */}
                
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
                                transition={{ duration: 2, repeat: Infinity, ease: "steps(4)" }}
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

          <div className="w-full h-full">
            <Spline 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
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
