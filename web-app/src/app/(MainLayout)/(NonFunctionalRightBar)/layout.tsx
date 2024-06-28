import {
  BottomBar,
  Navbar,
  // RightBarJobseekerList,
  // RightBarOrganizationList,
  // Rightbar,
} from "@/components/components"
import React from "react"

function NonFunctionRightBarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="content-wrapper flex h-[100vh] w-[60%] flex-col max-md:w-[80%] max-sm:w-[100%]">
        {children}
      </div>
      {/* <Rightbar>
        <RightBarJobseekerList />
        <RightBarOrganizationList />
      </Rightbar> */}
    </>
  )
}

export default NonFunctionRightBarLayout
