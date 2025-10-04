// src/components/ui/ClientLogos.tsx

import { Marquee } from "@/components/ui/marquee";

// Importing client logos
import adsyntraLogo from "@/assets/clients/adsyntra.png";
import anantyaLogo from "@/assets/clients/anantya.png";
import jitsieLogo from "@/assets/clients/jitsie.png";
import karoStartupLogo from "@/assets/clients/karo_startup_logo.jpeg";
import sitlovoLogo from "@/assets/clients/sitlovo.png";
import uiLogo from "@/assets/clients/ui_logo_.png";

const clientLogos = [
  { src: adsyntraLogo, alt: "Adsyntra" },
  { src: anantyaLogo, alt: "Anantya" },
  { src: jitsieLogo, alt: "Jitsie" },
  { src: karoStartupLogo, alt: "Karo Startup" },
  { src: sitlovoLogo, alt: "Sitlovo" },
  { src: uiLogo, alt: "UI Logo" },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-gradient">Clients</span>
        </h2>
        <Marquee pauseOnHover>
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-[2.5rem] flex items-center justify-start"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
