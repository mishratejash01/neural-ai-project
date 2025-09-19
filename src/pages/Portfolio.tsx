import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Retail Chatbot for Lifestyle Store",
      summary: "AI-powered shopping assistant for fashion retailer with 27% sales increase and 40% query reduction",
      slug: "retail-chatbot-lifestyle-store"
    },
    {
      id: 2,
      title: "Predictive Analytics for Healthcare",
      summary: "Advanced AI system predicting patient admissions with 33% reduction in wait times and optimized staffing",
      slug: "predictive-analytics-healthcare"
    },
    {
      id: 3,
      title: "Computer Vision for Manufacturing",
      summary: "Quality control system for automotive parts with 99.7% defect detection accuracy and 52% reduction in defects",
      slug: "computer-vision-manufacturing"
    },
    {
      id: 4,
      title: "AI Marketing Automation for FinTech",
      summary: "Marketing platform with 2.4x engagement increase and 60% boost in lead conversions for digital payments",
      slug: "ai-marketing-automation-fintech"
    }
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
              AI solutions. Each case study represents real partnerships with measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 animate-slide-up">
              Client <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real partnerships with measurable results across major Indian cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-border hover-lift hover-glow group transition-all duration-500 rounded-3xl overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </CardTitle>
                  <p className="text-text-muted leading-relaxed text-base">
                    {project.summary}
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Link to={`/portfolio/${project.slug}`}>
                    <Button className="gradient-primary text-white hover:opacity-90 transition-smooth rounded-xl px-6 py-3 shadow-accent w-full">
                      <ExternalLink className="mr-2 w-5 h-5" />
                      View Case Study
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
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
              exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline">
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
