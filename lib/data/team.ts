export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  specialties: string[];
  education: string[];
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    title: "Optometrist & Clinical Director",
    credentials: "OD, FAAO",
    bio: "Dr. Chen is a board-certified optometrist with over 15 years of experience in comprehensive eye care. She founded Marieta Eye Clinic in 2009 with the vision of bringing world-class eye care to the Atlanta metro area. She is a Fellow of the American Academy of Optometry and lectures nationally on ocular disease management.",
    specialties: [
      "Comprehensive Eye Exams",
      "Dry Eye Disease",
      "Ocular Disease Management",
      "Contact Lens Fitting",
    ],
    education: [
      "Doctor of Optometry, Southern College of Optometry",
      "BS, Biology, Georgia Tech",
      "Residency in Ocular Disease, VA Medical Center Atlanta",
    ],
  },
  {
    id: "2",
    name: "Dr. James Patel",
    title: "Optometrist & Clinical Director",
    credentials: "MD, FACS",
    bio: "Dr. Patel is a fellowship-trained optometrist specializing in secondary care and therapeutic management. He has performed over 12,000 clinical procedures with an outstanding safety record. He is a member of the World Council of Optometry and the American Optometric Association.",
    specialties: [
      "LASIK & Refractive Surgery",
      "Cataract Surgery",
      "Glaucoma Surgery (MIGS)",
      "Complex IOL Implantation",
    ],
    education: [
      "MD, Emory University School of Medicine",
      "Residency in Optometry, Emory Eye Center",
      "Fellowship in Refractive Surgery, Bascom Palmer Eye Institute",
    ],
  },
  {
    id: "3",
    name: "Dr. Sarah Nguyen",
    title: "Pediatric Optometrist",
    credentials: "OD, FCOVD",
    bio: "Dr. Nguyen is a Fellow of the College of Optometrists in Vision Development, specializing in pediatric eye care and vision therapy. Her gentle approach and child-friendly office style have made her beloved by kids and parents alike. She is passionate about early detection of vision problems and myopia control.",
    specialties: [
      "Pediatric Eye Exams",
      "Amblyopia Treatment",
      "Strabismus Management",
      "Myopia Control",
      "Vision Therapy",
    ],
    education: [
      "Doctor of Optometry, University of California, Berkeley",
      "BS, Psychology, UCLA",
      "Pediatric Optometry Residency, Children's Healthcare of Atlanta",
    ],
  },
  {
    id: "4",
    name: "Dr. Marcus Williams",
    title: "Glaucoma Specialist",
    credentials: "MD, PhD",
    bio: "Dr. Williams is a glaucoma specialist with a dual focus on clinical care and research. He completed his PhD in Optometry at Johns Hopkins, where his research on optic nerve neuroprotection was published in leading journals. He sees glaucoma patients of all stages and offers both medical and minimally invasive surgical options.",
    specialties: [
      "Glaucoma Diagnosis & Management",
      "Selective Laser Trabeculoplasty (SLT)",
      "MIGS Procedures",
      "Optic Nerve Disease",
    ],
    education: [
      "MD/PhD, Johns Hopkins School of Medicine",
      "Residency in Optometry, Wilmer Eye Institute",
      "Glaucoma Fellowship, Bascom Palmer Eye Institute",
    ],
  },
];
