// src/pages/Internship.jsx
import React, { useState, useEffect } from "react";
import InternshipCard from "../components/InternshipCard"; // 👈 '../' Notice karo!
import API from "../api/axios"; // 👈 Real Backend Axios API
import { FiFilter } from "react-icons/fi";

const Internships = () => {
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [isWfh, setIsWfh] = useState(false);

  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  // Backend Se Real Internships Fetch Karo
  useEffect(() => {
    const fetchInternships = async () => {
      setLoading(true);
      try {
        let url = `/internships?profile=${profile}&location=${location}`;
        if (isWfh) {
          url += `&wfh=true`;
        }

        const res = await API.get(url);
        if (res.data.success) {
          setInternships(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching internships:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchInternships();
    }, 300);

    return () => clearTimeout(timer);
  }, [profile, location, isWfh]);

  const clearFilters = () => {
    setProfile("");
    setLocation("");
    setIsWfh(false);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen py-10">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8">
        
        {/* LEFT SIDEBAR: FILTERS */}
        <div className="w-full md:w-1/4">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FiFilter className="text-blue-500" />
              <h3 className="text-center font-semibold text-[#333]">Filters</h3>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex flex-col gap-1">
                <label className="font-medium">Profile</label>
                <input
                  type="text"
                  placeholder="e.g. Web Development"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="border px-3 py-1.5 rounded outline-none focus:border-blue-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Delhi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border px-3 py-1.5 rounded outline-none focus:border-blue-400"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="wfh"
                  checked={isWfh}
                  onChange={(e) => setIsWfh(e.target.checked)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="wfh" className="cursor-pointer">
                  Work from home
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <span
                onClick={clearFilters}
                className="text-[#008bdc] text-sm font-semibold cursor-pointer hover:underline"
              >
                Clear all
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: INTERNSHIPS LIST */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#333333] mb-2">
            {loading ? "Loading..." : `${internships.length} total internships`}
          </h2>

          {loading ? (
            <div className="text-center py-20 bg-white border border-gray-200 rounded-xl">
              <p className="text-gray-500 font-medium">Fetching real internships from backend...</p>
            </div>
          ) : internships.length > 0 ? (
            internships.map((internship) => (
              <div key={internship._id} className="w-full [&>div]:max-w-none [&>div]:w-full">
                <InternshipCard data={{ ...internship, id: internship._id }} />
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-700">No internships found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or click 'Clear all'</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Internships;