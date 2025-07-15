'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo1 from './Logo1';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard">
            <Logo1 />
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/dashboard">
              <p className="hover:underline text-xl">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <p className="hover:underline text-xl">History</p>
            </Link>
          </li>
          <li>
            <Link href="/payment">
              <p className="hover:underline text-xl">Subscription</p>
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:underline text-xl"
            >
              Information
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-gray-700 text-white mt-2 p-2 rounded shadow-lg">
                <li className="hover:bg-gray-600 p-2 rounded text-xl">
                  <Link href="/info/about">
                    <p>About Us</p>
                  </Link>
                </li>
                <li className="hover:bg-gray-600 p-2 rounded text-xl">
                  <Link href="/info/contact">
                    <p>Contact</p>
                  </Link>
                </li>
                <li className="hover:bg-gray-600 p-2 rounded text-xl">
                  <Link href="/info/policy">
                    <p>Privacy Policy</p>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/profile">
              <p className="text-xl hover:underline">Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}