import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Scan, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function SplineHero() {
  return (
    <Card className="w-full h-screen md:-mt-16 bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      {/* Ambient Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content - Text & CTA */}
        <div className="w-full md:w-1/2 p-8 relative z-20 flex flex-col justify-center items-center md:items-start text-center md:text-left pointer-events-none">
          <div className="pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Engineering the future of Automation
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-300 max-w-lg"
            >
              Building intelligent, ethical AI solutions that amplify human potential and help businesses achieve extraordinary results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-8"
            >
              <Link to="/demo">
                <Button variant="neon" size="lg" className="group">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="neon-outline" size="lg">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right content - Spline Robot + Holographic Overlay */}
        <div className="w-full md:w-1/2 h-full relative z-10">
          
          {/* Holographic Projection Overlay - Simulating Eye Beam/Console */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
             {/* 1. The "Beam" Gradient */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: [0.4, 0.6, 0.4] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full mix-blend-screen"
             />

             {/* 2. Floating Data Particles (The "Conclusion/Console") */}
             <div className="absolute top-[20%] right-[10%] md:right-[20%] w-64 h-64 opacity-80">
                {/* Floating Icon 1 */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 right-0 p-2 bg-black/50 border border-primary/30 rounded-lg backdrop-blur-md"
                >
                  <Cpu className="w-6 h-6 text-primary" />
                  <div className="h-1 w-12 bg-primary/20 mt-1 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-20, 50] }} 
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/2 bg-primary" 
                    />
                  </div>
                </motion.div>

                {/* Floating Icon 2 */}
                <motion.div
                  animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 -left-10 p-2 bg-black/50 border border-primary/30 rounded-lg backdrop-blur-md"
                >
                  <Scan className="w-6 h-6 text-primary" />
                  <div className="text-[10px] text-primary font-mono mt-1">ANALYZING...</div>
                </motion.div>

                {/* Data Ring */}
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute top-10 left-0 w-40 h-40 border border-dashed border-primary/20 rounded-full"
                />
             </div>
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
