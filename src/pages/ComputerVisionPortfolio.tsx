import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Eye, Zap, Code, TrendingUp } from "lucide-react";

const ComputerVisionPortfolio = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Card className="gradient-card border-border shadow-card inline-block">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 text-gradient">Computer Vision for Manufacturing (Pune)</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Automotive Component Manufacturer, Pune | Manufacturing | 5 Month Project
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
                <CardTitle className="text-3xl font-bold text-neon animate-glow">52%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fewer Defective Shipments</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">18%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Improved Efficiency</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Client Background & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">
              An automotive manufacturer in Pune was experiencing high costs and customer complaints due to defective products. Their manual inspection process was error-prone, inconsistent, and slow, which delayed the identification of defects and impacted production efficiency.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We deployed a real-time defect detection system using AI-powered computer vision. The solution involved analyzing the client's workflow, setting up high-resolution cameras on production lines, and training a custom computer vision model to identify defects automatically. The system provided real-time alerts to operators for immediate action.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technologies Used:</h3>
            <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2"><Eye className="text-primary"/>Computer Vision</div>
                <div className="flex items-center gap-2"><Code className="text-primary"/>Python</div>
                <div className="flex items-center gap-2"><Code className="text-primary"/>TensorFlow</div>
                <div className="flex items-center gap-2"><TrendingUp className="text-primary"/>Production Line Integration</div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The implementation led to a <strong>52% reduction in defective shipments</strong> and an <strong>18% improvement in production efficiency</strong>. The automated system achieved a 99.7% defect detection accuracy, resulting in significant cost savings on returns and warranties.
            </p>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="hero" size="lg">Explore Services <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComputerVisionPortfolio;
