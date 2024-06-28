import { StringFormat } from "firebase/storage"

export interface User {
  id: number
  name?: string
  email: string
  password?: string
  onboarded: boolean
  description?: string
  profilePic: string
  provider: string
  type: number
}

export interface Candidate {
  id: number
  name: string
  email: string
  github?: string
  resume?: string
  linkedin?: string
  roles: string[]
  commitment: string[]
  opportunity?: string
  profilePic: string
  introduction?: string
  twitter?: string
  minIncome?: number
  referralID?: string
  createdAt: Date
}
export interface Opportunity {
  id?: string
  // title: string;
  companyName: string
  companyTagline?: string
  companyDesc?: string
  companyLogo?: string
  role: string
  // roleApplyingFor: string;
  // payRange: string;
  quantity?: number
  currency?: string
  minAnnualPay?: number
  maxAnnualPay?: number
  minMonthlyPay?: number
  maxMonthlyPay?: number
  equity?: number
  // vestingProcedure?: string;
  // potentialRevenueCompany?: number;
  // potentialRevenueCandidate?: number;
  // waiveFeesCompany?: boolean;
  // waiveFeesCandidate?: boolean;
  // totalPotentialRevenue?: number;
  type?: string
  opportunityId?: string
  commitment?: string
  location?: string
  durationInMonths?: number
  // yearsExp?: string;
  deadline?: Date
  isActive?: boolean
  // cutsomJobPortalLink?: string;
  createdAt?: Date
  updatedAt?: Date
  jobId: string
  invertCompanyLogo?: boolean
}

export interface ZodErrorResponse {
  error: {
    issues: {
      code: string
      expected: string
      received: string
      path: string[]
      message: string
    }[]
    name: string
  }
}
