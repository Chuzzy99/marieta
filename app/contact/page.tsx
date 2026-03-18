import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/pages/contact/ContactForm";
import { ContactInfo } from "@/components/pages/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Marieta Eye Clinic",
  description: "Get in touch with Marieta Eye Clinic. View our hours of operation, location, phone number, and send us a message online.",
  openGraph: {
    title: "Contact Marieta Eye Clinic | Schedule an Appointment",
    description: "Find answers to common questions about appointments, procedures like LASIK and cataract surgery, and general eye care.",
    url: "https://Marietaeye.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        headline="We're Here to Help" 
        subheadline="Whether you need to schedule an appointment, ask about our services, or request medical records, our team is ready to assist you."
      />
      
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="order-2 lg:order-1">
               <ContactForm />
            </div>
            
            <div className="order-1 lg:order-2">
               <ContactInfo />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
