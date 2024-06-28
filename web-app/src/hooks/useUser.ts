"use client";

import { useSession } from "next-auth/react";
import axios from "axios";

import useSWR from "swr";
import { useState } from "react";

export const useUser = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return { status: "loading", user: null };
  }

  if (status === "unauthenticated") {
    return { status: false, user: null };
  }

  return {
    status: true,
    user: session?.user || null,
  };
};

export const useUserInfo = (id: string) => {
  const [loading, setLoading] = useState(true);
  const { data: user, error } = useSWR(
    `/api/user`,
    async (url: string) => {
      const res = await axios.post(url,{
        id: id,
      });
      setLoading(false);
      return res.data.user;
    }
  );

  return {
    user,
    loading: loading,
    error: error,
  };
};
