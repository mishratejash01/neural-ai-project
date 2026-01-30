import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Linkedin, 
  Twitter, 
  TrendingUp,
  MessageSquare,
  Users
} from "lucide-react";

const RetailChatbot = () => {
  return (
    <Layout>
      <article className="min-h-screen bg-background">
        
        {/* Navigation Breadcrumb */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/portfolio" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header / Hero */}
        <div className="container mx-auto px-4 max-w-5xl text-center mb-12">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest">
            Case Study: Retail & E-commerce
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-foreground">
            How AI Saved a Mumbai Fashion Retailer <span className="text-gradient">27% in Lost Sales</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground mb-12">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src="/path-to-tejash-image.jpg" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Tejash Mishra</p>
                <p className="text-xs">Founder, Neural AI</p>
              </div>
            </div>
            <Separator orientation="vertical" className="hidden sm:block h-8" />
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Oct 12, 2024</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
            </div>
          </div>
        </div>

        {/* Full Width Featured Image */}
        <div className="w-full h-[400px] md:h-[600px] overflow-hidden mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1920" 
            alt="Retail Store AI Implementation" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar: Social Share (Sticky) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted"><Share2 className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted text-blue-600"><Linkedin className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted text-sky-500"><Twitter className="w-5 h-5" /></Button>
              </div>
            </div>

            {/* Center Content: The Article */}
            <div className="lg:col-span-7 prose prose-lg prose-invert max-w-none">
              <p className="lead text-xl md:text-2xl font-light text-foreground/90 leading-relaxed mb-8">
                A leading fashion retailer in Mumbai was facing a crisis of scale. With multiple offline stores and a booming online platform, their support team was drowning in queries, leading to cart abandonment and frustrated customers.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">The Challenge: Scaling Human Support</h2>
              <p className="text-muted-foreground mb-6">
                The retailer's customer support team was overwhelmed. During peak sale seasons, response times on WhatsApp and web chat ballooned to over 4 hours. In the fast-paced world of fashion retail, a 4-hour delay means a lost sale. They needed a solution that could handle thousands of concurrent queries without losing the "personal touch" their brand was known for.
              </p>
              
              <div className="my-12 p-8 border-l-4 border-primary bg-primary/5 rounded-r-xl">
                <h4 className="text-lg font-bold text-primary mb-2">Key Pain Points</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li><strong>High Abandonment:</strong> 45% of users left chat before an agent could reply.</li>
                  <li><strong>Generic Responses:</strong> Agents lacked instant access to user browsing history.</li>
                  <li><strong>Cost Prohibitive:</strong> Scaling the human team 3x for seasonal sales wasn't viable.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">The Solution: Context-Aware Conversational AI</h2>
              <p className="text-muted-foreground mb-6">
                We didn't just build a chatbot; we built a virtual shopping assistant. Using advanced NLP trained on the client's specific catalog and historical chat logs, the AI could understand context, sentiment, and even "Hinglish" (a blend of Hindi and English common in Mumbai).
              </p>
              <p className="text-muted-foreground mb-6">
                The solution involved a deep integration with their inventory management system (IMS) and CRM. When a user asked, "Is this available in Red?", the AI didn't just check stock; it checked the user's size preference from previous purchases and recommended the correct variant immediately.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Technical Implementation</h3>
              <p className="text-muted-foreground mb-6">
                We utilized a hybrid model approach. For general queries (shipping, returns), we used a fast, rule-based engine. For product discovery, we deployed a vector-search based LLM wrapper that could "see" the catalog.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">The Outcome</h2>
              <p className="text-muted-foreground mb-8">
                The results were immediate. Within the first 30 days of deployment, the "Unanswered Query" rate dropped to near zero. More importantly, the AI wasn't just answering questions; it was selling. By proactively suggesting matching accessories, the AI contributed to a measurable uplift in Average Order Value (AOV).
              </p>

              <Separator className="my-12" />
              
              <div className="bg-muted/30 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to optimize your retail operations?</h3>
                <p className="text-muted-foreground mb-6">Join the forward-thinking brands using Neural AI.</p>
                <div className="flex justify-center gap-4">
                  <Link to="/contact"><Button className="gradient-primary">Get a Consultation</Button></Link>
                  <Link to="/demo"><Button variant="outline">View Live Demo</Button></Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Stats & Related */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Key Stats Card */}
              <Card className="bg-card border-border shadow-lg sticky top-32">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold uppercase tracking-wider text-muted-foreground">Impact At a Glance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">+27%</p>
                      <p className="text-sm text-muted-foreground">Sales Conversion Rate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">-60%</p>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">40%</p>
                      <p className="text-sm text-muted-foreground">Fewer Support Tickets</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="pt-2">
                    <p className="text-sm font-semibold mb-2 text-foreground">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">NLP</Badge>
                      <Badge variant="secondary">WhatsApp API</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">React</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles Placeholder */}
              <div className="pt-8">
                <h4 className="font-bold text-lg mb-4 text-foreground">More Success Stories</h4>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link key={i} to="/portfolio" className="block group">
                      <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          <img src={`https://source.unsplash.com/random/200x200?tech&sig=${i}`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform"/>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            Implementing Computer Vision in Automotive Manufacturing
                          </h5>
                          <p className="text-xs text-muted-foreground mt-1">5 min read</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RetailChatbot;
