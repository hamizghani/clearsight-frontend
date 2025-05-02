'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const PolicyPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">
                        This privacy policy outlines how we collect, use, and protect your information.
                    </p>
                    {/* Add more policy content sections here */}
                </div>
            </div>
        </div>
        
    );
};

export default PolicyPage;