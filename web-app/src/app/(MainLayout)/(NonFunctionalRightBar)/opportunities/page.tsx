"use client"
import { BottomBar, Navbar, PostedJobsList } from "@/components/components"
import React from "react"

function PostedJobsListPage({}: { params: { orgId: number } }) {
  return (
    <>
      <Navbar>
        <h1 className="px-4 text-2xl font-semibold sm:px-0">Opportunities</h1>
      </Navbar>
      <div className="scrollable-content-wrapper h-[90vh] w-full px-4 max-sm:h-[80vh] sm:px-0">
        <PostedJobsList />
      </div>
      <BottomBar></BottomBar>
    </>
  )
}

export default PostedJobsListPage
