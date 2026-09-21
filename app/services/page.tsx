import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services | Marieta Eye Clinic",
  description: "Comprehensive eye care services ranging from routine exams to advanced surgical procedures.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHero 
        headline="Comprehensive Eye Care Services" 
        subheadline="From routine eye exams to advanced glaucoma management, we offer a full spectrum of eye care services delivered with compassionate, personalized care."
      />
      
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="scroll-mt-32" id={service.slug}>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>
                
                <div className="bg-muted p-8 mt-2">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Key Benefits</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-muted-foreground text-sm">
                        <span className="text-primary font-bold mr-3">&mdash;</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Link 
                    href={`/book-appointment?service=${service.slug}`}
                    className="inline-block bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Book an appointment for {service.name.toLowerCase()}
                  </Link>
                </div>
              </div>
              
              {index < services.length - 1 && (
                <hr className="mt-24 border-border" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
