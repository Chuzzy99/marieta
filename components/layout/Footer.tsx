import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const serviceLinks = [
  { href: "/services/comprehensive-eye-exams", label: "Eye Examinations" },
  { href: "/services/refraction-prescription", label: "Refraction & Glasses" },
  { href: "/services/glaucoma-management", label: "Glaucoma Care" },
  { href: "/services/pediatric-eye-care", label: "Pediatric Eye Care" },
  { href: "/services/contact-lens-fitting", label: "Contact Lenses" },
  { href: "/services/optical-sales", label: "Optical Frames & Lenses" },
];

const clinicLinks = [
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Footer() {
  return (
    <footer className="bg-[#1c1917] text-stone-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Clinic Info — takes more space */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-block text-white font-heading text-xl font-bold hover:opacity-80 transition-opacity"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Marieta Eye Clinic — comprehensive eye care you can trust. We have been looking after the eyes of families, workers, and children since our doors first opened.
            </p>

            {/* Contact details prominent */}
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a
                  href={SITE_CONFIG.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] font-semibold hover:opacity-80 transition-opacity"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  +234 803 306 7153 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  378 Abeokuta Express Road,<br />Abule Egba, Lagos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Mon–Fri: 8 am – 6 pm<br />
                  Saturday: 9 am – 4 pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm mb-4">Clinic</h3>
            <ul className="space-y-2.5" role="list">
              {clinicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick action */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm mb-4">Visit Us</h3>
            <div className="space-y-4">
              <Link
                href="/book-appointment"
                className="block bg-primary text-primary-foreground text-center px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2026 {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
