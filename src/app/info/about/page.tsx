import { Festive } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/Navbar';


export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                    <div className="prose max-w-none">
                        <p className="mb-4">
                            Welcome to our about page. This is where you can share information about your organization,
                            mission, and values.
                        </p>
                    </div>
            </div>
        </div>
        
    )
}