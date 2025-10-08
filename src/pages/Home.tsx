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
      {/* New Hero Section */}
      <SplineHero />

      {/* Stats Section */}
      <section className="py-20 bg-surface-dark border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover-lift bg-transparent border-none shadow-none"
              >
                <CardHeader>
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary mr-3" />
                    <div className="text-4xl md:text-5xl font-bold text-neon">
                      {stat.value}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom model development to production deployment, we deliver
              end-to-end AI solutions that transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover-lift hover-glow group transition-all duration-500"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-neon rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-neon">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-neon transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-primary font-medium">
                    {service.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="glow" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="neon" size="lg" className="group">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Demo Teaser */}
      <section className="py-24 bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              See Our AI in <span className="text-gradient">Action</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Watch a live demonstration of our ML models processing real data,
              or try our interactive sandbox to experience the power of AI
              firsthand.
            </p>

            <div className="relative mb-12 group hover-lift">
              <div className="aspect-video bg-gradient-to-br from-surface-darker to-card rounded-2xl border border-border flex items-center justify-center shadow-elevated hover:shadow-neon-lg transition-all">
                <div className="text-center">
                  <div className="w-20 h-20 gradient-neon rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-neon-lg">
                    <Play className="w-10 h-10 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Demo Video Coming Soon
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button variant="neon" size="lg" className="group">
                  <Play className="mr-2 w-5 h-5" />
                  Request Live Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="neon-outline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Stay ahead with AI insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Get monthly AI playbooks with real case studies and
              implementation guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <Button variant="neon" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
