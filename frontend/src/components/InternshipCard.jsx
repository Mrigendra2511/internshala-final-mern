// src/components/InternshipCard.jsx
import React from 'react'
import { Link } from 'react-router-dom' // 👈 Import Link
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import { BsCash } from 'react-icons/bs'

const InternshipCard = ({ data }) => {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition cursor-pointer flex-shrink-0 flex flex-col justify-between">
      
      <div>
        <p className="text-xs border border-gray-300 inline-block px-2 py-1 rounded text-gray-600 mb-3">
          🚀 Actively hiring
        </p>

        <h3 className="font-semibold text-[#333] text-[17px] leading-snug">
          {data.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1 mb-3">
          {data.company}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-700 mb-2">
          <FiMapPin /> {data.location}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-700 mb-2">
          <FiCalendar /> {data.duration}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-700 mb-4">
          <BsCash /> {data.stipend}
        </p>
      </div>

      {/* Bottom Link Wrapped */}
      <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
        <span className="text-green-700 bg-green-50 px-2 py-1 rounded text-xs font-medium">
          {data.postedDays}
        </span>
        
        {/* 🎯 LINK ADDED HERE */}
        <Link to={`/internship/${data.id}`} className="text-[#008bdc] text-sm font-medium hover:underline">
          View details →
        </Link>
      </div>

    </div>
  )
}

export default InternshipCard