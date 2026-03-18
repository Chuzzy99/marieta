import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need my pupils dilated?",
    answer: "For most comprehensive eye exams and initial consultations, pupil dilation is highly recommended. It allows our doctors to see the back of your eye (the retina, macula, and optic nerve) to detect diseases early. The dilation drops usually last 3 to 4 hours and will make your eyes sensitive to light and blur your near vision."
  },
  {
    question: "How long will my appointment take?",
    answer: "A standard comprehensive eye exam usually takes about 45 minutes to an hour. If you require pupil dilation or specialized testing (like for glaucoma or surgical evaluations), your appointment may last between 1.5 to 2 hours. We value your time and strive to keep wait times to a minimum."
  },
  {
    question: "Should I bring a driver with me?",
    answer: "If you are having your pupils dilated, we strongly advise bringing someone to drive you home, as your vision will be blurry and sensitive to bright light. If you are undergoing a surgical procedure like LASIK or cataract surgery, a driver is mandatory."
  },
  {
    question: "Do you treat pediatric patients?",
    answer: "Yes, we provide specialized pediatric eye care. Our doctors are experienced in examining children of all ages, from infants to teenagers. Early eye exams are crucial for detecting developmental issues like amblyopia (lazy eye) or strabismus (crossed eyes) while they are still highly treatable."
  },
  {
    question: "What if I have an eye emergency after hours?",
    answer: "If you experience sudden vision loss, severe eye pain, flashes of light, or a chemical injury, this is considered a medical emergency. During business hours, call our clinic immediately. After hours, please go to the nearest emergency room or urgent care center."
  }
];

export function VisitFaq() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions About Your Visit
            </h2>
            <p className="text-lg text-muted-foreground">
              Review these frequently asked questions to help you prepare for your upcoming appointment.
            </p>
          </div>
          <Button variant="outline">
            <Link href="/faq" className="flex items-center">View All FAQs</Link>
          </Button>
        </div>

        <div className="max-w-3xl border border-border rounded-xl px-6 py-2 bg-muted/10">
          <Accordion defaultValue={["item-0"]}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
