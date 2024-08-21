"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function FAQs() {
    const faqs = [
        {
            question: "What is Realix?",
            answer: "Realix is a platform that empowers individuals and businesses to tokenize real-world assets, bridging the gap between physical and digital ownership.",
        },
        {
            question: "How does asset tokenization work?",
            answer: "Asset tokenization involves converting the ownership rights of a physical asset into a digital token on the blockchain. This process ensures secure and transparent ownership and transfer.",
        },
        {
            question: "What types of assets can I tokenize?",
            answer: "You can tokenize a variety of assets including real estate, physical goods, intellectual property, and more. Our platform supports a wide range of asset classes.",
        },
        {
            question: "Is it safe to tokenize assets?",
            answer: "Yes, tokenization on Realix is secure and follows industry best practices for blockchain technology. Our platform ensures that your assets are protected and transactions are transparent.",
        },
        {
            question: "How do I get started with Realix?",
            answer: "Getting started is easy! Simply sign up on our platform, choose the asset you want to tokenize, and follow the guided steps. Our team is here to assist you every step of the way.",
        },
        {
            question: "What are the fees for using Realix?",
            answer: "Our fees vary depending on the type and value of the asset being tokenized. Please visit our pricing page for detailed information or contact our support team for a custom quote.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item py-4 border-b border-gray-200">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between w-full text-left text-xl font-medium text-gray-800 focus:outline-none"
                            >
                                {faq.question}
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-2 text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
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
            <Footer />
        </main>
    );
}
