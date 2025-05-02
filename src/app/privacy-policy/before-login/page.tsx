// File: app/privacy/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation Bar */}
      <header className="bg-blue-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="ClearSight AI Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold">ClearSight AI</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link href="/dashboard" className="hover:text-blue-100">
              Home
            </Link>
            <Link href="/history" className="hover:text-blue-100">
              History
            </Link>
            <Link href="/topup" className="hover:text-blue-100">
              Top Up
            </Link>
            <Link href="/information" className="hover:text-blue-100">
              Information
            </Link>
            <Link href="/privacy" className="font-semibold">
              Privacy Policy
            </Link>
            <Link href="/profile" className="bg-white text-blue-500 hover:bg-blue-50 px-4 py-1 rounded-full">
              Profile
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Gradient Border Container */}
          <div className="rounded-lg p-[1px] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100">
            <div className="bg-white rounded-lg p-8">
              <p className="text-center text-lg leading-relaxed">
                Your patient&apos;s data is stored and collected in <span className="text-blue-500">ClearSight AI&apos;s</span> cloud safely and is not shared with any third parties. 
                All information is used exclusively to assist doctors in 
                making more accurate diagnoses.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}