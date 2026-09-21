import { MapPin, Clock, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-[#064e3b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-2.5 gap-2 sm:gap-0 text-sm">
          {/* Address */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0 opacity-80" aria-hidden="true" />
            <span className="text-white/90">378 Abeokuta Express Road, Abule Egba, Lagos</span>
          </div>

          {/* Hours + Phone */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 opacity-80" aria-hidden="true" />
              <span className="text-white/90">Mon–Fri 8am–6pm &bull; Sat 9am–4pm</span>
            </div>
            <a
              href={SITE_CONFIG.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold hover:text-white/80 transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>+234 803 306 7153</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
