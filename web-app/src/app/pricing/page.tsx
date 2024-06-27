"use client";
import React from "react";
import { Navbar } from "./Nav";
import { motion } from "framer-motion";
import { PricingCard } from "./PricingCard";
const page = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col justify-center mt-7 items-center"
      >
        <h1 className="text-5xl font-bold text-purple-500 underline-offset-1">
          Pricing
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex mt-24 mb-14  justify-center gap-7 flex-wrap"
      >
        <PricingCard title="$19/monthly" />
        <PricingCard title="$190/yearly" />
      </motion.div>
    </div>
  );
};

export default page;
