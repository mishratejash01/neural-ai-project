// src/pages/Anant.tsx
import Layout from "@/components/layout/Layout";
import { BrainCircuit, Database, Cpu, Lock, Network, Code2, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Anant = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-black via-gray-900 to-slate-900 overflow-hidden text-white border-b border-gray-800">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-blue-300">
              <Sparkles className="w-4 h-4" />
              <span>Project Anant 1.0 • May 2027</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400">
              The Sovereign LLM <br/> Built From Scratch.
            </h1>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              We aren't fine-tuning existing models. We are architecting, training, and deploying a foundational Large Language Model completely from the ground up to guarantee absolute data privacy and contextual intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Zero Dependencies. Absolute Sovereignty.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To build a truly sovereign AI, you cannot rely on open-source weights or third-party APIs. Anant 1.0 is an engineering marvel where every line of code, from the data tokenizer to the final inference engine, is developed in-house by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Code2 className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Custom Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A highly optimized transformer architecture written entirely from scratch. We are re-engineering attention mechanisms to maximize throughput while minimizing memory footprint.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Database className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">In-House Data Pipeline</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We control our data. We are building custom crawlers, ethical scraping protocols, and bespoke tokenizers to ensure the pre-training data is clean, unbiased, and contextually rich.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Lock className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Air-Gapped Privacy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Because we own the foundational weights, Anant 1.0 can be deployed completely on-premise for enterprises. No data ever leaves your servers. True sovereign security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Technical Roadmap */}
      <section className="py-24 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The Engineering Roadmap</h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:translate-x-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-gray-800">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-black bg-blue-500 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2 block">Phase 1</span>
                  <h3 className="text-2xl font-bold mb-3">Data Curation & Tokenization</h3>
                  <p className="text-gray-400 text-sm">
                    Developing a proprietary tokenizer optimized for local dialects and high-density technical jargon. We are building a massive, clean dataset from scratch, ensuring compliance and extreme quality control.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-black bg-purple-500 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  <BrainCircuit className="w-4 h-4 text-white" />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-purple-400 font-bold text-sm tracking-widest uppercase mb-2 block">Phase 2</span>
                  <h3 className="text-2xl font-bold mb-3">Model Architecture & Pre-training</h3>
                  <p className="text-gray-400 text-sm">
                    Writing the underlying transformer layers entirely from scratch. We are implementing custom optimizations like Flash Attention natively, followed by months of rigorous foundational pre-training on compute clusters.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-black bg-emerald-500 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  <Network className="w-4 h-4 text-white" />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-2 block">Phase 3</span>
                  <h3 className="text-2xl font-bold mb-3">RLHF & Alignment</h3>
                  <p className="text-gray-400 text-sm">
                    Creating an in-house Reinforcement Learning from Human Feedback (RLHF) pipeline. We are meticulously aligning the model to be safe, helpful, and culturally aware without relying on outsourced alignment APIs.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-black bg-gray-500 md:-translate-x-1/2 flex items-center justify-center z-10">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2 block">Phase 4</span>
                  <h3 className="text-2xl font-bold mb-3">Inference Engine Optimization</h3>
                  <p className="text-gray-400 text-sm">
                    Building a highly optimized, custom inference engine from scratch in C/C++ to allow Anant 1.0 to run efficiently on consumer-grade hardware and edge devices, drastically lowering operational costs.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-slate-900 to-black text-center text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            We are looking for brilliant engineers, researchers, and early enterprise partners to join us in building the sovereign future of AI.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-full font-bold text-lg">
              Join the Waitlist
            </Button>
            <Button variant="outline" className="text-black border-white/20 hover:bg-white/10 px-8 py-6 rounded-full font-bold text-lg">
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Anant;
