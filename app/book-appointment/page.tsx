"use client";

import { MessageCircle, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Dr. Marieta, I would like to book an eye appointment at Marieta Eye Clinic. Please let me know available dates and times. Thank you!"
);

const WHATSAPP_URL = `https://wa.me/2348033067153?text=${WHATSAPP_MESSAGE}`;

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-primary/5 pt-32 pb-12 lg:pt-48 lg:pb-16 border-b border-border">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Schedule your eye examination directly with the doctor via WhatsApp. Quick, easy, and personal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-sm border border-border p-8 md:p-12">
            {/* WhatsApp CTA */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Chat with the Doctor on WhatsApp
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Tap the button below to open a WhatsApp chat directly with the doctor. You can discuss your needs and schedule an appointment at a time that works for you.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground font-medium">or reach us through</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Alternative contact options */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-muted/40 rounded-xl p-6 border border-border">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">Call Us Directly</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Speak to our team to schedule your visit.
                </p>
                <a
                  href="tel:+2348033067153"
                  className="text-primary font-semibold hover:underline"
                >
                  +234 803 306 7153
                </a>
              </div>

              <div className="bg-muted/40 rounded-xl p-6 border border-border">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">Clinic Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 4:00 PM</p>
                  <p className="text-destructive font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact page link */}
            <div className="text-center mt-10">
              <p className="text-sm text-muted-foreground mb-3">
                Have a question before booking?
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-6")}
              >
                Visit our Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
