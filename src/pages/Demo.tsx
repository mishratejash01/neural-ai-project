import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
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

const Demo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interests: "",
    timeframe: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('resend_key_id', {
        body: {
          type: 'demo',
          ...formData,
          fullName: `${formData.firstName} ${formData.lastName}`
        }
      });

      if (error) throw error;

      toast({
        title: "Demo booking request sent!",
        description: "We'll contact you within 24 hours to schedule your personalized demo.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        interests: "",
        timeframe: ""
      });
    } catch (error) {
      console.error('Demo booking error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Experience AI <span className="text-gradient">In Action</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just read about AI - see it working. Watch our live demonstrations 
              or schedule a personalized demo to see how our solutions can transform your business.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center cursor-pointer group transition-bounce hover:scale-110 shadow-primary">
                <Play className="w-12 h-12 text-white ml-2" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse"></div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-8">
            Click to watch our 3-minute AI solutions overview
          </p>
        </div>
      </section>

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

          {/* Demo Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-card border-border shadow-card overflow-hidden">
              <div className="aspect-video bg-card/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive AI Demo</h3>
                    <p className="text-muted-foreground">
                      Watch our AI solutions in action across different industries and use cases
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Watch Our Demo?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our demonstration isn't just a showcase - it's designed to help you understand 
              exactly how AI can benefit your specific business needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
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
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          className="bg-card border-border" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          className="bg-card border-border" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="bg-card border-border" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="Enter your phone number" 
                          className="bg-card border-border" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input 
                          id="company" 
                          placeholder="Enter your company name" 
                          className="bg-card border-border" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
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
                        value={formData.interests}
                        onChange={(e) => handleInputChange('interests', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeframe">Implementation Timeframe</Label>
                      <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
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
                      <Button 
                        size="lg" 
                        className="flex-1" 
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <Calendar className="mr-2" />
                        {isSubmitting ? 'Booking...' : 'Book My Demo'}
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1" type="button">
                        <Clock className="mr-2" />
                        Call Me Instead
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from Neural AI. 
                      We respect your privacy and will never share your information.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Need to Talk Right Away?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI consultants are available for immediate discussions about your project. 
              Get answers to your questions in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Users className="mr-2" />
                Talk to an Expert Now
              </Button>
              <Button variant="outline" size="lg">
                <ArrowRight className="mr-2" />
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;