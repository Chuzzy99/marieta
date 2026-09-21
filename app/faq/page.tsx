import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FaqList } from "@/components/pages/faq/FaqList";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Marieta Eye Clinic",
  description: "Find answers to common questions about appointments, procedures, and general eye care at Marieta Eye Clinic in Lagos.",
  openGraph: {
    title: "Eye Care FAQ | Marieta Eye Clinic",
    description: "Get answers to your questions about visiting Marieta Eye Clinic.",
    url: "https://marietaeyeclinic.com/faq",
  },
};

export default function FAQPage() {
  // Schema.org JSON-LD for FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your hours of operation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays."
        }
      },
      {
        "@type": "Question",
        "name": "Are you accepting new patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are always accepting new patients. You can walk in during our operating hours, or book ahead on WhatsApp."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        headline="Frequently Asked Questions" 
        subheadline="Find quick answers to common questions about our clinic, services, and appointments."
      />
      
      <FaqList />
    </div>
  );
}
