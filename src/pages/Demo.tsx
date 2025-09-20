import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { BackgroundCells } from "@/components/blocks/background-ripple-effect";
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Monitor,
  Smartphone,
  Globe
} from "lucide-react";

// New Hero Section Component for the Demo Page
const DemoHero = () => {
  return (
    <BackgroundCells className="h-screen bg-background">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
            Experience AI <br /> In Action
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Don't just read about AI - see it working. Watch our live demonstrations or schedule a personalized demo to see how our solutions can transform your business.
        </p>
      </div>
    </BackgroundCells>
  );
};


const Demo = () => {
  const demoFeatures = [
    {
      icon: Monitor,
      title: "Live AI Chatbot Demo",
      description: "See our intelligent chatbot handle customer inquiries in real-time"
    },
    {
      icon: Globe,
      title: "Computer Vision Showcase",
      description: "Watch AI analyze and process images with remarkable accuracy"
    },
    {
      icon: Smartphone,
      title: "Predictive Analytics",
      description: "Witness how AI can forecast trends from your data patterns"
    }
  ];

  const benefits = [
    "See real AI solutions in action",
    "Understand ROI potential for your business",
    "Get personalized recommendations",
    "Ask questions to our AI experts",
    "No commitment required"
  ];

  return (
    <Layout>
      {/* New Hero Section */}
      <DemoHero />

      {/* Demo Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What You'll See in Our <span className="text-gradient">Demo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our interactive demonstration showcases the full capabilities of our AI solutions 
              across different industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="gradient-card border-border shadow-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Demo Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Book Your <span className="text-gradient">Personalized Demo</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a customized demonstration focused on your industry and specific use cases. 
                Our AI experts will show you exactly how our solutions can solve your challenges.
              </p>
            </div>

            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Schedule Your Demo</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below and we'll contact you within 24 hours to schedule your personalized demo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-card border-border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" className="bg-card border-border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your Company" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">What AI solutions are you interested in?</Label>
                  <Textarea 
                    id="interests"
                    placeholder="Tell us about your specific needs, challenges, or AI use cases you'd like to explore..."
                    className="bg-card border-border min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeframe">Implementation Timeframe</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="When are you looking to implement?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                      <SelectItem value="short">Short term (3-6 months)</SelectItem>
                      <SelectItem value="medium">Medium term (6-12 months)</SelectItem>
                      <SelectItem value="long">Long term (12+ months)</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Calendar className="mr-2" />
                    Book My Demo
                  </Button>
                  <Button variant="neural" size="lg" className="flex-1">
                    <Clock className="mr-2" />
                    Call Me Instead
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Neural AI. 
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
