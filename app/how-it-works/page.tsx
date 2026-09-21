import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { PatientJourney } from "@/components/pages/how-it-works/PatientJourney";
import { PrepAndPayment } from "@/components/pages/how-it-works/PrepAndPayment";

export const metadata: Metadata = {
  title: "How It Works | Marieta Eye Clinic",
  description: "Learn what to expect during your visit to Marieta Eye Clinic. Understand our patient journey and what to bring for your appointment.",
  openGraph: {
    title: "Your Visit to Marieta Eye Clinic | What to Expect",
    description: "Prepare for your eye appointment. Review our patient journey and what to bring.",
    url: "https://marietaeyeclinic.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHero 
        headline="What to Expect from Your Visit" 
        subheadline="We strive to make every step of your eye care journey as straightforward and comfortable as possible. Here is a guide to how we work at Marieta Eye Clinic."
      />
      
      <PatientJourney />
      
      <PrepAndPayment />
      
    </div>
  );
}
