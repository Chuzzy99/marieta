import { Phone, Clock, Mail } from "lucide-react";
import Link from "next/link";

export default function VisitUs() {
  return (
    <section className="bg-[#064e3b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — clinic details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Come and see us
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                We provide a comfortable and welcoming environment for all our patients. Our facility is easily accessible, ensuring your visit is as smooth as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-1 text-white/70" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-white/80 text-sm">
                    Mon&ndash;Fri: 8 am &ndash; 6 pm<br />
                    Sat: 9 am &ndash; 4 pm<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 mt-1 text-white/70" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+2348033067153"
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    +234 803 306 7153
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0 mt-1 text-white/70" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:marietaeyeclinic@gmail.com"
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    marietaeyeclinic@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/book-appointment"
                className="inline-block bg-white text-[#064e3b] px-7 py-3 font-bold text-center hover:bg-white/90 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white/50 text-white px-7 py-3 font-semibold text-center hover:bg-white/10 transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="relative h-[300px] md:h-[400px] bg-[#053d2f]">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDE4JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marieta Eye Clinic location on Google Maps"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
