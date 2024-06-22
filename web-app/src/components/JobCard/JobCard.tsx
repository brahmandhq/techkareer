"use client";
import { organizationPlaceHolder } from "@/assets/assets";
import { Opportunity } from "@/types/type";

import React from "react";

import Image from "next/image";
import Link from "next/link";

function JobCard({ job }: { job: Opportunity }) {
  const minAnnualPay: any = job?.minAnnualPay ? job?.minAnnualPay / 10 ** 5 : 0;
  const maxAnnualPay = job?.maxAnnualPay ? job?.maxAnnualPay / 10 ** 5 : 0;

  const minMonthlyPay: any = job?.minMonthlyPay
    ? job?.minMonthlyPay / 10 ** 3
    : 0;
  const maxMonthlyPay = job?.maxMonthlyPay ? job?.maxMonthlyPay / 10 ** 3 : 0;

  const constructPayText = () => {
    let payText = "";

    payText = minAnnualPay
      ? `${job.currency} ${minAnnualPay}-${maxAnnualPay} LPA per year`
      : `${job.currency} ${minMonthlyPay}K-${maxMonthlyPay}K per month`;

    if (minAnnualPay && minAnnualPay == maxAnnualPay) {
      payText = `${job.currency} ${minAnnualPay} LPA per year`;
    } else if (minMonthlyPay && minMonthlyPay == maxMonthlyPay) {
      payText = `${job.currency} ${minMonthlyPay}K per month`;
    }

    return payText;
  };

  const payText = constructPayText();

  return (
    <>
      <div className="max-xl:my-[15px] max-xl:w-full w-[45%] border border-transparent  bg-slate-800/50 py-4 px-4 rounded-[10px] flex gap-4">
        <div className="org-logo h-full flex justify-center mt-2 ms-1 ">
          <div className="logo-container relative h-[4rem] w-[4rem] overflow-hidden ">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                className="w-full rounded-full absolute"
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
                className="h-full w-full rounded-full "
                alt=""
                width={50}
                height={50}
              />
            )}
          </div>
        </div>
        <div id="info" className="flex flex-col h-full gap-[3px] ps-2 flex-1">
          <div className="title-sec flex text-[14px] gap-1 items-center w-full ">
            <div className="title text-[16px] font-900">{job.role}</div>
          </div>
          <div className="job-location flex text-[13px]   gap-2 text-[#868788]  ">
            <div className="org-name w-full text-[14px] text-[#868788] word-wrap-overflow flex">
              {`${job.companyName}`}
            </div>
          </div>
          <div className="about-job flex text-[13px]   gap-2 text-[#868788]  ">
            💵 {payText}
          </div>
          <div className="about-job flex text-[13px]   gap-2 text-[#868788]  ">
            📍 {job.location}
          </div>
          <div className="about-job flex text-[13px]   gap-2 text-[#868788]  ">
            {job.durationInMonths ? `🕒 ${job.durationInMonths} months` : ""}
          </div>
        </div>
        <div>
          <Link
            href={`https://airtable.com/appX3kHVPitSufv76/shrwapikBLgGoQcLD?prefill_Job ID=${job.jobId}`}
            className="block cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            target="_blank"
          >
            Apply
          </Link>
        </div>
      </div>
    </>
  );
}

export default JobCard;
