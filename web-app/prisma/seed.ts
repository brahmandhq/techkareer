import { db } from "@/lib/db"

async function seed() {
  await db.opportunity.createMany({
    data: [
      {
        role: "Data Engineer",
        companyName: "Dubverse.ai",
        currency: "INR",
        minAnnualPay: 600000,
        maxAnnualPay: 1500000,
        companyLogo:
          "https://dubverse.ai/wp-content/uploads/2021/03/Dubverse-Video-Dubbing-Online-Logo.svg",
        location: "Gurugram, India",
        jobId: "DUBVERSE_DATA_WIZARD",
      },
      {
        role: "ML Engineer",
        companyName: "Dubverse.ai",
        currency: "INR",
        minAnnualPay: 600000,
        maxAnnualPay: 1500000,
        companyLogo:
          "https://dubverse.ai/wp-content/uploads/2021/03/Dubverse-Video-Dubbing-Online-Logo.svg",
        location: "Gurugram, India",
        jobId: "DUBVERSE_TRANSFORMER_TAMER",
      },
      {
        role: "Software Engineer Intern",
        companyName: "IndianAppGuy",
        currency: "INR",
        minMonthlyPay: 25000,
        maxMonthlyPay: 25000,
        location: "Remote (India)",
        jobId: "INDIAN_APP_GUY_SDE_INTERN",
        companyLogo: "https://www.indianappguy.com/assets/logo.svg",
        invertCompanyLogo: true,
      },
      {
        role: "UI/UX Designer",
        companyName: "Reddy Games",
        currency: "INR",
        minMonthlyPay: 32000,
        maxMonthlyPay: 32000,
        durationInMonths: 3,
        location: "Remote (India)",
        jobId: "REDDY_GAMES_UI_UX_DESIGNER",
      },
      {
        role: "3D Designer",
        companyName: "Reddy Games",
        currency: "INR",
        minMonthlyPay: 32000,
        maxMonthlyPay: 32000,
        durationInMonths: 3,
        location: "Remote (India)",
        jobId: "REDDY_GAMES_3D_DESIGNER",
      },
      {
        role: "Software Engineer Intern",
        companyName: "TechKareer",
        currency: "INR",
        minMonthlyPay: 15000,
        maxMonthlyPay: 15000,
        location: "Remote (India)",
        jobId: "TECHKAREER_SDE_INTERN_JUN_24",
        companyLogo: "https://techkareer.com/logo.webp",
      },
    ],
  })

  console.log("Database seeded!")
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
