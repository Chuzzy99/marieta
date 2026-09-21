import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function TeamGrid() {
  const ceo = SITE_CONFIG.ceo;

  return (
    <section className="bg-[#1c1917] text-stone-300 py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              <Image 
                src={ceo.image}
                alt={ceo.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Subtle decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 hidden md:block" />
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Clinical Director</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                {ceo.name}
              </h2>
              <p className="text-lg text-stone-400 font-medium">
                {ceo.title} • OD, Consultant Optometrist
              </p>
            </div>

            <div className="space-y-6 text-stone-400 leading-relaxed text-lg">
              <p>
                Dr. Onyia brings over a decade of clinical experience to Marieta Eye Clinic. A dedicated consultant optometrist, she focuses on comprehensive eye care, glaucoma management, and pediatric screenings. 
              </p>
              <p>
                Her philosophy is simple: every patient deserves time, clear explanations, and rigorous clinical care. Whether you are bringing in your child for their first pair of glasses, or needing complex management for an ocular disease, Dr. Onyia and her team are here to guide you.
              </p>
              <blockquote className="pl-6 border-l-2 border-primary text-white font-heading text-xl md:text-2xl italic my-8">
                &ldquo;We built this clinic to ensure our patients never have to compromise on receiving world-class, honest eye care.&rdquo;
              </blockquote>
            </div>
            
            <div className="pt-6">
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Areas of Focus</h3>
              <div className="flex flex-wrap gap-3">
                {["Comprehensive Optometry", "Glaucoma Management", "Pediatric Screening", "Digital Eye Strain"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-stone-800 text-stone-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
