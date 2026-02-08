import { 
  Zap, 
  Settings, 
  Plug, 
  Globe, 
  Database,
  Cpu,
  Server,
  Cloud,
  ShieldCheck,
  Code
} from "lucide-react";

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-white text-[#1a1a1a] font-sans">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#1a1a1a]">
            Made for <span className="text-[#2d6a4f] font-semibold">Developers</span>. Scales for <span className="text-[#2d6a4f] font-semibold">Enterprise</span>.
          </h2>
        </div>

        {/* Top Row (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Low Latency */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md h-[420px] relative overflow-hidden group">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Ultra-Low Latency<br/>Response
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Real-time threat detection with sub-second processing speed.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="z-10 text-5xl font-medium text-[#2d6a4f] flex items-baseline">
                ~100<span className="text-xl ml-1 text-[#2d6a4f]/70">ms</span>
              </div>
              <div className="absolute bottom-5 left-6 text-xs text-[#ccc] font-medium tracking-wide">
                MEDIAN DETECTION TIME
              </div>
              {/* Wave Background Graphic */}
              <div className="absolute -right-6 -top-2 w-[160px] h-[200px] bg-gradient-to-br from-[#eafaf1] to-white rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-80 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Card 2: Configurable Controls */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md h-[420px] relative overflow-hidden group">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Configurable<br/>Alert Rules
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Fine-tune detection sensitivity and zones to reduce false alarms.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="bg-white p-5 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-[200px] -rotate-[12deg] group-hover:rotate-0 transition-transform duration-300 border border-gray-100">
                <div className="text-[10px] text-[#999] font-bold mb-2 uppercase tracking-wide">Sensitivity</div>
                <div className="h-1 bg-[#2d6a4f] w-[70%] relative rounded-full mb-5">
                   <div className="absolute -right-1 -top-1 w-3 h-3 bg-white border-[2px] border-[#2d6a4f] rounded-full shadow-sm"></div>
                </div>
                <div className="text-[10px] text-[#999] font-bold mb-2 uppercase tracking-wide">Confidence Threshold</div>
                <div className="h-2 bg-[#eafaf1] w-full rounded-full relative overflow-hidden">
                   <div className="absolute left-0 top-0 h-full w-[85%] bg-[#2d6a4f]/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Integrations */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md h-[420px] relative overflow-hidden group">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Plug-and-play<br/>Integrations
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Connect seamlessly with your existing VMS and communication tools.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Badge 1 */}
                <div className="absolute px-5 py-2.5 bg-[#2d6a4f] text-white rounded-xl font-semibold text-lg shadow-lg -rotate-6 -translate-x-8 -translate-y-4 z-10 group-hover:-translate-y-6 transition-transform duration-300 flex items-center gap-2">
                   <ShieldCheck className="w-4 h-4" /> VMS
                </div>
                {/* Badge 2 */}
                <div className="absolute px-5 py-2.5 bg-white text-[#2d6a4f] border border-[#cfdccf] rounded-xl font-semibold text-lg shadow-sm rotate-6 translate-x-6 translate-y-4 group-hover:translate-y-6 transition-transform duration-300 flex items-center gap-2">
                   <Cloud className="w-4 h-4" /> Cloud
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          
          {/* Card 4: Environments (Replaces Languages) */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md h-[380px] relative overflow-hidden group">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Deploy Across Any<br/>Environment
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Scalable deployment for retail, warehouses, offices, or public spaces.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="flex flex-wrap justify-center gap-4 max-w-[200px] text-[#2d6a4f]">
                 <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform">
                    <Cloud className="w-6 h-6" />
                    <span className="text-[10px] font-bold">CLOUD</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform delay-75">
                    <Server className="w-6 h-6" />
                    <span className="text-[10px] font-bold">ON-PREM</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform delay-150">
                    <Cpu className="w-6 h-6" />
                    <span className="text-[10px] font-bold">EDGE</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 5: Model Library */}
          <div className="bg-white border border-[#f0f0f0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md h-[380px] relative overflow-hidden group">
            <h3 className="text-xl font-semibold mb-2 leading-tight">
              Extensive Model<br/>Library
            </h3>
            <p className="text-sm text-[#666] mb-8 min-h-[40px]">
              Choose from pre-trained models for theft, safety gear, fire, and more.
            </p>
            
            {/* Visual Area */}
            <div className="bg-[#f8f9fb] rounded-2xl flex-1 w-full relative overflow-hidden flex items-center justify-center">
              <div className="bg-white rounded-[20px] w-[180px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                 <div className="text-[9px] text-[#aaa] font-bold mb-3 uppercase tracking-wider">SELECT MODEL</div>
                 <div className="h-8 bg-[#eafaf1] rounded-lg mb-2 flex items-center px-3 border border-[#cfdccf]/30">
                    <div className="w-2 h-2 rounded-full bg-[#2d6a4f] mr-2"></div>
                    <div className="h-1.5 w-16 bg-[#2d6a4f]/20 rounded-full"></div>
                 </div>
                 <div className="h-8 bg-white border border-gray-100 rounded-lg mb-2 flex items-center px-3">
                    <div className="w-2 h-2 rounded-full bg-gray-200 mr-2"></div>
                    <div className="h-1.5 w-12 bg-gray-100 rounded-full"></div>
                 </div>
                 <div className="h-8 bg-white border border-gray-100 rounded-lg flex items-center px-3">
                    <div className="w-2 h-2 rounded-full bg-gray-200 mr-2"></div>
                    <div className="h-1.5 w-20 bg-gray-100 rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
