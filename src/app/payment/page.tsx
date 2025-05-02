// pages/top-up.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function TopUp() {
const creditOptions = [
    { credits: 50, price: '99.000 IDR', path: '/payment/id/payment50' },
    { credits: 100, price: '189.000 IDR', path: '/payment/id/100' },
    { credits: 200, price: '299.000 IDR', path: '/payment/id/200' },
    { credits: 500, price: '499.000 IDR', path: '/payment/id/500' },
];

  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Head>
        <title>Top Up Credits - ClearSight AI</title>
        <meta name="description" content="Purchase credits for ClearSight AI" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Pricing content section */}
      <main className="flex-1 flex flex-col items-center max-w-6xl mx-auto w-full p-8">
        <h1 className="text-5xl font-bold text-center my-12">Top Up Credits</h1>

        <div className="flex flex-wrap justify-center gap-6 w-full mb-12">
          {creditOptions.map((option, index) => (
            <Link 
              key={index} 
              href={option.path}
              className="relative bg-[#59b4ff] text-white w-56 h-60 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:-translate-y-1 transition-transform"
            >
              <div className="text-6xl font-bold">
                {option.credits}
              </div>
              <div className="text-2xl font-semibold">
                CREDITS
              </div>
              <div className="text-xl mt-6">
                {option.price}
              </div>
              <div className="absolute -bottom-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"></div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center w-full mt-8">
          <p className="text-xl font-medium mb-4">We take</p>
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