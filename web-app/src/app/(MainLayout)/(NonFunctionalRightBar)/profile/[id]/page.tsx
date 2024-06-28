"use client"

import { BottomBar, Navbar } from "@/components/components"
import { getNameFromEmail } from "@/utils/utils"
import { useSession } from "next-auth/react"
import React, { useEffect } from "react"
import placeholder from "@/assets/placholder-jobseeker.webp"
import Image from "next/image"
// import { useUserInfo } from "@/hooks/useUser";
import {
  ChevronRight,
  Linkedin,
  Mail,
  Twitter,
  Edit,
  Github,
  SquareArrowOutUpRight,
} from "lucide-react"
import Link from "next/link"
import { TbWorldWww } from "react-icons/tb"
import { Skeleton } from "@/components/ui/skeleton"
function ProfilePage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { data: sessionData, status } = useSession()
  const user = sessionData?.user
  // const { user, loading, error } = useUserInfo(params.id);
  // console.log("i am here", user);
  if (!user) {
    return <></>
  }

  return (
    <>
      <Navbar className="justify-start gap-5">
        {user.name ? user.name : getNameFromEmail(user.email || "")}

        <ChevronRight className="text-gray-500" />
      </Navbar>
      <div className="scrollable-content-wrapper flex h-[90vh] w-full justify-center max-sm:h-[80vh]">
        <ProfileCard userInfo={user} loading={false} />
      </div>
      <BottomBar></BottomBar>
    </>
  )
}

const ProfileCard = ({
  userInfo,
  loading,
}: {
  userInfo: any
  loading: boolean
}) => {
  useEffect(() => {
    console.log(loading)
  }, [loading])
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
    {
      name: "Resume",
      link: userInfo?.resume,
      icon: <SquareArrowOutUpRight />,
      color: "bg-gray-700",
    },
  ]
  if (loading) {
    return (
      <div className="flex h-fit flex-col items-center justify-center gap-5">
        <Skeleton className="h-[80px] w-[80px] rounded-full" />
        <Skeleton className="h-[30px] w-[200px]" />
        <div className="flex w-full justify-start gap-5">
          <Skeleton className="h-[30px] w-[100px]" />
          <Skeleton className="h-[30px] w-[100px]" />
          <Skeleton className="h-[30px] w-[100px]" />
        </div>
      </div>
    )
  }
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center rounded-xl bg-gray-800/20 px-6 py-8">
        {/* <div className="absolute right-3 top-3 text-gray-400 cursor-pointer">
          <Link href={`/profile/edit/${userInfo.id}`}>
            <Edit />
          </Link>
        </div> */}
        <div>
          {userInfo?.image ? (
            <img
              src={userInfo.image}
              width={100}
              height={100}
              alt=""
              className="rounded-full"
            />
          ) : (
            <Image src={placeholder} width={100} height={100} alt="" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="mt-3 text-lg md:text-4xl">
            {userInfo?.name ? userInfo.name : userInfo?.email}
          </h1>
          <div className="flex max-w-[375px] flex-wrap items-center justify-center gap-3">
            {/* {socials.map(
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
            )} */}
          </div>
          <div className="mt-6 flex w-full items-start justify-start">
            {userInfo?.description && (
              <div className="flex items-center justify-start gap-5">
                <p className="text-xl font-medium text-gray-300">About - </p>
                <span className="text-gray-200">{userInfo?.description}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
