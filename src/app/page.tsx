import Logo1 from '@/components/Logo1';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Header/Navigation Bar - Add z-20 to appear above grid */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm py-2 sticky top-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo1 color="text-sky-500" />
          </div>
          
          <nav className="flex items-center space-x-10">
            <Link href="/" className="text-gray-700 hover:text-blue-500 text-2xl">
              Home
            </Link>
            <Link href="/signup" className="text-gray-700 hover:text-blue-500 text-2xl">
              Sign Up
            </Link>
            <Link href="#privacy" className="text-gray-700 hover:text-blue-500 text-2xl">
              Pricing
            </Link>
            <Link href="/login" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-1 rounded-md text-2xl py-3">
              Log In
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content - Add relative and z-10 to appear above grid */}
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
      <section className="container mx-auto pt-24 pb-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 pr-8">
            <h1 className="text-6xl font-bold text-blue-500 mb-6">
              Meet ClearSight
            </h1>
            <div className="text-2xl mb-8">
              <p className="mb-2">
                An AI that help doctors provide more
              </p>
              <p className="mb-2">
                accurate <span className="text-blue-500">Diabetic Retinopathy</span> Screening
              </p>
            </div>
            <div className="flex space-x-6">
              <Link 
                href="/signup" 
                className="bg-blue-500 text-white px-8 py-4 rounded-xl text-xl font-medium hover:bg-blue-600"
              >
                Join Us Now!
              </Link>
              <Link 
                href="#what-is-dr" 
                className="bg-blue-500 text-white px-8 py-4 rounded-xl text-xl font-medium hover:bg-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
            <Image 
              src="/clearsight-logo-1.png"
              alt="ClearSight AI Large Logo" 
              width={400} 
              height={400}
              priority
              className="pulse-animation"
            />
          </div>
        </div>
      </section>
        
        {/* Video Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
            {/* YOUTUBE VIDEO: Replace with your actual YouTube embed */}
            <div className="relative pt-[56.25%]">
              <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/_C02Amnr2D4?si=iP22c8bjY-ZK7MH-" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* What is DR Section */}
        <section
          id="what-is-dr"
          className="container mx-auto px-4 py-12 relative"
          style={{ scrollMarginTop: '100px' }} // Adjust the offset
        >
          <h2 className="text-2xl font-bold text-center mb-6">What is DR?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4 text-xl">
              <span className="text-blue-500 font-medium">Diabetic Retinopathy (DR)</span> is the leading cause of blindness. Limited access to 
              specialists and diagnostic tools delays early detection, especially in underserved
              areas. As DR becomes increasingly common among adults, it highlights the need
              for earlier and more accurate diagnosis.
            </p>
          </div>
        </section>
        
        {/* Why is it concerning Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why is it concerning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="w-full group/card">
              <div 
                className="cursor-pointer overflow-hidden relative h-72 rounded-lg shadow-xl p-6 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/diabetic.jpg')",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-blue-400/60 to-blue-600/60"></div>
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/60"></div>
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="text-5xl font-bold text-white mb-4">43.1%</div>
                  <p className="text-lg text-white">
                    of diabetic patients in Indonesia have diabetic retinopathy
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="w-full group/card">
              <div 
                className="cursor-pointer overflow-hidden relative h-72 rounded-lg shadow-xl p-6 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/diabetic.jpg')",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-blue-400/60 to-blue-600/60"></div>
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/60"></div>
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="text-5xl font-bold text-white mb-4">{'< 25%'}</div>
                  <p className="text-lg text-white">
                    of individuals with vision-threatening DR receive proper treatment within a year of diagnosis
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="w-full group/card">
              <div 
                className="cursor-pointer overflow-hidden relative h-72 rounded-lg shadow-xl p-6 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/diabetic.jpg')",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-blue-400/60 to-blue-600/60"></div>
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/60"></div>
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="text-5xl font-bold text-white mb-4">$2.4 B</div>
                  <p className="text-lg text-white">
                    was estimated to manage DR, and projected to escalate to $18.9 billion by 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How to Use Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">How to Use ClearSight AI</h2>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <Image 
                src="/clipboard.png" 
                alt="Clipboard" 
                width={200} 
                height={250}
              />
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-4 h-4 mt-1.5 mr-4"></div>
                  <div>
                    <h3 className="font-medium">Log in</h3>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-4 h-4 mt-1.5 mr-4"></div>
                  <div>
                    <h3 className="font-medium">Fill out patient's form</h3>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-4 h-4 mt-1.5 mr-4"></div>
                  <div>
                    <h3 className="font-medium">Upload patient's scans</h3>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-4 h-4 mt-1.5 mr-4"></div>
                  <div>
                    <h3 className="font-medium">See the results</h3>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-4 h-4 mt-1.5 mr-4"></div>
                  <div>
                    <h3 className="font-medium">Take further actions according to the results</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section with Gradient Background */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Pricing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6 text-center">
                <div className="text-5xl font-bold mb-1">50</div>
                <div className="text-2xl font-semibold mb-6">CREDITS</div>
                <div className="text-xl font-medium text-black">99.000 IDR</div>
              </div>
            </div>
            
            {/* Plan 2 */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6 text-center">
                <div className="text-5xl font-bold mb-1">100</div>
                <div className="text-2xl font-semibold mb-6">CREDITS</div>
                <div className="text-xl font-medium text-black">189.000 IDR</div>
              </div>
            </div>
            
            {/* Plan 3 */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6 text-center">
                <div className="text-5xl font-bold mb-1">200</div>
                <div className="text-2xl font-semibold mb-6">CREDITS</div>
                <div className="text-xl font-medium text-black">299.000 IDR</div>
              </div>
            </div>
            
            {/* Plan 4 */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6 text-center">
                <div className="text-5xl font-bold mb-1">500</div>
                <div className="text-2xl font-semibold mb-6">CREDITS</div>
                <div className="text-xl font-medium text-black">499.000 IDR</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer - Add relative and z-10 to appear above grid */}
      <footer id="privacy" className="bg-sky-300/90 backdrop-blur-sm text-white py-8 relative z-10" style={{ scrollMarginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="/clearsight-logo-1.png" // Use your white version logo
                alt="ClearSight AI Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="text-3xl font-medium">ClearSight AI</span>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-white hover:text-blue-100 text-lg">
                Home
              </Link>
              <Link href="/inquire" className="text-white hover:text-blue-100 text-lg">
                Sign Up
              </Link>
              <Link href="#privacy" className="text-white hover:text-blue-100 text-lg">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}