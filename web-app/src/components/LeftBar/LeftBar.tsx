"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import logo from "@/assets/logo.webp"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { FaEnvelopeCircleCheck } from "react-icons/fa6"
import { HiOutlineBuildingOffice, HiOutlineUser } from "react-icons/hi2"
import { IoIosLogOut } from "react-icons/io"
import { IoPeopleOutline } from "react-icons/io5"
import { PiHandshake, PiSuitcaseSimpleDuotone } from "react-icons/pi"
import { CircleDollarSign } from "lucide-react"
import { getNameFromEmail } from "@/utils/utils"
import Link from "next/link"

function Leftbar() {
  const router = useRouter()
  const { data: authUser, status }: any = useSession()

  return (
    <>
      <>
        <div className="side-section flex h-[100vh] w-[20%] flex-col gap-10 px-2 py-8 max-sm:hidden">
          <div className="logo-container flex w-full items-center justify-start">
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
          <div className="flex w-full cursor-pointer flex-col">
            <Link
              href={`/opportunities`}
              className="relative m-1 flex cursor-pointer items-center justify-start gap-4 rounded-lg border-[1px] border-solid border-transparent px-2 py-2 text-[16px] font-medium hover:bg-gray-700/20 hover:text-white"
            >
              <PiSuitcaseSimpleDuotone className="cursor-pointer text-[19px]" />
              <p>Opportunities</p>
            </Link>
            {status == "loading" ? (
              <></>
            ) : authUser ? (
              <>
                <Link
                  href={`/profile/${authUser.user.id}`}
                  className="relative m-1 flex cursor-pointer items-center justify-start gap-4 overflow-hidden truncate rounded-lg px-2 py-2 text-[16px] font-medium hover:bg-gray-700/20 hover:text-white"
                >
                  <div className="profile-pic-container relative flex h-[20px] min-w-[20px] items-center justify-center">
                    {authUser.user?.image ? (
                      <Image
                        alt=""
                        fill
                        className="rounded-full object-fill"
                        src={authUser.user?.image}
                      ></Image>
                    ) : (
                      <HiOutlineUser className="cursor-pointer text-[19px]" />
                    )}
                  </div>
                  {authUser.user.name
                    ? authUser.user.name
                    : getNameFromEmail(authUser.user.email)}
                </Link>
                <div
                  onClick={() =>
                    signOut({ redirect: false }).then(() => {
                      router.push("/")
                    })
                  }
                  className="relative m-1 flex cursor-pointer items-center justify-start gap-4 overflow-hidden rounded-lg px-2 py-2 text-[16px] font-medium hover:bg-gray-700/20 hover:text-white"
                >
                  <IoIosLogOut className="cursor-pointer text-[19px]" />
                  Logout
                </div>
              </>
            ) : (
              <div
                onClick={() => router.push(`/login`)}
                className="relative m-1 flex cursor-pointer items-center justify-start gap-4 rounded-lg border-[1px] border-solid border-transparent px-2 py-2 text-[16px] font-medium hover:bg-gray-700/20 hover:text-white"
              >
                <HiOutlineUser className="cursor-pointer text-[19px]" />
                Login{" "}
              </div>
            )}
          </div>
        </div>
      </>
    </>
  )
}

export default Leftbar
