'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { RetinopathyLevel, PatientData, retinopathyInfo } from '@/app/detect/types';

export default function ResultsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [detectionLevel, setDetectionLevel] = useState<RetinopathyLevel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get patient data from localStorage (in a real app, this would be an API call)
    const storedData = localStorage.getItem(`patient-${id}`);
    
    if (storedData) {
      const data = JSON.parse(storedData) as PatientData;
      setPatientData(data);
      
      // For demo, generate a random retinopathy level
      // In a real app, this would be determined by the AI analysis
      const levels: RetinopathyLevel[] = ['none', 'mild', 'moderate', 'severe', 'proliferative'];
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];
      setDetectionLevel(randomLevel);
    }
    
    setLoading(false);
  }, [id]);

  const handleBackClick = () => {
    router.push('/detect');
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-xl">Loading results...</div>
        </div>
      </div>
    );
  }

  if (!patientData || !detectionLevel) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Patient Not Found</h1>
            <p className="mb-6">The patient data you're looking for could not be found.</p>
            <button
              onClick={handleBackClick}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700"
            >
              Return to Patient Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  const info = retinopathyInfo[detectionLevel];
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
          <div className="bg-blue-50 py-2 px-4 mb-6 flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold text-blue-600 text-lg">ClearSight AI</span>
            </div>
            <div className="flex space-x-4">
              <span className="text-sm text-gray-600">Home</span>
              <span className="text-sm text-gray-600">History</span>
              <span className="text-sm text-gray-600">Top-Up</span>
              <span className="text-sm text-gray-600">Information</span>
              <span className="text-sm text-gray-600">Privacy Policy</span>
              <span className="text-sm text-gray-600">Profile</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">DIABETIC RETINOPATHY LEVEL</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h2 className="text-lg font-bold mb-4">{patientData.name}'S SCAN</h2>
              <div className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-center">
                {patientData.hasImage ? (
                  <div className="w-40 h-40 bg-orange-100 rounded-md flex items-center justify-center overflow-hidden">
                    {/* This would be a real image in production */}
                    <div className="w-32 h-32 rounded-full bg-orange-200 flex items-center justify-center">
                      <span className="text-orange-800 text-xs text-center">Retina Scan</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-40 h-40 bg-gray-200 rounded-md flex items-center justify-center">
                    <p className="text-sm text-gray-500">No Image</p>
                  </div>
                )}
              </div>
              <div className="flex space-x-2 mb-4">
                <button className="bg-gray-200 px-4 py-2 rounded flex items-center text-sm">
                  <span className="mr-1">Print</span>
                </button>
                <button 
                  className="bg-gray-200 px-4 py-2 rounded flex items-center text-sm"
                  onClick={handleBackClick}
                >
                  <span className="mr-1">Home</span>
                </button>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="font-bold mr-2">Level: {info.level}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-6 mx-0.5 ${i <= info.level ? 'bg-blue-500' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p>Your patient has <span className={`font-bold ${
                  detectionLevel === 'none' ? 'text-green-600' : 
                  detectionLevel === 'mild' ? 'text-yellow-600' : 
                  detectionLevel === 'moderate' ? 'text-orange-600' : 
                  detectionLevel === 'severe' ? 'text-red-600' : 'text-purple-600'
                }`}>{info.status}</span> DR</p>
              </div>

              <div className="mb-4">
                <h3 className="font-bold">HEX CODE</h3>
                <p>{info.hexCode}</p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <h3 className="font-bold mb-2">NEXT STEP</h3>
                {info.action && (
                  <div className="mb-2">
                    <span className="font-bold text-blue-600">Action:</span> {info.action}
                  </div>
                )}
                {info.monitoring && (
                  <div className="mb-2">
                    <span className="font-bold text-blue-600">Monitoring:</span> {info.monitoring}
                  </div>
                )}
                {info.treatment && (
                  <div className="mb-2">
                    <span className="font-bold text-blue-600">Treatment:</span> {info.treatment}
                  </div>
                )}
                {info.advice && (
                  <div className="mb-2">
                    <span className="font-bold text-blue-600">Advice:</span> {info.advice}
                  </div>
                )}
                {info.referral && (
                  <div className="mb-2">
                    <span className="font-bold text-blue-600">Referral:</span> {info.referral}
                  </div>
                )}
              </div>

              {/* Additional patient info if needed */}
              <div className="border-t border-gray-300 mt-4 pt-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-bold">Patient ID:</span> {patientData.id}
                  </div>
                  <div>
                    <span className="font-bold">Date of Birth:</span> {patientData.dob}
                  </div>
                  <div>
                    <span className="font-bold">Gender:</span> {patientData.gender}
                  </div>
                  {patientData.symptom && (
                    <div>
                      <span className="font-bold">Symptom:</span> {patientData.symptom}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBackClick}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700"
            >
              Back to Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}