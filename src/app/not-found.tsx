import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-950 mb-4 animate-pulse">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          We can't find that page!
        </h2>
        <p className="text-gray-500 font-semibold mb-6">
          We hit a dead end. The page you're looking for might have moved or doesn't exist.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="bg-caffia text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-500 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/product"
            className="bg-caffia text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-500 transition-colors duration-200"
          >
            Products
          </Link>
        </div>
      </div>
    </section>
  );
}
