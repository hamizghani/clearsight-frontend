'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function DetectPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [patientName, setPatientName] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientSymptom, setPatientSymptom] = useState('');
  const [symptomDuration, setSymptomDuration] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleProcessClick = () => {
    if (selectedFile && patientName && patientDOB && patientGender) {
      setIsSubmitting(true);
      
      // In a real implementation, you would upload the file to the server here
      // For demo purposes, we're simulating a file upload and generating a random ID
      
      // Generate a random patient ID (in a real app, this would come from the server)
      const patientId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      
      // Simulate processing delay
      setTimeout(() => {
        // Store the patient data in localStorage for demo purposes
        // In a real app, this data would be stored on the server
        const patientData = {
          id: patientId,
          name: patientName,
          dob: patientDOB,
          gender: patientGender,
          symptom: patientSymptom,
          symptomDuration: symptomDuration,
          // In a real app, we would store the actual image URL after upload
          hasImage: !!selectedFile
        };
        
        localStorage.setItem(`patient-${patientId}`, JSON.stringify(patientData));
        
        // Navigate to the results page
        router.push(`/detect/id/${patientId}`);
      }, 1000);
    } else {
      alert('Please fill in all required fields and upload an image.');
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
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Enter Your Patient's Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border border-gray-300"
                  value={patientDOB}
                  onChange={(e) => setPatientDOB(e.target.value)}
                  required
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
                  value={patientGender}
                  onChange={(e) => setPatientGender(e.target.value)}
                  required
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
                  value={patientSymptom}
                  onChange={(e) => setPatientSymptom(e.target.value)}
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
                  value={symptomDuration}
                  onChange={(e) => setSymptomDuration(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Upload Image */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg border-dashed border-2 border-gray-400 relative">
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
              className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400"
              disabled={!selectedFile || !patientName || !patientDOB || !patientGender || isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Process'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}