'use client';

import React from 'react'
import Navbar from '@/components/Navbar'

export default function DashboardPage() {
    return (
        <div>
            <Navbar />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <div className="grid gap-4">    
                    {/* Add your dashboard content here */}
                </div>
            </div>
        </div>
        
    )
}