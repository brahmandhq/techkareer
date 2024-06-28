"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { PiHandshakeDuotone, PiSuitcaseDuotone } from "react-icons/pi";

function BottomBar() {
  const { data: authData, status }: any = useSession();
  const router = useRouter();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  return (
    <>
      <div className="relative bottom-[0px] bottom-section max-sm:block hidden w-full flex justify-between  items-center border-t-[1px] border-t-[solid] border-t-[#E1E4E8] h-[10vh] max-h-[10vh]">
        <div className=" flex  justify-center items-center h-full gap-4">
          <div
            onClick={() => router.push("/opportunities")}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px]  font-medium	my-"
          >
            <PiSuitcaseDuotone className="nav-items-logo text-[19px]"></PiSuitcaseDuotone>
            Opportunities
          </div>
          {/* <div
            onClick={() => router.push("/jobseekers")}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium my-3 mx-[5px] "
          >
            <IoPeopleOutline className="nav-items-logo text-[19px]"></IoPeopleOutline>
            People
          </div> */}
          {/* <div
            onClick={() => router.push("/companies")}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium my-3 mx-[5px]"
          >
            <HiOutlineBuildingOffice className="nav-items-logo text-[19px]"></HiOutlineBuildingOffice>
            Company
          </div> */}
          {/* {authData?.user.role === "Jobseeker" && (
            <div
              onClick={() => router.push("/connections")}
              className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium my-3 mx-[5px]"
            >
              <PiHandshakeDuotone className="nav-items-logo text-[19px]"></PiHandshakeDuotone>
              Connects
            </div>
          )}

          {authData?.user.role === "Jobseeker" && (
            <div
              onClick={() => router.push("/jobs/applied")}
              className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium my-3 mx-[5px]"
            >
              <FaEnvelopeCircleCheck className="nav-items-logo text-[19px]" />
              AppliedJobs
            </div>
          )}
          {authData?.user.role === "Organization" && (
            <div
              onClick={() => router.push("/jobs/postingform")}
              className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium my-3 mx-[5px]"
            >
              <AiOutlineAppstoreAdd className="nav-items-logo text-[19px]"></AiOutlineAppstoreAdd>
              PostJob
            </div>
          )} */}
          <div
            // onClick={() => router.push("/login")}
            onClick={toggleProfileDropdown}
            className="nav-item cursor-pointer btn-joblist flex flex-col items-center gap-1 text-[13px] font-medium my-3 mx-[5px]"
          >
            <LuUser2 className="nav-items-logo text-[19px]"></LuUser2>
            Profile
            {showProfileDropdown && (
              <div className="dropdown-menu cursor-pointer  absolute mt-[-3rem]  bg-white text-[14px] border rounded-md p-2 w-15  flex flex-col justify-center text-[13px]">
                {!authData?.user.email ? (
                  <>
                    <p onClick={() => router.push("/login")}>Login</p>
                    <p onClick={() => router.push("/signup/jobseeker")}>
                      {" "}
                      Signup
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      onClick={() =>
                        router.push(
                          `/profile/${authData.user.role.toLowerCase()}`
                        )
                      }
                    >
                      Profile
                    </p>
                    <p onClick={() => signOut()}>Logout</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
