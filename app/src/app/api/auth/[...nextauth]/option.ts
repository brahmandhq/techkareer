//@ts-nocheck
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import { db } from "@/lib/db";
import { compare, hash } from "bcrypt";



interface NextAuthUser extends User {
  id: number;
  namme: string;
  email: string;
  profilePic: string | null;
  password: string | null;
  onboarded: boolean;
  type: number;
  provider: string;
}


export const options: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<NextAuthUser | null> {

        try {

          if (credentials?.email && credentials?.password) {
            const isUserExists = await db.user.findUnique({ where: { email: credentials?.email } });


            if (!isUserExists) {

              const hashedPassword = await hash(credentials.password, 10);

              const newUser = await db.user.create({
                data: {
                  email: credentials.email,
                  password: hashedPassword,
                  type: 1,
                  provider: "credentials",
                },
              });


              return { ...newUser } as NextAuthUser;
            } else {
              if (isUserExists.password && isUserExists.provider === 'credentials') {
                const passwordMatch = await compare(credentials.password, isUserExists.password);
                if (passwordMatch) {
                  return { ...isUserExists } as NextAuthUser;
                }
              } else if (isUserExists.provider === 'google') {
                return { ...isUserExists } as NextAuthUser;
              }
            }
          }
          return null;
        } catch (error) {
          console.error("Error in authorization", error);
          throw new Error("Authorization failed");
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
    })
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      console.log(token, user, account)
      const email = user?.email
      if (typeof email === 'string') {
        if (account?.provider === 'google' && user) {
          const isUserExists = await db.user.findUnique({ where: { email: email } })
          if (!isUserExists) {
            const newUser = await db.user.create({
              data: {
                email: email,
                type: 1,
                profilePic: user.image,
                provider: 'google'
              }
            })
            token.email = newUser.email
            token.id = newUser.id
            token.picture = newUser.profilePic
            token.role = newUser.type.toString()
          }
          else {
            token.email = isUserExists.email
            token.id = isUserExists.id
            token.picture = isUserExists.profilePic ? isUserExists.profilePic : null
            token.role = isUserExists.type.toString()
          }
        }
        else if (account?.provider === 'credentials' && user) {
          token.email = user.email
          token.name = user.name
          token.id = user.id
          token.picture = user.profilePic ? user.profilePic : null
          token.role = user.type.toString()


        }
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.image = token.picture ? token.picture : null;
      session.user.name = token.name;

      return session;
    },
  },
};