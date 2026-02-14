import { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause,
  Volume2, 
  VolumeX,
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

// Add declaration for the YouTube API to avoid TypeScript errors
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"Smart Monitoring" | "Business Intelligence">("Smart Monitoring");
  
  // Video State
  const [isPlaying, setIsPlaying] = useState(true); // Auto-plays by default
  const [isMuted, setIsMuted] = useState(true);     // Muted by default for autoplay policy
  const [progress, setProgress] = useState(0);      // 0 to 100
  const playerRef = useRef<any>(null);              // Reference to YT Player
  const progressBarRef = useRef<HTMLDivElement>(null); // Reference to the progress DOM element

  // Content Data
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
      accentColor: "bg-[#eafaf1] text-[#2d6a4f]",
      progressColor: "bg-[#ef4444]"
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
      accentColor: "bg-[#f0f2ff] text-[#3e50f7]",
      progressColor: "bg-[#3e50f7]"
    }
  };

  const current = content[activeTab];

  // 1. Initialize YouTube API
  useEffect(() => {
    // Load API Script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize Player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    // If API is already ready (navigated back to page), create player immediately
    if (window.YT && window.YT.Player) {
      createPlayer();
    }

    return () => {
      // Cleanup: Stop player on unmount
      if (playerRef.current) {
        // playerRef.current.destroy(); // Optional: sometimes causes issues in React strict mode
      }
    };
  }, []);

  // 2. Player Creation Logic
  const createPlayer = () => {
    if (playerRef.current) return; // Prevent double init

    playerRef.current = new window.YT.Player('neural-player', {
      videoId: 'aUCMy2zql-Y', // SpaceX Video ID
      playerVars: {
        autoplay: 1,
        controls: 0,      // Hide native controls
        disablekb: 1,     // Disable keyboard
        fs: 0,            // No fullscreen button
        modestbranding: 1,
        rel: 0,           // No related videos
        showinfo: 0,
        mute: 1,          // Start muted (required for autoplay)
        loop: 1,
        playlist: 'hI9HQfCAw64' // Required for loop to work
      },
      events: {
        onReady: (event: any) => {
          event.target.playVideo();
          setIsPlaying(true);
        },
        onStateChange: (event: any) => {
          // If video ends (state=0), loop it manually if needed, or update play icon
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.playVideo();
          }
          setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
        }
      }
    });
  };

  // 3. Progress Bar Sync (Runs every 500ms)
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        if (duration > 0) {
          setProgress((currentTime / duration) * 100);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 4. Control Handlers
  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // Position of click inside the bar
    const width = rect.width;
    const percentage = clickX / width; // 0.0 to 1.0

    // Calculate new time
    const duration = playerRef.current.getDuration();
    const newTime = duration * percentage;

    // Seek
    playerRef.current.seekTo(newTime, true);
    setProgress(percentage * 100);
  };

  return (
    <section className="py-20 flex flex-col items-center justify-center w-full bg-[#f8faf8]">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e1a] mb-4">
          Complete Visibility. <span className="text-[#2d6a4f]">Absolute Control.</span>
        </h2>
      </div>

      {/* Tabs */}
      <div 
        className="flex mb-[30px] bg-white border border-[#eee] rounded-[100px] p-[4px]"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}
      >
        {(Object.keys(content) as Array<keyof typeof content>).map((tab) => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[24px] py-[10px] text-[14px] font-[500] cursor-pointer rounded-[100px] transition-all duration-300 ${
              activeTab === tab 
              ? content[tab].accentColor 
              : "text-[#757575] hover:bg-gray-50"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div 
        className="w-[95%] max-w-[1100px] bg-white border border-[#f0f0f0] rounded-[40px] flex flex-col md:flex-row p-[30px] md:p-[50px] gap-[40px] mb-[50px] transition-all duration-300"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
      >
        {/* Left Side: Text */}
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

        {/* Right Side: Video Player */}
        <div className="flex-[1.3] relative">
          <div className="w-full h-full min-h-[380px] rounded-[24px] overflow-hidden relative flex shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 bg-black group">
            
            {/* YouTube Target Div */}
            <div className="absolute inset-0 w-full h-full scale-[1.35] pointer-events-none">
              <div id="neural-player" className="w-full h-full" />
            </div>

            {/* Dark Overlay for Text Visibility */}
            <div 
                className="absolute inset-0 pointer-events-none transition-colors duration-500"
                style={{ 
                    background: activeTab === "Smart Monitoring" 
                        ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,20,10,0.3) 100%)" 
                        : "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,20,50,0.3) 100%)" 
                }} 
            />

            {/* CUSTOM CONTROLS BAR */}
            <div className="absolute bottom-[12px] left-[12px] right-[12px] h-[48px] bg-black/60 backdrop-blur-md rounded-[12px] flex items-center px-[15px] gap-[15px] border border-white/10 z-20 transition-all duration-200 hover:bg-black/70">
              
              {/* Play/Pause Button */}
              <button 
                onClick={togglePlay}
                className="text-white hover:scale-110 transition-transform focus:outline-none"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current"/> : <Play className="w-4 h-4 fill-current"/>}
              </button>
              
              {/* Interactive Progress Bar */}
              <div 
                className="flex-1 h-[24px] flex items-center cursor-pointer group/bar"
                onClick={handleSeek}
                ref={progressBarRef}
              >
                {/* Track */}
                <div className="w-full h-[4px] bg-white/20 rounded-[2px] relative overflow-hidden">
                  {/* Fill */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 rounded-[2px] transition-all duration-100 ${current.progressColor}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {/* Thumb (Visible on hover) */}
                {/* <div 
                  className="w-3 h-3 bg-white rounded-full absolute pointer-events-none opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-sm"
                  style={{ left: `calc(${progress}% - 6px)` }}
                /> */}
              </div>
              
              {/* Mute/Unmute Button */}
              <button 
                onClick={toggleMute}
                className="text-white/80 hover:text-white transition-colors focus:outline-none"
              >
                {isMuted ? <VolumeX className="w-5 h-5"/> : <Volume2 className="w-5 h-5"/>}
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
