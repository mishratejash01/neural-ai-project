import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("resend_key_id"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  type: 'contact' | 'demo' | 'career';
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  industry?: string;
  interests?: string;
  timeframe?: string;
  position?: string;
  experience?: string;
  cover?: string;
  budget?: string;
  resumeLink?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Form submission function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: FormSubmission = await req.json();
    console.log("Form submission received:", { type: submission.type, email: submission.email });

    let emailSubject = "";
    let emailHtml = "";

    // Generate email content based on form type
    switch (submission.type) {
      case 'contact':
        emailSubject = `New Contact Form Submission from ${submission.fullName}`;
        emailHtml = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${submission.fullName}</p>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${submission.company || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${submission.subject}</p>
          <p><strong>Budget:</strong> ${submission.budget || 'Not specified'}</p>
          <h3>Message:</h3>
          <p>${submission.message}</p>
        `;
        break;

      case 'demo':
        emailSubject = `New Demo Request from ${submission.fullName}`;
        emailHtml = `
          <h2>New Demo Booking Request</h2>
          <p><strong>Name:</strong> ${submission.fullName}</p>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${submission.company}</p>
          <p><strong>Industry:</strong> ${submission.industry || 'Not specified'}</p>
          <p><strong>Timeframe:</strong> ${submission.timeframe || 'Not specified'}</p>
          <h3>Interests:</h3>
          <p>${submission.interests || 'Not specified'}</p>
        `;
        break;

      case 'career':
        emailSubject = `New Job Application from ${submission.fullName}`;
        emailHtml = `
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${submission.fullName}</p>
          <p><strong>Email:</strong> ${submission.email}</p>
          <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
          <p><strong>Position Interest:</strong> ${submission.position || 'Not specified'}</p>
          <p><strong>Experience:</strong> ${submission.experience || 'Not specified'}</p>
          <p><strong>Resume Link:</strong> <a href="${submission.resumeLink}">${submission.resumeLink}</a></p>
          <h3>Cover Letter:</h3>
          <p>${submission.cover}</p>
        `;
        break;

      default:
        throw new Error('Invalid form type');
    }

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Neural AI <onboarding@resend.dev>", // Change this to your verified domain
      to: ["office@neuralai.in"], // Your company email
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to user
    const confirmationSubject = submission.type === 'contact' ? 
      "We received your message!" : 
      submission.type === 'demo' ? 
      "Demo request received!" : 
      "Application received!";

    const confirmationHtml = `
      <h2>Thank you, ${submission.fullName}!</h2>
      <p>We have received your ${submission.type === 'contact' ? 'message' : submission.type === 'demo' ? 'demo request' : 'application'} and will get back to you as soon as possible.</p>
      <p>Best regards,<br>The Neural AI Team</p>
    `;

    await resend.emails.send({
      from: "Neural AI <onboarding@resend.dev>",
      to: [submission.email],
      subject: confirmationSubject,
      html: confirmationHtml,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in form submission function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);