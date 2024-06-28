import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

import { candidates } from "@/constants/candidates";
import Link from "next/link";
console.log(candidates);

const page = () => {
  return (
    <div className="flex flex-col  gap-4 mx-10 my-10 flex-wrap justify-center">
      {candidates.map((candidate) => (
        <div key={candidate.ID} className="bg-gray-800/20 p-4 rounded-lg ">
          <h1 className="font-semibold py-3 text-2xl tracking-wide">
            {candidate.Name}
          </h1>
          {/* <Link
            className="text-gray-400 font-medium pb-3"
            target="_blank" href={`mailto:${candidate.Email}`}
          >
            {candidate.Email}
          </Link> */}
          <p className="text-gray-400 font-medium tracking-wide ">
            Intro - {candidate.Introduction.Pitch}
          </p>
          <div className="flex gap-3 mt-3">
            <Link target="_blank" href={`mailto:${candidate.Email}`}>
              <Mail className="hover:text-gray-200 text-gray-400" size={28} />
            </Link>
            <Link target="_blank" href={candidate.LinkedIn}>
              <Linkedin
                className="hover:text-gray-200 text-gray-400"
                size={28}
              />
            </Link>
            {candidate.Twitter && (
              <Link target="_blank" href={candidate.Twitter}>
                <Twitter
                  className="hover:text-gray-200 text-gray-400"
                  size={28}
                />
              </Link>
            )}

            <Link target="_blank" href={candidate.GitHub}>
              <Github className="hover:text-gray-200 text-gray-400" size={28} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;