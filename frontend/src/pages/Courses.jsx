// src/pages/Courses.jsx
import React from 'react'

const Courses = () => {
  const coursesList = [
    { title: "Web Development Course", duration: "8 Weeks", rating: "4.8 ★", icon: "💻" },
    { title: "Data Science Specialization", duration: "10 Weeks", rating: "4.9 ★", icon: "📊" },
    { title: "Digital Marketing Mastery", duration: "6 Weeks", rating: "4.7 ★", icon: "📈" },
    { title: "UI/UX Design Masterclass", duration: "6 Weeks", rating: "4.8 ★", icon: "🎨" },
  ]

  return (
    <div className="bg-[#fafafa] min-h-screen py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold text-[#333] text-center mb-2">
          Certification Courses on Internshala 🎓
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Learn in-demand skills and get guaranteed internship assistance!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coursesList.map((course, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="font-bold text-lg text-[#333] mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-1">⏱ Duration: {course.duration}</p>
              <p className="text-sm text-amber-500 font-semibold mb-4">Rating: {course.rating}</p>
              <button className="w-full bg-[#008bdc] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#0670b8] transition">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses