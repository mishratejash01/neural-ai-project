import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Zap, TrendingUp, MessageSquare, BarChart, Code } from "lucide-react";

const RetailChatbot = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Card className="gradient-card border-border shadow-card inline-block">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 text-gradient">AI-Powered Retail Chatbot (Mumbai)</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Lifestyle Retailer, Mumbai | E-commerce / Fashion | 3 Month Project
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">+27%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sales Conversion</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Faster Response Times</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduction in Support Queries</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Client Background & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A leading fashion retailer in Mumbai with multiple offline stores and a growing online platform was struggling with an overwhelmed support team, long response times leading to cart abandonment, and a lack of personalized product recommendations. They needed a scalable solution to handle thousands of daily queries across their website and WhatsApp while reducing operational costs.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We developed and deployed a conversational AI chatbot that provided instant, personalized support. The solution involved requirement analysis, designing conversational flows, and integrating the chatbot across their website and WhatsApp. The AI was trained on real customer data and browsing history to offer personalized product suggestions, and we established a continuous monitoring and optimization loop.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technologies Used:</h3>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2"><MessageSquare className="text-primary"/>NLP</div>
              <div className="flex items-center gap-2"><Zap className="text-primary"/>Machine Learning</div>
              <div className="flex items-center gap-2"><Code className="text-primary"/>WhatsApp Business API</div>
              <div className="flex items-center gap-2"><Code className="text-primary"/>Web SDK</div>
              <div className="flex items-center gap-2"><BarChart className="text-primary"/>Analytics Dashboard</div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The AI chatbot delivered a <strong>+27% conversion rate</strong> within three months, reduced customer wait times by <strong>60%</strong>, and decreased escalations to human agents by <strong>40%</strong>. The Net Promoter Score (NPS) also improved by 15 points, and the manual workload on the support team was significantly reduced.
            </p>

             <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">Book a Demo <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RetailChatbot;
