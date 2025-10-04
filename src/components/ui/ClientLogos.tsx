// src/components/ui/ClientLogos.tsx

"use client";
import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Importing your client logos
import adsyntraLogo from "@/assets/clients/adsyntra.png";
import anantyaLogo from "@/assets/clients/anantya.png";
import jitsieLogo from "@/assets/clients/jitsie.png";
import karoStartupLogo from "@/assets/clients/karo_startup_logo.jpeg";
import sitlovoLogo from "@/assets/clients/sitlovo.png";
import uiLogo from "@/assets/clients/ui_logo_.png";

// Creating the logo array with the required structure
const allLogos = [
  { name: "Adsyntra", id: 1, src: adsyntraLogo },
  { name: "Anantya", id: 2, src: anantyaLogo },
  { name: "Jitsie", id: 3, src: jitsieLogo },
  { name: "Karo Startup", id: 4, src: karoStartupLogo },
  { name: "Sitlovo", id: 5, src: sitlovoLogo },
  { name: "UI Logo", id: 6, src: uiLogo },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
          <div className="text-center">
            <GradientHeading size="lg" weight="bold">
              Trusted by Innovative Companies
            </GradientHeading>
          </div>
          <LogoCarousel columnCount={3} logos={allLogos} />
        </div>
      </div>
    </section>
  );
}
