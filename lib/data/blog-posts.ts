export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorTitle: string;
  image?: string;
  content: string;
  tags: string[];
}

const AUTHOR_NAME = "Dr. Ijeamaka Maria-Goretti Onyia";
const AUTHOR_TITLE = "CEO & Medical Director, Marieta Eye Clinic";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-comprehensive-eye-exams",
    title: "Why a Comprehensive Eye Exam is More Than a Vision Test",
    excerpt: "Many people think an eye exam is just about reading letters on a chart. Discover why a full clinical evaluation is essential for your overall health.",
    category: "Preventive Care",
    readTime: "6 min read",
    date: "March 12, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
At Marieta Eye Clinic, we believe that your eyes are a window to your overall health. A comprehensive eye examination is a detailed clinical assessment that goes far beyond determining if you need glasses.

## What Happens During a Comprehensive Exam?

During your visit, we don't just check your vision; we examine the entire ocular system. This includes:

1. **Visual Acuity Testing**: Measuring how clearly you see at various distances.
2. **Refraction assessment**: Determining the exact lens power needed to correct nearsightedness, farsightedness, or astigmatism.
3. **Binocular Vision Assessment**: Checking how well your eyes work together as a team.
4. **Ocular Health Evaluation**: Using advanced digital imaging to inspect the retina, optic nerve, and blood vessels.

## Early Detection of Systemic Issues

Did you know that an eye exam can reveal early signs of high blood pressure, diabetes, and even certain autoimmune conditions? By looking at the tiny blood vessels in the back of your eye, we can often identify health risks before they manifest elsewhere in the body.

## Protecting Your Future Sight

Conditions like glaucoma and macular degeneration often have no early symptoms. Regular screenings are the only way to catch these "silent" conditions before permanent vision loss occurs. We recommend an annual exam for all adults to ensure long-term ocular wellness.
    `,
    tags: ["eye health", "preventive care", "eye exam", "wellness"],
  },
  {
    id: "2",
    slug: "digital-eye-strain-in-modern-world",
    title: "Battling the Digital Strain: Tips for a Screen-Heavy Lifestyle",
    excerpt: "In an age of constant connectivity, our eyes are working harder than ever. Learn how to manage Computer Vision Syndrome effectively.",
    category: "Eye Health",
    readTime: "5 min read",
    date: "March 10, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
Modern life requires us to spend hours in front of screens—be it computers, tablets, or smartphones. This has led to a surge in Computer Vision Syndrome (CVS), also known as Digital Eye Strain.

## Symptoms of Digital Eye Strain

Do your eyes feel tired, dry, or irritated after a long day at work? Do you experience blurred vision or frequent headaches? These are classic signs of CVS. 

## The 20-20-20 Rule

The most effective way to provide your eyes with much-needed relief is the **20-20-20 rule**: Every 20 minutes, look at something 20 feet away for at least 20 seconds. This simple habit allows your eye muscles to relax and reduces fatigue.

## Professional Solutions

At Marieta Eye Clinic, we offer specialized assessments for digital strain. We can provide:
- **Blue-light filtering lenses**: To reduce glare and high-energy visible light.
- **Ergonomic consultations**: Tips on screen positioning and lighting.
- **Specialized prescriptions**: Tailored specifically for the distance between your eyes and your monitor.

Don't let digital strain dampen your productivity. Small changes and regular professional checkups can keep your vision sharp and comfortable.
    `,
    tags: ["digital strain", "CVS", "screen time", "productivity"],
  },
  {
    id: "3",
    slug: "children-vision-and-learning",
    title: "Clear Vision, Bright Future: Why Child Screenings Matter",
    excerpt: "Up to 80% of a child's learning is visual. Ensuring your child can see clearly is the first step toward academic success.",
    category: "Pediatrics",
    readTime: "7 min read",
    date: "March 8, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
As parents, we want the best for our children. One of the most overlooked factors in a child's academic and social development is their vision. 

## The Link Between Vision and Learning

Children rarely complain about vision problems because they don't know what "normal" vision looks like. If a child sees double or blur, they assume everyone does. This can lead to struggles in reading, writing, and sports, often misdiagnosed as learning disabilities or behavioral issues.

## When Should Screenings Start?

We recommend a child's first vision screening as early as 6 months, followed by more thorough exams at age 3 and before they start school. Early detection of conditions like amblyopia (lazy eye) or strabismus (crossed eyes) is critical because many of these issues are significantly easier to treat when the child is young.

## Signs to Watch For

Keep an eye out for these red flags:
- Squinting while reading or watching TV.
- Tilting the head to see better.
- Frequent eye rubbing.
- Avoiding near-work activities like puzzles or reading.

At Marieta Eye Clinic, we pride ourselves on our friendly and thorough pediatric screenings. Let's work together to give your child the visual tools they need to succeed.
    `,
    tags: ["pediatrics", "learning", "child health", "school"],
  },
  {
    id: "4",
    slug: "glaucoma-prevention-strategies",
    title: "Glaucoma: Protecting Your Vision from the 'Silent Thief'",
    excerpt: "Glaucoma is a leading cause of blindness, often with no early symptoms. Learn why early detection is your best defense.",
    category: "Eye Conditions",
    readTime: "8 min read",
    date: "March 5, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
Glaucoma is often called the "silent thief of sight" because it typically progresses without pain or obvious vision changes until the advanced stages.

## Understanding Eye Pressure

Glaucoma is usually associated with increased pressure within the eye, which damages the optic nerve. Once this nerve is damaged, the vision loss is permanent. This is why our focus at Marieta Eye Clinic is heavily centered on early detection and proactive management.

## Who is at Risk?

While anyone can develop glaucoma, certain factors increase your risk:
- Age (over 40).
- Family history of the condition.
- Certain medical conditions like diabetes.
- High levels of nearsightedness.

## Modern Management

The good news is that with early diagnosis, glaucoma is highly manageable. Treatment usually begins with simple, daily eye drops that lower the internal pressure. In some cases, specialized laser treatments or minor procedures are recommended to ensure long-term stability.

Regular assessments are the only way to safeguard your sight from this condition. If you haven't had your eye pressure checked recently, now is the time to schedule an appointment.
    `,
    tags: ["glaucoma", "silent thief", "vision loss", "prevention"],
  },
  {
    id: "5",
    slug: "contact-lens-safety-tips",
    title: "The Do's and Don'ts of Contact Lens Wear",
    excerpt: "Contact lenses offer freedom and clarity, but proper hygiene is paramount. Follow these essential tips for healthy lens wear.",
    category: "Eye Care",
    readTime: "5 min read",
    date: "March 1, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
Contact lenses are a fantastic alternative to glasses, providing a full field of vision and freedom for active lifestyles. However, wearing them safely requires commitment to hygiene and professional guidance.

## Start with a Professional Fitting

A contact lens is a medical device that sits directly on your cornea. One size does **not** fit all. A professional fitting at Marieta Eye Clinic ensures that the lenses are the correct shape, size, and material for your unique eyes, preventing irritation and long-term complications.

## Essential Hygiene Rules

To keep your eyes healthy, remember these core rules:
- **Never sleep in your lenses** unless specifically prescribed by your doctor.
- **Wash your hands thoroughly** before touching your lenses or eyes.
- **Use only fresh solution**; never "top off" old solution in your lens case.
- **Replace your lens case every three months** to avoid bacterial buildup.

## When to Seek Help

If you experience redness, pain, or blurred vision while wearing your lenses, remove them immediately and contact us. Your eye health is our priority, and we are here to support you with expert aftercare and the latest lens technology.
    `,
    tags: ["contact lenses", "hygiene", "safety", "eye infections"],
  },
  {
    id: "6",
    slug: "diet-for-healthy-eyes",
    title: "Eating for Your Eyes: Nutrition That Supports Sight",
    excerpt: "Can carrots really help you see in the dark? Discover the vitamins and minerals that truly impact your long-term vision.",
    category: "Wellness",
    readTime: "6 min read",
    date: "February 25, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
We often hear that what we eat affects our heart and weight, but nutrition plays a massive role in our eye health as well. A diet rich in specific antioxidants can help prevent or delay conditions like cataracts and macular degeneration.

## Key Nutrients for Vision

1. **Lutein and Zeaxanthin**: Found in leafy greens like spinach and kale, these act as "natural sunglasses" for your retina.
2. **Omega-3 Fatty Acids**: Found in salmon and tuna, these are essential for tear production and can help manage dry eye symptoms.
3. **Vitamin C and E**: Citrus fruits and nuts provide these powerful antioxidants that protect eye cells from damage.
4. **Zinc**: Found in beans and certain seafood, zinc helps Vitamin A create melanin, which protects the eye.

## Beyond Carrots

While carrots are excellent for Vitamin A, a varied diet is even more important. At Marieta Eye Clinic, we take a holistic approach to your care, often discussing lifestyle and nutritional choices during our wellness consultations.

What you put on your plate today helps determine how well you see tomorrow. Feed your eyes the nutrients they deserve!
    `,
    tags: ["nutrition", "wellness", "diet", "eye vitamins"],
  },
  {
    id: "7",
    slug: "managing-dry-eye-effectively",
    title: "Relief for Dry Eyes: More Than Just Artificial Tears",
    excerpt: "Chronic dry eye is a complex condition that requires more than a quick fix. Learn about the root causes and modern treatments.",
    category: "Treatments",
    readTime: "6 min read",
    date: "February 20, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
Dry eye disease is one of the most common reasons patients visit our clinic. It's not just an annoyance; if left untreated, chronic dryness can damage the surface of the eye and blur your vision.

## Not All Dryness is the Same

Dry eye can be caused by a lack of tear volume or by poor quality tears that evaporate too quickly. Determining which type you have is the first step toward effective treatment.

## Beyond the Bottle

While over-the-counter artificial tears provide temporary relief, they rarely solve the underlying problem. Our advanced dry eye program at Marieta Eye Clinic includes:
- **Meibomian Gland Evaluation**: Checking the oil-producing glands in your eyelids.
- **Prescription Medicated Drops**: To reduce inflammation and encourage natural tear production.
- **Thermal Pulsation Therapy**: A gentle in-office procedure to clear blocked oil glands.

You don't have to live with gritty, burning, or watery eyes. There are modern, effective solutions available that can provide lasting comfort.
    `,
    tags: ["dry eye", "treatments", "eye comfort", "ocular surface"],
  },
  {
    id: "8",
    slug: "protecting-eyes-from-uv-rays",
    title: "Sun Safety: Protecting Your Eyes from UV Damage",
    excerpt: "We use sunscreen for our skin, but what about our eyes? Learn about the long-term risks of UV exposure and how to choose the right protection.",
    category: "Prevention",
    readTime: "5 min read",
    date: "February 15, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
In sunny regions like Lagos, protecting your eyes from ultraviolet (UV) radiation is a year-round necessity. Just as the sun can burn your skin, it can also cause significant damage to your eyes.

## Long-Term Risks

Chronic UV exposure is linked to several serious eye conditions, including:
- **Cataracts**: The clouding of the eye's natural lens.
- **Macular Degeneration**: Damage to the center of the retina.
- **Pterygium**: Benign growths on the white of the eye that can grow onto the cornea.

## Choosing the Right Sunglasses

Not all dark lenses provide protection. When shopping for eyewear at Marieta Eye Clinic, look for:
- **100% UV Protection**: Lenses that block both UVA and UVB rays.
- **Polarization**: To reduce glare from surfaces like roads or water.
- **Wrap-around designs**: To prevent light from entering through the sides.

Protecting your eyes today ensures clear vision for many years to come. Ensure your family is wearing high-quality, verified UV protection whenever they are outdoors.
    `,
    tags: ["UV protection", "sunglasses", "sun safety", "prevention"],
  },
  {
    id: "9",
    slug: "importance-of-community-screenings",
    title: "Bringing Care Home: The Impact of Community Eye Screenings",
    excerpt: "At Marieta Eye Clinic, our mission extends beyond our walls. Discover how our outreach programs are saving sight in the community.",
    category: "Community",
    readTime: "4 min read",
    date: "February 10, 2026",
    author: AUTHOR_NAME,
    authorTitle: AUTHOR_TITLE,
    content: `
Quality eye care should be accessible to everyone. This belief is the driving force behind Marieta Eye Clinic's extensive community outreach programs.

## Reaching the Underserved

Many people in our community live with undiagnosed vision problems simply because they don't have easy access to a clinic. By bringing our expertise to schools, churches, and mosques, we can identify issues early and provide guidance to those who need it most.

## Our School Outreach

We are particularly passionate about our work in schools. By screening students, we ensure that a simple vision problem doesn't stand in the way of a child's education. A pair of glasses can fundamentally change a student's trajectory.

## A Healthier Community

A healthy community starts with healthy vision. We invite leaders of local organizations to reach out to us to schedule a screening event. Together, we can work towards a future where preventable blindness is a thing of the past.
    `,
    tags: ["outreach", "community", "charity", "school screenings"],
  },
];
