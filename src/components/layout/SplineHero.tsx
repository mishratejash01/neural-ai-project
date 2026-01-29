import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert, ScanEye, Siren, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function SplineHero() {
  return (
    <Card className="w-full h-screen md:-mt-16 bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      {/* Ambient Spotlight - Changed to a cool blue/cyan for security vibe */}
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
              {/* Updated Headline for Crime Detection */}
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

        {/* Right content - Spline Robot + Crime Analytics Hologram */}
        <div className="w-full md:w-1/2 h-full relative z-10">
          
          {/* Holographic Projection Overlay - Security Analytics Interface */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
             
             {/* 1. The "Scanner Beam" Gradient */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: [0.3, 0.5, 0.3] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute top-[25%] left-[5%] w-[600px] h-[600px] bg-primary/5 blur-[80px] rounded-full mix-blend-screen"
             />

             {/* 2. Floating Analytics Widgets (The "Conclusion") */}
             <div className="absolute top-[15%] right-[5%] md:right-[15%] w-80 h-80">
                
                {/* WIDGET A: Threat Alert (Pulsing Red/Orange if needed, or Primary) */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute top-0 right-10 p-4 bg-black/80 border border-red-500/50 rounded-xl backdrop-blur-xl shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-500/20 rounded-lg animate-pulse">
                      <Siren className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-red-400 font-mono font-bold tracking-wider">THREAT DETECTED</div>
                      <div className="text-white font-bold">Shoplifting Attempt</div>
                    </div>
                  </div>
                  {/* Confidence Bar */}
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "89%" }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="h-full bg-red-500"
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-neutral-400">Confidence</span>
                    <span className="text-[10px] text-red-400 font-mono">89.4%</span>
                  </div>
                </motion.div>

                {/* WIDGET B: Behavioral Analysis Graph */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-20 left-0 p-3 bg-black/60 border border-primary/30 rounded-lg backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ScanEye className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-mono">BEHAVIOR_SCAN_01</span>
                  </div>
                  {/* Fake Graph Lines */}
                  <div className="flex items-end gap-1 h-12 w-32 pb-1 border-b border-white/10">
                    {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [h + "%", (h - 20) + "%", h + "%"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1/6 bg-primary/40 hover:bg-primary/80 transition-colors rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* WIDGET C: Terminal Log */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -bottom-10 right-0 p-3 w-48 bg-black/40 border-l-2 border-primary/50 font-mono text-[10px] text-primary/80 backdrop-blur-sm"
                >
                  <div className="opacity-50"># System Log</div>
                  <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    &gt; analyzing_feed_04...<br/>
                    &gt; motion_track: active<br/>
                    &gt; object_id: "bag"<br/>
                    &gt; status: <span className="text-white">suspicious</span>
                  </motion.div>
                </motion.div>

                {/* Rotating Targeting Ring */}
                <motion.div
                   animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                   transition={{ rotate: { duration: 20, ease: "linear", repeat: Infinity }, scale: { duration: 2, repeat: Infinity } }}
                   className="absolute top-10 left-10 w-64 h-64 border border-dashed border-primary/10 rounded-full z-[-1]"
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
