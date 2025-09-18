import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  MessageSquare, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

const ChatbotsService = () => {
  const service = {
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
    example: "An e-commerce chatbot that helps customers find products, track orders, process returns, and even provides personalized recommendations based on browsing history.",
    features: [
      {
        title: "Natural Language Processing",
        description: "Advanced NLP capabilities that understand context, sentiment, and intent from customer messages."
      },
      {
        title: "Multi-Platform Integration",
        description: "Deploy across websites, mobile apps, Facebook Messenger, WhatsApp, and other platforms."
      },
      {
        title: "Learning & Analytics",
        description: "Continuous learning from interactions with detailed analytics and performance insights."
      },
      {
        title: "Human Handoff",
        description: "Seamless transition to human agents when complex issues require personal attention."
      }
    ],
    useCases: [
      {
        industry: "E-commerce",
        description: "Product recommendations, order tracking, customer support, and sales assistance."
      },
      {
        industry: "Healthcare",
        description: "Appointment scheduling, symptom checking, medication reminders, and patient support."
      },
      {
        industry: "Financial Services",
        description: "Account inquiries, transaction support, loan applications, and financial advice."
      },
      {
        industry: "Education",
        description: "Student support, course information, enrollment assistance, and learning guidance."
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/services" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-smooth">
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
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-smooth">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
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
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our chatbot solutions come with advanced features designed to deliver exceptional customer experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card key={index} className="shadow-card hover-lift border-border">
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
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Chatbots?</h2>
              <p className="text-xl text-muted-foreground">
                Transform your customer service with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
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
              Our chatbot solutions are tailored for various industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.useCases.map((useCase, index) => (
              <Card key={index} className="shadow-card hover-lift border-border">
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
            <h2 className="text-4xl font-bold mb-6">Real-World Application</h2>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-soft">
              <h4 className="font-semibold mb-4 text-accent text-xl">Success Story:</h4>
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
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">90% Faster</h3>
              <p className="text-muted-foreground">Response time improvement with automated customer support</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">40% Increase</h3>
              <p className="text-muted-foreground">Customer satisfaction scores with 24/7 availability</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">60% Cost</h3>
              <p className="text-muted-foreground">Reduction in customer support operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our AI experts help you design and deploy the perfect chatbot solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-smooth">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
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

export default ChatbotsService;
