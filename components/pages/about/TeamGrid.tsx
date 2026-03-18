import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ceo = {
  name: "Dr. Ijeamaka Maria-Goretti Onyia",
  role: "CEO & Medical Director",
  bio: "Dr. Onyia is a consultant optometrist with extensive experience in comprehensive eye care and community health outreach. She is dedicated to bringing world-class vision care to the community of Abule-Egba and beyond, focusing on early detection and personalized patient management.",
  credentials: "OD, Consultant Optometrist",
  message: "Your vision is our mission. At Marieta Eye Clinic, we combine expert clinical knowledge with a compassionate, patient-centered approach to ensure you see the world clearly at every stage of life.",
  specialties: ["Comprehensive Optometry", "Glaucoma Management", "Pediatric Screening", "Community Outreach"],
};

export function TeamGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our CEO</h2>
          <p className="text-lg text-muted-foreground">
            Led by professional excellence and a commitment to clinical integrity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-full w-full bg-slate-200 flex items-center justify-center">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="text-slate-400 font-bold text-4xl uppercase tracking-widest opacity-20 rotate-12 text-center px-4">CEO Background</div>
                </div>
                <Image 
                  src="/images/team/ceo.jpg" 
                  alt={ceo.name}
                  fill
                  className="object-cover object-top relative z-10"
                /> 
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">{ceo.name}</h3>
                <p className="font-semibold text-primary mb-6">{ceo.credentials}</p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground leading-relaxed italic">
                    &quot;{ceo.message}&quot;
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {ceo.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {ceo.specialties.map((specialty, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
