
import React from "react";
import { motion } from "framer-motion";

// Importing your client logos
import adsyntraLogo from "@/assets/clients/adsyntra.png";
import anantyaLogo from "@/assets/clients/anantya.png";
import jitsieLogo from "@/assets/clients/jitsie.png";
import karoStartupLogo from "@/assets/clients/karo_startup_logo.jpeg";
import sitlovoLogo from "@/assets/clients/sitlovo.png";
import uiLogo from "@/assets/clients/ui_logo_.png";

// Creating the logo array
const logos = [
  { name: "Adsyntra", id: 1, src: adsyntraLogo },
  { name: "Anantya", id: 2, src: anantyaLogo },
  { name: "Jitsie", id: 3, src: jitsieLogo },
  { name: "Karo Startup", id: 4, src: karoStartupLogo },
  { name: "Sitlovo", id: 5, src: sitlovoLogo },
  { name: "UI Logo", id: 6, src: uiLogo },
];

export function ClientLogos() {
  // Duplicate logos multiple times to ensure seamless scrolling on wide screens
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full flex-col items-center space-y-12">
          
          {/* Header Section with requested Typography */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl">
              <span className="font-sans font-semibold italic text-foreground">Trusted By</span>{" "}
              <span className="text-gradient font-bold">Innovators</span>
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="w-full relative overflow-hidden mask-gradient-x">
            {/* mask-gradient-x (concept): You might want to add a CSS class or inline style 
               to fade the edges: mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            */}
            <div 
              className="flex items-center"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
              }}
            >
              <motion.div
                className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 30, // Adjust speed here (higher = slower)
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {marqueeLogos.map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="relative w-32 h-20 md:w-40 md:h-24 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

