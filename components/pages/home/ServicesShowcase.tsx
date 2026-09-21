import Link from "next/link";
import { services } from "@/lib/data/services";

const featured = [
  {
    slug: "comprehensive-eye-exams",
    photo: "/images/office.jpg",
    photoAlt: "Patient receiving a comprehensive eye examination",
  },
  {
    slug: "glaucoma-management",
    photo: "/images/office.jpg",
    photoAlt: "Glaucoma screening equipment at Marieta Eye Clinic",
  },
  {
    slug: "pediatric-eye-care",
    photo: "/images/office.jpg",
    photoAlt: "Child during a friendly paediatric eye screening",
  },
];

export default function ServicesShowcase() {
  const featuredServices = featured
    .map((f) => {
      const svc = services.find((s) => s.slug === f.slug);
      return svc ? { ...svc, photo: f.photo, photoAlt: f.photoAlt } : null;
    })
    .filter(Boolean) as (typeof services[number] & { photo: string; photoAlt: string })[];

  const remaining = services.filter(
    (s) => !featured.some((f) => f.slug === s.slug)
  );

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Section header — left-aligned, not centered */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What we do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From routine check-ups to managing complex conditions, here is how we look after your eyes.
          </p>
        </div>

        {/* Featured services — alternating layout */}
        <div className="space-y-20">
          {featuredServices.map((svc, i) => (
            <div
              key={svc.id}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-14 items-center`}
            >
              {/* Photo side */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[280px] md:h-[340px] bg-muted">
                  <img
                    src={svc.photo}
                    alt={svc.photoAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {svc.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {svc.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {svc.benefits.slice(0, 3).map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">&mdash;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-block text-sm font-semibold text-primary hover:underline mt-2"
                >
                  Learn more about {svc.name.toLowerCase()} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining services — simple list, not icon grid */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">
            We also offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {remaining.map((svc) => (
              <Link
                key={svc.id}
                href={`/services/${svc.slug}`}
                className="group flex items-baseline gap-2 py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <span className="text-primary font-bold">&bull;</span>
                <span className="font-medium group-hover:underline">{svc.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Simple CTA */}
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block border-2 border-foreground text-foreground px-6 py-3 font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            View all our services
          </Link>
        </div>
      </div>
    </section>
  );
}
