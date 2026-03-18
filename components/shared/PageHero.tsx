// PageHero.tsx

import { buttonVariants } from "@/components/ui/button-variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  headline: string;
  subheadline?: string;
  imagePath?: string;
  showContactCTA?: boolean;
}

export function PageHero({ headline, subheadline, showContactCTA = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-slate-200">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl">
              {subheadline}
            </p>
          )}
          {showContactCTA && (
            <Link href="/contact">
              <Button size="lg" className={buttonVariants({ size: "lg", className: "text-lg px-8 font-bold" })}>
                 Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      {/* Clean structural background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
    </section>
  );
}
