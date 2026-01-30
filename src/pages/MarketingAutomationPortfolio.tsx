import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, TrendingUp, Zap, BarChart, Code } from "lucide-react";

const MarketingAutomationPortfolio = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Card className="gradient-card border-border shadow-card inline-block">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 text-gradient">AI Marketing Automation for FinTech (Delhi)</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                FinTech Startup, Delhi | Financial Technology | 6 Month Project
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-16">
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">More Lead Conversions</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">2.4x</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Engagement Increase</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Client Background & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A FinTech startup in Delhi, providing digital wallets and micro-loans, was struggling with generic marketing campaigns that resulted in low customer engagement and poor ROI. Their manual segmentation process was inefficient and unable to deliver the personalized experiences needed to convert leads.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We implemented an AI-driven marketing automation platform that analyzed customer data to create dynamic personas and predict churn. This allowed for automated and personalized email, SMS, and push notification campaigns with real-time performance tracking, which continuously optimized for better results.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technologies Used:</h3>
             <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2"><Zap className="text-primary"/>AI Marketing Platform</div>
                <div className="flex items-center gap-2"><TrendingUp className="text-primary"/>Machine Learning</div>
                <div className="flex items-center gap-2"><Code className="text-primary"/>Email/SMS APIs</div>
                <div className="flex items-center gap-2"><BarChart className="text-primary"/>Analytics Dashboard</div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The new platform led to a <strong>60% increase in lead conversions</strong> and a <strong>2.4x increase in customer engagement</strong>. The startup also saw a significant improvement in marketing ROI due to the optimized and automated campaigns.
            </p>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg">Boost My Marketing <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingAutomationPortfolio;
