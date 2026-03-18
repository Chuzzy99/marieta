import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// import { ChatbotWidget } from "@/components/shared/ChatbotWidget";
import { SITE_CONFIG } from "@/lib/constants";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import WebVitals from "@/components/performance/WebVitals";

const inter = Inter({
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
    <html lang="en" className={inter.variable}>
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
              "url": "https://yourdomain.com",
              "telephone": "+234XXXXXXXXXX",
              "email": "info@yourdomain.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C/O Pharmacy & Drug Cabinet, Abule-Egba Bus Stop",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md shadow-lg outline-none ring-2 ring-primary ring-offset-2">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        {/* <ChatbotWidget /> */}
        {/* <Suspense fallback={null}>
          <AnalyticsProvider />
          <WebVitals />
        </Suspense> */}
      </body>
    </html>
  );
}
