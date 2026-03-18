export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  rating: number;
  quote: string;
  service: string;
  serviceSlug: string;
  date: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emeka O.",
    initials: "EO",
    rating: 5,
    quote:
      "The comprehensive eye exam at Marieta Eye Clinic was incredibly thorough. Dr. Onyia took the time to explain everything clearly. Best equipment I've seen in Lagos!",
    service: "Eye Examinations",
    serviceSlug: "comprehensive-eye-exams",
    date: "January 2026",
    location: "Abule Egba, Lagos",
  },
  {
    id: "2",
    name: "Bukola A.",
    initials: "BA",
    rating: 5,
    quote:
      "As someone who works on computers all day, my eyes were always strained. Their Computer Vision Syndrome assessment and blue-light glasses changed my life. No more headaches!",
    service: "Digital Eye Strain",
    serviceSlug: "computer-vision-syndrome",
    date: "November 2025",
    location: "Ikeja, Lagos",
  },
  {
    id: "3",
    name: "Chidi N.",
    initials: "CN",
    rating: 5,
    quote:
      "I've been to many clinics for my glaucoma, but the management plan at Marieta is by far the most professional and personalized. I feel my sight is in safe hands.",
    service: "Glaucoma Care",
    serviceSlug: "glaucoma-management",
    date: "February 2026",
    location: "Agege, Lagos",
  },
  {
    id: "4",
    name: "Mariam S.",
    initials: "MS",
    rating: 5,
    quote:
      "The pediatric screening for my daughter was so gentle and professional. They made her feel at ease, and we caught her vision issue early. Highly recommend for families!",
    service: "Pediatric Eye Care",
    serviceSlug: "pediatric-eye-care",
    date: "December 2025",
    location: "Ogba, Lagos",
  },
  {
    id: "5",
    name: "Samuel K.",
    initials: "SK",
    rating: 5,
    quote:
      "Finally found a place with quality optical frames that actually last. The refraction was precise, and my new glasses are perfect. Great customer service!",
    service: "Refraction & Glasses",
    serviceSlug: "refraction-prescription",
    date: "March 2026",
    location: "Abule Egba, Lagos",
  },
  {
    id: "6",
    name: "Blessing U.",
    initials: "BU",
    rating: 5,
    quote:
      "Their contact lens fitting and aftercare is top-notch. They taught me exactly how to handle them safely. Very patient and knowledgeable staff.",
    service: "Contact Lenses",
    serviceSlug: "contact-lens-fitting",
    date: "October 2025",
    location: "Ipaja, Lagos",
  },
  {
    id: "7",
    name: "Adebayo T.",
    initials: "AT",
    rating: 5,
    quote:
      "I was impressed by their community outreach program at our church. Very thorough screenings and helpful advice for everyone. Truly a clinic that cares.",
    service: "Community Outreach",
    serviceSlug: "community-outreach",
    date: "January 2026",
    location: "Meiran, Lagos",
  },
  {
    id: "8",
    name: "Grace E.",
    initials: "GE",
    rating: 5,
    quote:
      "Excellent low vision assessment. They provided me with aids that have made reading so much easier again. Thank you Marieta Eye Clinic for the support.",
    service: "Low Vision",
    serviceSlug: "low-vision-assessment",
    date: "February 2026",
    location: "Ifako-Ijaiye, Lagos",
  },
  {
    id: "9",
    name: "Ibrahim M.",
    initials: "IM",
    rating: 5,
    quote:
      "Professional, clean, and efficient. I got my prescription and glasses all in one place. The frames selection is the best in the area.",
    service: "Quality Optical Sales",
    serviceSlug: "optical-sales",
    date: "December 2025",
    location: "Alagbado, Lagos",
  },
  {
    id: "10",
    name: "Ngozi J.",
    initials: "NJ",
    rating: 5,
    quote:
      "The emergency care I received for an eye infection was prompt and effective. They saw me right away and the treatment worked within days.",
    service: "Eye Examinations",
    serviceSlug: "comprehensive-eye-exams",
    date: "March 2026",
    location: "Abule Egba, Lagos",
  },
  {
    id: "11",
    name: "Tunde R.",
    initials: "TR",
    rating: 5,
    quote:
      "Brilliant service! The digital eye strain assessment really helped me understand why my eyes were always red after work. The new lenses are a game changer.",
    service: "Digital Eye Strain",
    serviceSlug: "computer-vision-syndrome",
    date: "November 2025",
    location: "Iyana-Ipaja, Lagos",
  },
  {
    id: "12",
    name: "Faith O.",
    initials: "FO",
    rating: 5,
    quote:
      "I've recommended Marieta Eye Clinic to all my colleagues. The clinical integrity and care they show to every patient is truly commendable.",
    service: "Eye Examinations",
    serviceSlug: "comprehensive-eye-exams",
    date: "January 2026",
    location: "Lekki, Lagos",
  },
  {
    id: "13",
    name: "Obi K.",
    initials: "OK",
    rating: 5,
    quote:
      "The cataract surgery was life-changing. I can see clearly again without glasses. The recovery was smooth and the staff was amazing throughout.",
    service: "Cataract Surgery",
    serviceSlug: "cataract-surgery",
    date: "February 2026",
    location: "Victoria Island, Lagos",
  },
  {
    id: "14",
    name: "Amina Y.",
    initials: "AY",
    rating: 5,
    quote:
      "As a diabetic, I need regular eye screenings. Marieta Eye Clinic provides comprehensive care that monitors my eye health closely.",
    service: "Diabetic Eye Care",
    serviceSlug: "diabetic-eye-care",
    date: "January 2026",
    location: "Surulere, Lagos",
  },
  {
    id: "15",
    name: "Chukwuemeka I.",
    initials: "CI",
    rating: 5,
    quote:
      "The LASIK consultation was thorough and professional. They explained everything clearly and I felt confident going into surgery. Best decision ever!",
    service: "LASIK Consultation",
    serviceSlug: "lasik-consultation",
    date: "December 2025",
    location: "Ikoyi, Lagos",
  },
  {
    id: "16",
    name: "Rashida A.",
    initials: "RA",
    rating: 5,
    quote:
      "My son has ADHD and needed special attention during his eye exam. The staff was incredibly patient and made him feel comfortable throughout.",
    service: "Pediatric Eye Care",
    serviceSlug: "pediatric-eye-care",
    date: "November 2025",
    location: "Ajah, Lagos",
  },
  {
    id: "17",
    name: "Kunle O.",
    initials: "KO",
    rating: 5,
    quote:
      "The retinal screening was comprehensive. They detected early signs of issues I wasn't aware of. Preventive care at its best!",
    service: "Retinal Screening",
    serviceSlug: "retinal-screening",
    date: "February 2026",
    location: "Ikoyi, Lagos",
  },
  {
    id: "18",
    name: "Fatima B.",
    initials: "FB",
    rating: 5,
    quote:
      "The dry eye treatment worked wonders. The diagnostic tests were thorough and the treatment plan was effective. No more constant discomfort!",
    service: "Dry Eye Treatment",
    serviceSlug: "dry-eye-treatment",
    date: "January 2026",
    location: "Yaba, Lagos",
  },
  {
    id: "19",
    name: "Umar S.",
    initials: "US",
    rating: 5,
    quote:
      "The emergency eye care was exceptional. They handled my eye injury with expertise and urgency. Truly saved my vision!",
    service: "Emergency Eye Care",
    serviceSlug: "emergency-eye-care",
    date: "December 2025",
    location: "Lagos Island, Lagos",
  },
  {
    id: "20",
    name: "Chinwe I.",
    initials: "CI",
    rating: 5,
    quote:
      "The corneal topography mapping was detailed and precise. They explained my condition clearly and provided the best treatment options.",
    service: "Corneal Topography",
    serviceSlug: "corneal-topography",
    date: "November 2025",
    location: "Apapa, Lagos",
  },
  {
    id: "21",
    name: "Halima U.",
    initials: "HU",
    rating: 5,
    quote:
      "The vision therapy for my child was amazing. The exercises were fun and effective. We've seen remarkable improvement in just months!",
    service: "Vision Therapy",
    serviceSlug: "vision-therapy",
    date: "February 2026",
    location: "Ikeja, Lagos",
  },
  {
    id: "22",
    name: "Azeezat M.",
    initials: "AM",
    rating: 5,
    quote:
      "The optical coherence tomography was advanced and painless. They detected issues other clinics missed. Truly cutting-edge technology!",
    service: "Advanced Imaging",
    serviceSlug: "advanced-imaging",
    date: "January 2026",
    location: "Victoria Island, Lagos",
  },
  {
    id: "23",
    name: "Suleiman A.",
    initials: "SA",
    rating: 5,
    quote:
      "The neuro-ophthalmology consultation was thorough. They took time to understand my complex condition and provided a clear treatment plan.",
    service: "Neuro-Ophthalmology",
    serviceSlug: "neuro-ophthalmology",
    date: "December 2025",
    location: "Ikoyi, Lagos",
  },
  {
    id: "24",
    name: "Khadija P.",
    initials: "KP",
    rating: 5,
    quote:
      "The pediatric strabismus treatment was successful. My child's eyes are now aligned properly. The team was so caring throughout the process.",
    service: "Pediatric Eye Care",
    serviceSlug: "pediatric-eye-care",
    date: "November 2025",
    location: "Surulere, Lagos",
  },
  {
    id: "25",
    name: "Abdullahi I.",
    initials: "AI",
    rating: 5,
    quote:
      "The glaucoma laser treatment was minimally invasive and effective. My eye pressure is now well controlled. Excellent medical care!",
    service: "Glaucoma Care",
    serviceSlug: "glaucoma-management",
    date: "February 2026",
    location: "Agege, Lagos",
  },
  {
    id: "26",
    name: "Zainab O.",
    initials: "ZO",
    rating: 5,
    quote:
      "The contact lens fitting for my astigmatism was perfect. I can wear lenses comfortably all day now. Life-changing experience!",
    service: "Contact Lenses",
    serviceSlug: "contact-lens-fitting",
    date: "January 2026",
    location: "Lekki, Lagos",
  },
  {
    id: "27",
    name: "Yusuf A.",
    initials: "YA",
    rating: 5,
    quote:
      "The comprehensive diabetic eye screening was thorough. They caught early changes and provided proactive care. Truly professional!",
    service: "Diabetic Eye Care",
    serviceSlug: "diabetic-eye-care",
    date: "December 2025",
    location: "Ikeja, Lagos",
  },
  {
    id: "28",
    name: "Aisha R.",
    initials: "AR",
    rating: 5,
    quote:
      "The pterygium surgery was successful. The recovery was quick and the follow-up care was excellent. Highly recommend!",
    service: "Corneal Surgery",
    serviceSlug: "corneal-surgery",
    date: "November 2025",
    location: "Apapa, Lagos",
  },
  {
    id: "29",
    name: "Bashir M.",
    initials: "BM",
    rating: 5,
    quote:
      "The ocular prosthetics fitting restored my confidence. The artificial eye looks natural and functions perfectly. Amazing craftsmanship!",
    service: "Ocular Prosthetics",
    serviceSlug: "ocular-prosthetics",
    date: "February 2026",
    location: "Victoria Island, Lagos",
  },
  {
    id: "30",
    name: "Hauwa L.",
    initials: "HL",
    rating: 5,
    quote:
      "The uveitis treatment was effective and timely. They managed my inflammation well and prevented complications. Excellent specialist care!",
    service: "Uveitis Treatment",
    serviceSlug: "uveitis-treatment",
    date: "January 2026",
    location: "Ikoyi, Lagos",
  }
];
