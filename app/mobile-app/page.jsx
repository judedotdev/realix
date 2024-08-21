"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MobileApp() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Get the Realix Mobile App</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Access Realix on the go. Manage and tokenize your assets right from your mobile device.
                    </p>
                </div>
            </section>

            {/* App Showcase Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Use Our Mobile App?</h2>
                        <p className="text-gray-700 mb-6">
                            The Realix mobile app lets you manage your assets anytime, anywhere. With an intuitive interface and secure access, it&apos;s easier than ever to tokenize and interact with your assets.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Quick and easy asset management.</li>
                            <li>Stay connected with real-time notifications.</li>
                            <li>Secure transactions with enhanced security features.</li>
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            width={1200}
                            height={900}
                            src="/mobile-app-1.png"
                            alt="Realix Mobile App"
                            className="w-3/4 h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Download Links Section */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Download the Realix App</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="inline-block">
                            <Image
                                width={150}
                                height={50}
                                src="/google-play-badge.png"
                                alt="Download on Google Play"
                                className="w-auto h-12"
                            />
                        </a>
                        <a href="#" className="inline-block">
                            <Image
                                width={150}
                                height={50}
                                src="/app-store-badge.png"
                                alt="Download on the App Store"
                                className="w-auto h-12"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
