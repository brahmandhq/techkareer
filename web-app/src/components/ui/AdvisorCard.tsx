import Image from "next/image"
import Link from "next/link"
import React from "react"

interface AdvisorCardProps {
  name: string
  photo: string
  designation: string
  linkedin: string
}

const AdvisorCard = ({
  name,
  photo,
  designation,
  linkedin,
}: AdvisorCardProps) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center rounded-lg p-6 antialiased shadow-md"
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
      href={linkedin}
      target="_blank"
    >
      <div className="flex flex-col items-center">
        <Image
          className="mb-4 rounded-full text-sm text-white"
          width={100}
          height={100}
          src={photo}
          alt={name}
        />
        <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
          {name}
        </h3>
        <span className="sm:text-md text-center text-sm text-white">
          {designation}
        </span>
      </div>
    </Link>
  )
}

export default AdvisorCard
