'use client';

import React from 'react';
import Link from 'next/link';
import Logo1 from './Logo1';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo1 />
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <p className="hover:underline">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <p className="hover:underline">History</p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <p className="hover:underline">Top Up</p>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <p className="hover:underline">Login</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}