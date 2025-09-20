import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import {
  MessageSquare,
  BarChart,
  Eye,
  Brain,
  Cog,
  Zap,
  ArrowRight,
} from "lucide-react";

const ServicesPageContent = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbots",
      description: "Streamline customer support with intelligent chatbots that understand natural language and learn from interactions.",
      slug: "chatbots"
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "Tailored AI systems that solve unique business challenges with scalable, secure architecture.",
      slug: "custom-ai"
    },
    {
      icon: BarChart,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable intelligence with advanced machine learning models.",
      slug: "data-analytics"
    },
    {
      icon: Eye,
      title: "Computer Vision Applications",
      description: "Harness visual intelligence for object detection, quality control, and automated monitoring.",
      slug: "computer-vision"
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Create AI models that understand, interpret, and generate human language at scale.",
      slug: "nlp"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Boost marketing with AI-driven personalization and automated campaign optimization.",
      slug: "marketing-automation"
    }
  ];

  return (
    <div className="bg-surface-dark py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 animate-slide-up">
            Comprehensive <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our detailed service offerings designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift hover-glow group transition-all duration-500 rounded-3xl overflow-hidden">
              <CardHeader className="p-8 text-center">
                <div className="w-16 h-16 gradient-neon rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-accent group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-text-muted leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Link to={`/services/${service.slug}`}>
                  <Button className="w-full" size="lg">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1920&auto=format&fit=crop"
      title="AI Services"
      date="Our Solutions"
      scrollToExpand="Scroll to explore our services"
      textBlend
    >
      <ServicesPageContent />
    </ScrollExpandMedia>
  );
};

export default Services;
