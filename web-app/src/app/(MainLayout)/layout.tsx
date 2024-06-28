import { Leftbar } from "@/components/components";
import React from "react";

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="main-wrapper flex justify-center items-center ">
        <div className="main-container flex max-lg:w-[100vw] w-[90vw]">
          <Leftbar/>
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
