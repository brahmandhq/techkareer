"use client"
import { NavLinks } from "@/constants/NavLinks"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import logo from "@/assets/logo.webp"
import Image from "next/image"
import { Link as ReactLink } from "react-scroll"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"

export const Navbar = () => {
  const { status } = useSession()

  const [loggingOut, setLoggingOut] = useState(false)
  const router = useRouter()
  let pathname = usePathname() || "/"

  return (
    <nav className="flex h-fit w-full items-center justify-center py-4 md:py-9">
      <div className="flex w-[1300px] items-center justify-between px-4 md:ml-8 md:px-6">
        <div className="w-[160px] md:w-[220px]">
          <Image
            className="cursor-pointer"
            src={logo}
            alt="TechKareer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="hidden flex-row items-center justify-center gap-4 md:flex">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={cn(
                "rounded-full border-[1px] border-solid border-transparent bg-transparent px-5 py-3 text-xs font-bold transition-all",
                "transition-all duration-500 hover:border-gray-200/60",
                pathname === link.path
                  ? "border-gray-200/60"
                  : "border-transparent",
              )}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <ReactLink
            spy={true}
            smooth={true}
            duration={500}
            to={"opportunities"}
          >
            <button className="rounded-full border-[.1px] border-solid border-gray-200/10 bg-[#15151f] px-4 py-2 font-bold tracking-wider duration-300 hover:bg-[#F9F9F9] hover:text-[#000] md:px-6 md:py-3">
              <p className="text-xs md:text-sm">OPPORTUNITIES</p>
            </button>
          </ReactLink>
          {status == "authenticated" ? (
            <button
              onClick={() => {
                router.push("/opportunities")
              }}
              className="flex min-w-[100px] items-center justify-center rounded-full border-[.1px] border-solid border-gray-200/10 bg-white/90 px-4 py-2 font-bold tracking-wider md:px-6 md:py-3"
            >
              <p className="text-xs text-black md:text-sm">
                {loggingOut ? <Loader className="animate-spin" /> : "DASHBOARD"}
              </p>
            </button>
          ) : (
            <Link href={"/login"}>
              <button className="rounded-full border-[.1px] border-solid border-gray-200/10 bg-white/90 px-4 py-2 font-bold tracking-wider duration-300 hover:bg-[#F9F9F9] hover:text-[#000] md:px-6 md:py-3">
                <p className="text-xs text-black md:text-sm">LOGIN</p>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

// import React from "react";

// export const Navbar = () => {
//   return <div>Navbar</div>;
// };
