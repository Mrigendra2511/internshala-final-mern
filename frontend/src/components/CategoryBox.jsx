import React from 'react'

const CategoryBox = ({ data }) => {
  return (
    <div className="min-w-[150px] w-[150px] h-[130px] bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer flex-shrink-0">
      <div className="text-3xl mb-2">{data.icon}</div>
      <h3 className="text-sm font-semibold text-[#333333] text-center">
        {data.name}
      </h3>
      <p className="text-[11px] text-gray-500 mt-1 text-center">
        {data.count}
      </p>
    </div>
  )
}

export default CategoryBox