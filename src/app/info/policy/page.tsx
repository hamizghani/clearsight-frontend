'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar'; // Adjust the import path as necessary
import { useRouter } from 'next/navigation';

// You can import this Navbar component if you have one, or use the inline one below
// import Navbar from '@/components/Navbar';

const PrivacyPolicyPage = () => {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-16 text-center">Privacy Policy</h1>
        
        <div className="w-full max-w-4xl rounded-3xl border border-blue-100 p-10 shadow-sm">
          <p className="text-xl text-center leading-relaxed">
            Your patients data is stored and collected in{' '}
            <span className="text-blue-500 font-medium">ClearSight AIs</span>{' '}
            cloud safely and is <span className="font-bold underline">not</span> shared with any third parties.
          </p>
          <p className="text-xl text-center leading-relaxed mt-4">
            All information is used exclusively to assist doctors in making more accurate diagnoses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;