import { Leftbar } from "@/components/components"
import React from "react"

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="main-wrapper flex items-center justify-center">
        <div className="main-container flex w-[90vw] max-lg:w-[100vw]">
          <Leftbar />
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
