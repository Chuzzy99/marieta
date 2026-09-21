import Link from "next/link";

export default function VisitPreview() {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — narrative */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What to expect when you visit
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Walk into our clinic on the Abeokuta Expressway and our reception
                team will welcome you. If it is your first visit, we will ask you
                to fill a short registration form and pay the consultation fee
                before your screening begins.
              </p>
              <p>
                One of our technicians will run preliminary tests — visual
                acuity, pressure checks, and digital imaging — before you sit
                down with the doctor for a full examination. Everything is
                explained to you as we go.
              </p>
              <p>
                After your exam, the doctor will walk you through the findings,
                answer your questions, and — if needed — recommend glasses, medication,
                or a follow-up plan. If you need frames, our optical section is
                right next door.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="inline-block text-sm font-semibold text-primary hover:underline"
            >
              Read the full step-by-step guide &rarr;
            </Link>
          </div>

          {/* Right column — practical info */}
          <div className="bg-white border border-border p-8 md:p-10 space-y-6">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Before you come
            </h3>
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Do I need an appointment?</dt>
                <dd className="text-muted-foreground mt-1">
                  Walk-ins are welcome during opening hours. Booking ahead on WhatsApp helps us reduce your wait time.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What does it cost?</dt>
                <dd className="text-muted-foreground mt-1">
                  A registration and consultation fee is paid before screening. Medications, glasses, and additional services are paid after the consultation as recommended by the doctor.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How long does an exam take?</dt>
                <dd className="text-muted-foreground mt-1">
                  A comprehensive exam usually takes 45\u201360 minutes, depending on the tests needed.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What should I bring?</dt>
                <dd className="text-muted-foreground mt-1">
                  Bring any current glasses or contact lenses, plus a list of medications you are taking. If you have previous eye records, bring those too.
                </dd>
              </div>
            </dl>
            <div className="pt-4 border-t border-border">
              <a
                href="https://wa.me/2348033067153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-6 py-3 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
