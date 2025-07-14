"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar'; // Import the Navbar component
import { useRouter } from 'next/navigation';

export default function Contact() {
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

  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Message submitted:', message);
    // Reset the form
    setMessage('');
    // You might want to show a success message or redirect
  };

  return (
    <div className="min-h-screen flex flex-col font-['Poppins']">
      <Head>
        <title>Contact - ClearSight AI</title>
        <meta name="description" content="Contact ClearSight AI for support or information" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Contact Content */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-8">
        <h1 className="text-5xl font-bold text-center mb-4">Contact</h1>
        
        <p className="text-center text-lg mb-8">
          Contact us to report a problem, clarify any doubts<br />
          about ClearSight AI, or just find out more.
        </p>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full h-60 bg-gray-100 p-4 rounded-md resize-none focus:outline-none"
            required
          ></textarea>
          
          <div className="flex justify-center mt-4">
            <button 
              type="submit" 
              className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        
        {/* FAQ Section */}
        <div className="bg-gray-200 p-6 rounded-md">
          <h2 className="font-bold text-xl mb-4">FAQ:</h2>
          
          <div className="mb-4">
            <p className="font-medium">Q: How does ClearSight AI work?</p>
            <p>A: ClearSight AI uses advanced machine learning to analyze retinal images with high precision, providing real-time second opinions for medical professionals.</p>
          </div>
          
          <div className="mb-4">
            <p className="font-medium">Q: Who can benefit from ClearSight AI?</p>
            <p>A: Healthcare providers, especially in underserved areas with limited specialist access, and the 43.1% of diabetic patients in Indonesia who have diabetic retinopathy.</p>
          </div>
          
          <div className="mb-4">
            <p className="font-medium">Q: How accurate is ClearSight AIs detection?</p>
            <p>A: ClearSight AI significantly improves screening accuracy, reducing misdiagnosis rates compared to traditional methods.</p>
          </div>
          
          <div>
            <p className="font-medium">Q: How quickly can I get results?</p>
            <p>A: ClearSight AI provides results in seconds, speeding up the diagnosis process that traditionally could take up to an hour.</p>
          </div>
        </div>
      </div>
    </div>
  );
}