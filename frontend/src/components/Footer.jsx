// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-[#333333] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        {/* Places */}
        <div>
          <p className="font-semibold text-base mb-4">Internships by places</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <Link to="/internships?location=India" className="hover:text-white">
                Internship in India
              </Link>
            </li>
            <li>
              <Link to="/internships?location=Delhi" className="hover:text-white">
                Internship in Delhi
              </Link>
            </li>
            <li>
              <Link to="/internships?location=Bangalore" className="hover:text-white">
                Internship in Bangalore
              </Link>
            </li>
            <li>
              <Link to="/internships?location=Hyderabad" className="hover:text-white">
                Internship in Hyderabad
              </Link>
            </li>
          </ul>
        </div>

        {/* Streams */}
        <div>
          <p className="font-semibold text-base mb-4">Internship by stream</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <Link to="/internships?profile=Computer" className="hover:text-white">
                Computer Science
              </Link>
            </li>
            <li>
              <Link to="/internships?profile=Marketing" className="hover:text-white">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/internships?profile=Design" className="hover:text-white">
                Design
              </Link>
            </li>
            <li>
              <Link to="/internships?profile=Finance" className="hover:text-white">
                Finance
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <p className="font-semibold text-base mb-4">About</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact us
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <p className="font-semibold text-base mb-4">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>support@internshala-clone.com</li>
            <li>+91-99999-99999</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-600">
        <p className="py-4 text-center text-xs text-gray-400">
          © 2026 Internshala Clone — Built for internship practice
        </p>
      </div>
    </div>
  )
}

export default Footer