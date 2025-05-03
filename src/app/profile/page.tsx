"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar'; // Import the Navbar component
import { useUserStore } from '@/store/userStore';

export default function Profile() {
    const credits = useUserStore((state) => state.credits);
    // Sample data for the profile
    const [profileData] = useState({
        hospitalName: 'RS UI',
        hospitalNumber: '(021) 50829292',
        email: 'rsui@ui.ac.id',
        hospitalAddress: 'Jl. Prof. DR. Bahder Djohan, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424',
    });

    return (
        <div className="min-h-screen flex flex-col font-['Poppins']">

            {/* Navigation Bar */}
            <Navbar /> {/* Use the Navbar component here */}

            {/* Profile Content */}
            <div className="flex-1 max-w-6xl w-full mx-auto p-8">
                <h1 className="text-5xl font-bold text-center mb-12">Profile</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left column - Profile information */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="text-xl font-semibold block mb-2">Hospital Name</label>
                            <div className="bg-[#e6f2ff] rounded-full p-4 text-lg">
                                {profileData.hospitalName}
                            </div>
                        </div>
                        
                        <div>
                            <label className="text-xl font-semibold block mb-2">Hospital Number</label>
                            <div className="bg-[#e6f2ff] rounded-full p-4 text-lg">
                                {profileData.hospitalNumber}
                            </div>
                        </div>
                        
                        <div>
                            <label className="text-xl font-semibold block mb-2">Email</label>
                            <div className="bg-[#e6f2ff] rounded-full p-4 text-lg">
                                {profileData.email}
                            </div>
                        </div>
                        
                        <div>
                            <label className="text-xl font-semibold block mb-2">Hospital Address</label>
                            <div className="bg-[#e6f2ff] rounded-xl p-4 text-lg">
                                {profileData.hospitalAddress}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right column - Credits display */}
                    <div className="flex items-center justify-center">
                        <div className="bg-gradient-to-b from-[#59b4ff] to-[#a6d7ff] rounded-xl w-full max-w-sm p-8 text-center text-white">
                            <div className="text-8xl font-bold">{credits}</div>
                            <div className="text-3xl font-bold mb-4">CREDITS</div>
                            <div className="text-5xl font-bold">LEFT</div>
                        </div>
                    </div>
                </div>
                
                {/* Log Out Button */}
                <div className="flex justify-center mt-12">
                    <button 
                        className="bg-[#59b4ff] text-white text-2xl font-medium py-3 px-12 rounded-md"
                        onClick={() => window.location.href = '/login'}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
