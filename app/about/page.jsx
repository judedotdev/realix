"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutUs() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800">About Realix</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Discover the vision, mission, and team behind Realix, the leading platform for asset tokenization.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                            Learn More
                        </button>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <Image
                            width={1600}
                            height={900}
                            src="/about-hero.jpg"
                            alt="About Realix"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
                    <p className="mt-4 text-gray-700">
                        Realix was founded with the vision of bridging the gap between the physical and digital worlds. Our journey started with the idea of making asset tokenization accessible to everyone, from individuals to large organizations.
                    </p>
                    <p className="mt-4 text-gray-700">
                        Over the years, we have grown into a pioneering company in the blockchain space, empowering our clients to seamlessly tokenize their assets and participate in the digital economy.
                    </p>
                </div>
            </section>

            {/* Our Mission and Vision */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="mt-4 text-gray-700">
                            At Realix, our mission is to revolutionize asset ownership and transactions by providing a platform that bridges the gap between physical and digital assets. We aim to make the process of tokenization simple, secure, and accessible for everyone.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <Image
                            width={1600}
                            height={900}
                            src="/mission.jpg"
                            alt="Our Mission"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Values</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="value-item">
                            <Image
                                width={1000}
                                height={600}
                                src="/integrity.jpg"
                                alt="Integrity"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Integrity</h3>
                            <p className="mt-2 text-gray-600">We uphold the highest standards of integrity in all our actions.</p>
                        </div>
                        <div className="value-item">
                            <Image
                                width={1000}
                                height={600}
                                src="/innovation.jpg"
                                alt="Innovation"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Innovation</h3>
                            <p className="mt-2 text-gray-600">We constantly strive to innovate and improve our services.</p>
                        </div>
                        <div className="value-item">
                            <Image
                                width={1000}
                                height={600}
                                src="/excellence.jpg"
                                alt="Excellence"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Excellence</h3>
                            <p className="mt-2 text-gray-600">We are committed to achieving excellence in everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
                    <p className="mt-4 text-gray-700">
                        Meet the passionate and diverse team that drives Realix forward. Our team is composed of experts in blockchain technology, finance, and software development, all dedicated to delivering the best asset tokenization platform.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="team-member">
                            <Image
                                width={1000}
                                height={600}
                                src="/team-member-1.jpg"
                                alt="Team Member 1"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">John Doe</h3>
                            <p className="mt-2 text-gray-600">CEO &amp; Founder</p>
                        </div>
                        <div className="team-member">
                            <Image
                                width={1000}
                                height={600}
                                src="/team-member-2.jpg"
                                alt="Team Member 2"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Jane Smith</h3>
                            <p className="mt-2 text-gray-600">Chief Technology Officer</p>
                        </div>
                        <div className="team-member">
                            <Image
                                width={1000}
                                height={600}
                                src="/team-member-3.jpg"
                                alt="Team Member 3"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Emily Johnson</h3>
                            <p className="mt-2 text-gray-600">Head of Operations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Join Us on Our Journey</h2>
                    <p className="mt-4 text-gray-700">
                        Whether you&apos;re an individual looking to tokenize assets or a business seeking innovative solutions, Realix is here to help. Join us as we continue to revolutionize the world of asset ownership.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
