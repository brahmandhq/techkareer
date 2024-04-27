import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const TopTalentSection = () => {
  const [topTalent, setTopTalent] = useState<Talent[]>([]);
  const [displayedTalents, setDisplayedTalents] = useState<Talent[]>([]);
  const [talentsToShow, setTalentsToShow] = useState<number>(6);

  type Talent = {
    fields: {
      ID: number;
      "Introduction / Pitch": string;
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedTalents(topTalent.slice(0, talentsToShow));
  }, [topTalent, talentsToShow]);

  const fetchData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.DEVKIT_AIRTABLE_API_KEY}`,
        },
      };
      const response = await fetch(
        "https://api.airtable.com/v0/appX3kHVPitSufv76/Application%20Form?view=Application%20Form",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setTopTalent(data.records);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleBrowseMore = () => {
    setTalentsToShow(talentsToShow + 6);
  };

  return (
    <section className="py-12" id="TopTalent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Top Talent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTalents.map((talent) => (
            <div
              key={talent.fields.ID}
              className="p-6 rounded-lg shadow-lg flex flex-col"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Talent ID: {talent.fields.ID}
              </h3>
              <p className="text-white mb-4">
                {talent.fields["Introduction / Pitch"]}
              </p>
            </div>
          ))}
        </div>
        {topTalent.length > talentsToShow && (
          <div className="flex justify-center mt-6">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleBrowseMore}
            >
              Browse More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopTalentSection;
