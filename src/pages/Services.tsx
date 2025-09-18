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
      title: "AI Chatbots & Virtual Assistants",
      description: "Smart chat systems that talk with customers 24/7, providing instant support and guidance.",
      benefits: [
        "24/7 customer support availability",
        "Reduces response time by 90%",
        "Handles multiple languages",
        "Integrates with existing systems"
      ],
      example: "A chatbot on a shopping site that helps customers track orders, answer FAQs, and provide product recommendations."
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "AI that studies data and predicts future outcomes to help businesses make better decisions.",
      benefits: [
        "Forecast sales trends accurately",
        "Optimize inventory management",
        "Identify customer behavior patterns",
        "Reduce operational risks"
      ],
      example: "A retailer knowing which products will sell more next month and adjusting inventory accordingly."
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "AI that understands images and videos for security, quality checks, healthcare, and more.",
      benefits: [
        "Automated quality control",
        "Enhanced security monitoring",
        "Medical image analysis",
        "Real-time object detection"
      ],
      example: "AI that checks if factory products have defects, ensuring 99.9% quality standards."
    },
    {
      icon: Brain,
      title: "Natural Language Processing (NLP)",
      description: "AI that understands and works with human language for chatbots, document processing, and sentiment analysis.",
      benefits: [
        "Automated document processing",
        "Sentiment analysis at scale",
        "Multi-language support",
        "Content generation and optimization"
      ],
      example: "AI that scans thousands of reviews to determine customer satisfaction and identify improvement areas."
    },
    {
      icon: Cog,
      title: "AI Consulting & Custom Solutions",
      description: "Guidance and building of tailor-made AI systems designed specifically for each business.",
      benefits: [
        "Personalized AI strategy",
        "Custom algorithm development",
        "Integration with legacy systems",
        "Ongoing optimization and support"
      ],
      example: "A hospital wanting AI to manage patient records - Neural AI designs a HIPAA-compliant system."
    },
    {
      icon: Zap,
      title: "Automation with AI",
      description: "AI that takes over repetitive tasks, saving employee time and reducing errors.",
      benefits: [
        "Eliminates manual data entry",
        "Reduces processing errors by 95%",
        "Frees up staff for strategic work",
        "Scales with business growth"
      ],
      example: "AI that automatically sorts emails, updates spreadsheets, and generates reports."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-gradient">AI Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Neural AI, we offer a comprehensive range of AI services designed to transform 
              how businesses operate. From intelligent automation to predictive insights, 
              we have the expertise to drive your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Fast Deployment</h3>
              <p className="text-muted-foreground">Get your AI solutions up and running in weeks, not months</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Proven ROI</h3>
              <p className="text-muted-foreground">Our clients see average 300% ROI within the first year</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security and compliance built into every solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card border-border shadow-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <CardHeader className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    
                    <CardDescription className="text-lg text-muted-foreground">
                      {service.description}
                    </CardDescription>

                    <div className="bg-card/50 p-6 rounded-lg border border-border">
                      <h4 className="font-semibold mb-3 text-primary">Real-World Example:</h4>
                      <p className="text-muted-foreground italic">{service.example}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Key Benefits:</h4>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link to="/contact">
                        <Button variant="hero" className="w-full">
                          Learn More About This Service
                          <ArrowRight className="ml-2" />
                        </Button>
                      </Link>
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