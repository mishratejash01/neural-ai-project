import { useState } from "react";
import { 
  Play, 
  Volume2, 
  ShieldCheck, 
  Activity, 
  Users, 
  AlertTriangle,
  Flame,
  HardHat,
  Clock,
  Map,
  UserCheck
} from "lucide-react";

export function ProductShowcase() {
  // 1. Define the content for the two distinct perspectives
  const content = {
    "Smart Monitoring": {
      title: "Proactive Security",
      description: "Turn passive CCTV into an active threat prevention system. Detect incidents before they escalate.",
      points: [
        { text: "Theft & Shoplifting Detection", icon: <ShieldCheck className="w-4 h-4" /> },
        { text: "Real-time Intrusion Alerts", icon: <AlertTriangle className="w-4 h-4" /> },
        { text: "Safety Gear (PPE) Compliance", icon: <HardHat className="w-4 h-4" /> },
        { text: "Fire & Hazard Detection", icon: <Flame className="w-4 h-4" /> },
      ],
      videoTitle: "Live Security Feed",
      videoSubtitle: "Detecting threats in real-time",
      accentColor: "bg-[#eafaf1] text-[#2d6a4f]", // Green pill
      progressColor: "bg-[#ef4444]" // Red progress bar
    },
    "Business Intelligence": {
      title: "Customer & Staff Insights",
      description: "Optimize operations with data-driven behavioral analytics. Understand your space like never before.",
      points: [
        { text: "Customer Heatmaps & Flow", icon: <Map className="w-4 h-4" /> },
        { text: "Staff Productivity Tracking", icon: <Users className="w-4 h-4" /> },
        { text: "Demographic Analysis", icon: <UserCheck className="w-4 h-4" /> },
        { text: "Queue & Wait Time Analysis", icon: <Clock className="w-4 h-4" /> },
      ],
      videoTitle: "Store Analytics Dashboard",
      videoSubtitle: "Visualizing customer journeys",
      accentColor: "bg-[#f0f2ff] text-[#3e50f7]", // Blue pill
      progressColor: "bg-[#3e50f7]" // Blue progress bar
    }
  };

  type TabKey = keyof typeof content;
  const [activeTab, setActiveTab] = useState<TabKey>("Smart Monitoring");

  // Helper to get current content
  const current = content[activeTab];

  return (
    <section className="py-20 flex flex-col items-center justify-center w-full bg-[#f8faf8]">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e1a] mb-4">
          Complete Visibility. <span className="text-[#2d6a4f]">Absolute Control.</span>
        </h2>
      </div>

      {/* Differentiator Bar (Tabs) */}
      <div 
        className="flex mb-[30px] bg-white border border-[#eee] rounded-[100px] p-[4px]"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}
      >
        {(Object.keys(content) as TabKey[]).map((tab) => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[24px] py-[10px] text-[14px] font-[500] cursor-pointer rounded-[100px] transition-all duration-300 ${
              activeTab === tab 
              ? current.accentColor 
              : "text-[#757575] hover:bg-gray-50"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Main Content Card */}
      <div 
        className="w-[95%] max-w-[1100px] bg-white border border-[#f0f0f0] rounded-[40px] flex flex-col md:flex-row p-[30px] md:p-[50px] gap-[40px] mb-[50px] transition-all duration-300"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
      >
        {/* Left Side: Dynamic Text Content */}
        <div className="flex-1 flex flex-col justify-center animate-in fade-in slide-in-from-left-4 duration-500 key={activeTab}">
          <h2 className="text-[32px] font-[600] text-[#2d2d2d] mb-[8px] tracking-[-0.5px]">
            {current.title}
          </h2>
          <p className="text-[15px] text-[#757575] mb-[40px]">
            {current.description}
          </p>

          <div className="flex flex-col gap-[12px] items-start">
            {current.points.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center bg-[#f2f2f2] px-[18px] py-[10px] rounded-[20px] text-[14px] font-[400] text-[#444]"
              >
                <span className="mr-[10px] opacity-70">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Clean Video with Custom Bar */}
        <div className="flex-[1.3] relative">
          <div 
            className="w-full h-full min-h-[380px] rounded-[24px] overflow-hidden relative flex shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 bg-black group"
          >
            {/* 1. YouTube Background (Pointer events none = No interaction with YT directly) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]"> 
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/hI9HQfCAw64?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=hI9HQfCAw64&modestbranding=1&playsinline=1" 
                title="Neural AI Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full h-full object-cover"
              ></iframe>
            </div>

            {/* 2. Dark Overlay Gradient (Better Visibility for text/bar) */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ 
                    background: activeTab === "Smart Monitoring" 
                        ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,20,10,0.4) 100%)" 
                        : "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,20,50,0.4) 100%)" 
                }} 
            />

            {/* 3. Custom Bottom Player Bar (The "Own Control" Design) */}
            <div className="absolute bottom-[12px] left-[12px] right-[12px] h-[44px] bg-black/40 backdrop-blur-md rounded-[8px] flex items-center px-[15px] gap-[15px] border border-white/10 z-10">
              
              {/* Play/Pause Icon (Visual Only) */}
              <div className="text-white text-[14px] cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current"/>
              </div>
              
              {/* Progress Bar (Visual Only) */}
              <div className="flex-1 h-[4px] bg-white/20 rounded-[2px] relative cursor-pointer group/bar">
                <div className={`absolute w-[60%] h-full rounded-[2px] ${current.progressColor}`}></div>
                {/* Hover Effect on Bar */}
                <div className="absolute right-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 shadow-lg transition-opacity"></div>
              </div>
              
              {/* Volume Icon */}
              <div className="text-white opacity-80 cursor-pointer hover:opacity-100">
                <Volume2 className="w-4 h-4"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
