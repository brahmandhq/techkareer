"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { c1, c2, c3, c4, c5, c6, c7, c8 } from "@/assets/companies/comp"
import { SectionWrapper } from "./section-wrapper"
import useDetectScroll from "@smakss/react-scroll-direction"
const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  up: {
    opacity: 1,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
  down: {
    opacity: 1,
    y: 20,
    transition: {
      duration: 0.5,
    },
  },
}

export const Companies = () => {
  const { scrollDir } = useDetectScroll()
  const [scrollDirection, setScrollDirection] = useState(scrollDir)
  useEffect(() => {
    setScrollDirection(scrollDir)
  }, [scrollDir])

  return (
    <SectionWrapper>
      <div className="mt-12 flex w-full flex-col items-center justify-center gap-4">
        <h1 className="mb-16 text-center text-4xl font-semibold">
          Relied upon by a Fresh Generation of Companies
        </h1>
        <div className="flex gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={c1} alt="company1" width={300} height={300} />

            <Image
              src={c8}
              alt="company1"
              width={300}
              height={270}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={c3}
              alt="company1"
              width={300}
              height={270}
              className="rounded-2xl"
            />
            <Image src={c4} alt="company2" height={300} width={300} />
          </div>
          <div className="hidden flex-col gap-2 md:flex">
            <Image src={c5} alt="company1" width={300} height={300} />
            <Image
              src={c6}
              alt="company1"
              width={300}
              height={270}
              className="rounded-2xl"
            />
          </div>
          <div className="hidden flex-col gap-2 md:flex">
            <Image
              src={c2}
              alt="company1"
              width={300}
              height={270}
              className="rounded-2xl"
            />
            <Image src={c7} alt="company1" width={300} height={300} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
