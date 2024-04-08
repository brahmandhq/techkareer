"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Testimonials from "./Testimonials";
import CompaniesHiredFromUs from "./CompaniesHiredFromUs";
import JobOpportunities from "./JobOpportunities";
import TopTalentSection from "./TopTalentSection";
import Head from "next/head";

const LandingPage = () => {
  return (
    <>
    <Head>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className="">
      <div className="flex flex-col items-center justify-center">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-gray-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Hire Tech Talent <br /> 10x faster
          </motion.h1>
          <h2 className="text-gray-400 text-lg sm:text-xl text-center">
            Sourcing, Reviewing, and Shortlisting candidates made 10x faster
          </h2>
        </LampContainer>
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <CompaniesHiredFromUs />
      </div>

      <div>
        <JobOpportunities />
      </div>

      <div>
        <TopTalentSection />
      </div>
    </main>
    </>
  );
};

export default LandingPage;
