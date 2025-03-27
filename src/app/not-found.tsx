import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist'
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Page Not Found
        </h2>
        <p className="text-gray-500">
          The page you are looking for might have been removed or does not exist.
        </p>
        <Link 
          href="/" 
          className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}