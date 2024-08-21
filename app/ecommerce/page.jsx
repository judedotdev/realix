"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Sample data
const featuredProducts = [
    { src: "/path/to/featured-product1.jpg", category: "Electronics", name: "Product 1", ratings: "⭐⭐⭐⭐", price: "$10.00" },
    { src: "/path/to/featured-product2.jpg", category: "Electronics", name: "Product 2", ratings: "⭐⭐⭐⭐⭐", price: "$15.00" },
    { src: "/path/to/featured-product3.jpg", category: "Electronics", name: "Product 3", ratings: "⭐⭐⭐⭐", price: "$20.00" },
    { src: "/path/to/featured-product4.jpg", category: "Electronics", name: "Product 4", ratings: "⭐⭐⭐⭐⭐", price: "$25.00" },
];

const newArrivals = [
    { src: "/path/to/new-arrival1.jpg", category: "Fashion", ratings: "⭐⭐⭐⭐", price: "$30.00" },
    { src: "/path/to/new-arrival2.jpg", category: "Fashion", ratings: "⭐⭐⭐⭐⭐", price: "$35.00" },
    { src: "/path/to/new-arrival3.jpg", category: "Fashion", ratings: "⭐⭐⭐⭐", price: "$40.00" },
    { src: "/path/to/new-arrival4.jpg", category: "Fashion", ratings: "⭐⭐⭐⭐⭐", price: "$45.00" },
    { src: "/path/to/new-arrival5.jpg", category: "Fashion", ratings: "⭐⭐⭐⭐", price: "$50.00" },
];

const categories = [
    { src: "/path/to/category1.jpg", category: "Dress", count: "5 PRODUCTS" },
    { src: "/path/to/category2.jpg", category: "Shoes", count: "10 PRODUCTS" },
    { src: "/path/to/category3.jpg", category: "Accessories", count: "7 PRODUCTS" },
    { src: "/path/to/category4.jpg", category: "Electronics", count: "12 PRODUCTS" },
    { src: "/path/to/category5.jpg", category: "Home", count: "8 PRODUCTS" },
];

const news = [
    { title: "Latest Fashion Trends", content: "Discover the latest trends in fashion for 2024." },
    { title: "New Arrivals in Electronics", content: "Explore the newest gadgets and electronics in our store." },
    { title: "Spring Sale is Here", content: "Don’t miss out on our amazing spring sale with up to 50% off!" }
];

const columns = {
    Featured: [
        { src: "/path/to/featured-item1.jpg", description: "Featured Product 1", ratings: "⭐⭐⭐⭐", price: "$10.00" },
        { src: "/path/to/featured-item2.jpg", description: "Featured Product 2", ratings: "⭐⭐⭐⭐⭐", price: "$15.00" },
        { src: "/path/to/featured-item3.jpg", description: "Featured Product 3", ratings: "⭐⭐⭐⭐", price: "$20.00" }
    ],
    BestSelling: [
        { src: "/path/to/best-selling-item1.jpg", description: "Best Selling Product 1", ratings: "⭐⭐⭐⭐", price: "$25.00" },
        { src: "/path/to/best-selling-item2.jpg", description: "Best Selling Product 2", ratings: "⭐⭐⭐⭐⭐", price: "$30.00" },
        { src: "/path/to/best-selling-item3.jpg", description: "Best Selling Product 3", ratings: "⭐⭐⭐⭐", price: "$35.00" }
    ],
    Latest: [
        { src: "/path/to/latest-item1.jpg", description: "Latest Product 1", ratings: "⭐⭐⭐⭐", price: "$40.00" },
        { src: "/path/to/latest-item2.jpg", description: "Latest Product 2", ratings: "⭐⭐⭐⭐⭐", price: "$45.00" },
        { src: "/path/to/latest-item3.jpg", description: "Latest Product 3", ratings: "⭐⭐⭐⭐", price: "$50.00" }
    ],
    TopRated: [
        { src: "/path/to/top-rated-item1.jpg", description: "Top Rated Product 1", ratings: "⭐⭐⭐⭐⭐", price: "$55.00" },
        { src: "/path/to/top-rated-item2.jpg", description: "Top Rated Product 2", ratings: "⭐⭐⭐⭐", price: "$60.00" },
        { src: "/path/to/top-rated-item3.jpg", description: "Top Rated Product 3", ratings: "⭐⭐⭐⭐⭐", price: "$65.00" }
    ]
};

const images = [
    "/slide-1.jpg",
    "/slide-2.jpg",
    "/slide-3.jpg",
];

export default function EcommerceHome() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <>
            <Navbar />

            {/* Slideshow Section */}
            <section className="relative h-96 overflow-hidden group">
                <div className="relative w-full h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src={images[currentImageIndex]}
                            alt="Slideshow"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500"
                        />
                    </div>
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        &gt;
                    </button>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-8 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow">
                                <Image
                                    src={product.src}
                                    alt={product.name}
                                    width={280}
                                    height={280}
                                    className="w-full h-64 object-cover mb-4"
                                />
                                <div>
                                    <p className="font-semibold">{product.category}</p>
                                    <p className="text-lg font-medium">{product.name}</p>
                                    <p className="text-yellow-500">{product.ratings}</p>
                                    <p className="text-lg font-semibold">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {newArrivals.map((arrival, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow">
                                <Image
                                    src={arrival.src}
                                    alt={`New Arrival ${index + 1}`}
                                    width={220}
                                    height={220}
                                    className="w-full h-56 object-cover mb-4"
                                />
                                <div>
                                    <p className="font-semibold">{arrival.category}</p>
                                    <p className="text-yellow-500">{arrival.ratings}</p>
                                    <p className="text-lg font-semibold">{arrival.price}</p>
                                    <button className="mt-2 btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse Our Categories Section */}
            <section className="py-8 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Browse Our Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow">
                                <Image
                                    src={category.src}
                                    alt={category.category}
                                    width={280}
                                    height={280}
                                    className="w-full h-56 object-cover mb-4"
                                />
                                <div>
                                    <p className="font-semibold">{category.category}</p>
                                    <p>{category.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Latest News</h2>
                    <div className="space-y-4">
                        {news.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Four Columns Section */}
            <section className="py-8 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {Object.keys(columns).map((column, colIndex) => (
                            <div key={colIndex} className="bg-white p-4 rounded shadow">
                                <h3 className="text-xl font-bold mb-4">{column}</h3>
                                {columns[column].map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center mb-4">
                                        <Image
                                            src={item.src}
                                            alt={item.description}
                                            width={84}
                                            height={84}
                                            className="w-24 h-24 object-cover mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold">{item.description}</p>
                                            <p className="text-yellow-500">{item.ratings}</p>
                                            <p className="text-lg font-semibold">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
