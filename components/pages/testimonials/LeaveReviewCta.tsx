import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

export function LeaveReviewCTA() {
  return (
    <section className="py-24 bg-primary/5 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-background rounded-3xl p-8 md:p-16 shadow-sm border border-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <MessageSquarePlus className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Share Your Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your feedback helps us continuously improve our patient care and helps others in our community find the dedicated eye care they deserve. We would be incredibly grateful if you took a moment to review us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
               Review on Google
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
               Review on Yelp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
