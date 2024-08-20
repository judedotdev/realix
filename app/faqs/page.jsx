import Navbar from "@/app/components/Navbar";

export default function FAQs() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Find answers to some of the most common questions about Realix.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="faq-item py-4 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-gray-800">What is Realix?</h3>
                        <p className="mt-2 text-gray-700">
                            Realix is a platform that empowers individuals and businesses to tokenize real-world assets, bridging the gap between physical and digital ownership.
                        </p>
                    </div>
                    <div className="faq-item py-4 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-gray-800">How does asset tokenization work?</h3>
                        <p className="mt-2 text-gray-700">
                            Asset tokenization involves converting the ownership rights of a physical asset into a digital token on the blockchain. This process ensures secure and transparent ownership and transfer.
                        </p>
                    </div>
                    <div className="faq-item py-4 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-gray-800">What types of assets can I tokenize?</h3>
                        <p className="mt-2 text-gray-700">
                            You can tokenize a variety of assets including real estate, physical goods, intellectual property, and more. Our platform supports a wide range of asset classes.
                        </p>
                    </div>
                    <div className="faq-item py-4 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-gray-800">Is it safe to tokenize assets?</h3>
                        <p className="mt-2 text-gray-700">
                            Yes, tokenization on Realix is secure and follows industry best practices for blockchain technology. Our platform ensures that your assets are protected and transactions are transparent.
                        </p>
                    </div>
                    <div className="faq-item py-4 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-gray-800">How do I get started with Realix?</h3>
                        <p className="mt-2 text-gray-700">
                            Getting started is easy! Simply sign up on our platform, choose the asset you want to tokenize, and follow the guided steps. Our team is here to assist you every step of the way.
                        </p>
                    </div>
                    <div className="faq-item py-4 border-b border-gray-200">
                        <h3 className="text-xl font-medium text-gray-800">What are the fees for using Realix?</h3>
                        <p className="mt-2 text-gray-700">
                            Our fees vary depending on the type and value of the asset being tokenized. Please visit our pricing page for detailed information or contact our support team for a custom quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-50 py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Still have questions?</h2>
                    <p className="mt-4 text-gray-700">
                        If you didn’t find the answer you were looking for, feel free to reach out to our support team. We’re here to help!
                    </p>
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        Contact Support
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
