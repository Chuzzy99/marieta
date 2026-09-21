import { Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | Marieta Eye Clinic",
  description: "Schedule your eye examination directly with our clinical team.",
};

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to book an eye appointment at Marieta Eye Clinic. Please let me know available dates and times. Thank you!"
);

const WHATSAPP_URL = `https://wa.me/2348033067153?text=${WHATSAPP_MESSAGE}`;

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 border-b border-border bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Book your appointment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Schedule your eye examination directly with our clinical team via WhatsApp. Quick, easy, and personal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left: WhatsApp CTA */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Schedule via WhatsApp
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tap the button below to open a WhatsApp chat directly with our front desk. You can discuss your needs and schedule an appointment at a time that works for you.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-[#25D366] text-white px-6 py-4 font-bold text-lg hover:bg-[#1da851] transition-colors"
              >
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Right: Info */}
            <div className="space-y-12 md:pl-10 md:border-l border-border">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-foreground" />
                  <h3 className="font-bold text-lg">Call Us Directly</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  Speak to our team to schedule your visit over the phone.
                </p>
                <a
                  href="tel:+2348033067153"
                  className="text-foreground font-bold hover:text-primary transition-colors text-lg"
                >
                  +234 803 306 7153
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-foreground" />
                  <h3 className="font-bold text-lg">Clinic Hours</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li><span className="font-bold text-foreground">Mon &ndash; Fri:</span> 8:00 AM &ndash; 6:00 PM</li>
                  <li><span className="font-bold text-foreground">Saturday:</span> 9:00 AM &ndash; 4:00 PM</li>
                  <li><span className="font-bold text-foreground">Sunday:</span> Closed</li>
                </ul>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-bold text-lg mb-2">Have a question?</h3>
                <Link
                  href="/contact"
                  className="inline-block text-primary font-bold hover:underline"
                >
                  Visit our Contact Page &rarr;
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
