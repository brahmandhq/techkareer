import Link from "next/link";
import React from "react";

interface AdvisorCardProps {
  name: string;
  photo: string;
  designation: string;
  linkedin: string;
}

const AdvisorCard = ({
  name,
  photo,
  designation,
  linkedin,
}: AdvisorCardProps) => {
  return (
    <Link
      className="antialiased p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
      href={linkedin}
      target="_blank"
    >
      <div className="flex flex-col items-center">
        <img
          className="mb-4 rounded-full text-white text-sm"
          width={100}
          height={100}
          src={photo}
          alt={name}
        />
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
          {name}
        </h3>
        <span className="text-white text-sm sm:text-md text-center">
          {designation}
        </span>
      </div>
    </Link>
  );
};

export default AdvisorCard;
