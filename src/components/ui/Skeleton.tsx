import React from 'react'

export default function Skeleton() {
  return (
    <div className=' animate-pulse p-4 space-y-6 '>
          <div className="w-full h-64 bg-gray-300 rounded-xl" />

      <div className="h-6 bg-gray-300 w-1/2 rounded" />
      <div className="h-4 bg-gray-300 w-1/3 rounded" />

      <div className="h-4 bg-gray-300 w-full rounded" />
      <div className="h-4 bg-gray-300 w-5/6 rounded" />
      <div className="h-4 bg-gray-300 w-3/4 rounded" />

      <div className="h-10 bg-gray-300 w-full rounded-md" />
    </div>
  )
}
