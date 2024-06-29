"use client";
import { NavLinks } from "@/constants/NavLinks";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export const Navbar = () => {
  const { status } = useSession();

  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();
  let pathname = usePathname() || "/";

  return (
    <nav className="w-full h-fit py-4 md:py-9 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }} // Set initial opacity to 0
        animate={{ opacity: 1 }} // Animate opacity to 1
        transition={{ duration: 0.8 }}
        className="flex  justify-between items-center w-[1300px] md:px-6 md:ml-8 px-4 "
      >
        <div className="max-sm:w-[120px] w-[160px] md:w-[220px]">
          <img
            className="cursor-pointer"
            src={"/logo.webp"}
            alt="TechKareer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="md:flex flex-row justify-center items-center gap-4 hidden">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={cn(
                "text-xs rounded-full bg-transparent font-bold px-5 py-3 border-[1px] border-solid border-transparent transition-all",
                "hover:border-gray-200/60 transition-all duration-500",
                pathname === link.path
                  ? "border-gray-200/60"
                  : "border-transparent"
              )}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <div className=" flex flex-row gap-5 max-sm:gap-2">
          <ReactLink
            spy={true}
            smooth={true}
            duration={500}
            to={"opportunities"}
          >
            <motion.button
              className="bg-[#15151f] px-4 py-2 md:px-6 md:py-3 border-[.1px] border-solid border-gray-200/10 rounded-full  font-bold tracking-wider"
              whileHover={{ backgroundColor: "#F9F9F9", color: "#000" }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-xs md:text-sm">POSITION</p>
            </motion.button>
          </ReactLink>
          {status ? (
            <motion.button
              onClick={() => {
                router.push("/opportunities");
              }}
              className="bg-white/90 min-w-[100px] flex justify-center items-center px-4 py-2 md:px-6 md:py-3 border-[.1px] border-solid border-gray-200/10 rounded-full   font-bold tracking-wider "
              whileHover={{ backgroundColor: "#F9F9F9", color: "#000" }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-xs md:text-sm text-black">
                {loggingOut ? <Loader className="animate-spin" /> : "Dashboard"}
              </p>
            </motion.button>
          ) : (
            <Link href={"/login"}>
              <motion.button
                className="bg-white/90 px-4 py-2 md:px-6 md:py-3 border-[.1px] border-solid border-gray-200/10 rounded-full   font-bold tracking-wider"
                whileHover={{ backgroundColor: "#F9F9F9", color: "#000" }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-xs md:text-sm text-black">LOGIN</p>
              </motion.button>
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

// import React from "react";

// export const Navbar = () => {
//   return <div>Navbar</div>;
// };
