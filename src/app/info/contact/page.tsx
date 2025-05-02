'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <div className="max-w-2xl">
                    <p className="mb-4">
                        We'd love to hear from you. Please get in touch using the information below.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-xl font-semibold">Email</h2>
                            <p>info@clearsight.com</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Phone</h2>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Address</h2>
                            <p>123 Business Street</p>
                            <p>Suite 100</p>
                            <p>City, State 12345</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ContactPage;