"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Blog() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Realix Blog</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Stay updated with the latest news, insights, and stories from Realix.
                    </p>
                </div>
            </section>

            {/* Featured Blog Post */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Post</h2>
                        <h3 className="text-2xl font-bold text-gray-800">
                            How Asset Tokenization is Changing the Future of Finance
                        </h3>
                        <p className="mt-4 text-gray-700">
                            Discover how tokenizing real-world assets is revolutionizing the financial industry and creating new opportunities for investors and businesses alike.
                        </p>
                        <a href="#" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                            Read More
                        </a>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <Image
                            width={1600}
                            height={900}
                            src="/featured-post.jpg"
                            alt="Featured Blog Post"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Recent Blog Posts */}
            <section className="bg-blue-50 py-16 px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Recent Posts</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div className="blog-item">
                        <Image
                            width={1000}
                            height={600}
                            src="/blog-post-1.jpg"
                            alt="Post 1"
                            className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                        <h3 className="text-xl font-medium mt-4">Understanding the Basics of Tokenization</h3>
                        <p className="mt-2 text-gray-600">
                            A beginner&apos;s guide to understanding how tokenization works and its benefits.
                        </p>
                        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
                    </div>
                    <div className="blog-item">
                        <Image
                            width={1000}
                            height={600}
                            src="/blog-post-2.jpg"
                            alt="Post 2"
                            className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                        <h3 className="text-xl font-medium mt-4">Top 5 Use Cases for Asset Tokenization</h3>
                        <p className="mt-2 text-gray-600">
                            Explore the most exciting applications of tokenization across industries.
                        </p>
                        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
                    </div>
                    <div className="blog-item">
                        <Image
                            width={1000}
                            height={600}
                            src="/blog-post-3.jpg"
                            alt="Post 3"
                            className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                        <h3 className="text-xl font-medium mt-4">The Future of Real Estate: Tokenization</h3>
                        <p className="mt-2 text-gray-600">
                            How tokenization is transforming the real estate market for investors and developers.
                        </p>
                        <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
