import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  Settings, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Cpu,
  Target,
  Zap
} from "lucide-react";

const CustomAIService = () => {
  const service = {
    icon: Settings,
    title: "Custom AI Solutions",
    description: "Our custom AI solutions are tailored to your specific business needs and challenges. We develop bespoke AI applications that integrate seamlessly with your existing workflows and systems, providing intelligent automation and insights unique to your industry.",
    benefits: [
      "Tailored to your specific business requirements",
      "Seamless integration with existing systems",
      "Scalable architecture that grows with your business",
      "Expert consultation and ongoing support",
      "Industry-specific AI models and algorithms",
      "Comprehensive training and documentation"
    ],
    details: "From concept to deployment, we work closely with your team to understand your unique challenges and develop AI solutions that deliver measurable results. Our expertise spans machine learning, deep learning, natural language processing, and computer vision.",
    example: "A manufacturing company wanted to predict equipment failures before they happened. We developed a custom AI system that analyzes sensor data, maintenance logs, and operational patterns to predict failures 2-3 weeks in advance, reducing downtime by 40% and maintenance costs by 30%.",
    features: [
      {
        title: "Requirements Analysis",
        description: "Deep dive into your business processes to identify AI opportunities and define project scope."
      },
      {
        title: "Custom Model Development",
        description: "Build and train AI models specifically designed for your data and use cases."
      },
      {
        title: "System Integration",
        description: "Seamlessly integrate AI solutions with your existing technology stack and workflows."
      },
      {
        title: "Ongoing Optimization",
        description: "Continuous monitoring and improvement of AI models to ensure optimal performance."
      }
    ],
    useCases: [
      {
        industry: "Manufacturing",
        description: "Predictive maintenance, quality control, supply chain optimization, and process automation."
      },
      {
        industry: "Finance",
        description: "Fraud detection, risk assessment, algorithmic trading, and customer credit scoring."
      },
      {
        industry: "Healthcare",
        description: "Medical image analysis, drug discovery, patient outcome prediction, and clinical decision support."
      },
      {
        industry: "Retail",
        description: "Demand forecasting, price optimization, recommendation engines, and inventory management."
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-smooth" to="/services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-accent">
              <service.icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6 animate-slide-up">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="gradient-primary text-white hover:opacity-90 transition-smooth" size="lg">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button className="border-accent text-accent hover:bg-accent hover:text-white" size="lg" variant="outline">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure your custom AI solution meets your exact requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card className="shadow-card hover-lift border-border" key={index}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Custom AI Solutions?</h2>
              <p className="text-xl text-muted-foreground">
                Get AI solutions that are perfectly aligned with your business objectives
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div className="flex items-start space-x-4 group" key={index}>
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-smooth" />
                  <span className="text-muted-foreground text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our custom AI solutions have been successfully implemented across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.useCases.map((useCase, index) => (
              <Card className="shadow-card hover-lift border-border" key={index}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-accent">{useCase.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real World Example */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Success Story</h2>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-soft">
              <h4 className="font-semibold mb-4 text-accent text-xl">Predictive Maintenance Solution:</h4>
              <p className="text-muted-foreground text-lg italic leading-relaxed">{service.example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">95% Accuracy</h3>
              <p className="text-muted-foreground">Average model accuracy across all custom AI solutions</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">50+ Projects</h3>
              <p className="text-muted-foreground">Successfully delivered custom AI solutions across industries</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">6-12 Weeks</h3>
              <p className="text-muted-foreground">Average development time from concept to deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your unique requirements and create an AI solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="gradient-primary text-white hover:opacity-90 transition-smooth" size="lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="border-accent text-accent hover:bg-accent hover:text-white" size="lg" variant="outline">
                  Explore Other Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomAIService;
