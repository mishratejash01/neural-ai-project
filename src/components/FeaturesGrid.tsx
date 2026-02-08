import { 
  Cctv, 
  Smartphone, 
  TrendingUp, 
  Users, 
  ShieldAlert, 
  CheckCircle2,
  BellRing,
  Activity,
  Footprints,
  Clock
} from "lucide-react";

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-white text-[#1a1a1a] font-sans">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#1a1a1a]">
            Features that drive <span className="text-[#2d6a4f] font-semibold">ROI</span>. Security that never <span className="text-[#2d6a4f] font-semibold">sleeps</span>.
          </h2>
        </div>

        {/* Top Row (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Existing Hardware */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col shadow-sm h-[420px] relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Works with Your<br/>Existing Cameras
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              No need to buy expensive new hardware. We integrate directly with your current CCTV setup.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="relative">
                {/* Camera Icon */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 relative z-10">
                  <Cctv className="w-10 h-10 text-[#2d6a4f]" />
                </div>
                {/* Connection Line */}
                <div className="absolute top-1/2 left-full w-16 h-1 bg-dashed border-t-2 border-[#ccc] -translate-y-1/2 z-0"></div>
                {/* Checkmark Badge */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#eafaf1] rounded-full flex items-center justify-center border border-[#2d6a4f]/20 z-10">
                   <CheckCircle2 className="w-6 h-6 text-[#2d6a4f]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Instant Alerts */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col shadow-sm h-[420px] relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Instant WhatsApp<br/>& SMS Alerts
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Get notified the second an incident occurs. Receive video clips directly on your phone.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
               {/* Mobile Phone Mockup */}
               <div className="w-[140px] bg-white border border-gray-200 shadow-xl rounded-[20px] p-3 -rotate-6">
                  <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  {/* Notification Bubble */}
                  <div className="bg-[#eafaf1] p-3 rounded-xl border border-[#2d6a4f]/10 mb-2 shadow-sm">
                     <div className="flex items-center gap-2 mb-1">
                        <ShieldAlert className="w-3 h-3 text-[#ef4444]" />
                        <span className="text-[9px] font-bold text-[#1a1a1a]">Theft Detected</span>
                     </div>
                     <div className="h-1.5 w-[80%] bg-[#2d6a4f]/20 rounded-full"></div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                     <div className="flex items-center gap-2 mb-1">
                        <BellRing className="w-3 h-3 text-[#2d6a4f]" />
                        <span className="text-[9px] font-bold text-[#1a1a1a]">Shop Opened</span>
                     </div>
                     <div className="h-1.5 w-[60%] bg-gray-200 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 3: Staff Productivity */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col shadow-sm h-[420px] relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Staff Productivity<br/>Tracking
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Monitor attendance, idle time, and customer interactions to optimize workforce efficiency.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Metric Card 1 */}
                <div className="absolute px-5 py-3 bg-white text-[#1a1a1a] rounded-xl border border-gray-100 shadow-lg -rotate-3 -translate-x-4 -translate-y-6 z-10">
                   <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-[#ef4444]" />
                      <span className="text-xs font-bold text-gray-500">IDLE TIME</span>
                   </div>
                   <div className="text-xl font-bold">-15% <span className="text-[10px] text-green-600 font-normal">↓</span></div>
                </div>
                {/* Metric Card 2 */}
                <div className="absolute px-5 py-3 bg-[#2d6a4f] text-white rounded-xl shadow-lg rotate-3 translate-x-4 translate-y-4">
                   <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white/80">EFFICIENCY</span>
                   </div>
                   <div className="text-xl font-bold">+24% <span className="text-[10px] text-white/80 font-normal">↑</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          
          {/* Card 4: Heatmaps */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col shadow-sm h-[380px] relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Customer Heatmaps<br/>& Analytics
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Understand which aisles get the most traffic. Place high-margin products in hot zones.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
               {/* Simplified Heatmap Visual */}
               <div className="w-[180px] h-[120px] bg-white border border-gray-100 rounded-lg shadow-sm grid grid-cols-4 grid-rows-3 gap-1 p-2">
                  <div className="bg-[#2d6a4f]/10 rounded"></div>
                  <div className="bg-[#ef4444]/80 rounded animate-pulse"></div>
                  <div className="bg-[#2d6a4f]/10 rounded"></div>
                  <div className="bg-[#2d6a4f]/30 rounded"></div>
                  
                  <div className="bg-[#2d6a4f]/20 rounded"></div>
                  <div className="bg-[#ef4444]/60 rounded"></div>
                  <div className="bg-[#2d6a4f]/10 rounded"></div>
                  <div className="bg-[#2d6a4f]/5 rounded"></div>
                  
                  <div className="bg-[#2d6a4f]/5 rounded"></div>
                  <div className="bg-[#2d6a4f]/20 rounded"></div>
                  <div className="bg-[#2d6a4f]/40 rounded"></div>
                  <div className="bg-[#ef4444]/90 rounded animate-pulse"></div>
               </div>
               <div className="absolute bottom-6 flex gap-4 text-[10px] font-bold text-gray-400">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#ef4444] rounded-full"></div> HOT ZONE</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#2d6a4f]/20 rounded-full"></div> COLD ZONE</span>
               </div>
            </div>
          </div>

          {/* Card 5: Automated Vigilance */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col shadow-sm h-[380px] relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              24/7 Automated<br/>Vigilance
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              AI never sleeps or takes breaks. Continuous monitoring for fire, intrusion, and safety compliance.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
               <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                        <ShieldAlert className="w-6 h-6 text-[#2d6a4f]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#2d6a4f]">SECURITY</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                        <Users className="w-6 h-6 text-[#2d6a4f]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#2d6a4f]">SAFETY</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                        <Footprints className="w-6 h-6 text-[#2d6a4f]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#2d6a4f]">TRAFFIC</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
