import type { Metadata } from "next";
import HeroSection from "@/components/pages/home/HeroSection";
import ServicesShowcase from "@/components/pages/home/ServicesShowcase";
import VisitPreview from "@/components/pages/home/VisitPreview";
import VisitUs from "@/components/pages/home/VisitUs";

export const metadata: Metadata = {
  title: "Marieta Eye Clinic | Comprehensive Eye Care in Lagos",
  description:
    "Marieta Eye Clinic offers comprehensive eye examinations, children's vision screening, glaucoma assessment, and premium optical services in Lagos.",
  openGraph: {
    title: "Marieta Eye Clinic | Comprehensive Eye Care",
    description:
      "Expert eye care for the whole family. Walk in or book ahead for comprehensive vision health services.",
    url: "https://marietaeyeclinic.com",
    images: [
      {
        url: "https://marietaeyeclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marieta Eye Clinic - Comprehensive Eye Care",
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
