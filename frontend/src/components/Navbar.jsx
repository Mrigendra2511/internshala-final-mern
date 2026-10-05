// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">

        <Link to="/" className="text-2xl font-extrabold text-[#008bdc]">
          internshala
        </Link>

        <div className="hidden md:flex items-center gap-6 text-[15px] text-[#444] font-medium">
          <Link to="/internships" className="hover:text-[#008bdc] transition">
            Internships ▾
          </Link>
          <Link to="/jobs" className="hover:text-[#008bdc] transition">
            Jobs ▾
          </Link>
          <Link to="/courses" className="hover:text-[#008bdc] transition">
            Courses ▾
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* 👈 NEW LINK: My Applications */}
              <Link
                to="/my-applications"
                className="text-sm font-semibold text-[#008bdc] hover:underline"
              >
                My Applications
              </Link>

              <span className="text-sm font-semibold text-gray-700">
                Hi, {user.name}
              </span>
              <button
                onClick={logout}
                className="text-red-500 border border-red-400 px-3 py-1.5 rounded text-sm font-semibold hover:bg-red-50 transition cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-[#008bdc] border border-[#008bdc] px-4 py-1.5 rounded text-sm font-semibold hover:bg-blue-50 transition cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-[#008bdc] text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-[#0670b8] transition cursor-pointer">
                  Candidate Sign-up
                </button>
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar