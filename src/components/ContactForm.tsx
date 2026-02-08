import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner"; // Assuming you have sonner or use your preferred toast

export function ContactForm({ className }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the Supabase Edge Function 'resend_key_id'
      const { data, error } = await supabase.functions.invoke('resend_key_id', {
        body: {
          type: 'contact',
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Website Contact Request"
        },
      });

      if (error) throw error;

      console.log("Email sent successfully:", data);
      setIsSuccess(true);
      toast.success("Message sent successfully!");
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in">
        <div className="w-16 h-16 bg-[#eafaf1] rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#2d6a4f]" />
        </div>
        <h3 className="text-xl font-semibold text-[#1a2e1a]">Request Sent!</h3>
        <p className="text-[#556b55] mt-2">
          Thank you, {formData.name}. We will contact you shortly at {formData.email}.
        </p>
        <Button 
          variant="outline" 
          className="mt-6" 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
          }}
        >
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none text-[#1a2e1a]">
          Name <span className="text-red-500">*</span>
        </label>
        <Input 
          id="name" 
          placeholder="John Doe" 
          value={formData.name}
          onChange={handleChange}
          required 
          className="bg-white"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none text-[#1a2e1a]">
          Email <span className="text-red-500">*</span>
        </label>
        <Input 
          id="email" 
          type="email" 
          placeholder="john@company.com" 
          value={formData.email}
          onChange={handleChange}
          required 
          className="bg-white"
        />
      </div>

      {/* Phone Field (New) */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium leading-none text-[#1a2e1a]">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <Input 
          id="phone" 
          type="tel" 
          placeholder="+91 98765 43210" 
          value={formData.phone}
          onChange={handleChange}
          required 
          className="bg-white"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none text-[#1a2e1a]">
          Message
        </label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your requirements..." 
          className="min-h-[100px] bg-white" 
          value={formData.message}
          onChange={handleChange}
          required 
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full bg-[#142b14] hover:bg-[#2d6a4f] text-white transition-colors" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Demo"
        )}
      </Button>

      <p className="text-xs text-center text-gray-500 mt-4">
        We respect your privacy. No spam.
      </p>
    </form>
  );
}
