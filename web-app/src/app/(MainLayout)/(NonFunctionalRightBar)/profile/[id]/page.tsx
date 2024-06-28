"use client";

import { BottomBar, Navbar } from "@/components/components";
import { getNameFromEmail } from "@/utils/utils";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import placeholder from "@/assets/placholder-jobseeker.webp";
import Image from "next/image";

// import { useUserInfo } from "@/hooks/useUser";
import {
  ChevronRight,
  Linkedin,
  Mail,
  Twitter,
  Edit,
  Github,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { TbInnerShadowBottom, TbWorldWww } from "react-icons/tb";
import { Skeleton } from "@/components/ui/skeleton";
import FileUpload from "@/components/ui/Modal";
import { useUserInfo } from "@/hooks/useUser";
function ProfilePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { user } = useUserInfo(params.id);

  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (user) {
      if (!user.resume) {
        setShowModal(true);
      }
    }
  }, [user]);
  if (!user) {
    return <></>;
  }

  return (
    <>
      {showModal && <FileUpload />}
      <Navbar className="justify-start gap-5">
        {user.name ? user.name : getNameFromEmail(user.email || "")}

        <ChevronRight className="text-gray-500" />
      </Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full flex justify-center">
        <ProfileCard userInfo={user} loading={false} />
      </div>
      <BottomBar></BottomBar>
    </>
  );
}

const ProfileCard = ({
  userInfo,
  loading,
}: {
  userInfo: any;
  loading: boolean;
}) => {
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
    <>
      <div className=" w-[500px] h-fit flex flex-col justify-center items-center  ">
        <div className="flex justify-center items-center flex-col bg-gray-800/20 px-6 py-8 rounded-xl relative ">
          {/* <div className="absolute right-3 top-3 text-gray-400 cursor-pointer">
          <Link href={`/profile/edit/${userInfo.id}`}>
            <Edit />
          </Link>
        </div> */}
          <div>
            {userInfo?.profilePic ? (
              <img
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
            <div className="flex justify-center items-center gap-3 max-w-[375px] flex-wrap">
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
            <div className="flex justify-center items-center gap-3 max-w-[375px] flex-wrap"></div>
            <div className="flex justify-start items-start  mt-6 w-full gap-3 flex-wrap">
              <div className="flex justify-start items-start gap-5">
                <p className="text-xl font-medium text-gray-300">SKills </p>
                <p className="text-gray-200">
                  {userInfo?.skills.map((social: any, index: any) => (
                    <span>{social},{' '} </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start  mt-6 w-full">
              {userInfo?.description && (
                <div className="flex justify-start items-start gap-5">
                  <p className="text-xl font-medium text-gray-300">About </p>
                  <span className="text-gray-200">{userInfo?.description}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
