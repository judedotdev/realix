import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Empowering Asset Tokenization</h1>
        <p className="mt-4 text-lg text-gray-600">Bridging the gap between physical and digital assets</p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Get Started</button>
      </section>

      {/* About Realix */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">About Realix</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-700">
          Realix is a pioneering company that empowers individuals and organizations to tokenize real-world assets with ease...
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-700">
          At Realix, we bridge the gap between the physical and digital worlds, providing a seamless experience for asset tokenization...
        </p>
      </section>

      {/* Our Services */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="service-item">
            <h3 className="text-xl font-medium">Tokenization of Real-World Assets</h3>
            <p className="mt-2 text-gray-600">Easily tokenize assets like real estate and physical items.</p>
          </div>
          <div className="service-item">
            <h3 className="text-xl font-medium">Borrowing & Lending Solutions</h3>
            <p className="mt-2 text-gray-600">Access secure borrowing and lending with tokenized assets.</p>
          </div>
          <div className="service-item">
            <h3 className="text-xl font-medium">eCommerce Platform</h3>
            <p className="mt-2 text-gray-600">Buy and sell tokenized assets on our robust platform.</p>
          </div>
          <div className="service-item">
            <h3 className="text-xl font-medium">Account Abstraction Wallet</h3>
            <p className="mt-2 text-gray-600">Ensure secure access to your assets with our wallet solution.</p>
          </div>
          <div className="service-item">
            <h3 className="text-xl font-medium">Data Verification & Monitoring</h3>
            <p className="mt-2 text-gray-600">Reliable verification and monitoring of tokenized assets.</p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-700">
          Realix is committed to revolutionizing the way we interact with assets, making it easier, faster, and more secure...
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="max-w-4xl mx-auto">
          <p>&copy; {getCurrentYear()} Realix. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:underline">Contact Us</a>
            <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
            <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
