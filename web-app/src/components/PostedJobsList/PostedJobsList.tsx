"use client";
// import { useFetchJobsPostedByOrganzations } from "@/hooks/useJobData";
import React, { useEffect, useState } from "react";
import { JobCard } from "../components";
import Loader from "../ui/Loader";
import { Opportunity } from "@/types/type";
import { Button } from "../ui/button";
import Link from "next/link";

function PostedJobsList() {

  const [jobs, setJobs] = useState<Opportunity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState<Opportunity | null>(null)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/opportunities')
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <div className="flex h-full w-full">
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Loader size="30px" />
        </div>
      ) : (
        <>
          <div className="w-[45%] border-r border-gray-300 overflow-y-auto">
            {jobs && jobs.map((job) => (
              <JobCard
                key={job.jobId}
                job={job}
                isSelected={selectedJob?.jobId === job.jobId}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>
          <div className="w-2/3 p-6">
            {selectedJob ? (
              <JobDetails job={selectedJob} />
            ) : (
              <p>Select a job to view details</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default PostedJobsList;

function JobDetails({ job }: { job: Opportunity }) {
  return (
    <div>
      <img
        src={job.companyLogo}
        className="w-12 h-12 rounded-full"
        alt=""
        style={{
          filter: job.invertCompanyLogo ? "invert(100%)" : "",
        }}
      />
      <h2 className="text-2xl font-bold mb-4">{job.role}</h2>
      <p className="text-lg mb-2">{job.companyName}</p>
      <p className="text-gray-600 mb-4">{job.location}</p>

      <h3 className="text-xl font-semibold mb-2">About the job</h3>
      <p>Project Role: {job.role}</p>
      <p>Project Role Description: Design, build and configure applications to meet business process and application requirements.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Required Skills</h3>
      <p>Must have skills: [List skills here]</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Experience</h3>
      <p>Minimum 2 Year(s) Of Experience Is Required</p>

      <div className="flex space-x-4 mt-4">
        <Link href={`https://airtable.com/appX3kHVPitSufv76/shrwapikBLgGoQcLD?prefill_Job ID=${job.jobId}`} target="_blank">
          <Button variant="secondary" className="flex items-center space-x-2">
            <ExternalLinkIcon className="w-4 h-4" />
            <span>Apply</span>
          </Button>
        </Link>

        <Button variant="secondary" className="flex items-center space-x-2">
          <BookmarkIcon className="w-4 h-4" />
          <span>Save</span>
        </Button>
      </div>
    </div >
  );
}

function BookmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

function ExternalLinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}
