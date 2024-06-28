import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export default async function myMiddleware(req: NextRequest) {
  const token = await getToken({
    req: req,
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  })
  const isAuthenticated = token ? true : false
  const pathSegments = req.nextUrl.pathname.split("/")
  if (isAuthenticated && pathSegments[1] === "signin") {
    return NextResponse.redirect(new URL("/", req.url))
  }
}
