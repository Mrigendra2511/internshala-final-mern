import React from 'react'

const About = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen py-12 px-4">
      <div className="max-w-[900px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">
            About <span className="text-[#008bdc]">Internshala Clone</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Helping students find the right internships, faster.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6 text-gray-600 leading-7">

          <p>
            Welcome to our Internshala Clone — a full-stack MERN project built to
            simplify the internship search experience for students. Our goal is to
            make discovering opportunities, applying to roles, and managing
            applications smooth and beginner-friendly.
          </p>

          <p>
            Students can browse internships, filter by profile and location,
            view detailed job descriptions, and apply with just a few clicks.
            The platform also includes secure authentication so every application
            stays linked to the right user account.
          </p>

          <div>
            <h2 className="text-xl font-bold text-[#333] mb-2">Our Mission</h2>
            <p>
              To create a clean, fast, and practical internship marketplace that
              helps students take the first step toward their career with confidence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#333] mb-2">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Verified internship listings</li>
              <li>Smart filters (profile, location, work from home)</li>
              <li>Secure login & registration</li>
              <li>One-click apply system</li>
              <li>Student-friendly modern UI</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#333] mb-2">Built With</h2>
            <p>
              React, Tailwind CSS, Node.js, Express, MongoDB, JWT Authentication,
              and Axios — following clean full-stack architecture.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About