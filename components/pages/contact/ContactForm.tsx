"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mkoqqeza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[#faf9f6] p-8 md:p-12 border-t-8 border-primary shadow-sm">
      <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">Send Us a Message</h2>
      
      {isSuccess && (
        <div className="bg-[#064e3b]/10 text-[#064e3b] p-4 mb-8 border border-[#064e3b]/20">
          <p className="font-bold">Message Sent Successfully</p>
          <p className="text-sm mt-1">Thank you for reaching out. We will respond shortly.</p>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-foreground uppercase tracking-wide">
            Full Name
          </label>
          <input 
            id="name" 
            placeholder="e.g. John Doe" 
            {...form.register("name")}
            className={`w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors ${form.formState.errors.name ? "border-red-500" : ""}`}
          />
          {form.formState.errors.name && (
            <p className="text-sm font-medium text-red-500 mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-foreground uppercase tracking-wide">
              Email Address
            </label>
            <input 
              id="email" 
              type="email" 
              placeholder="e.g. john@example.com" 
              {...form.register("email")}
              className={`w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors ${form.formState.errors.email ? "border-red-500" : ""}`}
            />
            {form.formState.errors.email && (
              <p className="text-sm font-medium text-red-500 mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold text-foreground uppercase tracking-wide">
              Phone Number
            </label>
            <input 
              id="phone" 
              type="tel" 
              placeholder="e.g. 0803 000 0000" 
              {...form.register("phone")}
              className={`w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors ${form.formState.errors.phone ? "border-red-500" : ""}`}
            />
            {form.formState.errors.phone && (
              <p className="text-sm font-medium text-red-500 mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-bold text-foreground uppercase tracking-wide">
            Subject
          </label>
          <select 
            id="subject"
            value={form.watch("subject")}
            onChange={(e) => form.setValue("subject", e.target.value, { shouldValidate: true })}
            className={`w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground focus:border-primary focus:outline-none transition-colors ${form.formState.errors.subject ? "border-red-500" : ""}`}
          >
            <option value="">Select a subject</option>
            <option value="Schedule an Appointment">Schedule an Appointment</option>
            <option value="New Patient Inquiry">New Patient Inquiry</option>
            <option value="Billing Question">Billing Question</option>
            <option value="Medical Records">Medical Records</option>
            <option value="Other">Other</option>
          </select>
          {form.formState.errors.subject && (
            <p className="text-sm font-medium text-red-500 mt-1">{form.formState.errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2 pt-2">
          <label htmlFor="message" className="text-sm font-bold text-foreground uppercase tracking-wide">
            Message
          </label>
          <textarea 
            id="message" 
            placeholder="How can we help you today?" 
            rows={4}
            {...form.register("message")}
            className={`w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none ${form.formState.errors.message ? "border-red-500" : ""}`}
          />
          {form.formState.errors.message && (
            <p className="text-sm font-medium text-red-500 mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
