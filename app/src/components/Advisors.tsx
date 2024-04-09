import React from "react";
import AdvisorCard from "./ui/AdvisorCard";
import {
  RAJESH_MULLAPPA_PHOTO,
  SACHIN_AGGARWAL_PHOTO,
  SHIVAM_BHATIA_PHOTO,
  SHUBHAM_KANODIA_PHOTO,
} from "@/utils/constants";

const Advisors = () => {
  const advisors = [
    {
      name: "Rajesh Muppalla",
      photo: RAJESH_MULLAPPA_PHOTO,
      designation: "Co-Founder and Director of Engineering at Indix",
    },
    {
      name: "Shivam Bhatia",
      photo: SHIVAM_BHATIA_PHOTO,
      designation: "Co-Founder at Slingshot",
    },
    {
      name: "Sachin Aggarwal",
      photo: SACHIN_AGGARWAL_PHOTO,
      designation: "Principal Software Engineer at Quickreply.ai",
    },
    {
      name: "Shubham Kanodia",
      photo: SHUBHAM_KANODIA_PHOTO,
      designation: "Machine Learning Engineer at Avalara",
    },
  ];
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-4xl font-bold text-center text-white mb-20">
          Advisors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <AdvisorCard
              key={index}
              name={advisor.name}
              photo={advisor.photo}
              designation={advisor.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;