import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/neural-ai-hero.jpg";
import { 
  Brain, 
  BarChart, 
  Eye, 
  MessageSquare, 
  Cog, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots & Virtual Assistants",
      description: "Smart conversation systems that work 24/7 to serve your customers"
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "AI-powered insights to forecast trends and optimize business decisions"
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis for automation and quality control"
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Understanding and processing human language at scale"
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "Tailor-made AI systems designed specifically for your business needs"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline operations with intelligent process automation"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Industries Served" },
    { value: "24/7", label: "AI Support" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Smarter <span className="text-gradient">AI Solutions</span>
            <br />for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your operations with cutting-edge artificial intelligence. 
            We build custom AI solutions that drive real results for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button variant="hero" size="lg">
                Book a Demo
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="neural" size="lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-gradient">AI Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive AI solutions designed to transform how your business operates,
              from customer interactions to data-driven decision making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card border-border shadow-card transition-smooth hover:shadow-primary group">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">
              Join hundreds of companies that trust Neural AI for their digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["TechCorp", "InnovateAI", "DataFlow", "FutureSys"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our AI solutions can drive growth and efficiency in your organization.
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started Today
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="neural" size="lg">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;