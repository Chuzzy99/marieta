"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

const categories = ["All", "Eye Examinations", "Digital Eye Strain", "Glaucoma Care", "Pediatric Eye Care", "Cataract Surgery", "Contact Lenses", "LASIK", "Diabetic Eye Care", "Emergency Care"];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTestimonials = testimonials.filter(
    (t: Testimonial) => activeCategory === "All" || t.service === activeCategory
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 pt-32 pb-12 lg:pt-48 lg:pb-16 border-b border-border">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Patient Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Discover why thousands of patients across Nigeria trust Marieta Eye Clinic with their vision and eye health.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="flex items-center px-4 py-2 rounded-full bg-background border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2" /> 500+ Reviews
            </span>
            <span className="flex items-center px-4 py-2 rounded-full bg-background border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2" /> 4.9/5 Rating
            </span>
            <span className="flex items-center px-4 py-2 rounded-full bg-background border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" /> 30+ Testimonials
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-3"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredTestimonials.map((testimonial: Testimonial) => (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-border/50 hover:shadow-md transition-shadow bg-white">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex text-yellow-500">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current m-0.5" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                      </div>
                      
                      <blockquote className="flex-grow text-lg mb-8 italic text-foreground/80 leading-relaxed">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      
                      <div className="flex items-center mt-auto border-t border-border/50 pt-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mr-4">
                          {testimonial.initials}
                        </div>
                        <div>
                          <div className="font-bold text-foreground">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.service}</div>
                          {testimonial.location && (
                            <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join our family of satisfied patients. Experience the exceptional eye care that has made us a trusted name across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Book Your Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
                Leave a Review
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      </section>
    </div>
  );
}
