"use client";
import { SectionWrapper } from "./section-wrapper";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  sponsorLine1,
  sponsorLine2,
  sponsorLine3,
} from "@/assets/sponsor/sponsor";
import { motion } from "framer-motion";
export const Sponsor = () => {
  return (
    <SectionWrapper>
      <div className="relative">
        <div className="absolute bg-[#0D0D12]/70  w-full h-full z-[22] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] flex flex-col justify-center items-center">
          <motion.h3
            initial={{ opacity: 0, y: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white z-[22] opacity-100 mb-5"
          >
            Become a sponsor
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-white w-[80%] md:w-[30%] text-center mb-5"
          >
            Grow your reach by supporting the us and show to more than 20k
            people who you are.{" "}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-white text-black px-8 py-4  font-bold text-xs rounded-full tracking-wider shadow-[0px_0px_10px_1px_#fed7e2]  "
          >
            REGISTER
          </motion.button>
        </div>
        <InfiniteMovingCards
          items={sponsorLine1}
          className="mt-0"
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={sponsorLine2}
          className="mt-0"
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={sponsorLine3}
          className="mt-0"
          direction="left"
          speed="slow"
        />
      </div>
    </SectionWrapper>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: StaticImageData[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full  gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll "
        )}
      >
        {items.map((item, idx) => (
          <Image
            key={idx}
            src={item}
            alt="testimonials"
            width={350}
            className="rounded-xl"
          />
        ))}
      </ul>
    </div>
  );
};
