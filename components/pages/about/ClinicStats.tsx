export function ClinicStats() {
  return (
    <section className="bg-primary text-primary-foreground py-20 border-y border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <h3 className="font-heading text-5xl md:text-6xl font-bold mb-3">20+</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Years in Practice</p>
            <p className="mt-4 text-primary-foreground/70 text-sm max-w-[200px] mx-auto">
              Decades of combined clinical expertise serving Lagos.
            </p>
          </div>
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <h3 className="font-heading text-5xl md:text-6xl font-bold mb-3">15k+</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Patients Seen</p>
            <p className="mt-4 text-primary-foreground/70 text-sm max-w-[200px] mx-auto">
              From routine checks to complex disease management.
            </p>
          </div>
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <h3 className="font-heading text-5xl md:text-6xl font-bold mb-3">1</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">Focus</p>
            <p className="mt-4 text-primary-foreground/70 text-sm max-w-[200px] mx-auto">
              Protecting and enhancing your family&apos;s vision.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
