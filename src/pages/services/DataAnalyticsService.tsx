import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Eye,
  Zap
} from "lucide-react";

const DataAnalyticsService = () => {
  const service = {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics platform. We help organizations unlock the power of their data through sophisticated analysis, predictive modeling, and real-time dashboards that drive informed decision-making.",
    benefits: [
      "Real-time data processing and visualization",
      "Predictive analytics for future planning",
      "Custom KPI dashboards and reports",
      "Data integration from multiple sources",
      "Advanced statistical modeling",
      "Automated insights and alerts"
    ],
    details: "Our data analytics solutions combine machine learning algorithms with intuitive visualization tools to help you understand trends, identify opportunities, and predict future outcomes. From customer behavior analysis to operational optimization, we turn complex data into clear, actionable insights.",
    example: "A retail chain used our analytics platform to analyze customer purchase patterns, inventory levels, and seasonal trends. This enabled them to reduce inventory costs by 25%, increase sales by 15%, and improve customer satisfaction through better product availability.",
    features: [
      {
        title: "Data Integration & ETL",
        description: "Seamlessly connect and process data from multiple sources including databases, APIs, and cloud services."
      },
      {
        title: "Interactive Dashboards",
        description: "Create stunning, real-time dashboards with drag-and-drop functionality and customizable visualizations."
      },
      {
        title: "Predictive Modeling",
        description: "Advanced machine learning algorithms to forecast trends and identify future opportunities."
      },
      {
        title: "Automated Reporting",
        description: "Schedule and deliver automated reports with smart alerts for anomalies and important changes."
      }
    ],
    useCases: [
      {
        industry: "Retail & E-commerce",
        description: "Customer segmentation, sales forecasting, inventory optimization, and personalized marketing campaigns."
      },
      {
        industry: "Financial Services",
        description: "Risk analysis, fraud detection, portfolio optimization, and regulatory compliance reporting."
      },
      {
        industry: "Healthcare",
        description: "Patient outcome analysis, operational efficiency, treatment effectiveness, and resource planning."
      },
      {
        industry: "Manufacturing",
        description: "Quality control analytics, supply chain optimization, predictive maintenance, and production planning."
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
              Our analytics platform provides comprehensive tools for data processing, analysis, and visualization
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
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Analytics Platform?</h2>
              <p className="text-xl text-muted-foreground">
                Turn your data into your competitive advantage
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
              Our analytics solutions are customized for various industries and business needs
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
              <h4 className="font-semibold mb-4 text-accent text-xl">Retail Analytics Success:</h4>
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
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">98% Accuracy</h3>
              <p className="text-muted-foreground">Average prediction accuracy across all analytics models</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Real-time</h3>
              <p className="text-muted-foreground">Live data processing and instant insights delivery</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-gradient-hero p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">10x Faster</h3>
              <p className="text-muted-foreground">Accelerated decision-making with automated insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us help you transform raw data into strategic insights that drive business growth.
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

export default DataAnalyticsService;
