"use client";

import { SectionWrapper } from "./section-wrapper";
import Image from "next/image";
import bg from "@/assets/bg.webp";
import { ChevronRight, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type Opportunity = {
  id: number;
  role: string;
  companyName: string;
  currency: string;
  minAnnualPay: number | null;
  maxAnnualPay: number | null;
  minMonthlyPay: number | null;
  maxMonthlyPay: number | null;
  companyLogo: string | null;
  location: string;
  jobId: string;
  durationInMonths: number | null;
  invertCompanyLogo: boolean;
  createdAt: string;
  updatedAt: string;
};


export const Opportunities = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/opportunities', {
          cache: 'force-cache'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch opportunities');
        }
        const data: Opportunity[] = await response.json();
        
        // Sort opportunities by maximum pay (annual or monthly) and get top 4
        const sortedOpportunities = data
          .sort((a, b) => {
            const aMax = Math.max(a.maxAnnualPay || 0, (a.maxMonthlyPay || 0) * 12);
            const bMax = Math.max(b.maxAnnualPay || 0, (b.maxMonthlyPay || 0) * 12);
            return bMax - aMax;
          })
          .slice(0, 4);
        
        setOpportunities(sortedOpportunities);
        setError(null);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
        setError('Failed to load opportunities. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <SectionWrapper>
      <div
        className="relative flex flex-col flex-nowrap gap-4 lg:flex-row"
        id="opportunities"
      >
        <div className="mb-8 flex w-full flex-col gap-3 lg:w-[30%]">
          <h3 className="via-ping-200 inline-block bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Opportunities
          </h3>
          <div className="w-full text-3xl font-semibold">
            <span>Explore</span>
            <br />
            <span className="text-purple-400">Rewarding Career</span>
            <br />
            <span>Opportunities</span>
          </div>
          <p className="text-xs text-gray-200/90">
            Become part of dynamic and innovative team - Unlock your potential
            in a collaborative environment driven by excellence.
          </p>
          <button className="group mt-3 hidden w-fit cursor-pointer items-center justify-center gap-4 rounded-full bg-purple-400 px-6 py-2">
            <span>Explore </span>{" "}
            <ChevronRight className="inline-block text-white transition-all group-hover:translate-x-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {isLoading ? (
            <p>Loading opportunities...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            opportunities.map((item) => (
              <OpportunitiesCard key={item.id} {...item} />
            ))
          )}

        </div>
      </div>
    </SectionWrapper>
  )
}

const OpportunitiesCard: React.FC<Opportunity> = ({
  role,
  companyName,
  currency,
  minAnnualPay,
  maxAnnualPay,
  minMonthlyPay,
  maxMonthlyPay,
  companyLogo,
  location,
  jobId,
  durationInMonths,
  invertCompanyLogo,
  createdAt,
}) => {
  const formatPay = () => {
    const formatToLakhsOrThousands = (amount: number, isAnnual: boolean) => {
      if (isAnnual) {
        const inLakhs = amount / 100000;
        return inLakhs >= 1 ? `${inLakhs.toFixed(0)}L` : `${(amount / 1000).toFixed(0)}K`;
      } else {
        return `${(amount / 1000).toFixed(0)}K`;
      }
    };

    if (minAnnualPay !== null && maxAnnualPay !== null) {
      const minFormatted = formatToLakhsOrThousands(minAnnualPay, true);
      const maxFormatted = formatToLakhsOrThousands(maxAnnualPay, true);
      return `₹${minFormatted} - ₹${maxFormatted} / yr`;
    } else if (minMonthlyPay !== null && maxMonthlyPay !== null) {
      const minFormatted = formatToLakhsOrThousands(minMonthlyPay, false);
      const maxFormatted = formatToLakhsOrThousands(maxMonthlyPay, false);
      return `₹${minFormatted} - ₹${maxFormatted} / mo`;
    } else if (minAnnualPay !== null) {
      return `₹${formatToLakhsOrThousands(minAnnualPay, true)} / yr`;
    } else if (minMonthlyPay !== null) {
      return `₹${formatToLakhsOrThousands(minMonthlyPay, false)} / mo`;
    }
    return 'Pay information not available';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="rounded-2xl p-4 w-[340px] md:min-w-[390px] lg:max-w-[420px] lg:min-w-[390px] min-h-[501px] flex flex-col gap-4 justify-evenly"
    >
      <div className="flex justify-start items-center gap-2">
        {companyLogo ? (
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            height={40}
            width={40}
            className={`rounded-full ${invertCompanyLogo ? 'bg-white' : 'bg-black/80'}`}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            {companyName.charAt(0)}
          </div>
        )}
        <p className="text-lg text-black ">{companyName}</p>
      </div>
      <div className="flex justify-center items-center flex-col mb-6">
        <h3 className="text-xl font-semibold text-[#02015A] mb-3">
          {role.toUpperCase()}
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mt-2 w-[80%] text-black/80 text-center font-lighter font-bold tracking-wider leading-6"
        >
          {formatPay()}
        </motion.p>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-start gap-4 flex-col px-4 py-6"
        >
          <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2 w-full">
            <CircleCheck className="inline-block w-[10%]" />{" "}
            <span className="w-[90%]">{location}</span>
          </p>
          {createdAt && (
            <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2 w-full">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{formatDate(createdAt)}</span>
            </p>
          )}
          <p className="text-lg font-semibold text-black/70 flex justify-start items-center gap-2 w-full">
            <CircleCheck className="inline-block w-[10%]" />{" "}
            <span className="w-[90%]">{`Job ID: ${jobId}`}</span>
          </p>
        </motion.div>
      </div>
      <Link
        href={`https://airtable.com/appX3kHVPitSufv76/shrwapikBLgGoQcLD?prefill_Job ID=${jobId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group flex w-fit items-center justify-center gap-4 self-center rounded-full bg-black px-5 py-3 text-2xl font-semibold text-white transition-all">
          <span>Apply Now</span>{" "}
          <ChevronRight className="inline-block transition-all group-hover:translate-x-2" />
        </button>
      </Link>
    </div>
  )
}
