'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

export default function TopupPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Topup</h1>
                <div className="bg-white rounded-lg shadow p-6">
                    <p>Add your topup content here</p>
                </div>
            </div>
        </div>
        
    );
}
