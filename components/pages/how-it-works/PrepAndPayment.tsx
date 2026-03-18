import { CheckCircle2, FileText, CreditCard, Glasses } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PrepAndPayment() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* What to Bring Checklist */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">What to Bring</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              To ensure a smooth check-in process and comprehensive evaluation, please bring the following items to your appointment:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start bg-background p-4 rounded-xl border border-border shadow-sm">
                <FileText className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Valid Photo ID</h4>
                  <p className="text-sm text-muted-foreground">Driver&apos;s License, State ID, or Passport.</p>
                </div>
              </li>
              <li className="flex items-start bg-background p-4 rounded-xl border border-border shadow-sm">
                <Glasses className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Current Eyewear</h4>
                  <p className="text-sm text-muted-foreground">Your current prescription glasses, sunglasses, or contact lens boxes.</p>
                </div>
              </li>
              <li className="flex items-start bg-background p-4 rounded-xl border border-border shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">List of Medications</h4>
                  <p className="text-sm text-muted-foreground">Any prescription medications, vitamins, or supplements you are currently taking.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment Info */}
          <div>
            <div className="bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                <CreditCard className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Payment Options</h2>
              <div className="space-y-4 text-muted-foreground text-lg mb-8">
                <p>
                  We believe that clear vision and eye health should be accessible. Marieta Eye Clinic offers transparent pricing and flexible payment options.
                </p>
                <p>
                  We accept cash, bank transfers, and all major credit cards including Visa, Mastercard, and American Express.
                </p>
                <p>
                  Payment is required at the time of service. Our staff will provide you with a detailed cost breakdown before any procedures.
                </p>
              </div>
              <div>
                <Button size="lg">
                  <Link href="/book-appointment" className="flex items-center">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
