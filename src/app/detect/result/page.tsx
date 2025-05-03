'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const DetectResultPage = () => {
    // Dummy data for the example
    const [result] = useState({
        patientName: "John Doe",
        drLevel: 2,
        severity: "MODERATE",
        hexCode: "DR-M2345",
        action: "Monitor with repeat dilated retinal exam in 6-12 months.",
        monitoring: "Follow-up every 3-6 months.",
        advice: "Optimize diabetes, hypertension, and cholesterol management. Consider retinal imaging (OCT, fundus photography).",
        imagePath: `/fundus-foto.jpg` // Random image 1-5
    });

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Scan Image */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">{result.patientName}'S SCAN</h2>
                        <div className="relative aspect-square bg-white rounded-lg shadow-md overflow-hidden mb-4">
                            <Image
                                src={result.imagePath}
                                alt="Retinal Scan"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                <span>Print</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                            </button>
                            <Link href="/dashboard" className="flex items-center gap-2 px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                <span>Home</span>   
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Results */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">DIABETIC RETINOPATHY LEVEL</h2>
                            <div className="mb-2 text-xl font-bold">Level: {result.drLevel} 
                                <div className="flex items-center gap-2 w-full">
                                    {[1,2,3,4].map((level) => (
                                        <div key={level} 
                                            className={`flex-1 h-6 ${level <= result.drLevel ? 'bg-blue-500' : 'bg-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-lg">
                                Your patient has <span className="text-orange-500 font-bold">{result.severity}</span> DR
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">HEX CODE</h2>
                            <div className="space-y-4">
                                {/* Color 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#995038' }}></div>
                                    <div className="flex-grow">
                                        <p className="font-semibold">#995038</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                        </div>
                                        <p className="text-sm text-gray-600">45% contribution</p>
                                    </div>
                                </div>

                                {/* Color 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#ee755b' }}></div>
                                    <div className="flex-grow">
                                        <p className="font-semibold">#ee755b</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                                        </div>
                                        <p className="text-sm text-gray-600">35% contribution</p>
                                    </div>
                                </div>

                                {/* Color 3 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#923e2b' }}></div>
                                    <div className="flex-grow">
                                        <p className="font-semibold">#923e2b</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                                        </div>
                                        <p className="text-sm text-gray-600">20% contribution</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">NEXT STEP</h2>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-blue-500 font-bold">Action:</span>
                                    <p>{result.action}</p>
                                </div>
                                <div>
                                    <span className="text-blue-500 font-bold">Monitoring:</span>
                                    <p>{result.monitoring}</p>
                                </div>
                                <div>
                                    <span className="text-blue-500 font-bold">Advice:</span>
                                    <p>{result.advice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetectResultPage;