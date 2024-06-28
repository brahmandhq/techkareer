import React from "react";
import { cn } from "@/lib/utils";
function Navbar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className="nav-section w-full flex justify-between items-center gap-5 h-[10vh] max-h-[10vh]">
        <div
          className={cn(
            "w-full   flex justify-between items-center text-[16px]",
            className
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Navbar;
