-- CreateTable
CREATE TABLE "Opportunity" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "minAnnualPay" INTEGER,
    "maxAnnualPay" INTEGER,
    "minMonthlyPay" INTEGER,
    "maxMonthlyPay" INTEGER,
    "companyLogo" TEXT,
    "location" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "durationInMonths" INTEGER,
    "invertCompanyLogo" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_jobId_key" ON "Opportunity"("jobId");
