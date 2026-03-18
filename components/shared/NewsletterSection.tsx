// NewsletterSection.tsx

import { Mail } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-muted/50 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Stay Informed About Your Eye Health
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest eye care tips, clinic news, and exclusive offers delivered straight to your inbox.
          </p>

          <NewsletterForm />
          
          <p className="text-xs text-muted-foreground mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
