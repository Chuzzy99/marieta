import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    "eye clinic Lagos",
    "eye care Nigeria",
    "eye exams Abule-Egba",
    "pediatric eye care",
    "glaucoma assessment",
    "quality optical sales",
    "optometrist Lagos",
    "Marieta Eye Clinic",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable} overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Marieta Eye Clinic",
              "description": "Your trusted eye clinic in Lagos",
              "url": "https://marietaeyeclinic.com",
              "telephone": "+2348033067153",
              "email": "ijeamakamariagoretti@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "378 Abeokuta Express Road, Abule Egba",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos",
                "addressCountry": "NG"
              },
              "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
              "paymentAccepted": "Cash, Card, Transfer",
              "priceRange": "$"
            }`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md shadow-lg outline-none ring-2 ring-primary ring-offset-2">
          Skip to content
        </a>
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
