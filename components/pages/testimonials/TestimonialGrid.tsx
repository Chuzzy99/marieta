"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

const categories = ["All", "Eye Examinations", "Digital Eye Strain", "Glaucoma Care", "Pediatric Eye Care"];

export function TestimonialGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTestimonials = testimonials.filter(
    (t: Testimonial) => activeCategory === "All" || t.service === activeCategory
  );

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid */}
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
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex text-yellow-500">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current m-0.5" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                    
                    <blockquote className="flex-grow text-lg mb-8 text-foreground/80 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    
                    <div className="flex items-center mt-auto border-t border-border/50 pt-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mr-4 shrink-0">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.service}</div>
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
  );
}
