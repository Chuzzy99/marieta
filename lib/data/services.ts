export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  recovery: string;
  candidates: string;
}

export const services: Service[] = [
  {
    id: "comprehensive-eye-exams",
    name: "Comprehensive Eye Examination",
    slug: "comprehensive-eye-exams",
    icon: "Eye",
    shortDescription: "Complete vision assessment and eye health evaluations.",
    description:
      "Our comprehensive eye examinations involve a thorough assessment of your visual acuity and a detailed evaluation of your overall eye health using advanced diagnostic tools.",
    longDescription:
      "A comprehensive eye exam at Marieta Eye Clinic includes a full range of tests to evaluate both your vision and the health of your eyes. We check for refractive errors, glaucoma, cataracts, macular degeneration, and other potentially sight-threatening conditions. Our goal is to detect issues early and provide personalized care for every patient.",
    benefits: [
      "Thorough visual acuity testing",
      "Detailed eye health evaluation",
      "Detection of early signs of disease",
      "Retinal health screening",
      "Personalized eye care advice",
    ],
    duration: "45–60 minutes",
    recovery: "None required",
    candidates: "Patients of all ages",
  },
  {
    id: "computerized-visual-assessment",
    name: "Computerized Visual Assessment",
    slug: "computerized-visual-assessment",
    icon: "Monitor",
    shortDescription: "High-precision computerized testing for comprehensive vision analysis.",
    description:
      "Our computerized visual assessment uses modern technology to provide a highly accurate analysis of your vision and detect subtle changes that standard tests might miss.",
    longDescription:
      "By utilizing digital diagnostic tools, we can perform a deeper analysis of your eye health and visual performance. This is particularly beneficial for early detection of refractive changes, assessing digital eye strain, and optimizing prescriptions for maximum visual comfort.",
    benefits: [
      "Precision vision measurements",
      "Early detection of subtle changes",
      "Optimized digital vision comfort",
      "Advanced diagnostic technology",
    ],
    duration: "30–45 minutes",
    recovery: "None",
    candidates: "Patients seeking high-precision vision analysis",
  },
  {
    id: "refraction-prescription",
    name: "Refraction & Prescription of Glasses",
    slug: "refraction-prescription",
    icon: "Glasses",
    shortDescription: "Precise vision testing for accurate lens prescriptions.",
    description:
      "Experience precise vision testing to ensure you receive the most accurate prescription for your glasses, helping you see clearly and comfortably.",
    longDescription:
      "Our refraction services use the latest technology to measure your refractive error precisely. Whether you are nearsighted, farsighted, or have astigmatism, we ensure your prescription is perfect for your visual needs.",
    benefits: [
      "Highly accurate vision measurements",
      "Expert lens recommendations",
      "Optimized visual comfort",
      "Support for all refractive errors",
    ],
    duration: "20–30 minutes",
    recovery: "None",
    candidates: "Anyone needing corrective eyewear",
  },
  {
    id: "glaucoma-management",
    name: "Glaucoma Assessment & Ocular Disease Management",
    slug: "glaucoma-management",
    icon: "Shield",
    shortDescription: "Advanced screening and management for glaucoma and eye diseases.",
    description:
      "Our clinic offers advanced screening, diagnosis, and comprehensive management for glaucoma and various other ocular diseases to safeguard your vision.",
    longDescription:
      "Glaucoma is often a silent disease. We use advanced imaging and pressure testing to detect and manage glaucoma and other conditions like diabetic retinopathy and macular degeneration, helping to prevent irreversible vision loss.",
    benefits: [
      "Early detection of serious conditions",
      "Advanced diagnostic imaging",
      "Personalized management plans",
      "Vision preservation focus",
    ],
    duration: "45–60 minutes",
    recovery: "Varies by condition",
    candidates: "Patients at risk or diagnosed with eye diseases",
  },
  {
    id: "pediatric-eye-care",
    name: "Pediatric Eye Care",
    slug: "pediatric-eye-care",
    icon: "Baby",
    shortDescription: "Friendly and thorough vision tests for children.",
    description:
      "We provide specialized vision screenings designed for children to ensure their eyes are developing correctly and to address any vision issues early in their development.",
    longDescription:
      "Early vision screening is crucial for a child's learning and development. Our pediatric eye care focuses on detecting issues like amblyopia (lazy eye) and strabismus in a friendly, supportive environment.",
    benefits: [
      "Early detection of developmental issues",
      "Child-friendly examination techniques",
      "Support for learning and development",
      "Preventive pediatric eye care",
    ],
    duration: "30–45 minutes",
    recovery: "None",
    candidates: "Children and adolescents",
  },
  {
    id: "contact-lens-fitting",
    name: "Contact Lens Fitting & Aftercare",
    slug: "contact-lens-fitting",
    icon: "Disc",
    shortDescription: "Expert fittings for all types of contact lenses.",
    description:
      "Our specialists provide expert fitting services for a wide variety of contact lenses, ensuring optimal comfort, vision, and long-term eye health.",
    longDescription:
      "Whether you're looking for daily disposables, lenses for astigmatism, or specialty scleral lenses, we provide thorough fittings and follow-up care to ensure your contacts are safe and effective.",
    benefits: [
      "Personalized lens selection",
      "Thorough corneal assessment",
      "Comprehensive aftercare support",
      "Training for new wearers",
    ],
    duration: "45–60 minutes",
    recovery: "None",
    candidates: "New and existing contact lens wearers",
  },
  {
    id: "low-vision-assessment",
    name: "Low Vision Assessment",
    slug: "low-vision-assessment",
    icon: "Search",
    shortDescription: "Specialized care for patients with significant vision loss.",
    description:
      "We offer specialized low vision assessments to help patients with significant vision loss maximize their remaining sight through assistive devices and strategies.",
    longDescription:
      "Low vision can make daily tasks challenging. Our assessments focus on identifying the best tools, such as magnifiers and specialized lighting, to help you maintain your independence and quality of life.",
    benefits: [
      "Maximized use of remaining vision",
      "Recommendation of assistive devices",
      "Strategies for daily living",
      "Personalized independence support",
    ],
    duration: "60 minutes",
    recovery: "None",
    candidates: "Patients with vision loss not correctable by standard means",
  },
  {
    id: "optical-sales",
    name: "Sales of Quality Optical Frames & Lenses",
    slug: "optical-sales",
    icon: "ShoppingBag",
    shortDescription: "A wide selection of stylish frames and premium lenses.",
    description:
      "Browse our extensive collection of high-quality, stylish optical frames and premium lenses to find the perfect fit for your style and visual needs.",
    longDescription:
      "Our optical boutique offers everything from budget-friendly options to designer frames. We use premium lens coatings and materials to ensure your eyewear provides the best possible performance.",
    benefits: [
      "Extensive selection of frame styles",
      "Premium lens technology and coatings",
      "Professional styling and adjustment",
      "Durability and quality assurance",
    ],
    duration: "20–40 minutes",
    recovery: "None",
    candidates: "Anyone looking for quality eyewear",
  },
  {
    id: "community-outreach",
    name: "School, Church, Mosque & Community Outreach",
    slug: "community-outreach",
    icon: "Users",
    shortDescription: "Community-based eye health programs and screenings.",
    description:
      "We are committed to community health, offering eye screenings and educational programs at schools, religious centers, and local community events.",
    longDescription:
      "Our outreach programs bring essential eye care services and education to the heart of the community, helping to promote eye health and early detection of vision problems for everyone.",
    benefits: [
      "Accessible eye health screenings",
      "Educational programs for all ages",
      "Early detection in community settings",
      "Promoting public eye health awareness",
    ],
    duration: "Varies by event",
    recovery: "None",
    candidates: "All community members",
  },
  {
    id: "dry-eye-treatment",
    name: "Dry Eye Treatment",
    slug: "dry-eye-treatment",
    icon: "Droplets",
    shortDescription: "Relief for chronic dry, irritated, or watery eyes.",
    description:
      "Our comprehensive dry eye program addresses the root cause of your symptoms with advanced diagnostics and personalized treatments.",
    longDescription:
      "Dry eye disease affects millions and can impact quality of life. We use advanced diagnostics to determine the type and severity of your dry eye and offer personalized treatment plans for long-term relief.",
    benefits: [
      "Comprehensive diagnostic workup",
      "In-office specialized treatments",
      "Personalized drop and care regimens",
      "Long-term symptom management",
    ],
    duration: "45 minutes",
    recovery: "None",
    candidates: "Anyone experiencing chronic dry eye symptoms",
  },
  {
    id: "emergency-eye-care",
    name: "Emergency Eye Care",
    slug: "emergency-eye-care",
    icon: "AlertTriangle",
    shortDescription: "Urgent same-day care for eye injuries and infections.",
    description:
      "Eye emergencies require immediate attention. We provide same-day urgent care for eye injuries, sudden vision loss, pain, and infections.",
    longDescription:
      "Time is critical in an eye emergency. We offer same-day appointments for conditions like eye injuries, sudden vision changes, severe pain, or foreign bodies to prevent permanent damage.",
    benefits: [
      "Same-day emergency access",
      "Expert urgent care management",
      "Vision-saving interventions",
      "Prompt pain and infection relief",
    ],
    duration: "Varies by condition",
    recovery: "Varies by condition",
    candidates: "Anyone experiencing an acute eye emergency",
  },
  {
    id: "after-surgery-care",
    name: "After Surgery Care",
    slug: "after-surgery-care",
    icon: "HeartPulse",
    shortDescription: "Specialized follow-up and monitoring after eye surgery.",
    description:
      "We provide comprehensive postoperative care to ensure optimal healing and the best possible visual outcome after your eye surgery.",
    longDescription:
      "Successful eye surgery extends beyond the operating room. Our team monitors your recovery closely, manages postoperative medications, and provides expert guidance to prevent complications and ensure your vision stabilizes correctly.",
    benefits: [
      "Personalized healing monitoring",
      "Expert medication management",
      "Early detection of complications",
      "Optimized visual outcomes",
    ],
    duration: "30 minutes",
    recovery: "Part of recovery process",
    candidates: "Patients who have recently undergone any eye surgery",
  },
];
