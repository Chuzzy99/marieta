// TrustBadges.tsx

const badges = [
  { name: "Board Certified Clinical Optometrists", id: 1 },
  { name: "American Optometric Association", id: 2 },
  { name: "Top Doctors Award 2024", id: 3 },
  { name: "Medicare Accepted", id: 4 },
  { name: "VSP Vision Care Partner", id: 5 },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Trusted By & Affiliated With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {badges.map((badge) => (
              <div key={badge.id} className="flex items-center justify-center text-center font-semibold text-lg max-w-[150px]">
                {/* 
                  We use text as placeholders since we don't have actual logos.
                  In production, these would be Image components.
                */}
                <span className="text-foreground/80">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
