import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  TrendingUp,
  Shield
} from "lucide-react";
import heroImage from "@/assets/neural-ai-hero.jpg";

const ChatbotsService = () => {
  const articleData = {
    title: "The Future of Customer Engagement: AI-Powered Chatbots",
    subtitle: "How intelligent automation is transforming customer support, lead generation, and sales engagement for modern businesses.",
    author: {
      name: "Neural AI Team",
      image: "/placeholder.svg",
      role: "AI Specialists"
    },
    date: "October 24, 2024",
    readTime: "5 min read",
    tags: ["Artificial Intelligence", "Customer Service", "Automation"],
    
    // Original Service Data adapted for Article
    intro: "Our AI-powered chatbots are designed to streamline customer support, lead generation, and sales engagement. Unlike traditional bots, these systems understand natural language, learn from past interactions, and adapt to customer needs.",
    details: "With 24/7 availability, they reduce response time, improve customer satisfaction, and free up human agents for complex queries. Businesses can integrate these bots on websites, apps, and social platforms to create seamless customer experiences.",
    features: [
      {
        title: "Natural Language Processing",
        description: "Advanced NLP capabilities that understand context, sentiment, and intent from customer messages."
      },
      {
        title: "Multi-Platform Integration",
        description: "Deploy across websites, mobile apps, Facebook Messenger, WhatsApp, and other platforms."
      },
      {
        title: "Learning & Analytics",
        description: "Continuous learning from interactions with detailed analytics and performance insights."
      },
      {
        title: "Human Handoff",
        description: "Seamless transition to human agents when complex issues require personal attention."
      }
    ],
    benefits: [
      "24/7 customer support availability",
      "Reduces response time by 90%",
      "Natural language understanding",
      "Seamless integration with existing platforms",
      "Learns and improves from interactions",
      "Multi-channel deployment"
    ],
    example: "An e-commerce chatbot that helps customers find products, track orders, process returns, and even provides personalized recommendations based on browsing history.",
    stats: [
      { value: "90%", label: "Faster Response Time", icon: Clock },
      { value: "40%", label: "Increase in CSAT", icon: TrendingUp },
      { value: "60%", label: "Cost Reduction", icon: Shield },
    ]
  };

  return (
    <Layout>
      <article className="min-h-screen bg-background pt-24 pb-20">
        {/* Article Header */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              {articleData.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground leading-tight">
              {articleData.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {articleData.subtitle}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-y border-border py-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                  <AvatarImage src={articleData.author.image} />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{articleData.author.name}</div>
                  <div className="text-sm text-muted-foreground">{articleData.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{articleData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{articleData.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={heroImage} 
              alt="AI Chatbot Technology" 
              className="w-full h-auto object-cover max-h-[600px] transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead text-xl text-foreground/80 mb-8 font-medium">
                  {articleData.intro}
                </p>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  {articleData.details}
                </p>

                <h2 className="text-3xl font-bold mb-8 text-foreground">Key Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  {articleData.features.map((feature, index) => (
                    <Card key={index} className="bg-card border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3 text-primary">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-6 text-foreground">Why Businesses Are Switching</h2>
                <p className="mb-6 text-muted-foreground">
                  The shift towards automated customer service isn't just a trend; it's a necessity for scaling operations efficiently. Here is why our solution stands out:
                </p>
                <ul className="space-y-4 mb-12 list-none pl-0 not-prose">
                  {articleData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold mb-8 text-foreground">Real-World Impact</h2>
                <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-sm not-prose">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Success Story: E-Commerce</h4>
                      <p className="text-muted-foreground italic text-lg leading-relaxed">
                        "{articleData.example}"
                      </p>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articleData.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/10 my-12 not-prose">
                  <h3 className="text-2xl font-bold mb-4">Ready to implement this technology?</h3>
                  <p className="text-muted-foreground mb-6">
                    Join forward-thinking companies that are revolutionizing their customer support with our AI solutions.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all">
                      Start Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Table of Contents / Actions */}
              <div className="sticky top-24 space-y-6">
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-foreground">Actions</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Share2 className="mr-2 h-4 w-4" /> Share
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Bookmark className="mr-2 h-4 w-4" /> Save
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border shadow-sm overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Neural AI Solutions</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      We build custom AI solutions that solve real business problems.
                    </p>
                    <div className="space-y-3">
                      <Link to="/services/custom-ai-solutions" className="block p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium">
                        Custom AI Development →
                      </Link>
                      <Link to="/services/nlp" className="block p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium">
                        Natural Language Processing →
                      </Link>
                      <Link to="/services/computer-vision" className="block p-3 rounded-lg hover:bg-accent/50 transition-colors text-sm font-medium">
                        Computer Vision →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ChatbotsService;
