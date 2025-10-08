// src/pages/Home.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { SplineHero } from "@/components/layout/SplineHero";
import { ClientLogos } from "@/components/ui/ClientLogos";
import BlurText from "@/components/ui/BlurText"; // Import the new component
import {
  Brain,
  BarChart,
  Eye,
  MessageSquare,
  Cog,
  Zap,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  Play,
  Cpu,
} from "lucide-react";

const Home = () => {
  // ... (keep the rest of your component state and logic)
  const services = [
    {
      icon: Brain,
      title: "Custom Model Development",
      description: "Build ML models tuned to your data and KPIs",
      tagline: "Production-ready AI tailored to your business",
    },
    {
      icon: MessageSquare,
      title: "LLM Integration & Prompt Engineering",
      description:
        "Integrate language models into workflows with safety guardrails",
      tagline: "Intelligent conversation systems",
    },
    {
      icon: Eye,
      title: "Computer Vision & Imaging",
      description: "Automate image inspection, detection and visual understanding",
      tagline: "AI-powered visual intelligence",
    },
    {
      icon: BarChart,
      title: "Predictive Analytics & Forecasting",
      description: "Turn historical data into accurate forecasts and signals",
      tagline: "Data-driven decision making",
    },
    {
      icon: Cog,
      title: "MLOps & Productionization",
      description:
        "From prototype to 24/7 production: robust pipelines, monitoring and retraining",
      tagline: "Enterprise-grade deployment",
    },
    {
      icon: Zap,
      title: "Automation & RPA with AI",
      description: "Reduce repetitive tasks by combining rules + ML",
      tagline: "Intelligent process automation",
    },
  ];

  const stats = [
    { value: "99%", label: "Uptime in Production", icon: Shield },
    { value: "4-12", label: "Weeks to Deploy", icon: Clock },
    { value: "300%", label: "Average ROI", icon: TrendingUp },
    { value: "24/7", label: "AI Monitoring", icon: Cpu },
  ];

  return (
    <Layout>
      <SplineHero />
      {/* ... (Your Stats and Services sections remain the same) */}
    </Layout>
  );
};

export default Home;
