'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AboutPage: React.FC = () => {
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
    return (
        <div>
            <Navbar />
            <h1>About Us</h1>
            <p>Welcome to the About page! Learn more about our mission and values here.</p>
        </div>
    );
};

export default AboutPage;
