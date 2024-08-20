import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function Tokenize() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800">Tokenize Your Assets</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Transform your physical assets into digital tokens on the blockchain.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                        <Image
                            width={1600}
                            height={900}
                            src="/tokenize-hero.png"
                            alt="Tokenization process"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* What is Tokenization */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">What is Tokenization?</h2>
                    <p className="mt-4 text-gray-700">
                        Tokenization is the process of converting rights to an asset into a digital token on the blockchain. This allows for greater liquidity, transparency, and accessibility to a broader market.
                    </p>
                </div>
            </section>

            {/* Supported Asset Types */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center">Supported Asset Types</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="asset-item">
                            <Image
                                width={1000}
                                height={600}
                                src="/real-estate.jpg"
                                alt="Real Estate"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Real Estate</h3>
                            <p className="mt-2 text-gray-600">Tokenize residential, commercial, and industrial properties.</p>
                        </div>
                        <div className="asset-item">
                            <Image
                                width={1000}
                                height={600}
                                src="/artwork.jpg"
                                alt="Artwork"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Artwork</h3>
                            <p className="mt-2 text-gray-600">Digitally represent ownership of valuable artworks.</p>
                        </div>
                        <div className="asset-item">
                            <Image
                                width={1000}
                                height={600}
                                src="/commodities.jpg"
                                alt="Commodities"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-medium mt-4 text-gray-800">Commodities</h3>
                            <p className="mt-2 text-gray-600">Tokenize physical goods like gold, silver, and other commodities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tokenization Process */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">The Tokenization Process</h2>
                    <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-4">
                        <li>Assess the asset and ensure it meets the criteria for tokenization.</li>
                        <li>Generate a digital token representing the asset on the blockchain.</li>
                        <li>Ensure legal compliance and register the token if necessary.</li>
                        <li>Trade or transfer the token on the Realix platform or other marketplaces.</li>
                    </ol>
                </div>
            </section>

            {/* Legal and Compliance */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">Legal and Compliance</h2>
                    <p className="mt-4 text-gray-700">
                        Realix ensures that all tokenized assets comply with local and international regulations. Our platform adheres to the highest standards of legal and regulatory compliance to protect your assets.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Ready to Tokenize?</h2>
                    <p className="mt-4 text-gray-700">
                        Start your tokenization journey with Realix today. Transform your physical assets into digital tokens and unlock new opportunities.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-8">
                <div className="max-w-4xl mx-auto">
                    <p>&copy; {new Date().getFullYear()} Realix. All Rights Reserved.</p>
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
