import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header/Navigation Bar */}
            <header className="bg-blue-500 text-white py-3">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="ClearSight AI Logo"
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                        <span className="text-xl font-bold">ClearSight AI</span>
                    </div>
                    
                    <nav className="flex items-center space-x-6">
                        <Link href="/dashboard" className="hover:text-blue-100">
                            Home
                        </Link>
                        <Link href="/history" className="hover:text-blue-100">
                            History
                        </Link>
                        <Link href="/topup" className="hover:text-blue-100">
                            Top Up
                        </Link>
                        <Link href="/information" className="hover:text-blue-100">
                            Information
                        </Link>
                        <Link href="/privacy" className="hover:text-blue-100">
                            Privacy Policy
                        </Link>
                        <Link href="/logout" className="bg-white text-blue-500 hover:bg-blue-50 px-4 py-1 rounded-full">
                            Log Out
                        </Link>
                    </nav>
                </div>
            </header>
            
            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
                
                <div className="max-w-4xl mx-auto bg-white rounded-lg border border-blue-100 p-8">
                    <p className="text-center text-lg leading-relaxed">
                        ClearSight is a nonprofit initiative dedicated to revolutionizing eye 
                        care through the power of artificial intelligence. Our mission is to assist 
                        doctor on diagnosing diabetic retinopathy, especially in underserved 
                        communities. We envision a world where no one loses their vision to 
                        diabetic retinopathy due to lack of access to diagnosis. Through 
                        ClearSight, we aim to make early detection a standard part of diabetic 
                        care globally.
                    </p>
                </div>
            </main>
        </div>
    );
}
