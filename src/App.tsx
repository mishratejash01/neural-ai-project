import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// --- Main Pages ---
import Index from "./pages/Index"; // Using Index as the Home Page
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
import BlogDetail from "./pages/BlogDetail"; // Added BlogDetail

// --- Service Specific Pages ---
import ChatbotsService from "./pages/services/ChatbotsService";
import CustomAIService from "./pages/services/CustomAIService";
import DataAnalyticsService from "./pages/services/DataAnalyticsService";
import ComputerVisionService from "./pages/services/ComputerVisionService";
import NLPService from "./pages/services/NLPService";
import MarketingAutomationService from "./pages/services/MarketingAutomationService";

// NOTE: Removed unused Portfolio imports (ComputerVisionPortfolio, etc.) to fix errors

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

          {/* Service Routes */}
          <Route path="/services/chatbots" element={<ChatbotsService />} />
          <Route path="/services/custom-ai" element={<CustomAIService />} />
          <Route path="/services/data-analytics" element={<DataAnalyticsService />} />
          <Route path="/services/computer-vision" element={<ComputerVisionService />} />
          <Route path="/services/nlp" element={<NLPService />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomationService />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
