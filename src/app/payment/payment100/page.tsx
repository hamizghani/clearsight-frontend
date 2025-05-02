// pages/pages100.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Page100() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Head>
        <title>Checkout - 100 Credits | ClearSight AI</title>
        <meta name="description" content="Purchase 100 credits for ClearSight AI" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-2 bg-[#59b4ff] text-white">
        <div className="flex items-center gap-2">
          <Image 
            src="/clearsight-logo-1.png" 
            alt="ClearSight AI" 
            width={50} 
            height={50}
          />
          <span className="text-2xl font-semibold">ClearSight AI</span>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/history" className="font-medium">History</Link>
          <Link href="/top-up" className="font-medium">Top Up</Link>
          <Link href="/information" className="font-medium">Information</Link>
          <Link href="/privacy-policy" className="font-medium">Privacy Policy</Link>
          <Link href="/profile" className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium">Profile</Link>
        </div>
      </nav>

      {/* Checkout content */}
      <div className="flex flex-1">
        {/* Left Column - Logo */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
          <Image 
            src="/clearsight-logo-1.png" 
            alt="ClearSight AI" 
            width={250} 
            height={250}
            className="mb-8"
          />
          <p className="text-2xl font-semibold mb-6">Pay using</p>
          <Image
            src="/payments.png" 
            alt="Payment methods"
            width={500}
            height={150}
          />
        </div>

        {/* Right Column - Form */}
        <div className="flex-1 p-8 flex flex-col border-l border-gray-200">
          {/* Email Input */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Enter Your Email<span className="text-red-500">*</span>
            </h2>
            <input 
              type="email" 
              placeholder="Type here..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-base"
              required
            />
          </div>

          {/* Subtotal Section */}
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <div className="bg-[#59b4ff] text-white p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="text-5xl font-bold leading-none">100</div>
              <div className="text-xl font-semibold">CREDITS</div>
            </div>
            <div className="text-right">
              <div className="text-xl text-gray-600">SUBTOTAL</div>
              <div className="text-4xl font-bold">189.000 IDR</div>
              <div className="text-sm text-gray-600">PRICE INCLUDES GST</div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="py-6">
            <h3 className="text-2xl font-bold">PAYMENT</h3>
            <p className="text-gray-600 mb-6">All transactions are secure and encrypted</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <label className="flex items-center gap-2 mb-4">
                <input type="radio" name="paymentMethod" defaultChecked />
                <span>Credit/Debit Card</span>
                <span className="text-gray-500 ml-2">Visa, MasterCard, etc</span>
              </label>

              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Card number" 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Expiration date (MM/YY)" 
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg"
                  />
                  <input 
                    type="text" 
                    placeholder="Security code" 
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Name on card" 
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <button className="w-full bg-black text-white rounded-full py-4 font-semibold text-xl flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              CHECKOUT SECURELY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}