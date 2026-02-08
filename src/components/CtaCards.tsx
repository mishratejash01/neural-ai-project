import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function CtaCard() {
  return (
    <section className="py-24 px-4 flex justify-center bg-[#fcfcfc]">
      <div className="w-full max-w-[1100px] bg-white p-6 rounded-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#eee]">
        
        <div className="w-full h-[400px] rounded-[45px] relative overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
          
          {/* Geometric Grid Background (The Arches) */}
          <div className="absolute -bottom-[150px] w-full h-[300px] flex justify-center pointer-events-none opacity-20">
            <div className="absolute border border-white/15 rounded-full w-[400px] h-[400px] bottom-0"></div>
            <div className="absolute border border-white/15 rounded-full w-[600px] h-[600px] -bottom-[50px]"></div>
            <div className="absolute border border-white/15 rounded-full w-[800px] h-[800px] -bottom-[100px]"></div>
            <div className="absolute border border-white/15 rounded-full w-[600px] h-[600px] -bottom-[50px] left-[20%]"></div>
            <div className="absolute border border-white/15 rounded-full w-[600px] h-[600px] -bottom-[50px] right-[20%]"></div>
          </div>

          {/* Bottom Glow Effect */}
          <div className="absolute -bottom-[50px] left-0 right-0 h-[100px] bg-white blur-[40px] opacity-60"></div>

          {/* Main Content */}
          <div className="relative z-10 -mt-10">
            <h1 className="text-white text-[32px] font-normal mb-3 tracking-tight">
              Ready to secure your premises?
            </h1>
            <p className="text-white/80 text-[24px] font-light">
              Powered by Neural Vision v2.0
            </p>
          </div>

          {/* Icon */}
          <div className="relative z-10 my-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <Sparkles className="w-12 h-12 text-white fill-white" />
          </div>

          {/* Button */}
          <Link 
            to="/contact" 
            className="relative z-10 bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get a Demo
          </Link>

        </div>
      </div>
    </section>
  );
}
