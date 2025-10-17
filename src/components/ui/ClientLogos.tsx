// src/components/ui/ClientLogos.tsx

"use client";
import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Importing your client logos
import adsyntraLogo from "@/assets/clients/adsyntra.png";
import anantyaLogo from "@/assets/clients/anantya.png";
import karoStartupLogo from "@/assets/clients/karo_startup_logo.jpeg";
import sitlovoLogo from "@/assets/clients/sitlovo.png";

// Creating the logo array with the required structure
const allLogos = [
  { name: "Adsyntra", id: 1, src: adsyntraLogo },
  { name: "Anantya", id: 2, src: anantyaLogo },
  { name: "Karo Startup", id: 4, src: karoStartupLogo },
  { name: "Sitlovo", id: 5, src: sitlovoLogo },
];

export function ClientLogos() {
  return (
    // Changed background to surface-dark to match other sections
    <section className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Added the tech-grid background for consistency */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted By <span className="text-gradient">Innovators</span>
            </h2>
          </div>

          {/* New container to style the carousel like a card */}
          <div className="w-full max-w-5xl p-4 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <LogoCarousel columnCount={4} logos={allLogos} />
          </div>
        </div>
      </div>
    </section>
  );
}
