"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  bookingFormSchema, 
  BookingFormData
} from "@/lib/schemas/booking";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Visit Details" },
  { id: 3, name: "Date & Time" },
];

export function BookingForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: undefined,
      },
      visitDetails: {
        serviceId: defaultService,
        chiefComplaint: "",
        patientStatus: undefined as "new" | "returning" | undefined,
      },
      dateTime: {
        preferredDate: undefined,
        preferredTime: undefined as "morning" | "afternoon" | "evening" | undefined,
        additionalNotes: "",
      },
    },
    mode: "onTouched",
  });

  // Set default service if it comes from URL later
  useEffect(() => {
    if (defaultService) {
      form.setValue("visitDetails.serviceId", defaultService);
    }
  }, [defaultService, form]);

  const processNextStep = async () => {
    let isStepValid = false;

    if (currentStep === 1) {
      isStepValid = await form.trigger(["personalInfo.firstName", "personalInfo.lastName", "personalInfo.email", "personalInfo.phone", "personalInfo.dateOfBirth"]);
    } else if (currentStep === 2) {
      isStepValid = await form.trigger(["visitDetails.serviceId", "visitDetails.chiefComplaint", "visitDetails.patientStatus"]);
    } else if (currentStep === 3) {
      isStepValid = await form.trigger(["dateTime.preferredDate", "dateTime.preferredTime", "dateTime.additionalNotes"]);
    }

    if (isStepValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const processPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API Customization
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted: ", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-background p-8 rounded-2xl shadow-sm border border-border text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Thank you for requesting an appointment. Our scheduling team will review your request and contact you shortly to confirm your exact appointment time.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const { errors } = form.formState;

  return (
    <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 rounded-full" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold border-2 transition-colors z-10 
                  ${currentStep > step.id ? "bg-primary border-primary text-primary-foreground" 
                  : currentStep === step.id ? "bg-background border-primary text-primary shadow-md" 
                  : "bg-background border-muted text-muted-foreground"}`}
              >
                {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : step.id}
              </div>
              <span className={`text-sm mt-3 hidden md:block font-semibold ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-xl font-bold mb-1">Personal Information</h3>
              <p className="text-muted-foreground text-sm">Please provide your basic contact details.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
              <label className="text-base font-semibold">First Name *</label>
                <Input placeholder="Jane" {...form.register("personalInfo.firstName")} className={errors.personalInfo?.firstName ? "border-red-500" : ""} />
                {errors.personalInfo?.firstName && <p className="text-sm text-red-500">{errors.personalInfo.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-base font-semibold">Last Name *</label>
                <Input placeholder="Doe" {...form.register("personalInfo.lastName")} className={errors.personalInfo?.lastName ? "border-red-500" : ""} />
                {errors.personalInfo?.lastName && <p className="text-sm text-red-500">{errors.personalInfo.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-base font-semibold">Email Address *</label>
                <Input type="email" placeholder="jane@example.com" {...form.register("personalInfo.email")} className={errors.personalInfo?.email ? "border-red-500" : ""} />
                {errors.personalInfo?.email && <p className="text-sm text-red-500">{errors.personalInfo.email.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-base font-semibold">Phone Number *</label>
                <Input type="tel" placeholder="(555) 123-4567" {...form.register("personalInfo.phone")} className={errors.personalInfo?.phone ? "border-red-500" : ""} />
                {errors.personalInfo?.phone && <p className="text-sm text-red-500">{errors.personalInfo.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold">Date of Birth *</label>
              <Input 
                type="date" 
                max={new Date().toISOString().split('T')[0]}
                {...form.register("personalInfo.dateOfBirth", { valueAsDate: true })} 
                className={errors.personalInfo?.dateOfBirth ? "border-red-500" : ""} 
              />
              {errors.personalInfo?.dateOfBirth && <p className="text-sm text-red-500">{errors.personalInfo.dateOfBirth.message}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Visit Details */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-xl font-bold mb-1">Visit Details</h3>
              <p className="text-muted-foreground text-sm">Tell us why you are visiting and your appointment preferences.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-lg font-semibold">Service Interested In *</label>
                <select 
                  value={form.watch("visitDetails.serviceId")}
                  onChange={(e) => form.setValue("visitDetails.serviceId", e.target.value, { shouldValidate: true })}
                  className={`flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.visitDetails?.serviceId ? "border-red-500" : ""}`}
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                  ))}
                </select>
                {errors.visitDetails?.serviceId && <p className="text-sm text-red-500">{errors.visitDetails.serviceId.message}</p>}
              </div>
              
              </div>

            <div className="space-y-3">
              <label className="text-base font-semibold">Are you a new or returning patient? *</label>
              <div className="flex flex-wrap gap-8 py-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" value="new" {...form.register("visitDetails.patientStatus")} className="w-4 h-4 text-primary" />
                  <span>New Patient</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" value="returning" {...form.register("visitDetails.patientStatus")} className="w-4 h-4 text-primary" />
                  <span>Returning Patient</span>
                </label>
              </div>
              {errors.visitDetails?.patientStatus && <p className="text-sm text-red-500">{errors.visitDetails.patientStatus.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold">Chief Complaint / Reason for Visit *</label>
              <Textarea 
                placeholder="Please describe your symptoms, concerns, or reason for booking..." 
                {...form.register("visitDetails.chiefComplaint")}
                className={errors.visitDetails?.chiefComplaint ? "border-red-500" : ""}
              />
              {errors.visitDetails?.chiefComplaint && <p className="text-sm text-red-500">{errors.visitDetails.chiefComplaint.message}</p>}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-xl font-bold mb-1">Preferred Date & Time</h3>
              <p className="text-muted-foreground text-sm">When would you like to come in? We&apos;ll do our best to accommodate.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-lg font-semibold">Preferred Date *</label>
                <Input 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]} // Cannot select past dates
                  {...form.register("dateTime.preferredDate", { valueAsDate: true })} 
                  className={errors.dateTime?.preferredDate ? "border-red-500" : ""} 
                />
                {errors.dateTime?.preferredDate && <p className="text-sm text-red-500">{errors.dateTime.preferredDate.message}</p>}
              </div>
              
              <div className="space-y-3">
                <label className="text-lg font-semibold">Preferred Time of Day *</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" value="morning" {...form.register("dateTime.preferredTime")} className="w-4 h-4 text-primary" />
                    <span>Morning (8:00 AM - 12:00 PM)</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" value="afternoon" {...form.register("dateTime.preferredTime")} className="w-4 h-4 text-primary" />
                    <span>Afternoon (12:00 PM - 4:00 PM)</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" value="evening" {...form.register("dateTime.preferredTime")} className="w-4 h-4 text-primary" />
                    <span>Evening (4:00 PM - 6:00 PM)</span>
                  </label>
                </div>
                {errors.dateTime?.preferredTime && <p className="text-sm text-red-500">{errors.dateTime.preferredTime.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold">Additional Notes (Optional)</label>
              <Textarea 
                placeholder="Any special requests or details we should know before your visit?" 
                {...form.register("dateTime.additionalNotes")}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between pt-10 border-t">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={processPrevStep} disabled={isSubmitting}>
              <ChevronLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          ) : (
            <div></div> // Empty div for flex spacing
          )}
          
          {currentStep < 3 ? (
            <Button type="button" size="lg" onClick={processNextStep} className="font-bold px-8">
              Next Step <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={isSubmitting} className="font-bold px-8">
              {isSubmitting ? "Submitting Request..." : "Confirm & Submit Request"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
