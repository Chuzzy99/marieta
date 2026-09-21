import { Clock, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#064e3b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 text-sm">
          {/* Hours */}
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0 opacity-80" aria-hidden="true" />
            <span className="text-white/90">Mon&ndash;Fri 8am&ndash;6pm &bull; Sat 9am&ndash;4pm</span>
          </div>

          {/* Phone */}
          <a
            href="tel:+2348033067153"
            className="flex items-center gap-2 font-semibold hover:text-white/80 transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>+234 803 306 7153</span>
          </a>
        </div>
      </div>
    </div>
  );
}
