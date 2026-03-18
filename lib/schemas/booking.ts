import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[+\d\s().-]{10,20}$/, "Please enter a valid phone number"),
  dateOfBirth: z.date({
    message: "Date of birth is required",
  }),
});

export const visitDetailsSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),
  chiefComplaint: z.string().min(10, "Please briefly describe the reason for your visit (min 10 characters)"),
  patientStatus: z.enum(["new", "returning"]),
});

export const dateTimeSchema = z.object({
  preferredDate: z.date({
    message: "Please select a preferred date",
  }),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  additionalNotes: z.string().optional(),
});

export const bookingFormSchema = z.object({
  personalInfo: personalInfoSchema,
  visitDetails: visitDetailsSchema,
  dateTime: dateTimeSchema,
});

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type VisitDetailsData = z.infer<typeof visitDetailsSchema>;
export type DateTimeData = z.infer<typeof dateTimeSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
