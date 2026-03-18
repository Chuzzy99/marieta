"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      // You could show an error message here
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
      
      {isSuccess ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 border border-green-200">
          <p className="font-semibold text-lg">Message Sent Successfully!</p>
          <p className="text-sm mt-1">Thank you for reaching out. A member of our team will contact you shortly.</p>
        </div>
      ) : null}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name
            </label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              {...form.register("name")}
              className={form.formState.errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
            {form.formState.errors.name && (
              <p className="text-sm font-medium text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email Address
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              {...form.register("email")}
              className={form.formState.errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
            {form.formState.errors.email && (
              <p className="text-sm font-medium text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Phone Number
            </label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="(555) 123-4567" 
              {...form.register("phone")}
              className={form.formState.errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
            {form.formState.errors.phone && (
              <p className="text-sm font-medium text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Subject
            </label>
            <select 
              id="subject"
              value={form.watch("subject")}
              onChange={(e) => form.setValue("subject", e.target.value, { shouldValidate: true })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a subject</option>
              <option value="Schedule an Appointment">Schedule an Appointment</option>
              <option value="New Patient Inquiry">New Patient Inquiry</option>
              <option value="Billing Question">Billing Question</option>
              <option value="Medical Records">Medical Records</option>
              <option value="Other">Other</option>
            </select>
            {form.formState.errors.subject && (
              <p className="text-sm font-medium text-red-500">{form.formState.errors.subject.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Message
          </label>
          <Textarea 
            id="message" 
            placeholder="How can we help you today?" 
            rows={5}
            {...form.register("message")}
            className={form.formState.errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {form.formState.errors.message && (
            <p className="text-sm font-medium text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
