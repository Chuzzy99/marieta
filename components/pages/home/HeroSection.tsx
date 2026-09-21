import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Text — left side */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-tight">
              Your family eye clinic in Abule Egba, Lagos.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              We look after the eyes of everyday Lagosians — from children who need their first pair of glasses to adults managing glaucoma. Walk in or book ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/book-appointment"
                className="inline-block bg-primary text-primary-foreground px-7 py-3 font-semibold text-base hover:bg-primary/90 transition-colors text-center"
              >
                Book an Appointment
              </Link>
              <a
                href="https://wa.me/2348033067153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#25D366] text-[#25D366] px-7 py-3 font-semibold text-base hover:bg-[#25D366] hover:text-white transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              <p>378 Abeokuta Express Road, Abule Egba</p>
              <p>Mon\u2013Fri 8 am\u20136 pm &bull; Sat 9 am\u20134 pm</p>
            </div>
          </div>

          {/* Photo — right side, slightly overlapping edge */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[350px] md:h-[480px] lg:h-[520px] lg:-mr-8 xl:-mr-16">
              <Image
                src="/images/office.jpg"
                alt="Inside Marieta Eye Clinic — consultation room with diagnostic equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              {/* Slight overlay to ground the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
