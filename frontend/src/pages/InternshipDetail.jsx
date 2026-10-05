// src/pages/InternshipDetail.jsx
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import API from '../api/axios' 
import { useAuth } from '../Context/AuthContext' 
import { FiMapPin, FiCalendar, FiPlayCircle } from 'react-icons/fi'
import { BsCash } from 'react-icons/bs'

const InternshipDetail = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [internship, setInternship] = useState(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)

  // 1. BACKEND SE SPECIFIC INTERNSHIP FETCH KARO
  useEffect(() => {
    const fetchInternshipDetail = async () => {
      try {
        const res = await API.get(`/internships/${id}`)
        if (res.data.success) {
          setInternship(res.data.data)
        }
      } catch (error) {
        console.error("Error fetching detail:", error)
        setInternship(null)
      } finally {
        setLoading(false)
      }
    }
    fetchInternshipDetail()
  }, [id])

  // 2. REAL BACKEND APPLY FUNCTION
  const handleApply = async () => {
    if (!user) {
      alert("Please login first to apply for this internship!")
      navigate('/login')
      return
    }

    setApplying(true)
    try {
      const res = await API.post('/applications/apply', {
        internshipId: id,
        coverLetter: "I am deeply interested in this internship opportunity and have relevant skills."
      })

      if (res.data.success) {
        alert("Applied Successfully! 🎉 Check your applications in database.")
      }
    } catch (error) {
      alert(typeof error.response?.data?.message === 'string' ? error.response.data.message : "Application failed")
    } finally {
      setApplying(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20 bg-[#fafafa]">
        <p className="text-gray-500 font-medium text-lg">Loading internship details from backend...</p>
      </div>
    )
  }

  if (!internship) {
    return (
      <div className="text-center py-20 bg-[#fafafa]">
        <h2 className="text-2xl font-bold text-gray-700">Internship Not Found!</h2>
        <Link to="/internships" className="text-[#008bdc] underline mt-4 inline-block font-semibold">
          Back to all internships
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-[#fafafa] min-h-screen py-10 px-4">
      
      {/* Container Box */}
      <div className="max-w-[850px] mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm">
        
        {/* Title and Company */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <span className="text-xs border border-gray-300 px-2.5 py-1 rounded text-gray-600 font-medium inline-block mb-3">
            🚀 Actively hiring
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#333333]">
            {internship.title}
          </h1>
          <p className="text-base text-gray-500 font-medium mt-1">
            {internship.company}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-700 text-base mb-6">
          <FiMapPin className="text-gray-500" />
          <span>{internship.location}</span>
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-gray-50 p-5 rounded-xl mb-8 border border-gray-100">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase flex items-center gap-1 mb-1">
              <FiPlayCircle /> Start Date
            </p>
            <p className="text-sm font-semibold text-[#333]">Immediately</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase flex items-center gap-1 mb-1">
              <FiCalendar /> Duration
            </p>
            <p className="text-sm font-semibold text-[#333]">{internship.duration}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase flex items-center gap-1 mb-1">
              <BsCash /> Stipend
            </p>
            <p className="text-sm font-semibold text-[#333]">{internship.stipend}</p>
          </div>
        </div>

        {/* About Company Section */}
        {internship.aboutCompany && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#333] mb-2">About {internship.company}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {internship.aboutCompany}
            </p>
          </div>
        )}

        {/* About Internship Section */}
        {internship.aboutInternship && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#333] mb-2">About the internship</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {internship.aboutInternship}
            </p>
          </div>
        )}

        {/* Who Can Apply Section */}
        {internship.whoCanApply?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#333] mb-2">Who can apply</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {internship.whoCanApply.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Perks Section */}
        {internship.perks?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#333] mb-2">Perks</h3>
            <div className="flex flex-wrap gap-2">
              {internship.perks.map((perk, index) => (
                <span key={index} className="bg-blue-50 text-[#008bdc] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {perk}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Openings */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#333] mb-1">Number of openings</h3>
          <p className="text-gray-600 text-sm">{internship.numberOfOpenings || 1}</p>
        </div>

        {/* Apply Button */}
        <div className="text-center border-t border-gray-100 pt-8">
          <button 
            onClick={handleApply}
            disabled={applying}
            className="bg-[#008bdc] text-white font-bold text-base px-10 py-3 rounded-xl hover:bg-[#0670b8] transition shadow-md disabled:opacity-60"
          >
            {applying ? "Applying..." : "Apply now"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default InternshipDetail