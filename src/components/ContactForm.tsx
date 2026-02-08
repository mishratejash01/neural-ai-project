import { useState, useEffect, useRef } from "react";
import { Send, User, Building2, Phone, Mail, MessageSquare, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: string;
  role: 'bot' | 'user';
  content: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

interface ContactFormProps {
  onClose?: () => void;
  className?: string; // Accept className to fit into containers
}

export function ContactForm({ onClose, className }: ContactFormProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', content: "Hi there! I'm your Neural AI assistant. What's your good name?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState<keyof FormData>('name');
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue(""); // Clear input

    // 1. Add User Message
    const newMessages = [...messages, { id: Date.now().toString(), role: 'user' as const, content: userText }];
    setMessages(newMessages);

    // 2. Update Form Data
    const updatedFormData = { ...formData, [currentStep]: userText };
    setFormData(updatedFormData);

    // 3. Determine Next Step
    let nextStep: keyof FormData | 'done' = 'done';
    let botResponse = "";

    switch (currentStep) {
      case 'name':
        nextStep = 'email';
        botResponse = `Nice to meet you, ${userText}. What's your email address?`;
        break;
      case 'email':
        nextStep = 'phone';
        botResponse = "Got it. Could you share your phone number?";
        break;
      case 'phone':
        nextStep = 'company';
        botResponse = "Thanks. What is your Company Name or Trade Name?";
        break;
      case 'company':
        nextStep = 'message';
        botResponse = "Almost done. Please write your message to us.";
        break;
      case 'message':
        nextStep = 'done';
        // Trigger Submission immediately after message
        await submitForm(updatedFormData);
        return; 
    }

    setCurrentStep(nextStep as keyof FormData);
    
    // Simulate Bot Typing Delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'bot', 
        content: botResponse 
      }]);
    }, 600);
  };

  const submitForm = async (data: FormData) => {
    setIsSubmitting(true);
    setMessages(prev => [...prev, { id: 'processing', role: 'bot', content: "Just a moment, sending your request..." }]);

    try {
      const { error } = await supabase.functions.invoke('resend_key_id', {
        body: {
          type: 'contact',
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          subject: "New Chatbot Lead"
        },
      });

      if (error) throw error;

      setMessages(prev => [
        ...prev.filter(m => m.id !== 'processing'),
        { id: 'done', role: 'bot', content: "Request received! We'll be in touch shortly." }
      ]);
      toast.success("Request sent successfully!");

    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev.filter(m => m.id !== 'processing'),
        { id: 'error', role: 'bot', content: "Oops, something went wrong. Please try again later." }
      ]);
      toast.error("Failed to send request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to get input placeholder/type
  const getInputProps = () => {
    switch (currentStep) {
      case 'email': return { placeholder: "name@example.com", type: "email", icon: <Mail className="w-4 h-4" /> };
      case 'phone': return { placeholder: "+91...", type: "tel", icon: <Phone className="w-4 h-4" /> };
      case 'company': return { placeholder: "Company Pvt Ltd", type: "text", icon: <Building2 className="w-4 h-4" /> };
      case 'message': return { placeholder: "I'm interested in...", type: "text", icon: <MessageSquare className="w-4 h-4" /> };
      default: return { placeholder: "Type your answer...", type: "text", icon: <User className="w-4 h-4" /> };
    }
  };

  const inputProps = getInputProps();

  return (
    <div className={`flex flex-col h-full bg-white text-[#1a1a1a] font-sans ${className}`}>
      
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
             <Avatar className="h-10 w-10 border border-gray-200">
               <AvatarImage src="/neural-ai-logo.png" />
               <AvatarFallback className="bg-[#142b14] text-white">NA</AvatarFallback>
             </Avatar>
             <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h3 className="font-semibold text-sm">Neural AI Assistant</h3>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8faf8]"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-[#142b14] text-white rounded-br-none'
                  : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isSubmitting && (
           <div className="flex justify-start">
             <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
               <Loader2 className="w-4 h-4 animate-spin text-[#142b14]" />
             </div>
           </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex gap-2 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {inputProps.icon}
          </div>
          <Input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={inputProps.placeholder}
            type={inputProps.type}
            disabled={isSubmitting || currentStep === 'done' as any}
            className="pl-10 pr-12 h-12 rounded-full border-gray-200 focus-visible:ring-[#142b14] bg-gray-50/50"
            autoFocus
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isSubmitting}
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#142b14] hover:bg-[#2d6a4f]"
          >
            {currentStep === 'message' ? (
                <span className="text-[10px] font-bold px-1">SEND</span>
            ) : (
                <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
