import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden">
            <Image 
              src="/images/office.jpg" 
              alt="Marieta Eye Clinic interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Marieta Eye Clinic was established with a clear and focused mission: to provide the highest standard of personalized eye care in a professional and welcoming environment. Led by Dr.Ijeamaka Onyia, a consultant optometrist with years of clinical expertise, we have become a trusted name in vision health.
                </p>
                <p>
                  Located at the heart of Abule Egba, Lagos, we combine advanced diagnostic technology with a patient-centered approach. We believe that professional integrity and clinical excellence are the foundations of good healthcare, and we strive to embody these values in every consultation.
                </p>
                <p>
                  Today, Marieta Eye Clinic offers a comprehensive spectrum of services from routine eye examinations and pediatric screenings to specialized glaucoma management and a premium selection of optical frames and lenses.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">To preserve, protect, and enhance your vision through expert, patient-centered clinical care and surgical excellence.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" /> Integrity & Honesty</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" /> Compassionate Care</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" /> Clinical Excellence</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
