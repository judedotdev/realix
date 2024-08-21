"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactUs() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We&apos;re here to help. Reach out to us with any questions or inquiries.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="mt-1 p-3 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Our Address</h3>
                        <p className="mt-4 text-gray-700">1234 Realix Blvd, Suite 567, Metropolis, TX 78901</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                        <p className="mt-4 text-gray-700">support@realix.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                        <p className="mt-4 text-gray-700">+1 (555) 123-4567</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
