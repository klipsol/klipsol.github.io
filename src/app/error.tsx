'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-6xl font-bold text-red-600">500</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Internal Server Error
        </h2>
        <p className="text-gray-500">
          Something went wrong. Please try again later.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}