"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const categories = ["All", "General", "Services", "Payment", "Appointments", "Emergency"];

const faqs = [
  // General
  {
    category: "General",
    question: "What are your hours of operation?",
    answer: "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays."
  },
  {
    category: "General",
    question: "Are you accepting new patients?",
    answer: "Yes, we are always accepting new patients. You can walk in during our operating hours, or book ahead on WhatsApp to reduce your wait time."
  },
  {
    category: "General",
    question: "Where exactly are you located?",
    answer: "You can find our exact location and directions on the Contact page."
  },
  
  // Services
  {
    category: "Services",
    question: "Do you treat Glaucoma?",
    answer: "Yes, we specialize in comprehensive glaucoma assessment and management. Dr. Onyia and our team use advanced diagnostic tools to monitor and treat glaucoma, helping preserve your vision."
  },
  {
    category: "Services",
    question: "Do you treat children?",
    answer: "Yes, we offer specialized pediatric eye care and vision screenings. We have a friendly environment to ensure children feel comfortable during their tests."
  },
  {
    category: "Services",
    question: "Can I get my glasses at your clinic?",
    answer: "Absolutely. We have a dedicated optical section with a wide selection of durable and stylish frames, plus premium lenses suited to your prescription."
  },
  
  // Payment
  {
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash and direct bank transfers. We do not accept credit cards online at this time. A registration fee is required before your consultation begins."
  },
  
  // Appointments
  {
    category: "Appointments",
    question: "How long does a routine eye exam take?",
    answer: "A standard comprehensive eye exam typically takes 45 to 60 minutes, depending on the specific tests you need."
  },
  {
    category: "Appointments",
    question: "What should I bring to my appointment?",
    answer: "Please bring any current glasses or contact lenses you use, and a list of any medications you are taking. Previous eye records are also helpful if you have them."
  },
  
  // Emergency
  {
    category: "Emergency",
    question: "What should I do if I have an eye emergency?",
    answer: "Sudden vision loss, severe eye pain, chemical exposure, or a foreign object in the eye require immediate attention. If this happens during our working hours, come straight to the clinic or call us immediately on +234 803 306 7153."
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
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search and Filters */}
        <div className="mb-16 space-y-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for questions..." 
              className="w-full pl-12 pr-4 py-4 bg-muted border border-border text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-semibold transition-colors border-b-2 ${
                  activeCategory === category 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="border-t border-border">
            <Accordion defaultValue={["item-0"]}>
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-heading text-xl md:text-2xl font-bold hover:text-primary transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="text-center py-20 bg-muted border border-border">
            <p className="text-lg text-muted-foreground mb-4">No questions found matching your search.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="text-primary font-semibold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
