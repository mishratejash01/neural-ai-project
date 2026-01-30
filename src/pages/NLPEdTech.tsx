import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Zap, TrendingUp, MessageSquare, BarChart } from "lucide-react";

const NLPEdTech = () => {
  return (
    <Layout>
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Card className="gradient-card border-border shadow-card inline-block">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-4 text-gradient">NLP for EdTech (Hyderabad)</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                EdTech Platform, Hyderabad | Education Technology | 3 Month Project
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
                <CardTitle className="text-3xl font-bold text-neon animate-glow">45%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Higher Student Retention</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neon animate-glow">Faster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Curriculum Improvements</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Client Background & Challenges</h2>
            <p className="text-lg text-muted-foreground mb-8">
             An online learning platform in Hyderabad, serving a diverse student base across India, struggled to manually analyze feedback provided in multiple Indian languages. This led to slow curriculum updates and an inability to consistently extract actionable insights.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We built and trained NLP models for multilingual sentiment and topic detection. This system automated the collection and cleaning of feedback data, categorized insights for instructors, and generated dashboards for quick review, enabling rapid, data-driven curriculum improvements.
            </p>

            <h3 className="text-2xl font-bold mb-4">Technologies Used:</h3>
            <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2"><MessageSquare className="text-primary"/>NLP</div>
                <div className="flex items-center gap-2"><Zap className="text-primary"/>Python</div>
                <div className="flex items-center gap-2"><TrendingUp className="text-primary"/>Machine Learning</div>
                <div className="flex items-center gap-2"><BarChart className="text-primary"/>Dashboard Tools</div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground mb-8">
             The solution resulted in a <strong>45% improvement in student retention</strong>, faster curriculum adjustments, and higher student satisfaction. The platform is now able to efficiently handle multilingual feedback, allowing for more responsive and effective course offerings.
            </p>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg">Talk to Us <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NLPEdTech;
