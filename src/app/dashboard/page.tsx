'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [authChecked, setAuthChecked] = useState(false);
  const [subscriptionEnd, setSubscriptionEnd] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('subscriptionEnd') || '';
    }
    return '';
  });
  const [dashboardData, setDashboardData] = useState({ drDetected: 0, drPrevalence: 0 });
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('isLoggedIn') !== 'true') {
        router.replace('/');
      } else {
        setAuthChecked(true);
      }
    }
  }, [router]);
  useEffect(() => {
    // You can replace this with actual API call
    const fetchDashboardData = async () => {
      try {
        // Simulate API call  
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchDashboardData();
  }, []);
  const isSubscribed = () => {
    if (!subscriptionEnd) return false;
    const now = new Date();
    const end = new Date(subscriptionEnd);
    return end >= now;
  };
  if (!authChecked) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome, <span className="text-purple-600">RS UI</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {/* DR Detected */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:border-2 hover:border-blue-500">
              <h2 className="text-lg font-semibold mb-2">DR Detected</h2>
              <p className="text-4xl font-bold text-blue-600">{dashboardData.drDetected}</p>
            </div>
            {/* DR Prevalence */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:border-2 hover:border-blue-500">
              <h2 className="text-lg font-semibold mb-2">DR Prevalence</h2>
              <p className="text-4xl font-bold text-blue-600">{dashboardData.drPrevalence}%</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 cursor-pointer transition-colors"
              onClick={() => {
                if (isSubscribed()) {
                  router.push('/detect');
                } else {
                  router.push('/payment');
                }
              }}
            >
              Detect Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}