import { Calendar, UserCheck, CreditCard, Stethoscope, Sparkles, PhoneCall } from "lucide-react";

const steps = [
  {
    title: "Schedule Your Appointment",
    description: "Booking is simple and convenient. Reach out to us directly via WhatsApp to find an available time that works for you, or call our friendly reception team. We'll collect some basic information before your visit.",
    icon: Calendar,
  },
  {
    title: "Arrive & Check In",
    description: "When you arrive, our welcoming staff will guide you through a quick registration process. We'll help you fill out any necessary patient forms comfortably in our waiting area.",
    icon: UserCheck,
  },
  {
    title: "Registration & Consultation Fee",
    description: "Payment of registration and consultation fee is required before screening. After your comprehensive examination and consultation, you can then pay for any additional services such as medications, eye glasses, or specialized treatments as recommended by your doctor.",
    icon: CreditCard,
  },
  {
    title: "Comprehensive Eye Examination",
    description: "Your thorough evaluation begins with preliminary testing by our specialized technicians, followed by a detailed examination with your doctor. We use state-of-the-art diagnostic technology to assess both your visual acuity and overall ocular health.",
    icon: Stethoscope,
  },
  {
    title: "Review Results & Treatment Plan",
    description: "Your doctor will sit down with you to carefully review all findings. If treatment, prescription glasses, or surgical intervention is needed, we'll explain your options clearly and answer all your questions so you can make an informed decision.",
    icon: Sparkles,
  },
  {
    title: "Follow-Up Care & Ongoing Support",
    description: "Our commitment to your vision doesn't end when you leave. We'll schedule any necessary follow-up appointments and our staff is always just a phone call away if you have concerns during your healing or adjustment process.",
    icon: PhoneCall,
  },
];

export function PatientJourney() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Marieta Eye Clinic Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve refined our clinical process to ensure your visit is efficient, comfortable, and comprehensive.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 relative">
                {/* Connecting Line */}
                {!isLast && (
                  <div className="absolute left-8 md:left-12 top-20 bottom-[-40px] w-0.5 bg-border -z-10 hidden md:block" />
                )}
                
                <div className="shrink-0 flex justify-center md:justify-start">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 border-4 border-background shadow-md flex items-center justify-center text-primary relative z-10">
                    <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs md:text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="pt-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
