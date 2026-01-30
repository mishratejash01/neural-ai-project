import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Zap, TrendingUp, BarChart } from "lucide-react";

const LogisticsOptimization = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Card className="gradient-card border-border shadow-card inline-block">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 text-gradient">AI-Powered Logistics Optimization (Chennai)</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Logistics Company, Chennai | Logistics / Supply Chain | 4 Month Project
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
                <CardTitle className="text-3xl font-bold text-neon animate-glow">+35%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">More Efficient Deliveries</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">95%+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">On-Time Delivery</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Client Background & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A logistics company in Chennai was facing significant inefficiencies in their delivery operations, including suboptimal route planning, high fuel consumption, frequent delays, and limited visibility into their fleet's performance.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We implemented an AI-based route planning and fleet tracking system that analyzed historical route and delivery data to create optimized routes. The solution integrated with real-time GPS tracking for delivery forecasting and provided a comprehensive dashboard for operations monitoring.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technologies Used:</h3>
            <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2"><Zap className="text-primary"/>Machine Learning</div>
                <div className="flex items-center gap-2"><TrendingUp className="text-primary"/>Route Optimization Algorithms</div>
                <div className="flex items-center gap-2"><BarChart className="text-primary"/>Dashboard Tools</div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The AI-powered system increased delivery efficiency by <strong>35%</strong>, significantly reduced fuel costs, and achieved an on-time delivery rate of over <strong>95%</strong>, greatly improving both operational efficiency and customer satisfaction.
            </p>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg">Optimize My Logistics <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LogisticsOptimization;
