import { ArrowRight, Play, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductShowcase() {
  return (
    <section className="container mx-auto px-4 py-24 space-y-32">
      
      {/* FEATURE SECTION: Smart Monitoring & Analytics */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Card 1: Smart Monitoring */}
        <Card className="relative overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-blue-500" />
            </div>
            <CardTitle className="text-2xl text-white">Smart Monitoring</CardTitle>
            <CardDescription className="text-zinc-400 text-base">
              Proactive Surveillance & Threat Detection
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-zinc-300 leading-relaxed">
              Transform your existing CCTV infrastructure into an intelligent security system. 
              Our Smart Monitoring operates 24/7 to detect theft, ensure safety compliance, 
              and track employee attendance in real-time—alerting you the moment an incident occurs.
            </p>
            
            <Button variant="outline" className="group border-zinc-700 text-zinc-300 hover:text-white hover:border-blue-500">
              Learn more 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        {/* Card 2: User Behavior Analytics */}
        <Card className="relative overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-purple-500" />
            </div>
            <CardTitle className="text-2xl text-white">User Behavior Analytics</CardTitle>
            <CardDescription className="text-zinc-400 text-base">
              Data-Driven Behavioral Insights
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-zinc-300 leading-relaxed">
              Go beyond simple recording. Unlock deep analytics based on actual user behavior, 
              including customer footfall heatmaps, emotion detection, and staff productivity metrics. 
              Turn visual data into actionable business intelligence.
            </p>
            
            <Button variant="outline" className="group border-zinc-700 text-zinc-300 hover:text-white hover:border-purple-500">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* VIDEO SECTION */}
      <div className="flex flex-col items-center text-center space-y-10">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            See Neural AI in Action
          </h2>
          <p className="text-lg text-zinc-400">
            Watch how our Smart Monitoring and Analytics transform raw footage into real-time insights.
          </p>
        </div>

        {/* Video Placeholder / Embed */}
        <div className="w-full max-w-5xl aspect-video rounded-2xl border border-zinc-800 bg-zinc-900/50 relative overflow-hidden group cursor-pointer shadow-2xl shadow-black/50">
          
          {/* Replace this 'src' with your actual video thumbnail or video file */}
          {/* <img src="/path-to-thumbnail.jpg" alt="Neural AI Demo" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" /> */}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
          
          {/* Optional: Add actual video tag here when ready */}
          {/* <video src="/demo.mp4" controls className="w-full h-full object-cover" /> */}
        </div>
      </div>

    </section>
  );
}
