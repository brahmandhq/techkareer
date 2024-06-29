import {
  BANTERAI_LOGO,
  CODEMATE_AI_LOGO,
  SHRAM_IO_LOGO,
  SLASHBASE_LOGO,
} from "@/utils/constants";
import React from "react";

const CompaniesHiredFromUs = () => {
  const hiredCompanies = [
    {
      name: "BanterAI",
      logo: BANTERAI_LOGO,
      description: "New York based AI startup",
    },
    {
      name: "CodemateAI",
      logo: CODEMATE_AI_LOGO,
      description: "Top 30 AI startups of 2024 (by Inc42), IIT K incubated",
    },
    {
      name: "Slashbase",
      logo: SLASHBASE_LOGO,
      description: "OSS project with 1.3K+ stars",
    },
    {
      name: "Shram io",
      logo: SHRAM_IO_LOGO,
      description:
        "Productivity app startup serving top Indian early stage startups",
    },
    {
      name: "And many more ...",
      logo: "",
      description: "",
    },
  ];

  return (
    <div>
      <section className=" py-12">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-white mb-20">
            Companies That Have Hired From Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiredCompanies.map((company, index) => (
              <div
                key={index}
                className="antialiased p-6 rounded-lg shadow-md flex flex-col items-center"
                style={{
                  background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }}
              >
                <div className="flex items-center gap-4">
                  {company.logo && (
                    <div className="mb-2">
                      <img
                        alt="company-logo"
                        src={company.logo}
                        width={30}
                        height={20}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 ">
                    {company.name}
                  </h3>
                </div>

                <p className="text-white text-md sm:text-lg text-center mt-4">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesHiredFromUs;
