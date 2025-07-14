'use client';
// pages/purchase-confirmation.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PurchaseConfirmation() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [subscriptionEnd, setSubscriptionEnd] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('isLoggedIn') !== 'true') {
        router.replace('/');
      } else {
        setAuthChecked(true);
        setSubscriptionEnd(localStorage.getItem('subscriptionEnd') || 'Not subscribed');
      }
    }
  }, [router]);
  if (!authChecked) return null;

  return (
    <div className="">
      <Head>
        <title>ClearSight AI - Purchase Confirmation</title>
        <meta name="description" content="Purchase Confirmation for ClearSight AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto bg-white shadow-lg min-h-screen">
        {/* Navigation Bar */}
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image 
              src="/clearsight-logo-1.png" 
              alt="ClearSight AI Logo" 
              width={48} 
              height={48} 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-semibold text-white">ClearSight AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/home" className="hover:underline text-lg">Home</Link>
            <Link href="/history" className="hover:underline text-lg">History</Link>
            <Link href="/top-up" className="hover:underline text-lg">Top Up</Link>
            <Link href="/information" className="hover:underline text-lg">Information</Link>
            <Link href="/privacy-policy" className="hover:underline text-lg">Privacy Policy</Link>
            <Link href="/profile" className="bg-white text-blue-500 px-6 py-2 rounded-full font-medium">
              Profile
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="py-10 px-4 flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            {/* Mobile - Show Check First, Desktop - Logo First */}
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0">
              <div className="mb-6">
                <Image 
                  src="/clearsight-logo-1.png" 
                  alt="ClearSight AI Logo" 
                  width={200} 
                  height={200} 
                  className="w-48 h-auto"
                />
              </div>
              
              <p className="text-xl font-medium mb-4 text-center">Payments Accepted</p>
              <div className="w-full max-w-md">
                <Image 
                  src="/payments.png" 
                  alt="Payment Options" 
                  width={400} 
                  height={120} 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Mobile - First Component, Desktop - Second Component */}
            <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0">
              <div className="mb-6">
                <Image 
                  src="/check.png" 
                  alt="Success" 
                  width={160} 
                  height={160} 
                  className="w-40 h-auto"
                />
              </div>
              
              <p className="text-2xl font-bold text-center mb-4">Thank you for your payment!</p>
              <p className="text-lg text-center mb-8">Your subscription lasts until: <span className="font-bold">{subscriptionEnd}</span></p>
              
              <Link 
                href="/dashboard" 
                className="bg-blue-500 text-white px-10 py-3 rounded flex items-center text-lg font-medium"
              >
                Return Home
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}