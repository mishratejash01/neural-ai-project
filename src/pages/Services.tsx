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
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";

const Services = () => {
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
    <Layout>
      {/* Hero Section - FIX APPLIED HERE */}
      <div className="bg-background text-foreground">
        <HeroGeometric
          badge="Our Expertise"
          title1="Our"
          title2="AI Services"
        />
      </div>

      {/* Stats Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Clock className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Fast Deployment</h3>
              <p className="text-muted-foreground">Get your AI solutions up and running in weeks, not months, with our proven methodologies</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Proven ROI</h3>
              <p className="text-muted-foreground">Our clients see average 300% ROI within the first year through optimized operations</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security and compliance built into every solution we deliver</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Comprehensive <span className="text-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our detailed service offerings designed to transform your business operations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover-lift hover-glow group transition-all duration-500 rounded-3xl overflow-hidden">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-accent group-hover:scale-110 transition-smooth">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Link to={`/services/${service.slug}`}>
                    <Button className="w-full gradient-primary text-white hover:opacity-90 transition-smooth rounded-xl py-3 text-lg font-semibold shadow-accent group-hover:shadow-xl" size="lg">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your AI implementation is successful,
              on-time, and delivers measurable results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and identify AI opportunities" },
              { step: "02", title: "Strategy", description: "We design a custom AI roadmap tailored to your goals" },
              { step: "03", title: "Development", description: "Our experts build and test your AI solution" },
              { step: "04", title: "Deployment", description: "We launch your solution and provide ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI experts will analyze your business and recommend the perfect solution.
              Schedule a free consultation to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-smooth">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Watch Our Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
