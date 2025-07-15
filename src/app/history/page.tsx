'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useProcessStore } from '@/store/processStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HistoryPage = () => {
    const isProcessComplete = useProcessStore((state) => state.isProcessComplete);
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

    // Dummy patient data with unique ID
    const patientHistory = {
        id: 'DR' + Math.random().toString(36).substring(2, 12).toUpperCase(),
        name: "John Doe",
        date: new Date().toLocaleDateString(),
        drLevel: 2,
        severity: "MODERATE",
        hexCode: "DR-M2345",
        action: "Monitor with repeat dilated retinal exam in 6-12 months.",
        monitoring: "Follow-up every 3-6 months.",
        advice: "Optimize diabetes, hypertension, and cholesterol management."
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-6">Detection History</h1>
                
                {isProcessComplete ? (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="border-b pb-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <h2 className="text-xl font-semibold">{patientHistory.name}</h2>
                                    <p className="text-sm text-gray-500">ID: {patientHistory.id}</p>
                                </div>
                                <span className="text-gray-500">{patientHistory.date}</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600">DR Level: 
                                        <span className="font-semibold ml-2">{patientHistory.drLevel}</span>
                                    </p>
                                    <p className="text-gray-600">Severity: 
                                        <span className="text-orange-500 font-semibold ml-2">{patientHistory.severity}</span>
                                    </p>
                                </div>
                                <div className="flex justify-end items-center">
                                    <Link 
                                        href={`/detect/result?id=${patientHistory.id}`}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <p className="text-gray-500 text-lg">No detection history available.</p>
                        <p className="text-gray-400">Process a scan to see the history.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HistoryPage;