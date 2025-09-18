import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  Eye, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Camera,
  Zap,
  Target
} from "lucide-react";

const ComputerVisionService = () => {
  const service = {
    icon: Eye,
    title: "Computer Vision Applications",
    description: "Transform how you see and understand visual data with our cutting-edge computer vision solutions. From real-time object detection to advanced image analysis, we help businesses extract meaningful insights from visual content using state-of-the-art AI technology.",
    benefits: [
      "Real-time object detection and tracking",
      "Automated visual quality control",
      "Advanced image and video analysis",
      "Facial recognition and biometric systems",
      "OCR and document processing",
      "Custom vision model development"
    ],
    details: "Our computer vision solutions leverage deep learning models to process and analyze visual data with human-level accuracy. From manufacturing quality control to retail analytics, we deliver custom vision systems that automate complex visual tasks and provide actionable insights.",
    example: "A manufacturing company implemented our vision system to automatically detect product defects on the assembly line, reducing quality control costs by 60% while improving defect detection accuracy to 99.5%.",
    features: [
      {
        title: "Object Detection & Classification",
        description: "Advanced algorithms that identify, locate, and classify objects in images and videos with high precision."
      },
      {
        title: "Real-time Processing",
        description: "Lightning-fast analysis of live video streams and images for immediate decision-making and alerts."
      },
      {
        title: "Custom Model Training",
        description: "Tailored deep learning models trained on your specific data for optimal performance in your use case."
      },
      {
        title: "Edge Deployment",
        description: "Optimized models that run efficiently on edge devices, cameras, and mobile platforms."
      }
    ],
    useCases: [
      {
        industry: "Manufacturing & Quality Control",
        description: "Automated defect detection, assembly verification, product counting, and quality assurance processes."
      },
      {
        industry: "Retail & E-commerce",
        description: "Visual search, inventory management, customer behavior analysis, and automated checkout systems."
      },
      {
        industry: "Healthcare & Medical",
        description: "Medical image analysis, diagnostic assistance, patient monitoring, and treatment planning support."
      },
      {
        industry: "Security & Surveillance",
        description: "Intrusion detection, facial recognition, crowd monitoring, and automated threat assessment."
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
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our computer vision platform provides comprehensive tools for visual data processing and analysis
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
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Vision Solutions?</h2>
              <p className="text-xl text-muted-foreground">
                See what others miss with AI-powered visual intelligence
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
              Our vision solutions are customized for various industries and specific visual challenges
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
              <h4 className="font-semibold mb-4 text-accent text-xl">Manufacturing Vision Success:</h4>
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
              <h3 className="text-2xl font-semibold text-foreground">99.5% Accuracy</h3>
              <p className="text-muted-foreground">Object detection and classification precision across all models</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Real-time</h3>
              <p className="text-muted-foreground">Live video processing with sub-second response times</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">60% Cost</h3>
              <p className="text-muted-foreground">Reduction in manual inspection and quality control costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to See Beyond Human Vision?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our computer vision experts help you unlock the power of visual AI for your business.
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

export default ComputerVisionService;
