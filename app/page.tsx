import type { Metadata } from "next";
import HeroSection from "@/components/pages/home/HeroSection";
import ServicesGrid from "@/components/pages/home/ServicesGrid";
import HowItWorksPreview from "@/components/pages/home/HowItWorksPreview";
import TrustBadges from "@/components/shared/TrustBadges";
import CTABanner from "@/components/shared/CTABanner";
import NewsletterSection from "@/components/shared/NewsletterSection";

export const metadata: Metadata = {
  title: "Expert Eye Care in Lagos | Marieta Eye Clinic",
  description:
    "Marieta Eye Clinic offers comprehensive eye examinations, children's vision screening, glaucoma assessment, and quality optical services in Lagos. Trusted by thousands. Book your appointment today.",
  openGraph: {
    title: "Expert Eye Care in Lagos | Marieta Eye Clinic",
    description:
      "Comprehensive eye care for every stage of life in Abule-Egba, Lagos. Book your appointment today.",
    url: "https://marietaeyeclinic.com",
    images: [
      {
        url: "https://marietaeyeclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marieta Eye Clinic - Expert Eye Care",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustBadges />
      <ServicesGrid />
      <HowItWorksPreview />
      <NewsletterSection />
      <CTABanner />

    </div>
  );
}
