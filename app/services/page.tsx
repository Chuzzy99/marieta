import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { services } from "@/lib/data/services";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, HeartPulse, Eye, Monitor, Glasses, Shield, Baby, Disc, Search, ShoppingBag, Users, Droplets, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Marieta Eye Clinic",
  description: "Comprehensive eye care services ranging from routine exams to advanced surgical procedures.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        headline="Comprehensive Eye Care Services" 
        subheadline="From routine eye exams to advanced surgical procedures, we offer a full spectrum of eye care services delivered with compassionate, personalized care."
      />
      
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service) => {
              const iconMap: Record<string, React.ElementType> = {
                "Eye": Eye, "Monitor": Monitor, "Glasses": Glasses, "Shield": Shield,
                "Baby": Baby, "Disc": Disc, "Search": Search, "ShoppingBag": ShoppingBag,
                "Users": Users, "Droplets": Droplets, "AlertTriangle": AlertTriangle, "HeartPulse": HeartPulse
              };
              const Icon = iconMap[service.icon] || HeartPulse;
              
              return (
                <Card key={service.id} className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl">{service.name}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground mt-2">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-foreground uppercase tracking-wider">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 4).map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mr-2 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                    <Link 
                      href={`/book-appointment?service=${service.slug}`}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto flex-1"
                    >
                      Book Appointment
                    </Link>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto flex-1"
                    >
                      Learn More
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
