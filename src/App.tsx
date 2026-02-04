import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// --- Main Pages ---
import Index from "./pages/Index"; // Landing Page
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// --- Detail Pages ---
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BlogDetail from "./pages/BlogDetail";

// NOTE: Removed all Service-Specific and Portfolio-Specific imports to keep it clean.

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Dynamic Detail Pages */}
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/portfolio/:slug" element={<CaseStudyDetail />} /> 
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
