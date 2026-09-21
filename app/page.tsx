import type { Metadata } from "next";
import HeroSection from "@/components/pages/home/HeroSection";
import ServicesShowcase from "@/components/pages/home/ServicesShowcase";
import VisitPreview from "@/components/pages/home/VisitPreview";
import VisitUs from "@/components/pages/home/VisitUs";

export const metadata: Metadata = {
  title: "Marieta Eye Clinic | Eye Care in Abule Egba, Lagos",
  description:
    "Marieta Eye Clinic offers comprehensive eye examinations, children's vision screening, glaucoma assessment, and quality optical services on the Abeokuta Expressway, Abule Egba, Lagos.",
  openGraph: {
    title: "Marieta Eye Clinic | Eye Care in Abule Egba, Lagos",
    description:
      "Your family eye clinic in Abule Egba, Lagos. Walk in or book ahead for comprehensive eye care.",
    url: "https://marietaeyeclinic.com",
    images: [
      {
        url: "https://marietaeyeclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marieta Eye Clinic - Eye Care in Abule Egba, Lagos",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesShowcase />
      <VisitPreview />
      <VisitUs />
    </div>
  );
}
