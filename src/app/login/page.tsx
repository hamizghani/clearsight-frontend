'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        hospitalId: '',
        authenticationId: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('Login attempted with:', credentials);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <main className="flex min-h-screen">
            <div className="w-1/2 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center justify-center w-full">
                    <Image
                        src="/clearsight-logo-1.png"
                        alt="ClearSight Logo"
                        width={200}
                        height={200}
                        className="mb-4"
                        priority
                    />
                    <h1 className="text-5xl font-bold text-[#58B7E9]">ClearSight AI</h1>
                </div>
            </div>
            
            <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-[#2B6CB0] to-[#4299E1] rounded-l-[50px]">
                <div className="w-[400px] p-8">
                    <h2 className="text-4xl font-bold text-white mb-8">Log In</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white mb-2">
                                Enter Hospital ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="hospitalId"
                                value={credentials.hospitalId}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
                                placeholder="Enter Hospital ID"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-2">
                                Enter Authentication ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="authenticationId"
                                value={credentials.authenticationId}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
                                placeholder="Enter Authentication ID"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-[#58B7E9] py-3 rounded-lg font-bold mt-6 hover:bg-blue-50 transition-colors cursor-pointer"
                        >
                            Log In
                        </button>
                        <p className="text-center text-white mt-4">
                            Don't have an ID?{' '}
                            <Link href="/signup" className="underline hover:text-blue-100">
                                Click Here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}