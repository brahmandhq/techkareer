"use client";
// import { useFetchJobsPostedByOrganzations } from "@/hooks/useJobData";
import React from "react";
import { JobCard } from "../components";
import Loader from "../ui/Loader";
import { Opportunity } from "@/types/type";

function PostedJobsList() {
  // const { data: jobs, isLoading } = useFetchJobsPostedByOrganzations();

  const isLoading = false;

  const jobs: Opportunity[] = [
    {
      role: "Data Engineer",
      companyName: "Dubverse.ai",
      currency: "INR",
      minAnnualPay: 600000,
      maxAnnualPay: 1500000,
      companyLogo:
        "https://dubverse.ai/wp-content/uploads/2021/03/Dubverse-Video-Dubbing-Online-Logo.svg",
      location: "Gurugram, India",
      jobId: "DUBVERSE_DATA_WIZARD",
    },
    {
      role: "ML Engineer",
      companyName: "Dubverse.ai",
      currency: "INR",
      minAnnualPay: 600000,
      maxAnnualPay: 1500000,
      companyLogo:
        "https://dubverse.ai/wp-content/uploads/2021/03/Dubverse-Video-Dubbing-Online-Logo.svg",
      location: "Gurugram, India",
      jobId: "DUBVERSE_TRANSFORMER_TAMER",
    },
    {
      role: "Software Engineer Intern",
      companyName: "IndianAppGuy",
      currency: "INR",
      minMonthlyPay: 25000,
      maxMonthlyPay: 25000,
      location: "Remote (India)",
      jobId: "INDIAN_APP_GUY_SDE_INTERN",
      companyLogo: "https://www.indianappguy.com/assets/logo.svg",
      invertCompanyLogo: true,
    },
    {
      role: "UI/UX Designer",
      companyName: "Reddy Games",
      currency: "INR",
      minMonthlyPay: 32000,
      maxMonthlyPay: 32000,
      durationInMonths: 3,
      location: "Remote (India)",
      jobId: "REDDY_GAMES_UI_UX_DESIGNER",
    },
    {
      role: "3D Designer",
      companyName: "Reddy Games",
      currency: "INR",
      minMonthlyPay: 32000,
      maxMonthlyPay: 32000,
      durationInMonths: 3,
      location: "Remote (India)",
      jobId: "REDDY_GAMES_3D_DESIGNER",
    },
    {
      role: "Software Engineer Intern",
      companyName: "TechKareer",
      currency: "INR",
      minMonthlyPay: 15000,
      maxMonthlyPay: 15000,
      location: "Remote (India)",
      jobId: "TECHKAREER_SDE_INTERN_JUN_24",
      companyLogo: "https://techkareer.com/logo.webp",
    },
  ];

  return (
    <>
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Loader size="30px" />
        </div>
      ) : (
        <div className="flex flex-row h-full w-full overflow-auto gap-6 flex-wrap">
          {jobs &&
            jobs.map((job) => <JobCard job={job} key={job.id}></JobCard>)}
        </div>
      )}
    </>
  );
}

export default PostedJobsList;
