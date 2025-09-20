import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Zap,
  Shield,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AI experts",
      info: "+91 8160396630, +91 8617007380",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed responses to your questions",
      info: "office@neuralai.in",
      availability: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Meet our team in person",
      info: "DELHI NCR, INDIA",
      availability: "By appointment only"
    }
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "We respond to all inquiries within 4 hours during business days"
    },
    {
      icon: MessageSquare,
      title: "Expert Consultation",
      description: "Speak directly with AI engineers and business strategists"
    },
    {
      icon: Shield,
      title: "Confidential Discussion",
      description: "Your ideas and business information are always protected"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI? We're here to help. 
              Get in touch with our experts to discuss your project and discover 
              how Neural AI can drive your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div className="text-center space-y-4" key={index}>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 4 hours during business days.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input className="bg-card border-border" id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input className="bg-card border-border" id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input className="bg-card border-border" id="email" placeholder="john@company.com" type="email" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input className="bg-card border-border" id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input className="bg-card border-border" id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                      <SelectItem value="demo">Schedule Demo</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="careers">Career Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, challenges, or questions. The more details you provide, the better we can help you."
                    className="bg-card border-border min-h-[120px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget (Optional)</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under 5k</SelectItem>
                      <SelectItem value="50k-100k">5k - 10k</SelectItem>
                      <SelectItem value="100k-250k">10k - 25k</SelectItem>
                      <SelectItem value="250k-500k">25k - 50k</SelectItem>
                      <SelectItem value="over-500k">Over 50k</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" size="lg" variant="hero">
                  <Send className="mr-2" />
                  Send Message
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Neural AI. 
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Choose the method that works best for you. Our team is ready to discuss 
                  your AI needs and help you get started on your transformation journey.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card className="gradient-card border-border shadow-card" key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{method.title}</h3>
                          <p className="text-muted-foreground">{method.description}</p>
                          <p className="font-medium text-primary">{method.info}</p>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {method.availability}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="gradient-card border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                  <CardDescription>
                    For urgent inquiries or immediate consultation needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="hero">
                    <Phone className="mr-2" />
                    Call Now: +91 8160396630
                  </Button>
                  <Button className="w-full" variant="neural">
                    <MessageSquare className="mr-2" />
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Common Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to frequently asked questions about our services and process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "We can typically begin discovery within 1-2 weeks and start development within 3-4 weeks, depending on project complexity."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes! We work with companies of all sizes, from startups to Fortune 500. We tailor our solutions to fit your budget and needs."
              },
              {
                question: "What's included in a consultation?",
                answer: "A free 60-minute session where we analyze your needs, discuss potential AI solutions, and provide a preliminary roadmap."
              },
              {
                question: "How do you ensure data security?",
                answer: "We follow enterprise-grade security protocols, including encryption, secure data handling, and compliance with industry standards."
              }
            ].map((faq, index) => (
              <Card className="gradient-card border-border shadow-card" key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Have more questions?</p>
            <Link to="/faq">
              <Button variant="hero" size="lg">
                View Full FAQ
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
