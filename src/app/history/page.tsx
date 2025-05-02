'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const HistoryPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">History</h1>
                <div className="bg-white rounded-lg shadow p-6">
                    {/* Add your history content here */}
                    <p>Your history content will go here</p>
                </div>
            </div>
        </div>
        
    );
};

export default HistoryPage;