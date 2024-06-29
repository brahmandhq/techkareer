"use client";
import { SectionWrapper } from "./section-wrapper";
import Image, { StaticImageData } from "next/image";
import bg from "@/assets/bg.webp";
import { ChevronRight, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { opportunitiesArray } from "@/constants/opportunities";
import Link from "next/link";
export const Opportunities = () => {
  return (
    <SectionWrapper>
      <div
        className="flex gap-4 flex-nowrap relative flex-col lg:flex-row"
        id="opportunities"
      >
        <div className="w-full lg:w-[30%] flex flex-col gap-3 mb-8">
          <h3 className="bg-gradient-to-r from-blue-400 via-ping-200 to-pink-400 inline-block text-transparent bg-clip-text">
            Opportunities
          </h3>
          <div className="text-3xl w-full font-semibold">
            <span>Explore</span>
            <br />
            <span className="text-purple-400">Rewarding Career</span>
            <br />
            <span>Opportunities</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-xs text-gray-200/90"
          >
            Become part of dynamic and innovative team - Unlock your potential
            in a collaborative environment driven by excellence.
          </motion.p>
          <button className="bg-purple-400 hidden w-fit px-6 py-2  justify-center items-center gap-4 mt-3 cursor-pointer rounded-full group">
            <span>Explore </span>{" "}
            <ChevronRight className="inline-block group-hover:translate-x-2 transition-all text-white" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
          {opportunitiesArray.map((item, index) => (
            <OppurtunitiesCard
              key={index}
              company={item.company}
              logo={item.logo}
              position={item.position}
              payRange={item.payRange}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

type oppurtunitiesCardProps = {
  company: string;
  logo: StaticImageData;
  position: string;
  payRange: string;
  features: {
    location: string;
    date: string;

    jobType: string;
  }[];
};
const OppurtunitiesCard: React.FC<oppurtunitiesCardProps> = ({
  company,
  logo,
  position,
  payRange,
  features,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="rounded-2xl p-4 w-[340px] md:min-w-[390px] lg:max-w-[420px] lg:min-w-[390px] min-h-[501px]   flex flex-col gap-4 justify-evenly"
    >
      <div className="flex justify-start items-center gap-2">
        <img
          src={"/logo.webp"}
          alt="logo"
          height={40}
          width={40}
          className="rounded-full  bg-black/80"
        />
        <p className="text-lg text-black ">{company}</p>
      </div>
      <div className="flex justify-center items-center flex-col mb-6">
        <h3 className="text-xl font-semibold text-[#02015A] mb-3">
          {position.toUpperCase()}
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mt-2  w-[80%] text-black/80 text-center font-lighter font-bold tracking-wider leading-6"
        >
          {payRange}
        </motion.p>
      </div>
      <div>
        {features.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={index}
            className="flex justify-center items-start gap-4 flex-col px-4 py-6"
          >
            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2 w-full">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{item.location}</span>
            </p>
            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2 w-full">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{item.date}</span>
            </p>

            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2 w-full">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{item.jobType}</span>
            </p>
          </motion.div>
        ))}
      </div>
      <Link
        href="https://airtable.com/appX3kHVPitSufv76/shrqqOAXP51PPGcli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-5 py-3 rounded-full bg-black text-white w-fit self-center text-2xl font-semibold flex group transition-all justify-center items-center gap-4">
          <span>Apply Now</span>{" "}
          <ChevronRight className="inline-block group-hover:translate-x-2 transition-all" />
        </button>
      </Link>
    </div>
  );
};
