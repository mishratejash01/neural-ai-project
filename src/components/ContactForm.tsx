import { useState, useEffect, useRef } from "react";
import { Send, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// --- Types ---
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
  className?: string;
}

export function ContactForm({ onClose, className }: ContactFormProps) {
  // --- State ---
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', content: "Hi there! I'm your Neural AI assistant. To get started, what's your name?" }
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
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Auto-scroll ---
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // --- Logic ---
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue("");
    
    // 1. Add User Message
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userText }]);

    // 2. Update Data
    const updatedFormData = { ...formData, [currentStep]: userText };
    setFormData(updatedFormData);

    // 3. Determine Next Step
    let nextStep: keyof FormData | 'done' = 'done';
    let botResponse = "";

    switch (currentStep) {
      case 'name':
        nextStep = 'email';
        botResponse = `Nice to meet you! What's your email address?`;
        break;
      case 'email':
        nextStep = 'phone';
        botResponse = "Thanks. And what's a good phone number to reach you at?";
        break;
      case 'phone':
        nextStep = 'company';
        botResponse = "Great. Which company are you with?";
        break;
      case 'company':
        nextStep = 'message';
        botResponse = "Almost done! How can we help you today?";
        break;
      case 'message':
        nextStep = 'done';
        await submitForm(updatedFormData);
        return;
    }

    setCurrentStep(nextStep as keyof FormData);
    
    // Show Typing Indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'bot', 
        content: botResponse 
      }]);
    }, 800);
  };

  const submitForm = async (data: FormData) => {
    setIsTyping(true);
    
    try {
      const { error } = await supabase.functions.invoke('resend_key_id', {
        body: {
          type: 'contact',
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          subject: "New Neural Assistant Lead"
        },
      });

      if (error) throw error;

      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: 'done', role: 'bot', content: "Got it! Thanks for reaching out. We'll be in touch soon." }
      ]);
      toast.success("Request sent successfully!");

    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: 'error', role: 'bot', content: "Oops, connection error. Please try again later." }
      ]);
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

  return (
    <div className={`flex flex-col h-full bg-white font-sans overflow-hidden ${className}`}>
      
      {/* --- HEADER --- */}
      <div className="p-6 flex items-center gap-3 border-b border-[#e5e7eb] bg-white shrink-0">
        <div className="w-10 h-10 bg-[#111827] rounded-[14px] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-[15px] font-semibold text-[#111827] leading-tight">Neural Assistant</h1>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
            <span className="text-xs text-[#6b7280]">Online</span>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* --- MESSAGES AREA --- */}
      <div 
        ref={scrollRef}
        className="flex-1 p-6 overflow-y-auto flex flex-col gap-5 bg-white scroll-smooth"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[85%] px-[18px] py-[12px] text-[14px] leading-[1.5] shadow-sm animate-in fade-in zoom-in-95 duration-300 origin-bottom ${
              msg.role === 'user'
                ? 'self-end bg-[#111827] text-white italic rounded-[18px_18px_4px_18px]'
                : 'self-start bg-[#f3f4f6] text-[#111827] rounded-[18px_18px_18px_4px]'
            }`}
          >
            {msg.content}
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="self-start bg-[#f3f4f6] text-[#6b7280] rounded-[18px_18px_18px_4px] px-[18px] py-[12px] text-xs flex items-center gap-1 animate-in fade-in">
             <span className="animate-bounce">●</span>
             <span className="animate-bounce delay-100">●</span>
             <span className="animate-bounce delay-200">●</span>
          </div>
        )}
      </div>

      {/* --- INPUT AREA --- */}
      <div className="p-[20px_24px_30px] bg-white border-t border-transparent">
        {isTyping && <div className="text-xs text-[#6b7280] mb-2 pl-2 animate-pulse">AI is writing...</div>}
        
        <div className="flex items-center bg-[#f3f4f6] rounded-[50px] p-[6px_6px_6px_20px] transition-all border border-transparent focus-within:bg-white focus-within:border-[#d1d5db] focus-within:shadow-sm group">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#111827] h-10 placeholder:text-gray-400"
            placeholder={currentStep === 'done' ? "Chat ended" : "Type a message..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping || currentStep === 'done' as any}
            autoFocus
            autoComplete="off"
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="w-10 h-10 bg-[#111827] rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 text-white animate-spin" />
            ) : (
              <Send className="w-[18px] h-[18px] text-white ml-0.5" />
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
