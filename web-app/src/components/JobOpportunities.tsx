import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Job } from "@/lib/types"

const JobOpportunities = () => {
  const initialDisplayedJobs = 4
  const [displayedJobs, setDisplayedJobs] = useState(initialDisplayedJobs)
  // modify Job types based on the airtable data
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("/api/get_job_opportunities")
        const response = await data.json()
        if ("error" in response) {
          throw new Error(response.error)
        }
        setJobs(response.jobsData)
      } catch (error) {
        console.error("Error fetching job details:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleJobOpportunityClick = (jobId: String) => {
    router.push(`/jobs/${jobId}`)
  }

  const handleBrowseMore = () => {
    setDisplayedJobs(displayedJobs + 4)
  }

  if (loading) {
    return (
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Job Opportunities
        </h2>
        {/* TODO: we can have a loading skeleton for jobs here */}
        <p className="text-center text-2xl text-white">Loading Jobs....</p>
      </div>
    )
  }

  if (!jobs || jobs.length === 0) {
    return (
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Job Opportunities
        </h2>
        <p className="text-center text-2xl text-white">No jobs available.</p>
      </div>
    )
  }

  return (
    <section className="py-12" id="JobOpportunity">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Job Opportunities
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {jobs.slice(0, displayedJobs).map((job) => (
            <div
              key={job.id}
              className="flex cursor-pointer flex-col rounded-lg bg-gray-800 p-6 shadow-lg"
              onClick={() => handleJobOpportunityClick(job.jobId)}
            >
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <Image
                    alt="company-logo"
                    src={require(`../public/images/${job.logo}`)}
                    height={50}
                    width={50}
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {job.name}
                  </h3>
                </div>

                <p className="text-gray-400">{job.companyName}</p>
              </div>
              <p className="mb-6 text-gray-300">{job.oneLiner}</p>
              <p className="mb-6 text-gray-300">{job.description}</p>
              <div className="mb-6 flex flex-col justify-between text-gray-400 sm:flex-row">
                <p>{job.payRange}</p>
                <p>{job.role}</p>
                <p>{job.type}</p>
              </div>
              <div className="flex flex-col justify-between text-gray-400 sm:flex-row">
                <p>{job.location}</p>
                <p>Date:{job.createdAt}</p>
                <p>Job-id:{job.jobId}</p>
              </div>
            </div>
          ))}
        </div>

        {displayedJobs < jobs.length && (
          <div className="mt-8 flex items-center justify-center">
            <Button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleBrowseMore}
            >
              Browse More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default JobOpportunities
