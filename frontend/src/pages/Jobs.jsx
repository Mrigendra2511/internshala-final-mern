// src/pages/Jobs.jsx
import React, { useState, useEffect } from 'react'
import InternshipCard from '../components/InternshipCard'
import API from '../api/axios'
import { FiFilter } from 'react-icons/fi'

const Jobs = () => {
  const [profile, setProfile] = useState('')
  const [location, setLocation] = useState('')
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      try {
        const res = await API.get(`/internships?profile=${profile}&location=${location}`)
        if (res.data.success) {
          setJobs(res.data.data)
        }
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    const timer = setTimeout(() => {
      fetchJobs()
    }, 300)

    return () => clearTimeout(timer)
  }, [profile, location])

  return (
    <div className="bg-[#fafafa] min-h-screen py-10">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8">
        
        {/* FILTERS */}
        <div className="w-full md:w-1/4">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FiFilter className="text-blue-500" />
              <h3 className="text-center font-semibold text-[#333]">Job Filters</h3>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex flex-col gap-1">
                <label className="font-medium">Profile</label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineer"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="border px-3 py-1.5 rounded outline-none focus:border-blue-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border px-3 py-1.5 rounded outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#333333] mb-2">
            {loading ? "Loading Jobs..." : `${jobs.length} Fresh Jobs Available`}
          </h2>

          {loading ? (
            <div className="text-center py-20 bg-white border border-gray-200 rounded-xl">
              <p className="text-gray-500">Fetching jobs...</p>
            </div>
          ) : jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="w-full [&>div]:max-w-none [&>div]:w-full">
                <InternshipCard data={{ ...job, id: job._id }} />
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-700">No jobs found</h3>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Jobs