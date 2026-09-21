import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AboutStory } from "@/components/pages/about/AboutStory";
import { TeamGrid } from "@/components/pages/about/TeamGrid";
import { ClinicStats } from "@/components/pages/about/ClinicStats";

export const metadata: Metadata = {
  title: "About Us | Marieta Eye Clinic",
  description: "Learn about Marieta Eye Clinic's mission and our dedication to premium eye care in Lagos, led by Dr. Marieta Onyia.",
  openGraph: {
    title: "About Marieta Eye Clinic | Premium Eye Care",
    description: "Discover our commitment to comprehensive eye care and meet our CEO, Dr. Marieta Onyia.",
    url: "https://marietaeyeclinic.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero 
        headline="Our vision for your eye health" 
        subheadline="Discover the story behind Marieta Eye Clinic and our unwavering commitment to protecting your sight at every stage of life."
        showContactCTA={false}
      />
      <AboutStory />
      <ClinicStats />
      <TeamGrid />
    </div>
  );
}
