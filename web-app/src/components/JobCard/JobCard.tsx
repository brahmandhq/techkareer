"use client"
import { organizationPlaceHolder } from "@/assets/assets"
import { Opportunity } from "@/types/type"

import React from "react"

import Image from "next/image"
import Link from "next/link"

function JobCard({
  job,
  isSelected,
  onClick,
}: {
  job: Opportunity
  isSelected: boolean
  onClick: () => void
}) {
  const minAnnualPay: any = job?.minAnnualPay ? job?.minAnnualPay / 10 ** 5 : 0
  const maxAnnualPay = job?.maxAnnualPay ? job?.maxAnnualPay / 10 ** 5 : 0

  const minMonthlyPay: any = job?.minMonthlyPay
    ? job?.minMonthlyPay / 10 ** 3
    : 0
  const maxMonthlyPay = job?.maxMonthlyPay ? job?.maxMonthlyPay / 10 ** 3 : 0

  const constructPayText = () => {
    let payText = ""

    payText = minAnnualPay
      ? `${job.currency} ${minAnnualPay}-${maxAnnualPay} LPA per year`
      : `${job.currency} ${minMonthlyPay}K-${maxMonthlyPay}K per month`

    if (minAnnualPay && minAnnualPay == maxAnnualPay) {
      payText = `${job.currency} ${minAnnualPay} LPA per year`
    } else if (minMonthlyPay && minMonthlyPay == maxMonthlyPay) {
      payText = `${job.currency} ${minMonthlyPay}K per month`
    }

    return payText
  }

  const payText = constructPayText()

  return (
    <div
      className={`w-full cursor-pointer border-b border-zinc-800/50 p-4 ${isSelected ? "bg-zinc-700/20" : "hover:bg-zinc-700/20"}`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="org-logo ms-1 mt-2 flex h-full justify-center">
          <div className="logo-container relative h-[4rem] w-[4rem] overflow-hidden">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                className="absolute w-full rounded-full"
                alt=""
                width={50}
                // height={50}
                style={{
                  filter: job.invertCompanyLogo ? "invert(100%)" : "",
                }}
              />
            ) : (
              <Image
                src={organizationPlaceHolder}
                className="h-full w-full rounded-full"
                alt=""
                width={50}
                height={50}
              />
            )}
          </div>
        </div>
        <div id="info" className="flex h-full flex-1 flex-col gap-[3px] ps-2">
          <div className="title-sec flex w-full items-center gap-1 text-[14px]">
            <div className="title font-900 text-[16px]">{job.role}</div>
          </div>
          <div className="job-location flex gap-2 text-[13px] text-[#868788]">
            <div className="org-name word-wrap-overflow flex w-full text-[14px] text-[#868788]">
              {`${job.companyName}`}
            </div>
          </div>
          <div className="about-job flex gap-2 text-[13px] text-[#868788]">
            💵 {payText}
          </div>
          <div className="about-job flex gap-2 text-[13px] text-[#868788]">
            📍 {job.location}
          </div>
          <div className="about-job flex gap-2 text-[13px] text-[#868788]">
            {job.durationInMonths ? `🕒 ${job.durationInMonths} months` : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
