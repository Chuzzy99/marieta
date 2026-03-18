"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <p className="font-semibold text-lg text-foreground">Thank you for subscribing!</p>
        <p className="text-muted-foreground text-sm">You&apos;ve been added to our mailing list.</p>
        <Button 
          variant="link" 
          className="mt-4" 
          onClick={() => setStatus("idle")}
        >
          Subscribe another email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email address"
        className="h-12 bg-muted/50 focus-visible:bg-black/5"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "submitting"}
      />
      <Button 
        type="submit" 
        className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground" 
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}
