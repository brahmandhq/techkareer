"use client";
import React, { useEffect, useState } from "react";
import jobseekerprofile from "@/assets/placholder-jobseeker.webp";
import { useFetchAllJobseekers } from "@/hooks/useJobseekerData";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Candidate, JobSeeker, User } from "@/types/type";
import { useSession } from "next-auth/react";
import { shuffle } from "@/utils/utils";
import { getName } from "@/lib/utils";

function RightBarJobseekerList() {
  const router = useRouter();
  const { data: authData } = useSession();
  const [seekers, setSeekers] = useState<User[]>([]);

  const { data: jobseekers, isSuccess } = useFetchAllJobseekers(
    "seekers-for-section"
  );

  console.log(jobseekers);
  useEffect(() => {
    if (jobseekers && jobseekers.length > 0) {
      setSeekers(() => shuffle([...jobseekers]));
    }
  }, [jobseekers]);
  return (
    <>
      <div className="people-rec-section  w-full flex flex-col mt-6 ">
        <div
          onClick={() => router.push("/jobseekers")}
          className="text-holder cursor-pointer flex justify-between items-center text-[14px] font-medium ms-3 me-3 mb-4"
        >
          People on Techkareer
          <FaArrowRightLong />
        </div>
        <div className="user-desc flex flex-col gap-4 w-full  pe-2 mt-1 ps-3">
          {seekers ? (
            seekers
              .slice(0, 3)

              .map((jobseeker: User) => {
                return (
                  <div
                    onClick={() => router.push(`/profile/${jobseeker.id}`)}
                    key={jobseeker.id}
                  >
                    <div className="profile-pic-follow  mt-1 flex  py-3 items-center w-full gap-4 hover:bg-gray-200/20 rounded-xl transition-all px-1 cursor-pointer">
                      <div className="profile-pic w-[18%] flex flex-between justify-center items-center  mt-2 overflow-hidden rounded-full">
                        {jobseeker.profilePic ? (
                          <Image
                            className=" object-fill  h-full w-full"
                            alt=""
                            height={80}
                            width={80}
                            src={`${jobseeker.profilePic}`}
                          ></Image>
                        ) : (
                          <Image
                            src={jobseekerprofile}
                            alt=""
                            height={80}
                            width={80}
                            className=" object-contain  h-full w-full"
                          ></Image>
                        )}
                      </div>
                      <div className="flex-col w-[90%]">
                        <div className="people-username text-lg">
                          {jobseeker?.name
                            ? jobseeker.name
                            : getName(jobseeker.email)}
                        </div>
                        {jobseeker.description && (
                          <div className="people-desc truncate color-lgt-grey w-full text-sm text-wrap mt-1">
                            {jobseeker.description.length > 50
                              ? jobseeker.description.slice(0, 50) + "..."
                              : jobseeker.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default RightBarJobseekerList;
