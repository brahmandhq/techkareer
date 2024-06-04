"use client";

import { WithAuthSeeker } from "@/components/HOC/withAuthSeeker";
import JobseekerProfile from "@/components/JobseekerProfile/JobseekerProfile";
import { BottomBar, Navbar } from "@/components/components";
import { getNameFromEmail } from "@/utils/utils";
import { useSession } from "next-auth/react";
import React from "react";

import placeholder from "@/assets/placholder-jobseeker.webp";
import Image from "next/image";
import { useUserInfo } from "@/hooks/useUser";
import {
  ArrowRight,
  ChevronRight,
  Loader,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Edit,
  Github,
  User,
} from "lucide-react";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import { Skeleton } from "@/components/ui/skeleton";
function JobseekerProfilePage() {
  const { data: auth, status } = useSession();
  if (!auth) {
    return <></>;
  }
  return (
    <>
      <Navbar className="justify-start gap-5">
        {auth?.user.name
          ? auth.user.name
          : getNameFromEmail(auth?.user.email || "")}

        <ChevronRight className="text-gray-500" />
      </Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        <ProfileCard user={auth.user} />
      </div>
      <BottomBar></BottomBar>
    </>
  );
}

const ProfileCard = ({ user }: { user: any }) => {
  const { user: userInfo, loading, error } = useUserInfo(user.id);
  const socials = [
    {
      name: "Twitter",
      link: userInfo?.twitter,
      icon: <Twitter />,
      color: "bg-blue-800",
    },
    {
      name: "LinkedIn",
      link: userInfo?.linkedIn,
      icon: <Linkedin />,
      color: "bg-blue-600",
    },
    {
      name: "Email",
      link: userInfo?.email,
      icon: <Mail />,
      color: "bg-red-700",
    },
    {
      name: "Github",
      link: userInfo?.github,
      icon: <Github />,
      color: "bg-gray-800",
    },
    {
      name: "Portfolio",
      link: userInfo?.portfolio,
      icon: <TbWorldWww />,
      color: "bg-gray-700",
    },
  ];
  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 flex-col h-fit">
        <Skeleton className="rounded-full h-[80px] w-[80px]" />
        <Skeleton className="w-[200px] h-[30px]" />
        <div className="w-full justify-start flex gap-5">
          <Skeleton className="w-[100px] h-[30px]" />
          <Skeleton className="w-[100px] h-[30px]" />
          <Skeleton className="w-[100px] h-[30px]" />
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full h-fit flex flex-col justify-center items-center relative">
      <div className="absolute right-10 top-2 text-gray-400 cursor-pointer">
        <Link href={`/profile/edit/${user.id}`}>
          <Edit />
        </Link>
      </div>
      <div>
        {userInfo?.profilePic ? (
          <Image
            src={userInfo.profilePic}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
        ) : (
          <Image src={placeholder} width={100} height={100} alt="" />
        )}
      </div>
      <div className="flex justify-center items-center flex-col gap-6 ">
        <h1 className="text-lg md:text-4xl mt-3 ">
          {userInfo?.name ? userInfo.name : userInfo?.email}
        </h1>
        <div className="flex justify-center items-center gap-3 max-w-[400px] flex-wrap">
          {socials.map(
            (social, index) =>
              social.link && (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={`flex justify-center items-center gap-2 w-fit ${social.color} px-4 py-2  rounded-3xl`}
                  >
                    {social.icon}
                    <p>{social.name}</p>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-start flex-col mt-16">
        <h2 className="text-lg md:text-2xl mb-8">Introduction</h2>
        {userInfo?.description ? (
          <p className="text-sm md:text-lg">{userInfo?.description}</p>
        ) : (
          "No Introduction provided"
        )}
      </div>
    </div>
  );
};
export default WithAuthSeeker(JobseekerProfilePage);