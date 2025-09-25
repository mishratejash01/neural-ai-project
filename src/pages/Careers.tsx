import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Heart, 
  Trophy, 
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  Upload,
  Send
} from "lucide-react";

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    cover: "",
    resumeLink: ""
  });
  const [jobFormData, setJobFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resumeLink: "",
    cover: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleJobInputChange = (field: string, value: string) => {
    setJobFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyNow = (job: any) => {
    setSelectedJob(job);
    setIsJobDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('resend_key_id', {
        body: {
          type: 'career',
          ...formData,
          fullName: `${formData.firstName} ${formData.lastName}`
        }
      });

      if (error) throw error;

      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        cover: "",
        resumeLink: ""
      });
    } catch (error) {
      console.error('Application submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('resend_key_id', {
        body: {
          type: 'career',
          ...jobFormData,
          fullName: `${jobFormData.firstName} ${jobFormData.lastName}`,
          position: selectedJob?.title,
          jobApplication: true
        }
      });

      if (error) throw error;

      toast({
        title: "Job application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form and close dialog
      setJobFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resumeLink: "",
        cover: ""
      });
      setIsJobDialogOpen(false);
      setSelectedJob(null);
    } catch (error) {
      console.error('Job application submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Top-tier salaries with equity options and performance bonuses"
    },
    {
      icon: Laptop,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and modern equipment"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "$5,000 annual learning budget and conference attendance"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Coffee,
      title: "Amazing Culture",
      description: "Collaborative environment with regular team events and retreats"
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description: "Clear advancement paths and mentorship opportunities"
    }
  ];

  const openRoles = [
    {
      title: "AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "5-15k",
      experience: "2+ years",
      description: "Lead the development of cutting-edge AI solutions and mentor junior engineers. Work on challenging projects across computer vision, NLP, and machine learning.",
      requirements: [
        "2+ years experience in machine learning/AI",
        "Strong Python programming skills",
        "Experience with TensorFlow/PyTorch",
        "BS/BTECH in Computer Science/AI preferred"
      ],
      responsibilities: [
        "Design and implement AI algorithms",
        "Lead technical projects and mentor team members",
        "Collaborate with clients on solution architecture",
        "Research and evaluate new AI technologies"
      ]
    },
    {
      title: "Data Scientist",
      department: "Data Science", 
      location: "Remote",
      type: "Full-time",
      salary: "12k - 18k",
      experience: "3+ years",
      description: "Transform complex data into actionable insights using advanced analytics and machine learning techniques. Work directly with client data to solve business problems.",
      requirements: [
        "3+ years in data science/analytics",
        "Proficiency in Python, R, or SQL",
        "Experience with statistical modeling",
        "Strong communication skills"
      ],
      responsibilities: [
        "Analyze large datasets for patterns and insights",
        "Build predictive models and algorithms", 
        "Create data visualizations and reports",
        "Collaborate with engineering teams"
      ]
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time", 
      salary: "8k - 15k",
      experience: "2+ years",
      description: "Drive the product strategy for our AI solutions. Work closely with engineering, design, and sales teams to deliver world-class AI products.",
      requirements: [
        "2+ years in product management",
        "Understanding of AI/ML technologies",
        "Experience with B2B software products",
        "Strong analytical and communication skills"
      ],
      responsibilities: [
        "Define product roadmaps and strategy",
        "Gather and prioritize product requirements",
        "Work with engineering on feature development",
        "Analyze market trends and competitor products"
      ]
    },
    {
      title: "Machine Learning Intern",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      salary: "2k - 5k/month",
      experience: "Students/New Grads",
      description: "Join our team for a 12-week intensive internship program. Work on real client projects while learning from industry experts.",
      requirements: [
        "Currently pursuing CS/AI degree",
        "Basic knowledge of machine learning",
        "Programming experience in Python",
        "Passion for AI and problem-solving"
      ],
      responsibilities: [
        "Contribute to ongoing AI projects",
        "Participate in research and development",
        "Attend training sessions and workshops",
        "Present final project to leadership team"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "8k - 10k", 
      experience: "1+ years",
      description: "Build and maintain the infrastructure that powers our AI solutions. Focus on scalability, security, and performance optimization.",
      requirements: [
        "1+ years in DevOps/Infrastructure",
        "Experience with AWS, Docker, Kubernetes",
        "Knowledge of CI/CD pipelines",
        "Familiarity with ML model deployment"
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement CI/CD pipelines for ML models",
        "Monitor system performance and reliability",
        "Ensure security and compliance standards"
      ]
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "Remote", 
      type: "Full-time",
      salary: "6k - 8k + Commission",
      experience: "2+ years",
      description: "Drive new business growth by identifying and qualifying potential clients. Be the first point of contact for companies interested in AI solutions.",
      requirements: [
        "1+ years in sales or business development",
        "Excellent communication skills",
        "Interest in technology and AI",
        "Self-motivated and goal-oriented"
      ],
      responsibilities: [
        "Generate and qualify new business opportunities", 
        "Conduct initial client discovery calls",
        "Collaborate with sales team on proposals",
        "Maintain CRM and sales pipeline data"
      ]
    }
  ];

  const culture = [
    "Innovation-first mindset with cutting-edge projects",
    "Collaborative environment where everyone's voice matters",
    "Diverse team from 15+ countries and backgrounds",
    "Regular hackathons and innovation challenges",
    "Quarterly team retreats and social events",
    "Open feedback culture with transparent communication"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Join the <span className="text-gradient">Future of AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a team that's shaping the future of artificial intelligence. 
              Work on groundbreaking projects, learn from industry experts, and make a 
              real impact on businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">50+ Team Members</h3>
              <p className="text-muted-foreground">Diverse, global team of AI experts</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Cutting-Edge Projects</h3>
              <p className="text-muted-foreground">Work on the latest AI technologies</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Fast Growth</h3>
              <p className="text-muted-foreground">Rapid career advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">Neural AI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we provide a comprehensive package 
              designed to help you thrive personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="gradient-card border-border shadow-card text-center">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Neural AI, we believe that great work comes from great people. 
              We've built a culture that celebrates innovation, collaboration, and personal growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {culture.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting opportunities to advance your career in AI. 
              We're always looking for talented individuals to join our team.
            </p>
          </div>

          <div className="space-y-8">
            {openRoles.map((role, index) => (
              <Card key={index} className="gradient-card border-border shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-foreground/70 mb-4 font-medium">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {role.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {role.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {role.type}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="secondary">{role.salary}</Badge>
                        <Badge variant="outline">{role.experience}</Badge>
                      </div>
                      <CardDescription className="text-lg">
                        {role.description}
                      </CardDescription>
                    </div>
                    <Button variant="hero" onClick={() => handleApplyNow(role)}>
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Requirements:</h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-muted-foreground">
                We're always interested in hearing from talented individuals. 
                Send us your information and we'll keep you in mind for future opportunities.
              </p>
            </div>

            <Card className="gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">General Application</CardTitle>
                <CardDescription className="text-center">
                  Submit your details and we'll reach out when we have suitable openings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="position">Interested Position</Label>
                        <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                          <SelectTrigger className="bg-card border-border">
                            <SelectValue placeholder="Select position type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="data-science">Data Science</SelectItem>
                            <SelectItem value="product">Product Management</SelectItem>
                            <SelectItem value="sales">Sales & Business Development</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                          <SelectTrigger className="bg-card border-border">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cover">Tell us about yourself *</Label>
                      <Textarea 
                        id="cover"
                        placeholder="Share your background, interests, and why you'd like to work at Neural AI..."
                        className="bg-card border-border min-h-[120px]"
                        value={formData.cover}
                        onChange={(e) => handleInputChange('cover', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resumeLink">Resume/CV Link *</Label>
                      <Input 
                        id="resumeLink" 
                        type="url"
                        placeholder="https://drive.google.com/your-resume or linkedin.com/in/yourprofile" 
                        className="bg-card border-border" 
                        value={formData.resumeLink}
                        onChange={(e) => handleInputChange('resumeLink', e.target.value)}
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Please provide a link to your resume (Google Drive, Dropbox, LinkedIn, personal website, etc.)
                      </p>
                    </div>

                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2" />
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this application, you consent to Neural AI storing and processing 
                      your personal information for recruitment purposes.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Application Dialog */}
      <Dialog open={isJobDialogOpen} onOpenChange={setIsJobDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for this position. We'll review your application and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleJobSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobFirstName">First Name *</Label>
                <Input 
                  id="jobFirstName" 
                  placeholder="Enter your first name" 
                  className="bg-card border-border" 
                  value={jobFormData.firstName}
                  onChange={(e) => handleJobInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobLastName">Last Name *</Label>
                <Input 
                  id="jobLastName" 
                  placeholder="Enter your last name" 
                  className="bg-card border-border" 
                  value={jobFormData.lastName}
                  onChange={(e) => handleJobInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobEmail">Email Address *</Label>
              <Input 
                id="jobEmail" 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-card border-border" 
                value={jobFormData.email}
                onChange={(e) => handleJobInputChange('email', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobPhone">Phone Number</Label>
              <Input 
                id="jobPhone" 
                placeholder="Enter your phone number" 
                className="bg-card border-border" 
                value={jobFormData.phone}
                onChange={(e) => handleJobInputChange('phone', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobResumeLink">Resume/CV Link *</Label>
              <Input 
                id="jobResumeLink" 
                type="url"
                placeholder="https://drive.google.com/your-resume or linkedin.com/in/yourprofile" 
                className="bg-card border-border" 
                value={jobFormData.resumeLink}
                onChange={(e) => handleJobInputChange('resumeLink', e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">
                Please provide a link to your resume (Google Drive, Dropbox, LinkedIn, personal website, etc.)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobCover">Cover Letter</Label>
              <Textarea 
                id="jobCover"
                placeholder="Tell us why you're interested in this position and how your experience aligns with our requirements..."
                className="bg-card border-border min-h-[120px]"
                value={jobFormData.cover}
                onChange={(e) => handleJobInputChange('cover', e.target.value)}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                variant="hero" 
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                <Send className="mr-2 w-4 h-4" />
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
              <Button 
                variant="outline" 
                type="button" 
                onClick={() => setIsJobDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Careers;
