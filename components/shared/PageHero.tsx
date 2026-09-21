import Link from "next/link";

interface PageHeroProps {
  headline: string;
  subheadline?: string;
  imagePath?: string;
  showContactCTA?: boolean;
}

export function PageHero({ headline, subheadline, showContactCTA = false }: PageHeroProps) {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {subheadline}
            </p>
          )}
          {showContactCTA && (
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-appointment"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Book Appointment
              </Link>
              <a
                href="https://wa.me/2348033067153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#25D366] text-[#25D366] px-6 py-3 font-semibold hover:bg-[#25D366] hover:text-white transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
