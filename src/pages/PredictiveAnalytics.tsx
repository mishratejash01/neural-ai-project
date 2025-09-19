import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Zap, BarChart, Code } from "lucide-react";

const PredictiveAnalytics = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Card className="gradient-card border-border shadow-card inline-block">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 text-gradient">Predictive Analytics for Healthcare (Bangalore)</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Multi-specialty Hospital, Bangalore | Healthcare | 4 Month Project
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
                <CardTitle className="text-3xl font-bold text-neon animate-glow">33%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduced Wait Times</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Staffing</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Client Background & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A Bangalore-based hospital chain faced significant operational challenges due to unpredictable patient inflow. This led to long patient wait times, inefficient use of facilities, and staffing issues during peak hours, which negatively impacted patient satisfaction and operational costs.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We developed a predictive analytics system that analyzed historical patient data and seasonal patterns to forecast admissions. This model was integrated with the hospital's management system to optimize staff scheduling and resource allocation, allowing for proactive adjustments to meet demand.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technologies Used:</h3>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2"><Zap className="text-primary"/>Machine Learning</div>
              <div className="flex items-center gap-2"><Code className="text-primary"/>Python</div>
              <div className="flex items-center gap-2"><Code className="text-primary"/>Hospital Management System Integration</div>
              <div className="flex items-center gap-2"><BarChart className="text-primary"/>Predictive Analytics Dashboard</div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The solution led to a <strong>33% reduction in patient wait times</strong>, optimized staff scheduling across all departments, and significantly higher patient satisfaction scores. The hospital also achieved more efficient resource utilization, leading to cost savings.
            </p>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">Get Consultation <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PredictiveAnalytics;
