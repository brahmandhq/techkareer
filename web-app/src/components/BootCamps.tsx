import React from "react";
import { SectionWrapper } from "./section-wrapper";
import { motion } from "framer-motion";
import bootCamp from "@/constants/bootcamp";
import Image from "next/image";

console.log(bootCamp);

const BootCamps = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-center items-center flex-col" id="features">
        <h2 className="text-right w-full md:text-center text-4xl tracking-wide font-semibold mt-5 mb-15">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4">
          {bootCamp.map((item) => (
            <div key={item.name}>
              <Image
                src={item.logo}
                alt={item.name}
                layout="responsive"
                width={300}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BootCamps;
