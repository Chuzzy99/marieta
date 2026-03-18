// HeroSection.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Accepting New Patients
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2 tracking-tight">
          Expert Eye Care.
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">
          Clear Vision for Life.
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Comprehensive eye care from trusted specialists. Experience clearer vision with our state-of-the-art treatments and compassionate approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/book-appointment"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
          >
            Book Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3 font-medium hover:bg-slate-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
