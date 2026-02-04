import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Demo from "./pages/Demo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import BlogDetail from "./pages/BlogDetail"; // <--- Import this

// Portfolio & Service Pages Imports...
import ComputerVisionPortfolio from "./pages/ComputerVisionPortfolio";
import LogisticsOptimization from "./pages/LogisticsOptimization";
import PredictiveAnalytics from "./pages/PredictiveAnalytics";
import RetailChatbot from "./pages/RetailChatbot";
import MarketingAutomationPortfolio from "./pages/MarketingAutomationPortfolio";
import NLPEdTech from "./pages/NLPEdTech";
import ComputerVisionService from "./pages/services/ComputerVisionService";
import NLPService from "./pages/services/NLPService";
import DataAnalyticsService from "./pages/services/DataAnalyticsService";
import ChatbotsService from "./pages/services/ChatbotsService";
import MarketingAutomationService from "./pages/services/MarketingAutomationService";
import CustomAIService from "./pages/services/CustomAIService";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          
          {/* Legal & Info */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Dynamic Detail Pages */}
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />  {/* <--- Add this route */}

          {/* Specific Portfolio Routes */}
          <Route path="/portfolio/computer-vision-security" element={<ComputerVisionPortfolio />} />
          <Route path="/portfolio/logistics-optimization" element={<LogisticsOptimization />} />
          <Route path="/portfolio/predictive-maintenance" element={<PredictiveAnalytics />} />
          <Route path="/portfolio/retail-chatbot" element={<RetailChatbot />} />
          <Route path="/portfolio/marketing-automation" element={<MarketingAutomationPortfolio />} />
          <Route path="/portfolio/nlp-edtech" element={<NLPEdTech />} />

          {/* Specific Service Routes */}
          <Route path="/services/computer-vision" element={<ComputerVisionService />} />
          <Route path="/services/nlp" element={<NLPService />} />
          <Route path="/services/data-analytics" element={<DataAnalyticsService />} />
          <Route path="/services/chatbots" element={<ChatbotsService />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomationService />} />
          <Route path="/services/custom-ai" element={<CustomAIService />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
