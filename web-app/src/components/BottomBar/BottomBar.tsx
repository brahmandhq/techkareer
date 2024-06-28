"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { FaEnvelopeCircleCheck } from "react-icons/fa6"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { IoPeopleOutline } from "react-icons/io5"
import { LuUser2 } from "react-icons/lu"
import { PiHandshakeDuotone, PiSuitcaseDuotone } from "react-icons/pi"

function BottomBar() {
  const { data: authData, status }: any = useSession()
  const router = useRouter()

  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown)
  }
  return (
    <>
      <div className="bottom-section relative bottom-[0px] flex hidden h-[10vh] max-h-[10vh] w-full items-center justify-between border-t-[1px] border-t-[#E1E4E8] border-t-[solid] max-sm:block">
        <div className="flex h-full items-center justify-center gap-4">
          <div
            onClick={() => router.push("/opportunities")}
            className="nav-item btn-joblist my- flex cursor-pointer flex-col items-center gap-1 text-[13px] font-medium"
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
            className="nav-item btn-joblist mx-[5px] my-3 flex cursor-pointer flex-col items-center gap-1 text-[13px] font-medium"
          >
            <LuUser2 className="nav-items-logo text-[19px]"></LuUser2>
            Profile
            {showProfileDropdown && (
              <div className="dropdown-menu w-15 absolute mt-[-3rem] flex cursor-pointer flex-col justify-center rounded-md border bg-white p-2 text-[13px] text-[14px]">
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
                          `/profile/${authData.user.role.toLowerCase()}`,
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
  )
}

export default BottomBar
