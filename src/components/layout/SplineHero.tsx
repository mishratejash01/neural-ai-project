import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// We are not importing BlurText for this test
// import BlurText from "@/components/ui/BlurText";

export function SplineHero() {
  return (
    <Card className="w-full h-screen md:-mt-16 bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="w-full md:w-1/2 p-8 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          
          {/* DEBUGGING STEP: Using a simple h1 tag */}
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Engineering the future of Automation
          </h1>
          
          <p className="mt-4 text-neutral-300 max-w-lg">
            Building intelligent, ethical AI solutions that amplify human potential and help businesses achieve extraordinary results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Link to="/demo">
                <Button variant="neon" size="lg" className="group">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="neon-outline" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 h-full relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
