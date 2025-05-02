'use client';

import { FC } from 'react';
import Navbar from '@/components/Navbar';

const ProfilePage: FC = () => {
    return (
        <div className="">
            <Navbar />
            <div>
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold">Personal Information</h2>
                            <p className="text-gray-600">Manage your personal information and account settings</p>
                        </div>
                        {/* Add profile content here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;