import * as z from "zod"
export const organizationSchema = z.object({
  email: z
    .string({ required_error: "Email is must" })
    .email({ message: "Invalid email format" }),
  password: z.string({ required_error: "Password is must" }),
  username: z
    .string({ required_error: "Username is must" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  name: z
    .string({ required_error: "name is must" })
    .min(2, { message: "Name must be at least 2 characters long" }),
  location: z.string({ required_error: "Location is must" }),
  website: z.string().url({ message: "Invalid URL format" }).optional(),
  overview: z
    .string({ required_error: "Overview is must" })
    .min(1, { message: "Overview is required" }),
  foundedAt: z
    .string({ required_error: "Founded is must" })
    .min(1, { message: "Founded date is required" }),
})

export const jobSeekerSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z.string({ required_error: "Password is required" }),
  username: z
    .string({ required_error: "Username is required" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  firstName: z
    .string({ required_error: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters long" }),
  description: z.string({ required_error: "Description is required" }),
  phoneNumber: z.string({ required_error: "Phone number is required" }),
})

export const JobProfileSchema = z.object({
  role: z.string({ required_error: "Role is required" }),
  requiredExperience: z
    .number({ required_error: "Experience is required" })
    .int()
    .positive(),
  employeeType: z.string({ required_error: "Employee Type is required" }),
  salary: z.number().int().positive(),
  jobDescription: z.string({ required_error: "JD is required" }),
  location: z.string({ required_error: "Location is required" }),
  skillsRequired: z.array(z.string(), {
    required_error: "Skills are required",
  }),
})

export const ProjectSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string(),
  deployedLink: z.string().optional(),
  repoLink: z.string().optional(),
})
