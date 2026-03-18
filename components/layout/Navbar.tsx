"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm",
        scrolled ? "py-2" : "py-4",
        mounted && !scrolled ? "lg:bg-transparent lg:shadow-none" : "lg:bg-white/80 lg:backdrop-blur-md"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between bg-white rounded-lg shadow-md transition-all duration-300" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <Image src="/images/logo/photo_2026-03-16_13-11-27.jpg" alt="Marieta Eye Clinic Logo" width={48} height={48} className="object-contain" priority />
          <span>{SITE_CONFIG.name}</span>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`tel:${SITE_CONFIG.telephone.replace(/\s/g, '')}`}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden xl:inline">{SITE_CONFIG.telephone}</span>
          </a>
          <Link 
            href="/book-appointment" 
            id="nav-book-btn"
            className={buttonVariants({ size: "sm", className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" })}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger aria-label="Open navigation menu" className="inline-flex items-center justify-center rounded-lg h-8 w-8 text-foreground/70 hover:text-foreground hover:bg-accent transition-colors">
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 pt-12 bg-white !bg-white">
              <div className="flex flex-col gap-4 bg-white">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-xl text-primary mb-4"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image 
                    src="/images/logo/photo_2026-03-16_13-11-27.jpg" 
                    alt="Marieta Eye Clinic Logo" 
                    width={48}
                    height={48}
                    className="object-contain" />
                  {SITE_CONFIG.name}
                </Link>
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                        pathname === link.href
                          ? "text-primary bg-accent"
                          : "text-slate-900 hover:text-primary hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                  <a
                    href={`tel:${SITE_CONFIG.telephone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-slate-900 font-semibold hover:text-primary px-4 py-2 mt-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    {SITE_CONFIG.telephone}
                  </a>
                  <Link 
                    href="/book-appointment" 
                    onClick={() => setMobileOpen(false)}
                    className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" })}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}