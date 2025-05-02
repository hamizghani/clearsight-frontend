'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo1 from './Logo1';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 font-poppins">
      <nav
        className="py-2 shadow-sm"
        style={{
          backgroundImage: 'linear-gradient(to right, #4facfe, #00f2fe)', // Gradient background
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo1 color="text-sky-500" />
          </div>

          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/dashboard" className="text-white hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/history" className="text-white hover:text-blue-200">
                History
              </Link>
            </li>
            <li>
              <Link href="/payment" className="text-white hover:text-blue-200">
                Top Up
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-blue-200"
              >
                Information
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-gray-700 text-white mt-2 p-2 rounded shadow-lg">
                  <li className="hover:bg-gray-600 p-2 rounded">
                    <Link href="/info/about">
                      <p>About Us</p>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-600 p-2 rounded">
                    <Link href="/info/contact">
                      <p>Contact</p>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-600 p-2 rounded">
                    <Link href="/info/policy">
                      <p>Privacy Policy</p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/profile"
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-1 rounded-md"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}