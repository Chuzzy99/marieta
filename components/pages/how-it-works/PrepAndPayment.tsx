import Link from "next/link";

export function PrepAndPayment() {
  return (
    <section className="py-20 md:py-28 bg-[#faf9f6] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What to Bring</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              To ensure a smooth check-in process, please bring the following items to your appointment:
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-4 mt-1">&mdash;</span>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Current Eyewear</h4>
                  <p className="text-muted-foreground">Your current prescription glasses, sunglasses, or contact lenses.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-4 mt-1">&mdash;</span>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Medical History</h4>
                  <p className="text-muted-foreground">Any past eye records and a list of medications you are currently taking.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-[#064e3b] text-white p-8 md:p-12 h-full flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold mb-6">Payment Options</h2>
              <div className="space-y-4 text-white/80 text-lg mb-8 leading-relaxed">
                <p>
                  Marieta Eye Clinic offers transparent pricing for all our services and treatments.
                </p>
                <p>
                  We accept cash and direct bank transfers. We do not accept card payments online at this time.
                </p>
                <p>
                  Payment for consultation is required before screening. Our staff will provide you with a detailed cost breakdown before any additional procedures or dispensing.
                </p>
              </div>
              <div>
                <Link 
                  href="/book-appointment" 
                  className="inline-block bg-white text-[#064e3b] px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
