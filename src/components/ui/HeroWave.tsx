import React from "react";

export const HeroWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
      <div className="relative w-full h-[80px] md:h-[150px]">
        
        {/* Back Wave (Static - Opacity 50%) */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-50 z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* Front Wave (Static - Solid White) */}
        <div className="absolute bottom-0 left-0 w-full h-full z-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z"
            />
          </svg>
        </div>

      </div>
    </div>
  );
};
