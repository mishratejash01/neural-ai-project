import Layout from "@/components/layout/Layout";
import { BackgroundCells } from "@/components/ui/background-cells";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <BackgroundCells>
        <div className="text-center">
          <h1 className="md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
      </BackgroundCells>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information that you provide directly to us, including when you:
            </p>
            <ul className="text-muted-foreground mb-8 list-disc list-inside space-y-2">
              <li>Fill out a contact form or request a demo</li>
              <li>Apply for a position through our careers page</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or other channels</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground mb-8 list-disc list-inside space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process job applications and communicate with candidates</li>
              <li>Send you updates, newsletters, and marketing communications</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Data Security</h2>
            <p className="text-muted-foreground mb-8">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet is 100% secure.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Third-Party Services</h2>
            <p className="text-muted-foreground mb-8">
              We may use third-party services to process your information, such as email service providers 
              and analytics tools. These third parties are obligated to protect your information and only 
              use it for the purposes we specify.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              You have the right to:
            </p>
            <ul className="text-muted-foreground mb-8 list-disc list-inside space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
              <br />
              <a href="mailto:office@neuralai.in" className="text-primary hover:underline">office@neuralai.in</a>
            </p>

            <p className="text-sm text-muted-foreground mt-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
