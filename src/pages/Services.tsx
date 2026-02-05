import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  MessageSquare,
  BarChart,
  Eye,
  Brain,
  Cog,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbots",
      description: "Streamline customer support with intelligent chatbots that understand natural language and learn from interactions.",
      slug: "chatbots",
      features: ["24/7 Availability", "Multi-language Support", "Sentiment Analysis"]
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "Tailored AI systems that solve unique business challenges with scalable, secure architecture.",
      slug: "custom-ai",
      features: ["Predictive Modeling", "Process Automation", "Legacy Integration"]
    },
    {
      icon: BarChart,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable intelligence with advanced machine learning models.",
      slug: "data-analytics",
      features: ["Real-time Dashboards", "Trend Forecasting", "Behavioral Analysis"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Harness visual intelligence for object detection, quality control, and automated monitoring.",
      slug: "computer-vision",
      features: ["Object Detection", "Facial Recognition", "Quality Inspection"]
    },
    {
      icon: Brain,
      title: "NLP & LLMs",
      description: "Create AI models that understand, interpret, and generate human language at scale.",
      slug: "nlp",
      features: ["Document Summarization", "Semantic Search", "Content Generation"]
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Boost marketing with AI-driven personalization and automated campaign optimization.",
      slug: "marketing-automation",
      features: ["Customer Segmentation", "Dynamic Content", "A/B Testing"]
    }
  ];

  return (
    <Layout>
      {/* LAMP HERO SECTION */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-100 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Intelligence, <br /> Scaled for Enterprise.
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="mt-4 text-center text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light"
        >
          Comprehensive AI solutions designed to transform your data into decision-making power.
        </motion.p>
      </LampContainer>

      {/* MAIN SERVICES GRID */}
      <section className="py-20 bg-background relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.3)] group overflow-hidden">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground pt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        Explore Solution
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
