import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Demo from "./pages/Demo";
import Testimonials from "./pages/Testimonials";
import Portfolio from "./pages/Portfolio";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import ChatbotsService from "./pages/services/ChatbotsService";
import CustomAIService from "./pages/services/CustomAIService";
import DataAnalyticsService from "./pages/services/DataAnalyticsService";
import ComputerVisionService from "./pages/services/ComputerVisionService";
import NLPService from "./pages/services/NLPService";
import MarketingAutomationService from "./pages/services/MarketingAutomationService";
import RetailChatbot from "./pages/RetailChatbot";
import PredictiveAnalytics from "./pages/PredictiveAnalytics";
import ComputerVisionPortfolio from "./pages/ComputerVisionPortfolio";
import MarketingAutomationPortfolio from "./pages/MarketingAutomationPortfolio";
import NLPEdTech from "./pages/NLPEdTech";
import LogisticsOptimization from "./pages/LogisticsOptimization";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "@/components/ScrollToTop"; // <-- 1. Import the new component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* <-- 2. Add it here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/chatbots" element={<ChatbotsService />} />
          <Route path="/services/custom-ai" element={<CustomAIService />} />
          <Route path="/services/data-analytics" element={<DataAnalyticsService />} />
          <Route path="/services/computer-vision" element={<ComputerVisionService />} />
          <Route path="/services/nlp" element={<NLPService />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomationService />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
