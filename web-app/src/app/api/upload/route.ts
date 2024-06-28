"use server"
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import axios from "axios";
export async function POST(req: NextRequest) {
  try {
    if (
      !process.env.R2_ACCESS_KEY_ID ||
      !process.env.R2_SECRET_ACCESS_KEY ||
      !process.env.R2_BUCKET_NAME ||
      !process.env.R2_ENDPOINT ||
      !process.env.R2_BUCKET_URL
    ) {
      throw new Error("Missing environment variables");
    }

    const data = await req.formData()
    const resume = data.get("resume");
    const id = data.get("id");
    const key = `${id}/resume.pdf`;
    const resumeLink = await uploadFile(resume, key);
    const resumeInfo = await axios.post(`${process.env.RANKER_API_URL}/process`, {
      "pdf_url": resumeLink,
    })
    const skills = resumeInfo.data.skills.split(",");

    const newUser = await db.user.update({
      where: {
        id: id as string,
      },
      data: {
        resume: resumeLink,
        github: resumeInfo.data.githubLink,
        linkedin: resumeInfo.data.linkedinLink,
        twitter: resumeInfo.data.twitterLink,
        description: resumeInfo.data.notes,
        skills: skills
      },
    
    })
    return NextResponse.json({ message: "Hello World" });
  } catch (err) {
    console.log(err);
  }
}
const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
  forcePathStyle: true,
});
const deleteFile = async (key: string) => {
  const command = new DeleteObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  });
  await s3Client.send(command);
};

const uploadFile = async (file: any, key: string) => {
  const arrayBuffer = await file.arrayBuffer();
  await deleteFile(key);
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: Buffer.from(arrayBuffer),
    ACL: "public-read",
  });
  await s3Client.send(command);
  const url = `${process.env.R2_BUCKET_URL}${key}`;
  return url;
};
