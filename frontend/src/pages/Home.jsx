import React from 'react'
import { FiSearch } from 'react-icons/fi'
import CategoryBox from '../components/CategoryBox'
import InternshipCard from '../components/InternshipCard'
import { categoriesData, internshipsData } from '../data/internships'

const Home = () => {
  return (
    <div className="pb-10">

      {/* HERO SECTION */}
      <div className="pt-14 pb-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">
          Make your dream career a reality
        </h1>

        <p className="text-lg text-[#333333] font-medium mb-8">
          Trending on Internshala 🔥
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-full shadow-md flex items-center p-2 border border-gray-200">
          <FiSearch className="text-gray-400 text-xl ml-4" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 outline-none text-base px-3 py-2 text-gray-700 bg-transparent"
          />
          <button className="bg-[#008bdc] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#0670b8] transition">
            Search
          </button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="max-w-[1200px] mx-auto px-4 mb-10">
        <h2 className="text-xl font-bold text-[#333333] mb-5">
          Popular categories
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-3">
          {categoriesData.map((cat) => (
            <CategoryBox key={cat.id} data={cat} />
          ))}
        </div>
      </div>

      {/* LATEST INTERNSHIPS */}
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-xl font-bold text-[#333333] mb-5">
          Latest internships on Internshala
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {internshipsData.map((item) => (
            <InternshipCard key={item.id} data={item} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home