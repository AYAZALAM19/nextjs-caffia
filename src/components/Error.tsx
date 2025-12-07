'use client'
import React from 'react'

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm">
      <h2 className="text-4xl font-bold text-gray-800 mb-3 animate-pulse">😬 Oops!</h2>
      <p className="text-gray-600 mb-6">
        {message || "Something went wrong. Please try after sometime."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-amber-400 text-gray-900 font-semibold py-2 px-6 rounded-md hover:bg-amber-500 hover:text-white transition-colors duration-200"
        >
          Retry
        </button>
      )}
    </div>
  )
}
``