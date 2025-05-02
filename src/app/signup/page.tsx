'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import Image from 'next/image';

const hospitalOptions = [
    { value: 'rspi', label: 'Rumah Sakit Pondok Indah' },
    { value: 'siloam', label: 'Siloam Hospitals Kebon Jeruk' },
    { value: 'rshs', label: 'Rumah Sakit Hasan Sadikin' },
    { value: 'rsud', label: 'RSUD Dr. Soetomo' },
    { value: 'rsup', label: 'RSUP Dr. Kariadi' },
    { value: 'rscm', label: 'RS Cipto Mangunkusumo' },
    { value: 'brawijaya', label: 'Rumah Sakit Brawijaya' },
    { value: 'dharmais', label: 'RS Kanker Dharmais' },
    { value: 'premiere', label: 'RS Premier Bintaro' },
    { value: 'medistra', label: 'RS Medistra Jakarta' },
];

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<{
        hospitalName: { value: string; label: string; } | null;
        adminName: string;
        phoneNumber: string;
        email: string;
        address: string;
    }>({
        hospitalName: null,
        adminName: '',
        phoneNumber: '',
        email: '',
        address: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('Form submitted:', formData);
            router.push('/login');
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="w-full max-w-4xl">
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src="/clearsight-logo-1.png"
                        alt="ClearSight Logo"
                        width={150}
                        height={150}
                        priority
                        className="mb-4"
                    />
                    <h1 className="text-4xl font-bold text-center text-blue-500">Hospital Inquiry Form</h1>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="hospitalName" className="block mb-2">
                                Hospital Name <span className="text-red-500">*</span>
                            </label>
                            <Select
                                id="hospitalName"
                                options={hospitalOptions}
                                value={formData.hospitalName}
                                onChange={(option) => setFormData(prev => ({
                                    ...prev,
                                    hospitalName: option
                                }))}
                                className="w-full"
                                placeholder="Search hospital..."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="adminName" className="block mb-2">
                                Administrator Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="adminName"
                                name="adminName"
                                value={formData.adminName}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-blue-50"
                                placeholder="Type here..."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-blue-50"
                                placeholder="Type here..."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-blue-50"
                                placeholder="Type here..."
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="address" className="block mb-2">
                                Hospital Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-blue-50"
                                placeholder="Type here..."
                                required
                            />
                        </div>
                        <div className="col-span-2 flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-blue-100 text-black px-8 py-2 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}