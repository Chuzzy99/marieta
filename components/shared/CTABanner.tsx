// CTABanner.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline = "Ready to See Clearly?",
  subheadline = "Schedule your comprehensive eye exam today. Affordable payment options available.",
  ctaLabel = "Book Your Appointment",
  ctaHref = "/book-appointment",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section
      className="bg-primary py-20 px-4 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white translate-y-1/2 -translate-x-1/2" />
      </div>

      <div
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          {headline}
        </h2>
        <p
          className="text-white/85 text-lg mb-8 max-w-2xl mx-auto"
        >
          {subheadline}
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href={ctaHref}
            id="cta-book-btn"
            className={buttonVariants({ variant: "ghost", size: "lg", className: "bg-white text-primary hover:bg-white/90 font-bold text-base px-8 shadow-lg" })}
          >
            {ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link 
              href={secondaryHref}
              className={buttonVariants({ variant: "outline", size: "lg", className: "border-white text-white hover:bg-white/10 font-semibold text-base px-8" })}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
