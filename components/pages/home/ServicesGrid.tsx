// ServicesGrid.tsx

import Link from "next/link";
import { services } from "@/lib/data/services";
import { CheckCircle2, Eye, Monitor, Glasses, Shield, Baby, Disc } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServicesGrid() {

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mt-4">
              From routine exams to aftercare surgery procedures, we provide expert care for every stage of your vision journey.
            </p>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service) => {
            const iconMap: Record<string, React.ElementType> = {
              "Eye": Eye,
              "Monitor": Monitor,
              "Glasses": Glasses,
              "Shield": Shield,
              "Baby": Baby,
              "Disc": Disc,
            };
            const Icon = iconMap[service.icon] || Eye;
            return (
              <div 
                key={service.id} 
              >
                <Card className="h-full flex flex-col group border-slate-200 hover:border-primary/30 transition-all duration-300 clinical-shadow hover:shadow-md bg-white">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {service.shortDescription}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div 
          className="flex justify-center mt-16"
        >
          <Link 
            href="/services" 
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8")}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
