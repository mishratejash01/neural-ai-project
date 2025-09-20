import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  Target, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  TrendingUp,
  Users
} from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const MarketingAutomationService = () => {
  const service = {
    icon: Target,
    title: "AI in Marketing Automation",
    description: "Transform your marketing strategy with AI-powered automation that personalizes customer journeys, optimizes campaigns in real-time, and delivers measurable ROI through intelligent targeting and engagement.",
    benefits: [
      "Personalized customer journeys at scale",
      "Real-time campaign optimization",
      "Predictive lead scoring and segmentation",
      "Automated A/B testing and content optimization",
      "Cross-channel campaign coordination",
      "Advanced analytics and attribution modeling"
    ],
    details: "Our AI marketing automation platform leverages machine learning to understand customer behavior, predict preferences, and deliver the right message at the right time across all touchpoints. From email campaigns to social media ads, our system optimizes every interaction to maximize engagement and conversion rates.",
    example: "A retail company using our AI marketing automation increased email open rates by 45% and conversion rates by 60% through personalized product recommendations, optimal send-time predictions, and dynamic content that adapts to individual customer preferences and purchase history.",
    features: [
      {
        title: "Intelligent Customer Segmentation",
        description: "AI-driven segmentation that goes beyond demographics to include behavioral patterns, purchase intent, and lifecycle stage."
      },
      {
        title: "Predictive Lead Scoring",
        description: "Machine learning models that identify high-value prospects and prioritize sales efforts for maximum conversion."
      },
      {
        title: "Dynamic Content Personalization",
        description: "Real-time content adaptation based on user behavior, preferences, and contextual factors across all channels."
      },
      {
        title: "Campaign Performance Optimization",
        description: "Continuous A/B testing and optimization of messaging, timing, and targeting for improved ROI."
      }
    ],
    useCases: [
      {
        industry: "E-commerce",
        description: "Personalized product recommendations, cart abandonment recovery, and cross-sell/upsell campaigns."
      },
      {
        industry: "SaaS & Technology",
        description: "Lead nurturing, trial-to-paid conversion, and customer onboarding automation."
      },
      {
        industry: "Financial Services",
        description: "Customer lifecycle management, risk-based marketing, and compliance-aware communications."
      },
      {
        industry: "Healthcare",
        description: "Patient engagement, appointment reminders, and health education campaigns with privacy compliance."
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </LampContainer>
      

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI marketing automation platform delivers intelligent, data-driven campaigns that adapt and optimize in real-time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card className="shadow-card hover-lift border-border bg-card" key={index}>
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
              <h2 className="text-4xl font-bold mb-6">Why Choose Our AI Marketing Automation?</h2>
              <p className="text-xl text-muted-foreground">
                Drive growth with intelligent automation that scales with your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div className="flex items-start space-x-4 group" key={index}>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-smooth" />
                  <span className="text-muted-foreground text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI marketing automation solutions are tailored for diverse industries and business models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.useCases.map((useCase, index) => (
              <Card className="shadow-card hover-lift border-border bg-card" key={index}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{useCase.industry}</CardTitle>
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
            <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
              <h4 className="font-semibold mb-4 text-primary text-xl">Success Story:</h4>
              <p className="text-muted-foreground text-lg italic leading-relaxed">{service.example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">3x Higher</h3>
              <p className="text-muted-foreground">Conversion rates with AI-powered personalization and optimization</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">85% Increase</h3>
              <p className="text-muted-foreground">Customer lifetime value through intelligent nurturing campaigns</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">70% Time</h3>
              <p className="text-muted-foreground">Reduction in manual campaign management and optimization tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Revolutionize Your Marketing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our AI experts help you build marketing automation that drives growth and maximizes ROI.
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

export default MarketingAutomationService;
