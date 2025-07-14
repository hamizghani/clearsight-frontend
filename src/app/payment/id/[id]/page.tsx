"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar'; // Import the Navbar component
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

export default function Payment() {
  const addCredits = useUserStore((state) => state.addCredits);
  const { id } = useParams(); // Correctly retrieve the dynamic route parameter
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState('');
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
  useEffect(() => {
    // Set credits and price based on the id parameter
    if (id) {
      const creditAmount = parseInt(id.toString());
      setCredits(creditAmount);

      // Set price based on credit amount
      switch (creditAmount) {
        case 50:
          setPrice('99.000 IDR');
          break;
        case 100:
          setPrice('189.000 IDR');
          break;
        case 200:
          setPrice('299.000 IDR');
          break;
        case 500:
          setPrice('499.000 IDR');
          break;
        default:
          setPrice('0 IDR');
      }
    }
  }, [id]);
  if (!authChecked) return null;

  const handleCheckout = () => {
    if (email && cardNumber && expiryDate && securityCode && nameOnCard) {
      try {
        // Add credits to user's account
        addCredits(credits);
        
        // Navigate to payment done page
        router.push('/payment/id/paymentdone');
      } catch (error) {
        console.error('Error processing payment:', error);
      }
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Head>
        <title>Checkout - {credits} Credits | ClearSight AI</title>
        <meta name="description" content={`Purchase ${credits} credits for ClearSight AI`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navigation Bar */}
      <Navbar /> {/* Use the Navbar component */}
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
              <div className="text-5xl font-bold leading-none">{credits}</div>
              <div className="text-xl font-semibold">CREDITS</div>
            </div>
            <div className="text-right">
              <div className="text-xl text-gray-600">SUBTOTAL</div>
              <div className="text-4xl font-bold">{price}</div>
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

            <button 
              className="w-full bg-black text-white rounded-full py-4 font-semibold text-xl flex items-center justify-center gap-2"
              onClick={handleCheckout}
            >
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
