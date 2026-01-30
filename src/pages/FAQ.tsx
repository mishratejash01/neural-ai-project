import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  ChevronDown,
  Search, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Users,
  Settings
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = [
    {
      id: "general",
      title: "General Questions",
      icon: HelpCircle,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: "services",
      title: "Services & Solutions",
      icon: Settings,
      color: "from-green-500 to-blue-500"
    },
    {
      id: "pricing",
      title: "Pricing & Billing",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "technical",
      title: "Technical",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "support",
      title: "Support & Implementation",
      icon: Users,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const faqs = [
    // General Questions
    {
      id: "general-1",
      category: "general",
      question: "What is Neural AI and what do you do?",
      answer: "Neural AI is a leading artificial intelligence company that develops custom AI solutions for businesses. We specialize in chatbots, predictive analytics, computer vision, natural language processing, and AI automation to help companies transform their operations and achieve better results."
    },
    {
      id: "general-2", 
      category: "general",
      question: "What industries do you work with?",
      answer: "We work with businesses across all industries including healthcare, finance, manufacturing, retail, education, logistics, and more. Our AI solutions are designed to be adaptable to specific industry requirements and regulations."
    },
    {
      id: "general-3",
      category: "general", 
      question: "Do you work with small businesses or only large companies?",
      answer: "We work with companies of all sizes, from startups to Fortune 500 enterprises. We tailor our solutions and pricing models to fit different business scales and budgets, ensuring that AI benefits are accessible to organizations of any size."
    },

    // Services & Solutions
    {
      id: "services-1",
      category: "services",
      question: "What AI services do you offer?",
      answer: "We offer six core AI services: 1) AI Chatbots & Virtual Assistants, 2) Predictive Analytics, 3) Computer Vision Solutions, 4) Natural Language Processing, 5) AI Consulting & Custom Solutions, and 6) Automation with AI. Each service is customized to meet specific business needs."
    },
    {
      id: "services-2",
      category: "services", 
      question: "Can you integrate AI with our existing systems?",
      answer: "Yes, absolutely. We specialize in integrating AI solutions with existing business systems, databases, and workflows. Our team works closely with your IT department to ensure seamless integration without disrupting current operations."
    },
    {
      id: "services-3",
      category: "services",
      question: "Do you provide custom AI solutions or only pre-built ones?",
      answer: "We primarily focus on custom AI solutions tailored to your specific business needs. While we have frameworks and best practices, each implementation is designed from the ground up to address your unique challenges and objectives."
    },

    // Pricing & Billing
    {
      id: "pricing-1", 
      category: "pricing",
      question: "How much do your AI services cost?",
      answer: "Pricing varies based on project complexity, scope, and requirements. Our projects typically range from $50,000 to $500,000+. We offer free consultations where we assess your needs and provide detailed pricing estimates tailored to your specific requirements."
    },
    {
      id: "pricing-2",
      category: "pricing",
      question: "Do you offer different pricing models?",
      answer: "Yes, we offer flexible pricing models including fixed-price projects, monthly retainers, and revenue-sharing arrangements. We work with you to find a pricing structure that aligns with your budget and business model."
    },
    {
      id: "pricing-3",
      category: "pricing", 
      question: "Is there a minimum project size or commitment?",
      answer: "While we don't have a strict minimum, most of our projects start around $50,000 due to the custom nature of AI development. We also offer consulting services and smaller pilot projects to help you get started with AI."
    },

    // Technical
    {
      id: "technical-1",
      category: "technical",
      question: "What technologies and frameworks do you use?",
      answer: "We use cutting-edge technologies including TensorFlow, PyTorch, scikit-learn, and cloud platforms like AWS, Google Cloud, and Azure. Our tech stack is chosen based on project requirements to ensure optimal performance and scalability."
    },
    {
      id: "technical-2",
      category: "technical",
      question: "Do you provide ongoing maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance and support packages. AI systems require continuous monitoring, updates, and optimization. Our support includes performance monitoring, model retraining, bug fixes, and feature enhancements."
    },
    {
      id: "technical-3",
      category: "technical",
      question: "How do you ensure AI model accuracy and reliability?",
      answer: "We follow rigorous testing protocols including cross-validation, A/B testing, and continuous monitoring. Our models are trained on high-quality data and regularly updated to maintain accuracy. We also implement fallback mechanisms and human oversight where appropriate."
    },

    // Security & Privacy
    {
      id: "security-1",
      category: "security", 
      question: "How do you handle data security and privacy?",
      answer: "We follow enterprise-grade security protocols including data encryption, secure data handling, access controls, and compliance with regulations like GDPR and HIPAA. All client data is treated with the highest level of security and confidentiality."
    },
    {
      id: "security-2",
      category: "security",
      question: "Are your AI solutions compliant with industry regulations?",
      answer: "Yes, we ensure compliance with relevant industry regulations including HIPAA for healthcare, SOX for finance, and GDPR for data protection. Our solutions are designed with compliance requirements in mind from the ground up."
    },
    {
      id: "security-3",
      category: "security",
      question: "Where is our data stored and processed?",
      answer: "Data storage and processing locations are determined based on your requirements and compliance needs. We can deploy solutions on-premises, in private clouds, or in specific geographic regions to meet your data residency and security requirements."
    },

    // Support & Implementation  
    {
      id: "support-1",
      category: "support",
      question: "How long does an AI project usually take?",
      answer: "Project timelines vary based on complexity and scope. Simple implementations may take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed project timelines during the planning phase and keep you updated throughout development."
    },
    {
      id: "support-2", 
      category: "support",
      question: "What support do you provide during implementation?",
      answer: "We provide comprehensive support including project management, regular progress updates, testing phases, user training, and documentation. Our team works closely with yours throughout the entire implementation process."
    },
    {
      id: "support-3",
      category: "support",
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team including system usage, best practices, and ongoing maintenance. Training can be delivered on-site, remotely, or through a combination of both methods."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFaqsByCategory = (categoryId: string) => {
    return filteredFaqs.filter(faq => faq.category === categoryId);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our AI services, pricing, 
              implementation process, and more. Can't find what you're looking for? 
              We're here to help.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search frequently asked questions..."
                className="pl-10 bg-card border-border text-lg h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="gradient-card border-border shadow-card cursor-pointer hover:shadow-primary transition-smooth group">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {category.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((category) => {
              const categoryFaqs = getFaqsByCategory(category.id);
              
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category.id}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {categoryFaqs.map((faq) => (
                      <Card key={faq.id} className="gradient-card border-border shadow-card">
                        <Collapsible 
                          open={openItems.includes(faq.id)}
                          onOpenChange={() => toggleItem(faq.id)}
                        >
                          <CollapsibleTrigger asChild>
                            <CardHeader className="cursor-pointer hover:bg-card/50 transition-smooth">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-left text-lg font-semibold">
                                  {faq.question}
                                </CardTitle>
                                <ChevronDown 
                                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                                    openItems.includes(faq.id) ? 'rotate-180' : ''
                                  }`} 
                                />
                              </div>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any FAQs matching "{searchTerm}". Try a different search term or contact us directly.
              </p>
              <Button onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team is available to provide detailed answers and discuss your specific AI needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="gradient-card border-border shadow-card text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gradient mb-2">&lt; 4 Hours</div>
                <CardDescription>Average response time during business hours</CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border shadow-card text-center">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gradient mb-2">AI Engineers</div>
                <CardDescription>Direct access to our technical experts</CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border shadow-card text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gradient mb-2">60 Minutes</div>
                <CardDescription>Complimentary strategy session available</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  <MessageSquare className="mr-2" />
                  Contact Our Experts
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  <ArrowRight className="mr-2" />
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;