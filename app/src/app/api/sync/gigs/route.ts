import { db } from "@/lib/db";
import Airtable from "airtable";
import { NextRequest, NextResponse } from "next/server";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY as string,
}).base(process.env.AIRTABLE_BASE_ID as string);
interface GigRecord {
  Id: number;
  Title: string;
  Desc: string;
  Amount: number;
  TwitterLink: string;
  GigType: string;
  Deadline: string;
  Role: string[];
  Winner: string;
}
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const records: GigRecord[] = (await fetchDataFromAirtable()) as GigRecord[];
    const ids = records.map((record) => record.Id);
    const existingRecords = await db.gigs.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    const newRecords = records.filter(
      (record) =>
        !existingRecords.some(
          (existingRecord) => existingRecord.id === record.Id
        )
    );
    if (newRecords.length > 0) {
      await db.gigs.createMany({
        data: newRecords.map((record) => ({
          userId: 0, // Change the type of userId from string to number
          id: record.Id,
          title: record.Title,
          desc: record.Desc,
          amount: record.Amount,
          twitterLink: record.TwitterLink,
          gigType: record.GigType,
          deadline: record.Deadline,
          role: record.Role,
          winner: record.Winner,
        })),
      });
    }
    return NextResponse.json({
      message: "Records fetched successfully",
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

const fetchDataFromAirtable = async () => {
  return new Promise((resolve, reject) => {
    const records: any[] = [];

    base("Gigs")
      .select({
        view: "Grid view",
        fields: [
          "Id",
          "Name",
          "Notes",
          "Amount (in INR)",
          "Twitter Link",
          "Gig Type",
          "Deadline",
          "Role",
          "Winner",
        ],
      })
      .eachPage(
        (pageRecords, fetchNextPage) => {
          pageRecords.forEach((record) => {
            records.push({
              Id: record.get("Id"),
              Title: record.get("Name"),
              Desc: record.get("Notes"),
              Amount: record.get("Amount (in INR)"),
              TwitterLink: record.get("Twitter Link"),
              GigType: record.get("Gig Type"),
              Deadline: record.get("Deadline"),
              Role: record.get("Role"),
              Winner: record.get("Winner"),
            });
          });
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error("Error fetching records from Airtable:", err);
            reject(err);
          } else {
            resolve(records);
          }
        }
      );
  });
};
