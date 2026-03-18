import { MapPin, Phone, Clock, AlertTriangle } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Emergency Callout */}
      <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-destructive mr-4 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-destructive text-lg mb-2">Emergency Eye Care</h3>
            <p className="text-foreground/80 mb-3">
              If you are experiencing sudden vision loss, severe pain, or a chemical injury, please do not use the contact form.
            </p>
            <p className="font-semibold text-destructive">
              Call us immediately at <a href="tel:+2348033067153" className="underline hover:text-destructive/80">+234 803 306 7153</a> or visit our clinic.
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-muted/30 p-6 rounded-2xl border border-border">
          <MapPin className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-bold text-lg text-foreground mb-2">Our Location</h3>
          <address className="text-muted-foreground not-italic leading-relaxed">
            378 Abeokuta Exp Road,<br />
            Abule Egba, Lagos<br />
            <a href="https://maps.google.com" className="text-primary hover:underline mt-2 inline-block font-medium">Get Directions →</a>
          </address>
        </div>

        <div className="bg-muted/30 p-6 rounded-2xl border border-border">
          <Phone className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-bold text-lg text-foreground mb-2">Contact Us</h3>
          <div className="text-muted-foreground leading-relaxed space-y-2">
            <p>
              <strong className="text-foreground">Phone:</strong> <a href="tel:+2348033067153" className="hover:text-primary transition-colors">+234 803 306 7153</a>
            </p>
            <p>
              <strong className="text-foreground">WhatsApp:</strong> <a href="https://wa.me/2348033067153" className="hover:text-primary transition-colors">Chat with us</a>
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> <a href="mailto:marietaeyeclinic@gmail.com" className="hover:text-primary transition-colors">marietaeyeclinic@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 p-6 rounded-2xl border border-border">
        <div className="flex items-center mb-4">
          <Clock className="w-8 h-8 text-primary mr-3" />
          <h3 className="font-bold text-lg text-foreground">Hours of Operation</h3>
        </div>
        <div className="grid grid-cols-2 gap-y-3 text-muted-foreground">
          <div className="font-medium">Monday - Friday</div>
          <div className="text-right">8:00 AM - 6:00 PM</div>
          
          <div className="font-medium">Saturday</div>
          <div className="text-right">9:00 AM - 4:00 PM</div>
          
          <div className="font-medium text-destructive">Sunday</div>
          <div className="text-right text-destructive">Closed</div>
        </div>
      </div>

      {/* Interactive Google Map */}
      <div className="w-full h-[400px] bg-muted rounded-2xl overflow-hidden border border-border">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.793740266045!2d3.2929452!3d6.6215037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b914838618e77%3A0x6734c5625c2826ae!2sAbule-Egba%20Bus%20Stop%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710440000000!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Marieta Eye Clinic Location"
        ></iframe>
      </div>
    </div>
  );
}
