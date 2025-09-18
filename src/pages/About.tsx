import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, always staying ahead of the curve."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that matter."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & AI Research Director",
      description: "Former Google AI researcher with 10+ years in machine learning"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Solutions Architect",
      description: "Ex-Microsoft AI engineer specializing in enterprise AI implementations"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Data Science",
      description: "PhD in Computer Science with expertise in NLP and computer vision"
    },
    {
      name: "James Thompson",
      role: "Director of Client Success",
      description: "15+ years helping Fortune 500 companies adopt new technologies"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-gradient">Neural AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of AI experts, engineers, and innovators dedicated to making 
              artificial intelligence accessible and transformative for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize artificial intelligence by creating intelligent, ethical, and 
                  accessible AI solutions that empower businesses to achieve breakthrough results. 
                  We believe AI should enhance human potential, not replace it.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the world's most trusted AI partner, leading the transformation of how 
                  businesses operate in the digital age. We envision a future where AI seamlessly 
                  integrates into every aspect of business operations, driving efficiency and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build relationships 
              with our clients and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-border shadow-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team brings together decades of experience in AI research, 
              software engineering, and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="gradient-card border-border shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              What Makes Neural AI Different?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-gradient">Research-Driven</div>
                <p className="text-muted-foreground">
                  Our solutions are built on cutting-edge research, not just existing tools.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-gradient">Business-Focused</div>
                <p className="text-muted-foreground">
                  We understand that AI is only valuable if it drives real business outcomes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-gradient">Human-Centric</div>
                <p className="text-muted-foreground">
                  We design AI that enhances human capabilities rather than replacing them.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground">
                While other AI companies focus on one-size-fits-all solutions, we believe every 
                business has unique challenges that require tailored approaches. Our team combines 
                deep technical expertise with business acumen to create AI solutions that truly 
                transform how your organization operates.
              </p>
              
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Discover Our Approach
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;