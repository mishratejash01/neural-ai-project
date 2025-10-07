import Layout from "@/components/layout/Layout";
import { BackgroundCells } from "@/components/ui/background-cells";

const TermsOfService = () => {
  return (
    <Layout>
      <BackgroundCells>
        <div className="text-center">
          <h1 className="md:text-5xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </BackgroundCells>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-8">
              By accessing or using Neural AI's services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using our services.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Services Description</h2>
            <p className="text-muted-foreground mb-8">
              Neural AI provides artificial intelligence solutions and consulting services to businesses. 
              Our services include but are not limited to: AI chatbots, computer vision systems, 
              natural language processing, predictive analytics, and custom AI development.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Use License</h2>
            <p className="text-muted-foreground mb-6">
              Permission is granted to temporarily access the materials on Neural AI's website for 
              personal, non-commercial viewing only. This is the grant of a license, not a transfer 
              of title, and under this license you may not:
            </p>
            <ul className="text-muted-foreground mb-8 list-disc list-inside space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Disclaimer</h2>
            <p className="text-muted-foreground mb-8">
              The materials on Neural AI's website are provided on an 'as is' basis. Neural AI makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including, without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Limitations of Liability</h2>
            <p className="text-muted-foreground mb-8">
              In no event shall Neural AI or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use our services, even if Neural AI or an 
              authorized representative has been notified orally or in writing of the possibility 
              of such damage.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Intellectual Property</h2>
            <p className="text-muted-foreground mb-8">
              All content, features, and functionality on our website, including but not limited to 
              text, graphics, logos, and software, are the exclusive property of Neural AI and are 
              protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Governing Law</h2>
            <p className="text-muted-foreground mb-8">
              These terms and conditions are governed by and construed in accordance with the laws 
              of India, and you irrevocably submit to the exclusive jurisdiction of the courts in 
              that location.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Changes to Terms</h2>
            <p className="text-muted-foreground mb-8">
              Neural AI reserves the right to revise these terms of service at any time without notice. 
              By using this website, you are agreeing to be bound by the current version of these 
              Terms of Service.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              For any questions regarding these Terms of Service, please contact us at:
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

export default TermsOfService;
