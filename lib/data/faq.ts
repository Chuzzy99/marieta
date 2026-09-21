export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "LASIK" | "Appointments" | "Procedures";
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How often should I have a comprehensive eye exam?",
    answer:
      "Adults with no vision problems or risk factors should have a comprehensive eye exam every 1–2 years. Adults over 60 should be seen annually. People with diabetes, glaucoma, or other risk factors may need more frequent exams — your doctor will advise on the right schedule for you.",
    category: "General",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, and all major credit cards including Visa, Mastercard, and American Express. Payment is required at the time of service, and our staff will provide you with a detailed cost breakdown before any procedures.",
    category: "General",
  },
  {
    id: "3",
    question: "Am I a good candidate for LASIK?",
    answer:
      "LASIK is suitable for most adults over 18 with a stable prescription for at least one year, adequate corneal thickness, and no significant eye conditions. Factors that may disqualify you include severe dry eyes, very thin corneas, certain corneal conditions (like keratoconus), or pregnancy. The best way to find out is a free LASIK consultation, which includes corneal mapping and a thorough evaluation.",
    category: "LASIK",
  },
  {
    id: "4",
    question: "How do I schedule an appointment?",
    answer:
      "You can book an appointment through our website using the Book Appointment page, which connects you directly to the doctor via WhatsApp. You can also call us at +234 803 306 7153 or email ijeamakamariagoretti@gmail.com. We offer morning, afternoon, and evening slots on weekdays and morning slots on Saturdays.",
    category: "Appointments",
  },
  {
    id: "5",
    question: "What should I bring to my first appointment?",
    answer:
      "For your first visit, please bring: a valid photo ID, a list of current medications (including eye drops), your current glasses or contact lenses (and if possible, their prescription), and any records of previous eye conditions or surgeries if applicable. Arrive 15 minutes early to complete your new patient paperwork.",
    category: "Appointments",
  },
  {
    id: "6",
    question: "How long does cataract surgery take and when will I see results?",
    answer:
      "The procedure itself takes about 10–15 minutes per eye. Most patients notice improved vision within 24 hours, with vision continuing to stabilize over 2–4 weeks. We typically perform one eye at a time, with the second eye scheduled 1–2 weeks later. Most patients return to light daily activities within a few days.",
    category: "Procedures",
  },
  {
    id: "7",
    question: "Does LASIK hurt?",
    answer:
      "LASIK is virtually painless. The eye is numbed with anesthetic drops before the procedure. You may feel a brief pressure sensation during the creation of the flap, but most patients report no real pain. After the procedure, you may experience mild discomfort, light sensitivity, or a gritty sensation for a few hours, which usually resolves by the next day.",
    category: "LASIK",
  },
  {
    id: "8",
    question: "Can children wear contact lenses?",
    answer:
      "There is no specific minimum age for contact lenses; it depends on the child's maturity, motivation, and ability to care for lenses responsibly. Many children start wearing contacts at 12–14. Daily disposable lenses are an excellent option for kids and teens since there's no cleaning involved. We'll evaluate your child's suitability at their exam.",
    category: "General",
  },
  {
    id: "optometrist-vs-optician",
    question: "What is the difference between an optometrist and an optician?",
    answer:
      "Optometrists (OD) are primary eye care providers who examine, diagnose, and treat vision problems and many eye conditions. They prescribe glasses and contacts. Opticians are technicians trained to design, verify, and fit eyeglass lenses and frames, contact lenses, and other devices to correct eyesight. They use prescriptions supplied by optometrists.",
    category: "General",
  },
  {
    id: "10",
    question: "How much does an eye exam cost?",
    answer:
      "Our comprehensive eye exams are competitively priced and include a thorough vision assessment, eye health screening, and consultation. The exact cost depends on the specific tests needed, but we provide transparent pricing with no hidden fees. Contact us for current pricing and package options.",
    category: "General",
  },
  {
    id: "11",
    question: "What is LASIK recovery like?",
    answer:
      "Most patients return to normal activities within 24–48 hours. Your vision may fluctuate slightly for the first few weeks as the cornea heals. You'll use antibiotic and anti-inflammatory eye drops for about a week. Key restrictions include: no rubbing your eyes for 4 weeks, no swimming for 2 weeks, and wearing UV-protective sunglasses outdoors. A follow-up exam the day after surgery confirms your initial healing.",
    category: "LASIK",
  },
  {
    id: "12",
    question: "Do you offer emergency eye care?",
    answer:
      "Yes, we offer same-day urgent eye care for emergencies. If you experience sudden vision loss, eye injury, severe eye pain, sudden onset of many floaters or flashes, or a foreign object in your eye, call us immediately at (555) 123-4567. We'll prioritize your appointment. For life-threatening emergencies or chemical exposures, go to an emergency room immediately and flush the eye with clean water.",
    category: "Appointments",
  },
  {
    id: "13",
    question: "How long does a comprehensive eye exam take?",
    answer:
      "A comprehensive adult eye exam typically takes 60–90 minutes including all testing, dilation (which requires 20–30 minutes of wait time after the dilating drops are applied), and your time with the doctor. We recommend planning for 1.5–2 hours for your first visit. Pediatric exams are typically 45–60 minutes without dilation or up to 90 minutes with.",
    category: "Appointments",
  },
  {
    id: "14",
    question: "What are the risks of LASIK?",
    answer:
      "LASIK is one of the safest elective procedures available, with a complication rate below 1%. Potential risks include temporary dry eyes (very common, usually resolves in months), halos or glare around lights at night (usually temporary), under- or over-correction that may require an enhancement, and very rarely, flap complications. We screen each patient carefully to minimize risks.",
    category: "LASIK",
  },
  {
    id: "15",
    question: "Can I drive after my eye exam?",
    answer:
      "If your eyes are dilated as part of the exam, you should not drive for 4–6 hours until the dilation wears off. Your vision will be blurry and sensitive to light during this time. We recommend arranging a ride home if you know your eyes will be dilated, or using sunglasses and sitting in the back of a rideshare if necessary.",
    category: "Appointments",
  },
];
