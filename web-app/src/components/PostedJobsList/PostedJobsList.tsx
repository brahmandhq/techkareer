"use client"

import React, { useEffect, useState } from "react"
import { JobCard } from "../components"
import Loader from "../ui/Loader"
import { Opportunity } from "@/types/type"
import { Button } from "../ui/button"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

import Image from "next/image"
import { organizationPlaceHolder } from "@/assets/assets"

function PostedJobsList({ initialOpportunities }: { initialOpportunities: Opportunity[] }) {
  const { data: session } = useSession()
  const [jobs, setJobs] = useState<Opportunity[]>(initialOpportunities)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Opportunity | null>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true)
      try {
        const response = await fetch('/api/opportunities')
        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setIsLoading(false)
      }
    }

    const intervalId = setInterval(fetchJobs, 60000)

    return () => clearInterval(intervalId)
  }, [])
  
  /* if (!session) {
    return (
      <main className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="text-2xl font-medium text-violet-400 sm:text-3xl md:text-4xl lg:text-5xl mb-5">
          Login to view posted jobs
        </h3>
        <div className="group relative w-fit transition-transform duration-300 active:scale-95">
          <Link href="login">
            <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
              <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
                Login To Access
              </span>
            </button>
          </Link>
          <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
        </div>
      </main>
    )
  }
*/

  return (
    <>
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Loader size="30px" />
        </div>
      ) : (
        <>
          <div className="flex h-full w-full flex-col sm:flex-row">
            <div className="w-full overflow-y-auto border-r border-gray-300 sm:w-[45%]">
              {jobs &&
                jobs.map((job) =>
                  isMobile ? (
                    <Drawer key={job.jobId}>
                      <DrawerTrigger asChild>
                        <div>
                          <JobCard
                            job={job}
                            isSelected={selectedJob?.jobId === job.jobId}
                            onClick={() => setSelectedJob(job)}
                          />
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <JobDetails job={job} />
                      </DrawerContent>
                    </Drawer>
                  ) : (
                    <JobCard
                      key={job.jobId}
                      job={job}
                      isSelected={selectedJob?.jobId === job.jobId}
                      onClick={() => setSelectedJob(job)}
                    />
                  ),
                )}
            </div>
            {!isMobile && (
              <div className="hidden w-[55%] overflow-y-auto p-6 sm:block">
                {selectedJob ? (
                  <JobDetails job={selectedJob} />
                ) : (
                  <p>Select a job to view details</p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default PostedJobsList

function JobDetails({ job }: { job: Opportunity }) {
  return (
    <div className="p-6">
      {/* <img
        src={job.companyLogo}
        className="w-12 h-12 rounded-full"
        alt=""
        style={{
          filter: job.invertCompanyLogo ? "invert(100%)" : "",
        }}
      /> */}
      <div className="logo-container relative h-[4rem] w-[4rem] overflow-hidden">
        {job.companyLogo ? (
          <img
            src={job.companyLogo}
            className="absolute w-full rounded-full"
            alt=""
            width={50}
            // height={50}
            style={{
              filter: job.invertCompanyLogo ? "invert(100%)" : "",
            }}
          />
        ) : (
          <Image
            src={organizationPlaceHolder}
            className="h-full w-full rounded-full"
            alt=""
            width={50}
            height={50}
          />
        )}
      </div>
      <h2 className="mb-4 mt-2 text-2xl font-bold">{job.role}</h2>
      <p className="mb-2 text-lg">{job.companyName}</p>
      <p className="mb-4 text-gray-600">{job.location}</p>

      <h3 className="text-xl font-semibold mb-2">About the job</h3>
      <p>Project Role: {job.role}</p>
      <p>
        Project Role Description: Design, build and configure applications to
        meet business process and application requirements.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Required Skills</h3>
      <p>Must have skills: [List skills here]</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Experience</h3>
      <p>Minimum 2 Year(s) Of Experience Is Required</p>

      <div className="mt-4 flex space-x-4">
        <Link
          href={`https://airtable.com/appX3kHVPitSufv76/shrwapikBLgGoQcLD?prefill_Job ID=${job.jobId}`}
          target="_blank"
        >
          <Button variant="secondary" className="flex items-center space-x-2">
            <ExternalLinkIcon className="h-4 w-4" />
            <span>Apply</span>
          </Button>
        </Link>
        <Button variant="secondary" className="flex items-center space-x-2">
          <BookmarkIcon className="h-4 w-4" />
          <span>Save</span>
        </Button>
      </div>
    </div>
  )
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
