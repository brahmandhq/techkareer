import React from "react"
import AdvisorCard from "./ui/AdvisorCard"
import {
  RAJESH_MULLAPPA_PHOTO,
  SACHIN_AGGARWAL_PHOTO,
  SHIVAM_BHATIA_PHOTO,
  SHUBHAM_KANODIA_PHOTO,
} from "@/utils/constants"

const Advisors = () => {
  const advisors = [
    {
      name: "Rajesh Muppalla",
      photo: RAJESH_MULLAPPA_PHOTO,
      designation: "Co-Founder and Director of Engineering at Indix",
      linkedin: "https://www.linkedin.com/in/codingnirvana/",
    },
    {
      name: "Shivam Bhatia",
      photo: SHIVAM_BHATIA_PHOTO,
      designation: "Co-Founder at Slingshot",
      linkedin: "https://www.linkedin.com/in/shivambhatia5432/",
    },
    {
      name: "Sachin Aggarwal",
      photo: SACHIN_AGGARWAL_PHOTO,
      designation: "Principal Software Engineer at Quickreply.ai",
      linkedin: "https://www.linkedin.com/in/sachin-aggarwal-82794a81/",
    },
    {
      name: "Shubham Kanodia",
      photo: SHUBHAM_KANODIA_PHOTO,
      designation: "Machine Learning Engineer at Avalara",
      linkedin: "https://www.linkedin.com/in/shubham-kanodia123/",
    },
  ]
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="mb-20 text-center text-xl font-bold text-white sm:text-4xl">
          Advisors
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advisors.map((advisor, index) => (
            <AdvisorCard
              key={index}
              name={advisor.name}
              photo={advisor.photo}
              designation={advisor.designation}
              linkedin={advisor.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advisors
