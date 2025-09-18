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
  Zap,
  CheckCircle2
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Retail Chatbot for Lifestyle Store",
      client: "Fashion Forward Mumbai",
      industry: "Retail - Mumbai",
      location: "Mumbai, Maharashtra",
      description: "AI-powered shopping assistant deployed for a leading fashion retailer that helps customers browse products, check availability, and receive personalized outfit suggestions.",
      problem: "The fashion retailer was struggling with high customer query volumes, slow response times, and difficulty in providing personalized shopping experiences during peak seasons.",
      solution: "We developed an intelligent chatbot with natural language processing capabilities, integrated with their inventory system, and trained on fashion-specific data to provide style recommendations.",
      results: [
        "27% increase in sales conversion",
        "40% reduction in customer queries",
        "24/7 personalized shopping assistance",
        "85% customer satisfaction rate"
      ],
      technologies: ["Natural Language Processing", "Recommendation Engine", "Inventory Integration", "Multi-language Support"],
      icon: MessageSquare,
      color: "from-blue-500 to-purple-500",
      duration: "3 months",
      teamSize: "5 specialists"
    },
    {
      id: 2,
      title: "Predictive Analytics for Healthcare",
      client: "HealthCare Plus Bangalore",
      industry: "Healthcare - Bangalore",
      location: "Bangalore, Karnataka",
      description: "Advanced AI system that predicts patient admission rates for a major hospital chain, enabling optimized staffing and resource allocation.",
      problem: "The hospital chain faced unpredictable patient admission patterns, leading to either overstaffing during quiet periods or understaffing during surges, affecting patient care quality.",
      solution: "We created a predictive analytics platform that analyzes historical data, seasonal patterns, local events, and health trends to forecast admission rates with high accuracy.",
      results: [
        "33% reduction in patient wait times",
        "Optimized staffing schedules",
        "20% improvement in resource utilization",
        "Improved patient satisfaction scores"
      ],
      technologies: ["Predictive Analytics", "Time Series Analysis", "Healthcare Data Integration", "Real-time Dashboards"],
      icon: BarChart,
      color: "from-green-500 to-blue-500",
      duration: "4 months",
      teamSize: "6 specialists"
    },
    {
      id: 3,
      title: "Computer Vision for Manufacturing",
      client: "AutoParts Excellence Pune",
      industry: "Manufacturing - Pune",
      location: "Pune, Maharashtra",
      description: "Computer vision solution for automotive parts manufacturing that detects defects in production lines with exceptional accuracy.",
      problem: "The manufacturer was experiencing quality control issues with 8% defect rate in shipped products, leading to customer complaints and warranty claims.",
      solution: "We implemented a computer vision system with deep learning models trained on thousands of product images to identify defects at microscopic levels during production.",
      results: [
        "52% reduction in defective shipments",
        "99.7% defect detection accuracy",
        "Cost savings on warranty claims",
        "Enhanced product quality reputation"
      ],
      technologies: ["Computer Vision", "Deep Learning", "Real-time Processing", "Industrial Integration"],
      icon: Eye,
      color: "from-orange-500 to-red-500",
      duration: "5 months",
      teamSize: "7 specialists"
    },
    {
      id: 4,
      title: "AI Marketing Automation for FinTech",
      client: "PayNext Solutions Delhi",
      industry: "FinTech - Delhi",
      location: "Delhi, India",
      description: "AI-driven marketing automation platform that segments audiences and personalizes campaigns for a growing FinTech startup specializing in digital payments.",
      problem: "The FinTech startup had low customer engagement rates and struggled to convert leads effectively, with generic marketing campaigns yielding poor results.",
      solution: "We built an AI marketing platform that analyzes customer behavior, creates dynamic segments, personalizes content, and optimizes campaign timing for maximum impact.",
      results: [
        "2.4x increase in customer engagement",
        "60% boost in lead conversions",
        "Personalized customer journeys",
        "ROI improvement of 180%"
      ],
      technologies: ["Machine Learning", "Customer Segmentation", "Marketing Automation", "Behavioral Analytics"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      duration: "6 months",
      teamSize: "8 specialists"
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
      <section className="py-24 gradient-hero animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-8 animate-slide-up">
              Success <span className="text-gradient">Stories</span> from India
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover how Neural AI has transformed businesses across India with cutting-edge 
              AI solutions. Each case study represents real partnerships with measurable results 
              that showcase our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-lift bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-accent">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-3">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 animate-slide-up">
              Indian Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real partnerships with measurable results across major Indian cities
            </p>
          </div>
          
          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card key={project.id} className="shadow-card hover-lift overflow-hidden bg-white border-border rounded-3xl">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-12">
                  {/* Project Header */}
                  <div className="mb-12 pb-8 border-b border-border">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${project.color} shadow-accent`}>
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
                          <p className="text-accent font-semibold text-lg">{project.client}</p>
                          <p className="text-muted-foreground">{project.industry} • {project.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground bg-gradient-hero px-4 py-2 rounded-xl">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {project.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {project.teamSize}
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Problem */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-red-500 flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-500 font-bold">!</span>
                        </div>
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-blue-500 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Cog className="w-4 h-4 text-blue-500" />
                        </div>
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.solution}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-gradient-hero text-muted-foreground border-border px-3 py-1 rounded-full text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-green-500 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        </div>
                        The Impact
                      </h3>
                      <div className="space-y-4">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-4 group hover-lift p-3 rounded-lg bg-gradient-hero">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex items-center justify-between">
                      <Button className="gradient-teal text-white hover:opacity-90 transition-smooth rounded-xl px-6 py-3 shadow-accent">
                        <ExternalLink className="mr-3 w-5 h-5" />
                        View Detailed Case Study
                      </Button>
                      <Link to="/contact">
                        <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-smooth rounded-xl px-8 py-3 shadow-accent">
                          Start Similar Project
                          <ArrowRight className="ml-3 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
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