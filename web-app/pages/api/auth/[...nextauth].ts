import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import { db } from "@/lib/db";

const prisma = db;

const getUserId = async ({
  email,
  name,
  picture,
}: {
  email: string;
  name: string;
  picture: string;
}) => {
  let userId;
  let subId;
  let subName;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        profilePic: picture,
      },
    });
    userId = user.id;
    return { userId, subId, subName };
  }

  userId = user.id;
  return { userId, subId, subName };
};

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID || "",
    //   clientSecret: process.env.GITHUB_SECRET || "",
    // }),
  ],
  jwt: {
    //@ts-ignore
    encryption: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    redirect() {
      return "/opportunities";
    },
    async jwt({ token, account }) {
      const { email, name, picture }: any = token;

      const { userId, subId, subName } = await getUserId({
        email,
        name,
        picture,
      });
      token = { ...token, ...{ userId, subId, subName } };

      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      console.log({ token });
      return {
        ...session,
        user: {
          id: token.userId,
          ...session.user,
          subId: token.subId,
          subName: token.subName,
        },
      };
    },
  },
});
