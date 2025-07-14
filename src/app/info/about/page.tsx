'use client';
import React from 'react';
import Navbar from '@/components/Navbar'; // Import the Navbar component
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AboutUs() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('isLoggedIn') !== 'true') {
        router.replace('/');
      } else {
        setAuthChecked(true);
      }
    }
  }, [router]);
  if (!authChecked) return null;
  return (
    <div className="min-h-screen bg-white-900">
      {/* Main Content Container */}
      <div className=" mx-auto bg-white">
          
          {/* Navigation Menu - Now using the inline Navbar component */}
          <Navbar />
        </div>
        
        {/* About Us Content */}
        <div className="py-16 px-6">
          <h1 className="text-5xl font-bold text-center mb-16">About Us</h1>
          
          <div className="max-w-4xl mx-auto border border-blue-200 rounded-lg p-12">
            <p className="text-center text-lg leading-relaxed">
              ClearSight is a nonprofit initiative dedicated to revolutionizing eye 
              care through the power of artificial intelligence. Our mission is to assist 
              doctor on diagnosing diabetic retinopathy, especially in underserved 
              communities. We envision a world where no one loses their vision to 
              diabetic retinopathy due to lack of access to diagnosis. Through 
              ClearSight, we aim to make early detection a standard part of diabetic 
              care globally.
            </p>
          </div>
      </div>
    </div>
  );
}