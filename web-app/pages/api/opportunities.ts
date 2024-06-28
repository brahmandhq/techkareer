import { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/db"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const opportunities = await db.opportunity.findMany({
        orderBy: { createdAt: "desc" },
      })
      res.status(200).json(opportunities)
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch opportunities" })
    }
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
