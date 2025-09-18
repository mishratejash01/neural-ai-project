import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  BarChart,
  MessageSquare,
  Eye,
  Brain,
  Cog,
  Zap
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce AI Customer Service Platform",
      client: "RetailMax Corporation",
      industry: "E-Commerce",
      description: "Developed an intelligent chatbot system that handles 85% of customer inquiries automatically, with multilingual support and seamless human handoff.",
      problem: "Customer service team was overwhelmed with repetitive inquiries, leading to long wait times and decreased satisfaction scores.",
      solution: "Built a sophisticated AI chatbot with NLP capabilities, integrated with existing CRM, and trained on company-specific data for accurate responses.",
      results: [
        "90% reduction in average response time",
        "85% of inquiries handled automatically", 
        "40% increase in customer satisfaction",
        "60% reduction in support costs"
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "API Integration", "Multi-language Support"],
      icon: MessageSquare,
      color: "from-blue-500 to-purple-500",
      duration: "3 months",
      teamSize: "5 specialists"
    },
    {
      id: 2,
      title: "Manufacturing Quality Control AI",
      client: "PrecisionTech Manufacturing",
      industry: "Manufacturing",
      description: "Computer vision system for automated quality inspection that detects defects with 99.8% accuracy, eliminating human error in production lines.",
      problem: "Manual quality inspection was slow, inconsistent, and led to 5% defect rate reaching customers.",
      solution: "Deployed computer vision AI with deep learning models trained on thousands of product images to identify even microscopic defects.",
      results: [
        "99.8% defect detection accuracy",
        "Zero defective products shipped",
        "75% faster inspection process",
        "300% ROI within first year"
      ],
      technologies: ["Computer Vision", "Deep Learning", "Real-time Processing", "Industrial Integration"],
      icon: Eye,
      color: "from-green-500 to-blue-500",
      duration: "4 months",
      teamSize: "6 specialists"
    },
    {
      id: 3,
      title: "Healthcare Document Processing System",
      client: "MedCenter Health Network",
      industry: "Healthcare",
      description: "NLP-powered system that processes medical documents, extracts key information, and ensures HIPAA compliance while reducing processing time by 80%.",
      problem: "Medical staff spent 4 hours daily processing patient documents manually, creating bottlenecks and potential errors.",
      solution: "Created HIPAA-compliant AI system using advanced NLP to extract, categorize, and digitize medical information automatically.",
      results: [
        "80% reduction in processing time",
        "99.9% accuracy in data extraction",
        "20 hours saved per staff per week",
        "100% HIPAA compliance maintained"
      ],
      technologies: ["Natural Language Processing", "OCR Technology", "HIPAA Compliance", "Cloud Security"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      duration: "5 months",
      teamSize: "7 specialists"
    },
    {
      id: 4,
      title: "Financial Fraud Detection Engine",
      client: "SecureBank Financial",
      industry: "Finance",
      description: "Real-time AI system that analyzes transaction patterns to detect and prevent fraudulent activities with 99.5% accuracy.",
      problem: "Traditional rule-based fraud detection missed 15% of fraudulent transactions while flagging many legitimate ones.",
      solution: "Built machine learning models that analyze hundreds of transaction variables in real-time to identify suspicious patterns.",
      results: [
        "99.5% fraud detection accuracy",
        "85% reduction in false positives",
        "$2.3M prevented fraud in first quarter",
        "50ms average detection time"
      ],
      technologies: ["Machine Learning", "Real-time Analytics", "Pattern Recognition", "Secure Processing"],
      icon: BarChart,
      color: "from-red-500 to-orange-500",
      duration: "6 months",
      teamSize: "8 specialists"
    },
    {
      id: 5,
      title: "Supply Chain Optimization Platform",
      client: "LogiFlow Global",
      industry: "Logistics",
      description: "Predictive analytics platform that optimizes supply chain operations, reducing costs by 35% through intelligent forecasting and routing.",
      problem: "Inefficient routing and poor demand forecasting led to high operational costs and delivery delays.",
      solution: "Developed AI models that predict demand, optimize routes, and automate inventory management across the entire supply chain.",
      results: [
        "35% reduction in operational costs",
        "25% improvement in delivery times", 
        "90% accuracy in demand forecasting",
        "40% reduction in inventory waste"
      ],
      technologies: ["Predictive Analytics", "Optimization Algorithms", "IoT Integration", "Real-time Tracking"],
      icon: Cog,
      color: "from-cyan-500 to-blue-500",
      duration: "7 months",
      teamSize: "9 specialists"
    },
    {
      id: 6,
      title: "Educational Content Personalization Engine",
      client: "LearnSmart Academy",
      industry: "Education",
      description: "AI-powered platform that personalizes learning content for each student, improving engagement by 70% and learning outcomes by 45%.",
      problem: "One-size-fits-all approach to education led to poor engagement and inconsistent learning outcomes.",
      solution: "Created adaptive learning AI that analyzes student performance and learning patterns to deliver personalized content and pacing.",
      results: [
        "70% increase in student engagement",
        "45% improvement in learning outcomes",
        "60% reduction in dropout rates",
        "90% teacher satisfaction rate"
      ],
      technologies: ["Adaptive Learning", "Behavioral Analytics", "Content Recommendation", "Progress Tracking"],
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      duration: "4 months",
      teamSize: "6 specialists"
    }
  ];

  const stats = [
    { icon: Target, value: "50+", label: "Successful Projects" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Users, value: "98%", label: "Client Retention" },
    { icon: Clock, value: "4.2", label: "Avg Project (Months)" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real-world AI implementations that have transformed businesses 
              across industries. Each project showcases our commitment to delivering 
              measurable results through innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="gradient-card border-border shadow-card overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${project.color}`} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Project Header */}
                  <div className="lg:col-span-3 border-b border-border pb-6 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${project.color}`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                          <p className="text-primary font-medium">{project.client} • {project.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {project.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.teamSize}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Problem */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-400">The Problem</h3>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Our Solution</h3>
                    <p className="text-muted-foreground mb-4">{project.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-400">The Results</h3>
                    <div className="space-y-3">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-6">
                  <div className="flex items-center justify-between">
                    <Button variant="neural">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Case Study
                    </Button>
                    <Link to="/contact">
                      <Button variant="hero">
                        Similar Project?
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Industries We've <span className="text-gradient">Transformed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI expertise spans across multiple industries, each with unique challenges 
              that we've successfully addressed with custom solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Healthcare", "Finance", "Manufacturing", "E-Commerce", 
              "Education", "Logistics", "Real Estate", "Agriculture",
              "Energy", "Automotive", "Media", "Government"
            ].map((industry, index) => (
              <Card key={index} className="gradient-card border-border shadow-card text-center p-4">
                <div className="text-sm font-medium text-foreground">{industry}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Proven <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every successful project follows our time-tested approach that ensures 
              optimal results and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business processes, challenges, and objectives to identify AI opportunities."
              },
              {
                step: "02", 
                title: "Solution Design",
                description: "Create detailed technical specifications and project roadmap tailored to your specific needs."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build, train, and rigorously test AI models using industry best practices and your data."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launch your solution with comprehensive training and ongoing optimization support."
              }
            ].map((phase, index) => (
              <Card key={index} className="gradient-card border-border shadow-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{phase.step}</span>
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your AI Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create a custom AI solution that delivers 
              the same exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="neural" size="lg">
                  See Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;