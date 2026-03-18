"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "General", "Services", "Payment", "Appointments", "Emergency"];

const faqs = [
  // General
  {
    category: "General",
    question: "What are your hours of operation?",
    answer: "We are open Monday through Thursday from 8:00 AM to 5:00 PM, and Friday from 8:00 AM to 1:00 PM. We offer Saturday appointments by special request only. We are closed on Sundays."
  },
  {
    category: "General",
    question: "Are you accepting new patients?",
    answer: "Yes, we are currently accepting new patients for all our providers. You can schedule an appointment online or by calling our office."
  },
  {
    category: "General",
    question: "Where are you located?",
    answer: "Our clinic is located at 378 Abeokuta Exp Road, Abule Egba, Lagos, Nigeria. We are easily accessible and located in a secure environment."
  },
  
  // Services
  {
    category: "Services",
    question: "Do you treat Glaucoma?",
    answer: "Yes, we specialize in advanced glaucoma assessment and management. Dr. Onyia and our clinical team use state-of-the-art diagnostic tools to monitor and treat glaucoma to preserve your vision."
  },
  {
    category: "Services",
    question: "Do you treat children?",
    answer: "Yes, we offer specialized children's vision screening and pediatric eye care. It is important to catch vision issues early in a child's development."
  },
  {
    category: "Services",
    question: "Can I get my glasses and contacts at your clinic?",
    answer: "Absolutely. We have a quality optical sales department with a wide selection of designer frames and premium lenses. We also provide professional contact lens fitting and aftercare."
  },
  
  // Payment
  {
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfers, and all major credit cards including Visa, Mastercard, and American Express. Payment is required at the time of service."
  },
  {
    category: "Payment",
    question: "Do you offer payment plans?",
    answer: "We offer transparent pricing with flexible payment options. Please speak with our staff about payment arrangements for larger procedures."
  },
  
  // Appointments
  {
    category: "Appointments",
    question: "How long does a routine eye exam take?",
    answer: "A standard comprehensive eye exam typically takes 45 to 60 minutes. If your eyes are dilated, the appointment may take up to 90 minutes."
  },
  {
    category: "Appointments",
    question: "Do I need to be dilated?",
    answer: "Dilation is highly recommended for all new patients and annually for most returning patients. It allows our doctors to thoroughly examine the inside of your eye for signs of disease."
  },
  {
    category: "Appointments",
    question: "What should I bring to my appointment?",
    answer: "Please bring your photo ID, your current glasses or contact lens boxes, and a list of any medications you are taking."
  },
  
  // Emergency
  {
    category: "Emergency",
    question: "What constitutes an eye emergency?",
    answer: "Sudden vision loss, severe eye pain, flashes of light, new or worsening floaters, chemical exposure, or a foreign object in the eye are all emergencies requiring immediate attention."
  },
  {
    category: "Emergency",
    question: "What should I do if I have an eye emergency after hours?",
    answer: "If you experience a medical emergency after our regular business hours, please go to the nearest emergency room or urgent care center immediately."
  },
  {
    category: "Emergency",
    question: "Do you take walk-in emergencies?",
    answer: "During normal business hours, we do our best to accommodate urgent eye problems the same day. However, we strongly recommend calling ahead so we can prepare for your arrival."
  }
];

export function FaqList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Search for questions..." 
              className="pl-10 h-12 rounded-full bg-muted/50 border-transparent focus-visible:bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-6 text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-muted/10 shadow-sm">
            <Accordion defaultValue={["item-0"]}>
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
            <p className="text-lg text-muted-foreground mb-4">No questions found matching your search.</p>
            <Button variant="link" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Clear Search
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
