import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function Careers() {
  
  // Set document title
  useEffect(() => {
    document.title = "Efficiency Wanted | Neural AI";
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden font-sans">
        
        {/* INJECTED STYLES to ensure exact fidelity to your design */}
        <style>{`
          /* Import Fonts */
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&family=Inter:wght@300&display=swap');

          :root {
            --bg-color: #f6f6f2;
            --text-color: #0d1a1a;
            --muted-color: #7d8484;
          }

          /* Page Background */
          .careers-bg {
            background-color: var(--bg-color);
            color: var(--text-color);
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: -1;
          }

          .careers-bg::before {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: url("https://www.transparenttextures.com/patterns/p6.png");
            opacity: 0.03;
            pointer-events: none;
          }

          /* Brand Label Animation */
          .brand-label {
            font-family: 'Inter', sans-serif;
            font-size: 13px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: var(--muted-color);
            font-weight: 300;
            animation: fadeIn 1.5s ease;
          }

          /* Headline Typography */
          .career-headline {
            font-family: 'Playfair Display', serif;
            font-weight: 300;
            font-size: clamp(64px, 12vw, 140px);
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-color);
          }

          /* Reveal Animations */
          .reveal-text {
            display: block;
            opacity: 0;
            transform: translateY(20px);
            animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .reveal-delay {
            animation-delay: 0.3s;
          }

          /* Decorative Line */
          .decoration-line {
            position: absolute;
            bottom: 60px;
            width: 1px;
            height: 60px;
            background: var(--text-color);
            opacity: 0.2;
            animation: grow 2s ease;
            left: 50%;
            transform: translateX(-50%);
          }

          /* Keyframes */
          @keyframes revealUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes grow {
            from { height: 0; }
            to { height: 60px; }
          }
        `}</style>

        {/* Background Layer */}
        <div className="careers-bg"></div>

        {/* Top Header */}
        <header className="absolute top-[100px] w-full text-center">
          <div className="brand-label">Neural AI Careers</div>
        </header>

        {/* Main Headline */}
        <div className="flex flex-col gap-[10px] z-10">
          <h1 className="career-headline">
            <span className="reveal-text">Efficiency</span>
            <span className="reveal-text reveal-delay">Wanted</span>
          </h1>
        </div>

        {/* Bottom Decoration */}
        <div className="decoration-line"></div>
        
      </div>
    </Layout>
  );
}
