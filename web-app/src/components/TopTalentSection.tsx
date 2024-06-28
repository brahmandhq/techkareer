import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Talent } from "@/lib/types";

const TopTalentSection = () => {
  const [topTalent, setTopTalent] = useState<Talent[]>([]);
  const [displayedTalents, setDisplayedTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true)
  const [talentsToShow, setTalentsToShow] = useState<number>(6);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch('/api/get_top_talent');
        const response = await data.json();
        if ('error' in response) {
          throw new Error(response.error);
        }
        setTopTalent(response.TalentData);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    setDisplayedTalents(topTalent.slice(0, talentsToShow));
  }, [topTalent, talentsToShow]);

  const handleBrowseMore = () => {
    setTalentsToShow(talentsToShow + 6);
  };

  if (loading) {
    return (
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Top Talent
        </h2>
        {/* TODO: we can have a loading skeleton for Talents here */}
        <p className="text-center text-white text-2xl">Loading talents....</p>
      </div>
    );
  }

  if (!topTalent || topTalent.length === 0) {
    return (
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
        Top Talent
        </h2>
        <p className="text-center text-white text-2xl">No top talents yet.</p>
      </div>
    );
  }

  return (
    <section className="py-12" id="TopTalent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Top Talent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTalents.map((talent) => (
            <div
              key={talent.ID}
              className="p-6 rounded-lg shadow-lg flex flex-col"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Talent ID: {talent.ID}
              </h3>
              <p className="text-white mb-4">
                {talent["Introduction / Pitch"]}
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
