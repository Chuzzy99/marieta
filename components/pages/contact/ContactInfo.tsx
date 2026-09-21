import { AlertTriangle } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-12 pr-0 lg:pr-8">
      
      {/* Emergency Callout */}
      <div className="bg-[#9f1239]/10 border-l-4 border-[#9f1239] p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-[#9f1239] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-heading font-bold text-[#9f1239] text-xl mb-2">Emergency Eye Care</h3>
            <p className="text-foreground/80 mb-3 text-sm leading-relaxed">
              If you are experiencing sudden vision loss, severe pain, or a chemical injury, please do not use the contact form.
            </p>
            <p className="font-semibold text-[#9f1239]">
              Call us immediately at <a href="tel:+2348033067153" className="underline hover:opacity-80">+234 803 306 7153</a> or come straight to the clinic.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Location</h3>
          <address className="text-muted-foreground not-italic leading-relaxed text-lg">
            378 Abeokuta Express Road,<br />
            Abule Egba, Lagos<br />
            <a href="https://maps.google.com" className="text-primary hover:underline mt-3 inline-block font-medium text-base">Get Directions &rarr;</a>
          </address>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Contact</h3>
          <div className="text-muted-foreground leading-relaxed text-lg space-y-3">
            <p>
              <strong className="text-foreground">Phone:</strong> <a href="tel:+2348033067153" className="hover:text-primary transition-colors">+234 803 306 7153</a>
            </p>
            <p>
              <strong className="text-foreground">WhatsApp:</strong> <a href="https://wa.me/2348033067153" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+234 803 306 7153</a>
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> <a href="mailto:ijeamakamariagoretti@gmail.com" className="hover:text-primary transition-colors">ijeamakamariagoretti@gmail.com</a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Hours</h3>
          <div className="grid grid-cols-2 gap-y-3 text-lg text-muted-foreground max-w-sm">
            <div className="font-medium text-foreground">Mon – Fri</div>
            <div className="text-right">8 am – 6 pm</div>
            
            <div className="font-medium text-foreground">Saturday</div>
            <div className="text-right">9 am – 4 pm</div>
            
            <div className="font-medium text-foreground">Sunday</div>
            <div className="text-right text-[#9f1239]">Closed</div>
          </div>
        </div>
      </div>

    </div>
  );
}
