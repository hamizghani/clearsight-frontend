'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useProcessStore } from '@/store/processStore';
import { useUserStore } from '@/store/userStore';

export default function DetectPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [patientName, setPatientName] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientSymptom, setPatientSymptom] = useState('');
  const [symptomDuration, setSymptomDuration] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const setProcessComplete = useProcessStore((state) => state.setProcessComplete);
  const decreaseCredits = useUserStore((state) => state.decreaseCredits);
  const credits = useUserStore((state) => state.credits);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      
      // Create image preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Clean up preview URL on component unmount
  React.useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleProcessClick = async () => {
    if (selectedFile && patientName && patientDOB && patientGender) {
      // Check if user has enough credits
      if (credits === 0) {
        alert('Not enough credits. Please purchase more credits to continue.');
        return;
      }

      setIsSubmitting(true);
      try {
        // Decrease credits first
        const success = decreaseCredits();
        if (!success) {
          throw new Error('Failed to process credits');
        }

        // Store the patient data
        const patientId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const patientData = {
          id: patientId,
          name: patientName,
          dob: patientDOB,
          gender: patientGender,
          symptom: patientSymptom,
          symptomDuration: symptomDuration,
          hasImage: !!selectedFile
        };
        
        localStorage.setItem(`patient-${patientId}`, JSON.stringify(patientData));
        
        // Set process complete
        setProcessComplete(true);
        
        // Navigate to the results page
        router.push('/detect/result');
      } catch (error) {
        console.error('Error processing:', error);
        setProcessComplete(false);
        alert('An error occurred while processing. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
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
                  Enter Your Patients Full Name <span className="text-red-500">*</span>
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
                  Enter Your Patients Date of Birth <span className="text-red-500">*</span>
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
                  Enter Your Patients Gender <span className="text-red-500">*</span>
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
                  Enter Your Patients Symptom
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
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              {imagePreview ? (
                <div className="w-full h-full relative">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <p className="text-white">Click or drag to replace</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Upload or Drop Image</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleProcessClick}
              className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 cursor-pointer"
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