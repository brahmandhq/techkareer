"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import useDetectScroll from "@smakss/react-scroll-direction";
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
};

export const Companies = () => {
  const { scrollDir } = useDetectScroll();
  const [scrollDirection, setScrollDirection] = useState(scrollDir);
  useEffect(() => {
    setScrollDirection(scrollDir);
  }, [scrollDir]);

  return (
    <SectionWrapper>
      <div className="flex justify-center items-center gap-4 mt-12 flex-col w-full">
        <h1 className="text-center font-semibold text-4xl mb-16">
          Relied upon by a Fresh Generation of Companies
        </h1>
        <div className="flex gap-6">
          <AnimatePresence>
            <motion.div
              key="div1"
              initial="hidden"
              animate={
                scrollDirection === "up"
                  ? "down"
                  : "visible" || scrollDirection === "down"
                  ? "up"
                  : "visible"
              }
              exit="hidden"
              variants={variants}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <img
                src={"/companies/1.webp"}
                alt="company1"
                width={300}
                height={300}
              />

              <img
                src={"/companies/8.webp"}
                alt="company1"
                width={300}
                height={270}
                className="rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              key="div2"
              initial="hidden"
              animate={
                scrollDirection === "up"
                  ? "up"
                  : "visible" || scrollDirection === "down"
                  ? "down"
                  : "visible"
              }
              exit="hidden"
              variants={variants}
              className="flex flex-col gap-2"
            >
              <img
                src={"/companies/3.webp"}
                alt="company1"
                width={300}
                height={270}
                className="rounded-2xl"
              />
              <img
                src={"/companies/4.webp"}
                alt="company2"
                height={300}
                width={300}
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              key="div3"
              initial="hidden"
              animate={
                scrollDirection === "up"
                  ? "down"
                  : "visible" || scrollDirection === "down"
                  ? "up"
                  : "visible"
              }
              exit="hidden"
              variants={variants}
              className="md:flex flex-col gap-2 hidden"
            >
              <img
                src={"/companies/5.webp"}
                alt="company1"
                width={300}
                height={300}
              />
              <img
                src={"/companies/6.webp"}
                alt="company1"
                width={300}
                height={270}
                className="rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              key="div4"
              initial="hidden"
              animate={
                scrollDirection === "up"
                  ? "up"
                  : "visible" || scrollDirection === "down"
                  ? "down"
                  : "visible"
              }
              exit="hidden"
              variants={variants}
              className="md:flex flex-col gap-2 hidden"
            >
              <img
                src={"/companies/2.webp"}
                alt="company1"
                width={300}
                height={270}
                className="rounded-2xl"
              />
              <img
                src={"/companies/7.webp"}
                alt="company1"
                width={300}
                height={300}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};
