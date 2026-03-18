import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { faqItems } from "@/lib/data/faq";
import CTABanner from "@/components/shared/CTABanner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Marrieta Eye Clinic`,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // @ts-expect-error - Dynamic icon access
  const Icon = LucideIcons[service.icon] || LucideIcons.Stethoscope;

  // Mocking what to expect based on duration and recovery
  const steps = [
    {
      title: "Consultation & Exam",
      description: "A thorough evaluation of your eye health and discussion of your symptoms and history.",
    },
    {
      title: "Treatment / Procedure",
      description: `Targeted care specific to your needs. This usually takes about ${service.duration}.`,
    },
    {
      title: "Recovery & Follow-up",
      description: `We'll provide detailed aftercare instructions. Expected recovery: ${service.recovery}.`,
    },
  ];

  // Specific FAQs (or general fallback)
  const serviceFaqs = faqItems
    .filter((faq) => faq.answer.toLowerCase().includes(service.name.toLowerCase().split(' ')[0]) || faq.question.toLowerCase().includes(service.name.toLowerCase().split(' ')[0]))
    .slice(0, 4);
    
  // If not enough specific FAQs found, fallback to general ones
  const displayFaqs = serviceFaqs.length >= 2 
    ? serviceFaqs 
    : [...serviceFaqs, ...faqItems.filter(f => f.category === "General" || f.category === "Procedures").slice(0, 4 - serviceFaqs.length)];

  // Related services (pick 3 other random services)
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.name,
    "description": service.shortDescription,
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Marrieta Eye Clinic",
      "url": "https://marrietaeye.com"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Service Hero */}
      <section className="relative overflow-hidden bg-primary/5 pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-border">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link 
                href={`/book-appointment?service=${service.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
              >
                Book for This Service <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      </section>

      {/* What Is It & Who Is It For */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>{service.description}</p>
                  <p className="mt-4">{service.longDescription}</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold mb-4">Who Is It For?</h3>
                <p className="text-muted-foreground">{service.candidates}</p>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold mb-4">Duration & Recovery</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold">Duration:</span>
                    <span className="text-muted-foreground">{service.duration}</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold">Recovery:</span>
                    <span className="text-muted-foreground">{service.recovery}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of {service.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start bg-background p-6 rounded-xl border shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-0.5" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl max-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What to Expect</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border bg-card shadow-sm">
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion className="w-full bg-background rounded-2xl border px-6">
            {displayFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left py-6 text-lg hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Other Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our other comprehensive eye care services designed for your specialized needs.
              </p>
            </div>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => {
              // @ts-expect-error - Dynamic icon access
              const RelIcon = LucideIcons[relatedService.icon] || LucideIcons.HeartPulse;
              return (
                <Card key={relatedService.id} className="h-full flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mb-4 text-primary">
                      <RelIcon className="w-5 h-5" />
                    </div>
                    <CardTitle>{relatedService.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {relatedService.shortDescription}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      href={`/services/${relatedService.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline text-sm"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
