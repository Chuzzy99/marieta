import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { testimonials } from "@/lib/data/testimonials";

// Use first 3 testimonials for the preview to fit nicely in a grid
const previewTestimonials = testimonials.slice(0, 3);

export default function TestimonialsPreview() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Read about the experiences of our valued patients who have trusted us with their vision.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2">
            <div className="flex items-center text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="font-medium">4.9/5 from 500+ Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewTestimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-slate-200 hover:border-primary/20 transition-all duration-300 clinical-shadow bg-muted/5">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex text-yellow-500 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current m-0.5" />
                  ))}
                </div>
                <blockquote className="flex-grow text-lg mb-8 italic text-foreground/80">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center mt-auto border-t border-border/50 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.service}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/testimonials"
            className={cn(buttonVariants({ variant: "link" }), "text-lg")}
          >
            Read All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
