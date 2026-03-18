"use client";

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-primary/5 pt-32 pb-12 lg:pt-48 lg:pb-16 border-b border-border">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Schedule your eye examination using our secure online booking system. Select your preferred date and time below.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-sm border border-border p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Select Your Appointment Time</h2>
              <p className="text-muted-foreground">
                Choose a convenient time to visit our clinic for your eye examination.
              </p>
            </div>
            
            <div className="w-full h-[750px] rounded-xl overflow-hidden border border-border bg-muted/30">
              <iframe
                src="https://calendly.com/ecstasyi909/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-xl"
                title="Book Appointment with Marieta Eye Clinic"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
