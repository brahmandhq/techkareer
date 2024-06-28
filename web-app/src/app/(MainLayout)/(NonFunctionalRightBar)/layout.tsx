import {
  BottomBar,
  Navbar,
  // RightBarJobseekerList,
  // RightBarOrganizationList,
  // Rightbar,
} from "@/components/components";
import React from "react";

function NonFunctionRightBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="content-wrapper max-sm:w-[100%] max-md:w-[80%] w-[60%] h-[100vh] flex flex-col ">
        {children}
      </div>
      {/* <Rightbar>
        <RightBarJobseekerList />
        <RightBarOrganizationList />
      </Rightbar> */}
    </>
  );
}

export default NonFunctionRightBarLayout;
