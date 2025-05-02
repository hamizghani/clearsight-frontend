'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome, <span className="text-purple-600">RS UI</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Credits Used */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:border-2 hover:border-blue-500">
              <h2 className="text-lg font-semibold mb-2">Credits Left</h2>
              <p className="text-4xl font-bold text-blue-600">250</p>
              <p className="text-gray-500">/ 500</p>
            </div>

            {/* DR Detected */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:border-2 hover:border-blue-500">
              <h2 className="text-lg font-semibold mb-2">DR Detected</h2>
              <p className="text-4xl font-bold text-blue-600">100</p>
            </div>

            {/* DR Prevalence */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:border-2 hover:border-blue-500">
              <h2 className="text-lg font-semibold mb-2">DR Prevalence</h2>
              <p className="text-4xl font-bold text-blue-600">4%</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/detect" className="inline-block">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 cursor-pointer transition-colors">
                Detect Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}