interface CtaCardProps {
  onOpenChat: () => void;
}

export function CtaCard({ onOpenChat }: CtaCardProps) {
  return (
    <section className="py-24 px-4 flex justify-center bg-[#fcfcfc]">
      <div className="w-full max-w-[1100px] bg-white p-6 rounded-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#eee]">
        
        <div className="w-full h-[300px] rounded-[45px] relative overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
          
          {/* Geometric Grid Background */}
          <div className="absolute -bottom-[150px] w-full h-[300px] flex justify-center pointer-events-none opacity-20">
            <div className="absolute border border-white/15 rounded-full w-[400px] h-[400px] bottom-0"></div>
            <div className="absolute border border-white/15 rounded-full w-[600px] h-[600px] -bottom-[50px]"></div>
            <div className="absolute border border-white/15 rounded-full w-[800px] h-[800px] -bottom-[100px]"></div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute -bottom-[50px] left-0 right-0 h-[100px] bg-white blur-[40px] opacity-60"></div>

          {/* Main Content */}
          <div className="relative z-10 mb-8">
            <h1 className="text-white text-[32px] font-normal mb-2 tracking-tight">
              Security that pays for itself.
            </h1>
            <p className="text-white/80 text-[20px] font-light">
              Powered to increase your ROI.
            </p>
          </div>

          {/* Trigger Button - Icon Removed */}
          <button 
            onClick={(e) => {
              e.preventDefault(); 
              onOpenChat();
            }}
            className="relative z-10 bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Get a Demo
          </button>

        </div>
      </div>
    </section>
  );
}
