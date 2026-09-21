const steps = [
  {
    title: "Schedule Your Appointment",
    description: "Booking is simple and direct. Reach out to us via WhatsApp to find an available time that works for you, or walk in during our operating hours.",
  },
  {
    title: "Arrive & Check In",
    description: "When you arrive, our staff will guide you through a quick registration process. We'll help you fill out any necessary patient forms in our waiting area.",
  },
  {
    title: "Registration & Consultation Fee",
    description: "Payment of the registration and consultation fee is required before screening begins. We accept cash and direct transfers.",
  },
  {
    title: "Comprehensive Eye Examination",
    description: "Your evaluation begins with preliminary testing by our technicians, followed by a detailed examination with Dr. Onyia or our consulting team. We assess both visual acuity and overall ocular health.",
  },
  {
    title: "Review Results & Treatment Plan",
    description: "We will sit down with you to carefully review all findings. If treatment or prescription glasses are needed, we'll explain your options clearly so you can make an informed decision.",
  },
];

export function PatientJourney() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Patient Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve refined our clinical process to ensure your visit is efficient, comfortable, and rigorously thorough.
          </p>
        </div>

        <div className="space-y-12 border-l-2 border-border pl-8 md:pl-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 md:w-8 md:h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-primary text-xs md:text-sm font-bold">{index + 1}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-heading">{step.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
