"use client";

export function CalendlyEmbed() {
  return (
    <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Book Your Appointment</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Schedule your eye examination using our secure online booking system. Select your preferred date and time below.
        </p>
      </div>
      
      <div className="w-full h-[700px] md:h-[800px] rounded-xl overflow-hidden border border-border bg-muted/30">
        <iframe 
          src="https://calendly.com/ecstasyi909/30min"
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-xl"
          title="Book Appointment with Marieta Eye Clinic"
        />
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-3 text-foreground">Need Help Booking?</h3>
          <p className="text-muted-foreground mb-4">
            If you have any questions or need assistance scheduling, please call us directly at:
          </p>
          <a 
            href="tel:+2348033067153" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            +234 803 306 7153
          </a>
        </div>
      </div>
    </div>
  );
}
