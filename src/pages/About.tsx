import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Dna, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-dark py-24 text-center text-foreground animate-fade-in">
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-6 animate-slide-up text-4xl font-bold md:text-6xl">
            <span className="text-gradient">Our Mission</span>
          </h1>
          <p className="mx-auto max-w-3xl animate-slide-up text-lg text-muted-foreground md:text-xl">
            We are dedicated to empowering businesses with cutting-edge AI solutions that drive innovation and foster growth. Our goal is to make advanced technology accessible and transformative for everyone.
          </p>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </section>

      {/* Our Values Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide our work</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1: Innovation */}
            <Card className="hover-lift group bg-transparent text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl">Innovation</CardTitle>
                <p className="text-muted-foreground">
                  We are committed to pushing the boundaries of what's possible and delivering creative solutions.
                </p>
              </CardContent>
            </Card>

            {/* Value 2: Integrity */}
            <Card className="hover-lift group bg-transparent text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Dna className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl">Integrity</CardTitle>
                <p className="text-muted-foreground">
                  We operate with transparency and honesty in everything we do.
                </p>
              </CardContent>
            </Card>

            {/* Value 3: Collaboration */}
            <Card className="hover-lift group bg-transparent text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl">Collaboration</CardTitle>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and building strong partnerships with our clients.
                </p>
              </CardContent>
            </Card>

            {/* Value 4: Excellence */}
            <Card className="hover-lift group bg-transparent text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl">Excellence</CardTitle>
                <p className="text-muted-foreground">
                  We strive for the highest standards in our work and are dedicated to continuous improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
