"use client";
import { WithoutAuth } from "@/components/HOC/withOutAuth";
import { BottomBar, LoginBox } from "@/components/components";
import { Navbar } from "@/components/Navbar";
import React from "react";

function LoginPage() {
  return (
    <>
      <LoginBox />

      <BottomBar />
    </>
  );
}

export default WithoutAuth(LoginPage);
