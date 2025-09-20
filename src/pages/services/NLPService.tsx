import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  FileText, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const NLPService = () => {
  const service = {
    icon: FileText,
    title: "Natural Language Processing (NLP)",
    description: "Our NLP solutions help businesses analyze and understand human language at scale. From sentiment analysis to document processing, we transform unstructured text data into actionable insights that drive better decision-making.",
    benefits: [
      "Automated text analysis and categorization",
      "Real-time sentiment monitoring",
      "Multi-language support and translation",
      "Document processing and extraction",
      "Intent recognition and classification",
      "Custom model training for domain-specific needs"
    ],
    details: "Our NLP services enable organizations to process vast amounts of text data efficiently. Whether it's analyzing customer feedback, extracting insights from documents, or building conversational interfaces, our solutions provide the intelligence needed to understand human language nuances.",
    example: "A financial services company using our NLP solution to analyze thousands of customer reviews daily, automatically categorizing feedback by sentiment and topic, enabling rapid response to customer concerns and product improvement insights.",
    features: [
      {
        title: "Sentiment Analysis",
        description: "Advanced sentiment detection that understands context, sarcasm, and nuanced emotions in text data."
      },
      {
        title: "Entity Recognition",
        description: "Identify and extract key entities like names, locations, organizations, and custom business terms."
      },
      {
        title: "Document Processing",
        description: "Automated extraction and classification of information from documents, contracts, and reports."
      },
      {
        title: "Language Translation",
        description: "Real-time translation services supporting 100+ languages with context-aware accuracy."
      }
    ],
    useCases: [
      {
        industry: "Healthcare",
        description: "Medical record analysis, clinical note processing, drug discovery research, and patient feedback analysis."
      },
      {
        industry: "Legal",
        description: "Contract analysis, legal document review, case law research, and compliance monitoring."
      },
      {
        industry: "Marketing",
        description: "Brand sentiment monitoring, content optimization, social media analysis, and customer insights."
      },
      {
        industry: "Finance",
        description: "Risk assessment, regulatory compliance, financial report analysis, and market sentiment tracking."
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
              Our NLP solutions provide comprehensive text analysis capabilities designed for enterprise-scale applications
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
              <h2 className="text-4xl font-bold mb-6">Why Choose Our NLP Solutions?</h2>
              <p className="text-xl text-muted-foreground">
                Unlock the power of human language with advanced AI-driven text analysis
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
              Our NLP solutions are tailored for various industries and specialized use cases
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
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">95% Accuracy</h3>
              <p className="text-muted-foreground">Text analysis accuracy with domain-specific model training</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-teal rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">10x Faster</h3>
              <p className="text-muted-foreground">Document processing speed compared to manual analysis</p>
            </div>
            <div className="text-center space-y-6 hover-lift bg-card p-8 rounded-2xl border border-border">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-accent">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">100+ Languages</h3>
              <p className="text-muted-foreground">Multi-language support with context-aware translation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Unlock Your Text Data's Potential?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our NLP experts help you build intelligent text processing solutions that understand human language.
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

export default NLPService;
