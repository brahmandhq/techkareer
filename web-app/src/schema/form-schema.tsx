import { z } from "zod";

export const BountySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  twitterProfile: z
    .string()
    .url({ message: "Invalid Twitter profile url" })
    .refine((value) => value.includes("twitter.com"), {
      message: "Invalid Twitter profile url",
    }),
  linkedInProfile: z
    .string()
    .url({ message: "Invalid LinkedIn profile url" })
    .refine((value) => value.includes("linkedin.com"), {
      message: "Invalid LinkedIn profile url",
    }),
  submissionLink: z.string().url({ message: "Invalid submission link url" }),
  notes: z.string().optional(),
  upiId: z
    .string()
    .regex(/^[\w.-]+@[\w.-]+$/, { message: "Invalid UPI ID format" })
    .optional(),
  addToTalentPool: z.boolean().optional(),
});

export const onboardingOrgSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  location: z.string().min(2, { message: "Location is required" }),
  website: z.string().url({ message: "Invalid website url" }),
  foundedAt: z.date({ message: "Founded date is required" }),
  overview: z.string().min(2, { message: "Overview is required" }),
});

export const loginSignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;
export const profileSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  profilePic: z
    .any()
    .refine(
      (file) => {
        if(file.length === 0) return true
        return file?.[0]?.size <= MAX_UPLOAD_SIZE
      },
      { message: "File size should be less than 5MB" }
    )    
    .optional(),
   
  twitterProfile: z
    .string()
    .url({ message: "Invalid Twitter profile url" })
    .refine(
      (value) => value.includes("twitter.com") || value.includes("x.com"),
      { message: "Invalid Twitter profile url" }
    ),
  linkedInProfile: z
    .string()
    .url({ message: "Invalid LinkedIn profile url" })
    .refine((value) => value.includes("linkedin.com"), {
      message: "Invalid LinkedIn profile url",
    }),
  email: z.string().email(),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .optional(),
  // roles: z.array(z.string()).optional(),
  github: z
    .string()
    .url({ message: "Invalid github url" })
    .refine((value) => value.includes("github.com"), {
      message: "Invalid Github profile url",
    })
    .optional(),
  resume:   z
  .any()
  .refine(
    (file) => {
      return !(file[0]?.size <= MAX_UPLOAD_SIZE)
    },
    { message: "File size should be less than 5MB" }
  )
  .optional(),
  portfolio: z.string().url({ message: "Invalid portfolio url" }).optional(),
  jobseeker: z.boolean().optional(),
});


export const bountyCreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  twitterLink:   z.string()
  .url({ message: "Invalid Twitter profile url" })
  .refine(
    (value) => value.includes("twitter.com") || value.includes("x.com"),
    { message: "Invalid Twitter profile url" }
  ),
  amount: z.number().min(1, { message: "Amount is required" }),
  gigType: z.string().min(1, { message: "Gig type is required" }),

 deadlineTime: z.object({
  $H: z.number().int().min(0).max(23),
  $m: z.number().int().min(0).max(59),
}),
  deadlineDate: z.date({ message: "Deadline is required" }),
})
