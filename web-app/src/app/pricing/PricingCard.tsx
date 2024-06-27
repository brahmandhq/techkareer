import React from "react";
import { ChevronRight, CircleCheck, Check } from "lucide-react";

export const PricingCard = ({ title }: { title: string }) => {
  const features = [
    {
      first: "private community with elite engineers, CTOs, and founders",
      second: "extensive guides",
      third: "courses",
      fourth:
        "personalized help in resume prep and internships / jobs / gig hunting",
    },
  ];
  return (
    <div className="rounded-2xl  shadow-3xl border-2 border-[#252d75] bg-gradient-to-r from-[#11113a] to-[#171B3E] py-6 p-4 w-[340px] md:min-w-[390px] lg:max-w-[420px] lg:min-w-[390px] h-[450px]">
      <h1 className=" font-bold text-gray-300 text-3xl">{title}</h1>
      {features.map((feat) => (
        <div className="flex flex-col gap-3 mt-7">
          <div className="text-xl flex justify-start items-center gap-4 w-full font-semibold text-gray-300">
            <Check className="w-[10%] text-green-500" />
            <p className="w-[90%]"> {feat.first}</p>
          </div>
          <div className="text-xl flex justify-start items-center gap-2 w-full font-semibold text-gray-300">
            <Check className="w-[10%] text-green-500" />
            <p className="w-[90%]"> {feat.second}</p>
          </div>
          <div className="text-xl flex justify-start items-center gap-2 w-full font-semibold text-gray-300">
            <Check className="w-[10%] text-green-500" />
            <p className="w-[90%]"> {feat.third}</p>
          </div>
          <div className="text-xl flex justify-start items-center gap-2 w-full font-semibold text-gray-300">
            <Check className="w-[10%] text-green-500 " />
            <p className="w-[90%]"> {feat.fourth}</p>
          </div>
        </div>
      ))}
      <button className="next-ui-gradient-btn text-lg font-semibold  w-full mt-9 py-4 rounded-2xl">
        Get Started
      </button>
    </div>
  );
};
