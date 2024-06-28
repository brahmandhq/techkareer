import React from "react"
import { cn } from "@/lib/utils"
function Navbar({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <div className="nav-section flex h-[10vh] max-h-[10vh] w-full items-center justify-between gap-5">
        <div
          className={cn(
            "flex w-full items-center justify-between text-[16px]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Navbar
