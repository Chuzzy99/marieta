import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FaqList } from "@/components/pages/faq/FaqList";
import CTABanner from "@/components/shared/CTABanner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Marieta Eye Clinic",
  description: "Find answers to common questions about appointments, procedures like LASIK and cataract surgery, and general eye care.",
  openGraph: {
    title: "Eye Care FAQ | Marieta Eye Clinic",
    description: "Get answers to your questions about visiting Marieta Eye Clinic.",
    url: "https://Marietaeye.com/faq",
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
          "text": "We are open Monday through Thursday from 8:00 AM to 5:00 PM, and Friday from 8:00 AM to 1:00 PM. We offer Saturday appointments by special request only. We are closed on Sundays."
        }
      },
      {
        "@type": "Question",
        "name": "Are you accepting new patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are currently accepting new patients for all our providers. You can schedule an appointment online or by calling our office."
        }
      },
      {
        "@type": "Question",
        "name": "Do you perform LASIK surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have fellowship-trained refractive surgeons who perform LASIK, PRK, and other vision correction procedures. We offer free consultations to determine if you are a good candidate."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        headline="Frequently Asked Questions" 
        subheadline="Find quick answers to common questions about our clinic, services, appointments, and billing."
      />
      
      <FaqList />
      
      <CTABanner />
    </div>
  );
}
