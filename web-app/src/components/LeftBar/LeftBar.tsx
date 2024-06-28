"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import logo from "@/assets/logo.webp";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { HiOutlineBuildingOffice, HiOutlineUser } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { PiHandshake, PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { CircleDollarSign } from "lucide-react";
import { getNameFromEmail } from "@/utils/utils";
import Link from "next/link";

function Leftbar() {
  const router = useRouter();
  const { data: authUser, status }: any = useSession();

  return (
    <>
      <>
        <div className="side-section  max-sm:hidden w-[20%] h-[100vh]  py-8 flex flex-col gap-10 px-2">
          <div className="logo-container flex w-full items-center justify-start">
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
          <div className=" cursor-pointer flex flex-col w-full">
            <Link
              href={`/opportunities`}
              className="flex justify-start relative items-center gap-4 px-2 py-2 hover:bg-gray-700/20 rounded-lg hover:text-white cursor-pointer  border-solid border-[1px] border-transparent text-[16px]  font-medium	 m-1"
            >
              <PiSuitcaseSimpleDuotone className=" cursor-pointer text-[19px] " />
              <p>Opportunities</p>
            </Link>
            {status == "loading" ? (
              <></>
            ) : authUser ? (
              <>
                <Link
                  href={`/profile/${authUser.user.id}`}
                  className=" hover:text-white cursor-pointer  rounded-lg  overflow-hidden hover:bg-gray-700/20   flex justify-start relative items-center gap-4 text-[16px] font-medium px-2 py-2 m-1 	truncate"
                >
                  <div className="profile-pic-container flex items-center justify-center  h-[20px] min-w-[20px] relative">
                    {authUser.user?.image ? (
                      <Image
                        alt=""
                        fill
                        className=" object-fill rounded-full"
                        src={authUser.user?.image}
                      ></Image>
                    ) : (
                      <HiOutlineUser className=" cursor-pointer text-[19px] " />
                    )}
                  </div>
                  {authUser.user.name
                    ? authUser.user.name
                    : getNameFromEmail(authUser.user.email)}
                </Link>
                <div
                  onClick={() =>
                    signOut({ redirect: false }).then(() => {
                      router.push("/");
                    })
                  }
                  className=" hover:text-white cursor-pointer  overflow-hidden   rounded-lg hover:bg-gray-700/20 flex justify-start relative items-center gap-4 px-2 text-[16px] font-medium  py-2 m-1"
                >
                  <IoIosLogOut className=" cursor-pointer text-[19px] " />
                  Logout
                </div>
              </>
            ) : (
              <div
                onClick={() => router.push(`/login`)}
                className="flex justify-start relative items-center gap-4 px-2 py-2 hover:bg-gray-700/20 rounded-lg hover:text-white cursor-pointer  border-solid border-[1px] border-transparent text-[16px]  font-medium	 m-1"
              >
                <HiOutlineUser className=" cursor-pointer text-[19px] " />
                Login{" "}
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
}

export default Leftbar;
