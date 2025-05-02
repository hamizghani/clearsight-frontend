'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function DetectPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleProcessClick = () => {
    if (selectedFile) {
      // Handle the file upload logic here
      console.log('File selected:', selectedFile.name);
      alert(`Processing file: ${selectedFile.name}`);
    } else {
      alert('Please upload an image first.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Patient Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
          {/* Patient Form */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-500 p-8 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Enter Your Patient's Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Enter Your Patient's Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Enter Your Patient's Gender <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Enter Your Patient's Symptom
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  How long patients had symptoms
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Next Page
              </button>
            </form>
          </div>

          {/* Upload Image */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg border-dashed border-2 border-gray-400">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              {selectedFile ? (
                <p className="text-gray-500">{selectedFile.name}</p>
              ) : (
                <p className="text-gray-500">Upload or Drop Image</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleProcessClick}
              className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
            >
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}