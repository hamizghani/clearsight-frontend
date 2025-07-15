'use client';
// pages/top-up.tsx
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TopUp() {
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

  // Two subscription options
  const subscriptionOptions = [
    { label: 'Pay per month', price: '500.000', plan: 'monthly' },
    { label: 'Pay per year', price: '6.000.000', plan: 'yearly' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Head>
        <title>Top Up Credits - ClearSight AI</title>
        <meta name="description" content="Purchase credits for ClearSight AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Subscription content section */}
      <main className="flex-1 flex flex-col items-center max-w-6xl mx-auto w-full p-8">
        <h1 className="text-5xl font-bold text-center my-12 font-['Poppins']">Subscription</h1>
        <div className="flex justify-center w-full mb-12 gap-8">
          {subscriptionOptions.map(option => (
            <div
              key={option.plan}
              className="group relative w-56 h-60 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => router.push(`/payment/id/subscribe?plan=${option.plan}`)}
              tabIndex={0}
              role="button"
              onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/payment/id/subscribe?plan=${option.plan}`); }}
            >
              <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#3387d6] to-[#a6d7ff]">
                <div className="text-2xl font-bold text-white font-['Poppins'] mb-2">{option.label}</div>
                <div className="text-4xl font-bold text-white font-['Poppins']">{option.price}</div>
              </div>
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-8 h-8 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full mt-8">
          <p className="text-xl font-medium mb-4 font-['Poppins']">We take</p>
          <Image
            src="/payments.png" 
            alt="Payment methods"
            width={700}
            height={200}
            className="object-contain"
          />
        </div>
      </main>
    </div>
  );
}