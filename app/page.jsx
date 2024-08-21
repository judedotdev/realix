"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">Empowering Asset Tokenization</h1>
            <p className="mt-4 text-lg text-gray-600">Bridging the gap between physical and digital assets</p>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Get Started</button>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <Image
              width={1600}
              height={900}
              src="/rwa-4.png"
              alt="Tokenized assets"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Realix */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold">About Realix</h2>
            <p className="mt-4 text-gray-700">
              Realix is a pioneering company that empowers individuals and organizations to tokenize real-world assets with ease...
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <Image
              width={1934}
              height={993}
              src="/about-1.jpg"
              alt="About Realix"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              At Realix, we bridge the gap between the physical and digital worlds, providing a seamless experience for asset tokenization...
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <Image
              width={1200}
              height={800}
              src="/mission-2.jpeg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="service-item">
            <Image
              width={1000}
              height={600}
              src="/tokenization-1.webp"
              alt="Tokenization of Real-World Assets"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-medium mt-4">Tokenization of Real-World Assets</h3>
            <p className="mt-2 text-gray-600">Easily tokenize assets like real estate and physical items.</p>
          </div>
          <div className="service-item">
            <Image
              width={453}
              height={453}
              src="/lend-2.svg"
              alt="Borrowing & Lending Solutions"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-medium mt-4">Borrowing &amp; Lending Solutions</h3>
            <p className="mt-2 text-gray-600">Access secure borrowing and lending with tokenized assets.</p>
          </div>
          <div className="service-item">
            <Image
              width={1024}
              height={512}
              src="/ecommerce-3.webp"
              alt="eCommerce Platform"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-medium mt-4">eCommerce Platform</h3>
            <p className="mt-2 text-gray-600">Buy and sell tokenized assets on our robust platform.</p>
          </div>
          <div className="service-item">
            <Image
              width={922}
              height={518}
              src="/account-abstraction-1.png"
              alt="Account Abstraction Wallet"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-medium mt-4">Account Abstraction Wallet</h3>
            <p className="mt-2 text-gray-600">Ensure secure access to your assets with our wallet solution.</p>
          </div>
          <div className="service-item">
            <Image
              width={1000}
              height={500}
              src="/verify-5.jpg"
              alt="Data Verification & Monitoring"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-medium mt-4">Data Verification &amp; Monitoring</h3>
            <p className="mt-2 text-gray-600">Reliable verification and monitoring of tokenized assets.</p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-gray-700">
              Realix is committed to revolutionizing the way we interact with assets, making it easier, faster, and more secure...
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <Image
              width={1630}
              height={913}
              src="/vision-2.png"
              alt="Our Vision"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
