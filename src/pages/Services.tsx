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
  CheckCircle2,
  ArrowRight,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI-Powered Chatbots",
      description: "Our AI-powered chatbots are designed to streamline customer support, lead generation, and sales engagement. Unlike traditional bots, these systems understand natural language, learn from past interactions, and adapt to customer needs.",
      benefits: [
        "24/7 customer support availability",
        "Reduces response time by 90%",
        "Natural language understanding",
        "Seamless integration with existing platforms",
        "Learns and improves from interactions",
        "Multi-channel deployment (web, mobile, social)"
      ],
      details: "With 24/7 availability, they reduce response time, improve customer satisfaction, and free up human agents for complex queries. Businesses can integrate these bots on websites, apps, and social platforms to create seamless customer experiences.",
      example: "An e-commerce chatbot that helps customers find products, track orders, process returns, and even provides personalized recommendations based on browsing history."
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "We provide tailor-made AI solutions that solve unique business challenges. Whether it's automating repetitive tasks, analyzing large datasets for insights, or creating recommendation engines, our team develops AI systems that align with your goals.",
      benefits: [
        "Tailored to specific business needs",
        "Scalable architecture design",
        "Enterprise-grade security",
        "Seamless system integration",
        "Ongoing optimization support",
        "ROI-focused development"
      ],
      details: "Each solution is scalable, secure, and built to integrate smoothly with your existing workflows. We work closely with your team to ensure the AI system not only meets current needs but adapts to future requirements.",
      example: "A custom inventory management AI that predicts demand, optimizes stock levels, and automatically reorders products while considering seasonal trends and market fluctuations."
    },
    {
      icon: BarChart,
      title: "Data Analytics & Insights",
      description: "Our analytics solutions help businesses transform raw data into actionable intelligence. Using advanced machine learning models, we uncover hidden patterns, predict future trends, and provide visual dashboards that empower data-driven decision-making.",
      benefits: [
        "Advanced pattern recognition",
        "Predictive trend analysis",
        "Interactive visual dashboards",
        "Real-time data processing",
        "Automated report generation",
        "Data-driven strategy recommendations"
      ],
      details: "From sales forecasting to customer behavior analysis, we turn complexity into clarity. Our solutions process vast amounts of data to provide insights that drive strategic business decisions.",
      example: "A retail analytics platform that analyzes customer purchase patterns, predicts seasonal demands, identifies profitable product combinations, and recommends optimal pricing strategies."
    },
    {
      icon: Eye,
      title: "Computer Vision Applications",
      description: "Harness the power of computer vision to revolutionize operations. We build AI models that can detect objects, recognize faces, process images, and even monitor production lines for defects.",
      benefits: [
        "Automated quality control",
        "Real-time object detection",
        "Facial recognition systems",
        "Medical image analysis",
        "Security monitoring",
        "Production line optimization"
      ],
      details: "Industries such as retail, healthcare, security, and manufacturing benefit from automated visual intelligence, reducing errors and boosting efficiency. Our computer vision solutions process visual data faster and more accurately than human inspection.",
      example: "A manufacturing quality control system that inspects products on assembly lines, detects microscopic defects, categorizes issues, and automatically routes defective items for correction."
    },
    {
      icon: Brain,
      title: "Natural Language Processing (NLP)",
      description: "We create AI models that understand, interpret, and generate human language. NLP powers chatbots, sentiment analysis tools, content summarization, and automated translation.",
      benefits: [
        "Multi-language processing",
        "Sentiment analysis at scale",
        "Automated content generation",
        "Document processing and extraction",
        "Voice-to-text conversion",
        "Brand reputation monitoring"
      ],
      details: "Our solutions help businesses analyze customer feedback, monitor brand reputation, and provide multilingual support at scale. From processing legal documents to creating marketing content, NLP transforms how businesses handle text data.",
      example: "A customer feedback analysis system that processes thousands of reviews, identifies sentiment trends, extracts key concerns, and provides actionable insights for product improvement."
    },
    {
      icon: Zap,
      title: "AI in Marketing Automation",
      description: "Boost your marketing with AI-driven personalization. Our systems analyze customer behavior, segment audiences, and recommend strategies that maximize ROI.",
      benefits: [
        "Personalized customer experiences",
        "Automated campaign optimization",
        "Predictive customer analytics",
        "Dynamic content generation",
        "Cross-channel integration",
        "Real-time performance tracking"
      ],
      details: "From automated email campaigns to predictive customer engagement, we ensure every marketing dollar drives measurable results. Our AI analyzes customer journeys and optimizes touchpoints for maximum conversion.",
      example: "A marketing automation platform that personalizes email campaigns, predicts customer lifetime value, optimizes ad spend across channels, and automatically A/B tests campaign elements."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-8 animate-slide-up">
              Our <span className="text-gradient">AI Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Neural AI, we deliver cutting-edge artificial intelligence solutions that transform 
              how businesses operate. From intelligent automation to predictive insights, 
              we have the expertise to drive your digital transformation with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-6 hover-lift bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Fast Deployment</h3>
              <p className="text-muted-foreground">Get your AI solutions up and running in weeks, not months, with our proven methodologies</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Proven ROI</h3>
              <p className="text-muted-foreground">Our clients see average 300% ROI within the first year through optimized operations</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security and compliance built into every solution we deliver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 animate-slide-up">
              Comprehensive <span className="text-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our detailed service offerings designed to transform your business operations
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover-lift overflow-hidden bg-white border-border rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="p-12 space-y-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-accent">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-foreground">{service.title}</CardTitle>
                    </div>
                    
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <div className="p-6 rounded-2xl bg-gradient-hero border border-border">
                      <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-border shadow-soft">
                      <h4 className="font-semibold mb-3 text-accent">Real-World Application:</h4>
                      <p className="text-muted-foreground italic">{service.example}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="p-12 bg-gradient-hero">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold mb-6 text-primary">Key Benefits:</h4>
                        <div className="space-y-4">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start space-x-4 group">
                              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-smooth" />
                              <span className="text-muted-foreground text-lg leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6">
                        <Link to="/contact">
                          <Button size="lg" className="w-full gradient-primary text-white hover:opacity-90 transition-smooth rounded-xl py-4 text-lg font-semibold shadow-accent">
                            Get Started With This Service
                            <ArrowRight className="ml-3 w-5 h-5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your AI implementation is successful, 
              on-time, and delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and identify AI opportunities" },
              { step: "02", title: "Strategy", description: "We design a custom AI roadmap tailored to your goals" },
              { step: "03", title: "Development", description: "Our experts build and test your AI solution" },
              { step: "04", title: "Deployment", description: "We launch your solution and provide ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI experts will analyze your business and recommend the perfect solution. 
              Schedule a free consultation to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="neural" size="lg">
                  Watch Our Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;