import { MessageCircle, Clock } from "lucide-react";
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Book your appointment
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule your eye examination directly with our clinical team via WhatsApp. Quick, easy, and personal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-12">
            <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Chat with us on WhatsApp to book
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Tap the button below to open a WhatsApp chat directly with our front desk. We will help you find a convenient time for your visit.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 font-bold text-xl hover:bg-[#1da851] transition-colors shadow-xl shadow-[#25D366]/20 rounded-full w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-12 mt-12 grid sm:grid-cols-2 gap-8 text-left max-w-lg mx-auto">
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

            <div>
              <h3 className="font-bold text-lg mb-4">Have a question?</h3>
              <p className="text-muted-foreground mb-3">
                Need more info before booking?
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary font-bold hover:underline"
              >
                Visit our Contact Page &rarr;
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
