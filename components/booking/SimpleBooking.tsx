"use client";

export function SimpleBooking() {
  return (
    <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Book Your Appointment</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Simple booking form for testing.
      </p>
      <button className="bg-primary text-white px-6 py-3 rounded-lg">
        Test Button
      </button>
    </div>
  );
}
