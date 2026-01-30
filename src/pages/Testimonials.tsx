import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Star, Quote, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      rating: 5,
      content: "Neural AI transformed our customer service operations. Their chatbot handles 85% of inquiries automatically, and our response time improved by 90%. The ROI was evident within the first month.",
      industry: "SaaS",
      metric: "90% faster response time"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Manufacturing Plus",
      rating: 5,
      content: "The computer vision system Neural AI built for our quality control process is incredible. We've reduced defects by 95% and increased production efficiency significantly.",
      industry: "Manufacturing",
      metric: "95% reduction in defects"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      company: "HealthTech Innovations",
      rating: 5,
      content: "Their NLP solution processes thousands of medical documents daily, saving our staff 20 hours per week. The accuracy and speed are remarkable.",
      industry: "Healthcare",
      metric: "20 hours saved weekly"
    },
    {
      name: "David Kim",
      role: "VP of Marketing",
      company: "RetailGenius",
      rating: 5,
      content: "Neural AI's predictive analytics helped us optimize our inventory. We reduced waste by 40% and increased sales by 25% through better demand forecasting.",
      industry: "Retail",
      metric: "25% increase in sales"
    },
    {
      name: "Lisa Thompson",
      role: "CFO",
      company: "FinanceForward",
      rating: 5,
      content: "The AI automation system streamlined our financial processes. What used to take days now happens in hours, with 99.8% accuracy.",
      industry: "Finance",
      metric: "99.8% accuracy rate"
    },
    {
      name: "Robert Martinez",
      role: "Head of Innovation",
      company: "EduTech Solutions",
      rating: 5,
      content: "Neural AI's custom solution for personalized learning has transformed how our students engage with content. Engagement increased by 60%.",
      industry: "Education",
      metric: "60% higher engagement"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Award, value: "98%", label: "Client Retention" },
    { icon: Star, value: "4.9/5", label: "Average Rating" }
  ];

  const industries = [
    "Healthcare", "Finance", "Manufacturing", "Retail", 
    "Technology", "Education", "Logistics", "Real Estate"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Client <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. See how Neural AI has helped businesses 
              across industries achieve remarkable results with our AI solutions.
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card border-border shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <blockquote className="text-lg italic text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-primary">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{testimonial.industry}</div>
                        <div className="text-sm font-semibold text-accent">{testimonial.metric}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Success */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Trusted Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions have delivered exceptional results across diverse industries, 
              proving their versatility and effectiveness in real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 gradient-card rounded-lg border border-border">
                <div className="text-lg font-semibold text-foreground">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deeper into how our AI solutions solved complex business challenges 
              and delivered measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Giant Transforms Customer Service",
                description: "How we reduced support costs by 60% while improving customer satisfaction",
                industry: "Retail",
                result: "60% cost reduction",
                color: "from-blue-500 to-purple-500"
              },
              {
                title: "Manufacturing Leader Achieves Zero Defects",
                description: "Computer vision AI eliminates quality control issues in production",
                industry: "Manufacturing", 
                result: "Zero defect rate",
                color: "from-green-500 to-blue-500"
              },
              {
                title: "Healthcare Network Automates Documentation",
                description: "NLP system processes 10,000+ medical records daily with 99.9% accuracy",
                industry: "Healthcare",
                result: "99.9% accuracy",
                color: "from-purple-500 to-pink-500"
              }
            ].map((study, index) => (
              <Card key={index} className="gradient-card border-border shadow-card overflow-hidden group cursor-pointer">
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                <CardHeader>
                  <div className="text-sm text-primary font-medium">{study.industry}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {study.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gradient">{study.result}</div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg">
                View All Case Studies
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how Neural AI can help your business achieve similar results. 
              Schedule a consultation to get started on your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Get Started Today
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  Watch Demo First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;