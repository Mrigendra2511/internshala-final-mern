// src/pages/MyApplications.jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api/axios'
import { useAuth } from '../Context/AuthContext'
import { FiMapPin, FiCalendar, FiClock } from 'react-icons/fi'
import { BsCash } from 'react-icons/bs'

const MyApplications = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Agar user logged in nahi hai, toh login page pe bhej do
    if (!user) {
      alert("Please login to view your applications!")
      navigate('/login')
      return
    }

    const fetchMyApplications = async () => {
      try {
        const res = await API.get('/applications/my-applications')
        if (res.data.success) {
          setApplications(res.data.data)
        }
      } catch (error) {
        console.error("Error fetching applications:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMyApplications()
  }, [user, navigate])

  // Status ke hisaab se color decide karo
  const getStatusColor = (status) => {
    switch (status) {
      case 'shortlisted':
        return 'bg-green-100 text-green-700'
      case 'rejected':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-blue-100 text-blue-700'
    }
  }

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <p className="text-gray-500 font-medium text-lg">Loading your applications...</p>
      </div>
    )
  }

  return (
    <div className="bg-[#fafafa] min-h-screen py-10 px-4">
      <div className="max-w-[1000px] mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#333]">My Applications</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Track all your internship applications in one place.
          </p>
        </div>

        {/* Empty State */}
        {applications.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-xl font-semibold text-[#333] mb-2">No applications yet!</h2>
            <p className="text-gray-500 mb-6">
              Start exploring internships and apply to the ones you love.
            </p>
            <Link
              to="/internships"
              className="inline-block bg-[#008bdc] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#0670b8] transition"
            >
              Browse Internships
            </Link>
          </div>
        ) : (
          // Applications List
          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-medium">
              You have applied to <span className="text-[#008bdc] font-bold">{applications.length}</span> internships
            </p>

            {applications.map((app) => {
              const internship = app.internship

              // Agar internship delete ho gayi ho DB se
              if (!internship) {
                return (
                  <div key={app._id} className="bg-white border border-gray-200 rounded-xl p-5 opacity-60">
                    <p className="text-gray-500 italic">This internship no longer exists.</p>
                  </div>
                )
              }

              return (
                <div
                  key={app._id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  {/* Top: Title + Status */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#333]">{internship.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{internship.company}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </div>

                  {/* Info Row */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-gray-400" /> {internship.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-gray-400" /> {internship.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BsCash className="text-gray-400" /> {internship.stipend}
                    </span>
                  </div>

                  {/* Bottom: Applied Date + View Link */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FiClock /> Applied on {new Date(app.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <Link
                      to={`/internship/${internship._id}`}
                      className="text-[#008bdc] text-sm font-semibold hover:underline"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyApplications