import { Award, Users, Trophy } from "lucide-react";

export function ClinicStats() {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
          <div className="flex flex-col items-center py-6 md:py-0">
            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4 transform -rotate-3">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">20+</h3>
            <p className="text-lg font-medium text-muted-foreground uppercase tracking-widest">Years in Practice</p>
          </div>
          
          <div className="flex flex-col items-center py-6 md:py-0">
            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4 rotate-3">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">15,000+</h3>
            <p className="text-lg font-medium text-muted-foreground uppercase tracking-widest">Patients Served</p>
          </div>
          
          <div className="flex flex-col items-center py-6 md:py-0">
            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4 -rotate-3">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">15+</h3>
            <p className="text-lg font-medium text-muted-foreground uppercase tracking-widest">Local & National Awards</p>
          </div>
        </div>
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-[-10%] w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
    </section>
  );
}
