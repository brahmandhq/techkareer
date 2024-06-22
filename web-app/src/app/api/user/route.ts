import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  try {
  const data = await req.json();
 const userDetail = await db.user.findUnique({
    where: {
      id: data.id,
    },
  });

  return NextResponse.json({ user: userDetail });
  }catch(err){
    console.log(err);
  }
}