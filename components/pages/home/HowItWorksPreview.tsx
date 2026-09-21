// HowItWorksPreview.tsx

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { ArrowRight, ClipboardCheck, CalendarCheck, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Request Appointment",
    description: "Fill out our simple online form or call us to schedule your comprehensive eye exam at a time that works for you.",
    icon: CalendarCheck,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "The Consultation",
    description: "Meet with our specialists for a thorough evaluation of your eye health and vision needs using the latest technology.",
    icon: Stethoscope,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Personalized Plan",
    description: "Receive a custom treatment or vision correction plan designed for your unique lifestyle and goals.",
    icon: ClipboardCheck,
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export default function HowItWorksPreview() {

  return (
    <section className="py-24 bg-muted/50 border-b border-border relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Your Journey to Better Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mt-4">
              Getting the care you need is easy. Here&apos;s what to expect when you choose Marieta Eye Clinic.
            </p>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-6 relative group transform transition-transform duration-500 hover:rotate-6`}>
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border flex items-center justify-center font-bold text-primary text-sm shadow-sm group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className="flex justify-center mt-16"
        >
          <Link 
            href="/how-it-works" 
            className={cn(buttonVariants({ size: "lg" }), "px-10")}
          >
            Learn More About Our Process <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mb-32 -mr-32" />
    </section>
  );
}
