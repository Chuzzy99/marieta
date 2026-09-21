import Image from "next/image";

export function AboutStory() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              A local clinic with clinical excellence at its core.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Marieta Eye Clinic was established with a clear mission: to provide the highest standard of personalized eye care right here in Abule Egba. We didn&apos;t want our patients to have to choose between convenience and clinical quality.
              </p>
              <p>
                When you walk through our doors, you are treated by professionals who combine advanced diagnostic technology with a genuinely patient-centered approach. We believe that professional integrity and clinical excellence are the foundations of good healthcare.
              </p>
              <p>
                From routine eye examinations and pediatric screenings to specialized glaucoma management and dispensing premium optical frames, we handle every aspect of your vision health under one roof.
              </p>
            </div>
            
            <div className="pt-8 border-t border-border grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To preserve, protect, and enhance your vision through expert, honest clinical care.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Core Values</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2"><span className="text-primary font-bold">&mdash;</span> Integrity & Honesty</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">&mdash;</span> Compassionate Care</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">&mdash;</span> Clinical Rigour</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] w-full">
            <Image 
              src="/images/office.jpg" 
              alt="Inside Marieta Eye Clinic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Grounding frame effect */}
            <div className="absolute inset-0 border-[16px] border-background/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
