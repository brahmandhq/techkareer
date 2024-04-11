import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const JobOpportunities = () => {
  const initialDisplayedJobs = 4;
  const [displayedJobs, setDisplayedJobs] = useState(initialDisplayedJobs);
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);

  type Job = {
    id: string;
    fields: {
      Name: string;
      Company_Name: string;
      Description: string;
      Role: string;
      Type: string;
      Location: string;
      "Pay Range": string;
      "One-liner": string;
      "Created at": string;
      "Company Logo": [
        {
          url: string;
        }
      ];
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleJobOpportunityClick = (id: String) => {
    router.push(`/jobs/${id}`);
  };

  const handleBrowseMore = () => {
    setDisplayedJobs(displayedJobs + 4);
  };

  async function fetchData() {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.DEVKIT_AIRTABLE_API_KEY}`,
        },
      };
      const response = await fetch(
        "https://api.airtable.com/v0/appX3kHVPitSufv76/Opportunities",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log(data.records);
      setJobs(data.records);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Job Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobs.slice(0, displayedJobs).map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-lg shadow-lg bg-gray-800 flex flex-col cursor-pointer"
              onClick={() => handleJobOpportunityClick(job.id)}
            >
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  {job.fields["Company Logo"] &&
                  job.fields["Company Logo"].length > 0 ? (
                    <Image
                      alt="company-logo"
                      src={job.fields["Company Logo"][0].url}
                      height={50}
                      width={50}
                    />
                  ) : (
                    <div>company-logo</div>
                  )}
                  <h3 className="text-xl font-semibold text-white">
                    {job.fields.Name}
                  </h3>
                </div>

                <p className="text-gray-400">{job.fields.Company_Name}</p>
              </div>
              <p className="text-gray-300 mb-6">{job.fields["One-liner"]}</p>
              <p className="text-gray-300 mb-6">{job.fields.Description}</p>
              <div className="flex flex-col sm:flex-row justify-between text-gray-400 mb-6">
                <p>{job.fields["Pay Range"]}</p>
                <p>{job.fields.Role}</p>
                <p>{job.fields.Type}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-gray-400">
                <p>{job.fields.Location}</p>
                <p>Date:{job.fields["Created at"]}</p>
                <p>Job-id:{job.id}</p>
              </div>
            </div>
          ))}
        </div>

        {displayedJobs < jobs.length && (
          <div className="flex items-center justify-center mt-8">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleBrowseMore}
            >
              Browse More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpportunities;
