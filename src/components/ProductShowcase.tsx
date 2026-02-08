import { useState } from "react";
import { 
  ShieldCheck, 
  Activity, 
  Users, 
  AlertTriangle, 
  Play, 
  Volume2 
} from "lucide-react";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("Smart Monitoring");

  return (
    <section className="py-24 bg-[#f8faf8] flex flex-col items-center justify-center w-full border-t border-b border-[#cfdccf]/30">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e1a] mb-4">
          Intelligence in <span className="text-[#2d6a4f]">Real-Time</span>
        </h2>
        <p className="text-[#556b55] text-lg max-w-2xl mx-auto">
          Experience how Neural AI transforms standard surveillance into actionable business insights.
        </p>
      </div>

      {/* Nav Pills */}
      <div 
        className="flex mb-[30px] bg-white border border-[#eee] rounded-[100px] p-[4px] shadow-sm"
      >
        {["Smart Monitoring", "User Behavior", "Analytics"].map((tab) => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[24px] py-[10px] text-[14px] font-[500] cursor-pointer rounded-[100px] transition-colors duration-200 ${
              activeTab === tab 
              ? "bg-[#eafaf1] text-[#2d6a4f]" 
              : "text-[#757575] hover:bg-gray-50"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Main Feature Card */}
      <div 
        className="w-[95%] max-w-[1100px] bg-white border border-[#f0f0f0] rounded-[40px] flex flex-col md:flex-row p-[30px] md:p-[50px] gap-[40px]"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
      >
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[32px] font-[600] text-[#2d2d2d] mb-[8px] tracking-[-0.5px]">
            Smart Monitoring & Analytics
          </h2>
          <p className="text-[15px] text-[#757575] mb-[40px]">
            Real-time surveillance & user behavior insights
          </p>

          <div className="flex flex-col gap-[12px] items-start">
            {[
              { text: "Theft & Threat Detection", icon: <ShieldCheck className="w-4 h-4" /> },
              { text: "Safety & Compliance Alerts", icon: <AlertTriangle className="w-4 h-4" /> },
              { text: "Customer Footfall Heatmaps", icon: <Activity className="w-4 h-4" /> },
              { text: "Staff Productivity Metrics", icon: <Users className="w-4 h-4" /> },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center bg-[#f2f2f2] px-[18px] py-[10px] rounded-[20px] text-[14px] font-[400] text-[#444] transition-colors duration-200 hover:bg-[#e9e9e9]"
              >
                <span className="mr-[10px] opacity-70">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Video Placeholder */}
        <div className="flex-[1.3] relative group cursor-pointer">
          <div 
            className="w-full h-full min-h-[380px] rounded-[24px] overflow-hidden relative flex shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ 
              background: "linear-gradient(135deg, #1a2e1a 0%, #2d6a4f 100%)" 
            }}
          >
            {/* Video Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-[20px] text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                 <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <h3 className="text-white/90 text-2xl font-bold mb-2">Live Intelligence</h3>
              <p className="text-white/60 text-sm">Behavior analysis & object detection in action</p>
            </div>

            {/* Fake Player Bar for realism */}
            <div className="absolute bottom-[12px] left-[12px] right-[12px] h-[44px] bg-black/40 backdrop-blur-md rounded-[8px] flex items-center px-[15px] gap-[15px] border border-white/10">
              <div className="text-white text-[14px]"><Play className="w-3 h-3 fill-current"/></div>
              <div className="flex-1 h-[4px] bg-white/20 rounded-[2px] relative">
                <div className="absolute w-[45%] h-full bg-[#7fb07f] rounded-[2px]"></div>
              </div>
              <div className="text-white opacity-80"><Volume2 className="w-4 h-4"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
