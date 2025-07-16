'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Eye, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Logo1 from '@/components/Logo1';

export default function EnhancedLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo1 color="text-blue-700" />
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Pricing
              </button>
              <a href="/signup" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg">Sign Up</a>
              <a href="/login" className="border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-all transform hover:scale-105 ml-2">Log In</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t">
              <nav className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors font-medium py-2">
                  Home
                </button>
                <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors font-medium py-2">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 hover:text-blue-700 transition-colors font-medium py-2">
                  Pricing
                </button>
                <a href="/signup" className="block w-full text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all shadow-lg mb-2">Sign Up</a>
                <a href="/login" className="block w-full text-center border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-full">Log In</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Diagnosis
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">ClearSight</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                An AI that helps doctors provide more accurate{' '}
                <span className="text-blue-700 font-semibold">Diabetic Retinopathy</span> screening
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg">
                  Join Us Now!
                </button>
                <button 
                  onClick={() => scrollToSection('what-is-dr')}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-6xl"><Logo1 color="text-blue-700" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-indigo-900">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative aspect-video flex items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/Cd4i_wkqAbQ?si=cGiHRqmWZPYkvAtS"
                  title="ClearSight AI Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DR Section */}
      <section id="what-is-dr" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              What is <span className="text-blue-700">Diabetic Retinopathy</span>?
            </h2>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                <span className="text-blue-700 font-bold">Diabetic Retinopathy (DR)</span> is the leading cause of blindness. 
                Limited access to specialists and diagnostic tools delays early detection, especially in underserved areas. 
                As DR becomes increasingly common among adults, it highlights the need for earlier and more accurate diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why is it concerning?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { stat: "43.1%", description: "of diabetic patients in Indonesia have diabetic retinopathy" },
              { stat: "< 25%", description: "of individuals with vision-threatening DR receive proper treatment within a year" },
              { stat: "$2.4B", description: "estimated cost to manage DR, projected to reach $18.9B by 2025" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">
                      {item.stat}
                    </div>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            How to Use ClearSight AI
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  {[
                    { icon: <Shield className="w-6 h-6" />, title: "Secure Login", description: "Access your dashboard with enterprise-grade security" },
                    { icon: <Users className="w-6 h-6" />, title: "Patient Management", description: "Efficiently manage patient information and records" },
                    { icon: <Eye className="w-6 h-6" />, title: "Scan Upload", description: "Upload retinal scans with drag-and-drop simplicity" },
                    { icon: <Zap className="w-6 h-6" />, title: "AI Analysis", description: "Get instant, accurate AI-powered diagnosis results" },
                    { icon: <CheckCircle className="w-6 h-6" />, title: "Treatment Plan", description: "Receive actionable recommendations for patient care" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-all">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-700 flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-2xl opacity-30"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center justify-center h-80">
                      <div className="text-4xl mb-4"><Logo1 color="text-blue-700" /></div>
                      <h3 className="text-2xl font-bold text-blue-700 mb-2">AI Diagnostic Interface</h3>
                      <p className="text-gray-600 text-center">Upload a retinal scan and let ClearSight AI analyze for Diabetic Retinopathy in seconds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20" >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12" >
            Simple, Transparent Pricing
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
                <p className="opacity-90">Perfect for healthcare providers</p>
              </div>
              
              <div className="p-8 text-center">
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">500.000</span>
                  <span className="text-xl text-gray-600 ml-2">/ month</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  {[
                    "Unlimited scans and diagnoses",
                    "Advanced AI analysis",
                    "Patient management system",
                    "24/7 technical support",
                    "HIPAA compliant security"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="/signup" className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">Get Started Now <ArrowRight className="w-5 h-5 ml-2 inline" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Logo1 color="text-white" />
              <p className="mt-4 text-blue-100 leading-relaxed">
                Revolutionizing diabetic retinopathy screening with AI-powered precision and accessibility.
              </p>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-blue-100 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-blue-100 hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-blue-100 hover:text-white transition-colors">Pricing</button></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-blue-100 leading-relaxed">
                Ready to transform your practice? Get in touch with our team to learn more about ClearSight AI.
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2025 ClearSight AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}