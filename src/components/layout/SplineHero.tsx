import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Siren, ScanEye, Activity, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

export function SplineHero() {
  return (
    <Card className="w-full h-screen md:-mt-16 bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content - Text & CTA */}
        <div className="w-full md:w-1/2 p-8 relative z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left pointer-events-none">
          <div className="pointer-events-auto max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                Predict & Prevent Crime with <span className="text-primary">Neural AI</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-300 text-lg max-w-lg"
            >
              Real-time theft detection and behavioral analytics. Our smart models identify suspicious activity before the crime happens.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-8"
            >
              <Link to="/demo">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold group">
                  Deploy Security Model
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/10">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right content - Spline Robot + Connected Analytics */}
        <div className="w-full md:w-1/2 h-full relative z-10 flex items-center justify-center">
          
          {/* HOLOGRAPHIC INTERFACE LAYER */}
          <div className="absolute inset-0 z-20 pointer-events-none">
             
             {/* The "Hand Node" - Adjusted to align with the robot's typical hand position */}
             {/* We animate this entire container to simulate the 'floating' hand movement */}
             <motion.div 
               className="absolute top-[50%] left-[50%] w-0 h-0"
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                {/* 1. SVG CONNECTING LINES (The "Tether") */}
                <svg className="absolute overflow-visible" width="400" height="400" viewBox="0 0 400 400" style={{ top: -200, left: -200 }}>
                   <defs>
                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                       <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                       <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                   
                   {/* Line to Top-Right Widget */}
                   <motion.path 
                     d="M 200 200 L 320 120" // From center to top-right
                     fill="none"
                     stroke="url(#lineGradient)"
                     strokeWidth="2"
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{ pathLength: 1, opacity: 1 }}
                     transition={{ duration: 1.5, delay: 0.5 }}
                   />
                   
                   {/* Line to Bottom-Left Widget */}
                   <motion.path 
                     d="M 200 200 L 80 280" // From center to bottom-left
                     fill="none"
                     stroke="url(#lineGradient)"
                     strokeWidth="2"
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{ pathLength: 1, opacity: 1 }}
                     transition={{ duration: 1.5, delay: 0.8 }}
                   />
                </svg>

                {/* 2. THE ANALYTICS WIDGETS (Positioned at the ends of the lines) */}
                
                {/* Widget A: Threat Analysis (Top Right) */}
                <motion.div
                  className="absolute"
                  style={{ top: -100, left: 120 }} // Matches line end
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  <div className="w-64 p-4 bg-black/80 border border-primary/30 rounded-xl backdrop-blur-md shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-xs text-primary font-mono tracking-wider">LIVE_FEED</span>
                      </div>
                      <span className="text-[10px] text-white/50">CAM_04</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white">
                        <span>Movement</span>
                        <span className="text-primary">Detected</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary"
                          animate={{ width: ["20%", "80%", "40%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Widget B: Fingerprint/Identity (Bottom Left) */}
                <motion.div
                  className="absolute"
                  style={{ top: 80, left: -240 }} // Matches line end
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  <div className="w-48 p-3 bg-black/80 border-l-4 border-red-500 rounded-r-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-500/10 rounded-lg">
                        <Fingerprint className="w-8 h-8 text-red-500" />
                      </div>
                      <div>
                        <div className="text-[10px] text-red-400 font-bold tracking-widest uppercase">Suspect Match</div>
                        <div className="text-xl font-bold text-white">98.2%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

             </motion.div>

             {/* Background Scanner Effect */}
             <motion.div 
                className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border-[0.5px] border-primary/10 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
             />
          </div>

          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
