'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ClearSight</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <p className="hover:underline">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:underline">About</p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <p className="hover:underline">Dashboard</p>
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