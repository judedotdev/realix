"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Wallet } from "@/app/components/Wallet";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [showResources, setShowResources] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row max-w-7xl mx-auto space-x-14 sm:space-x-28 md:space-x-44 lg:space-x-28 xl:space-x-52 justify-center items-center text-center">
                <Link href="/" className="text-black text-3xl font-extrabold">
                    REALIX
                </Link>

                <div className="hidden lg:flex flex-row space-x-12 font-semibold justify-center items-center text-center">
                    <Link href="/">Home</Link>
                    <Link href="#">Tokenize</Link>
                    <div className="relative" onMouseEnter={() => setShowSolutions(true)} onMouseLeave={() => setShowSolutions(false)}>
                        <button type="button" className="flex flex-row items-center text-center">Solutions <MdKeyboardArrowDown /></button>
                        {showSolutions && (
                            <div className="resources flex flex-col absolute top-full left-0 bg-white text-left w-52">
                                <Link href="#" className="hover:bg-sky-400 p-2">Asset Tokenization</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">Borrowing &amp; Lending</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">eCommerce Platform</Link>
                            </div>
                        )}
                    </div>
                    <div className="relative" onMouseEnter={() => setShowResources(true)} onMouseLeave={() => setShowResources(false)}>
                        <button type="button" className="flex flex-row items-center text-center">Resources <MdKeyboardArrowDown /></button>
                        {showResources && (
                            <div className="resources flex flex-col absolute top-full left-0 bg-white text-left w-52">
                                <Link href="#" className="hover:bg-sky-400 p-2">About Us</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">Mobile App</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">API Documentation</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">FAQs</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">Blog</Link>
                                <Link href="#" className="hover:bg-sky-400 p-2">Contact Us</Link>
                            </div>
                        )}
                    </div>
                </div>

                <div onClick={toggleMenu} className="flex flex-row lg:hidden z-20 items-center">
                    {showMenu ? <AiOutlineClose size={36} /> : <AiOutlineMenu size={36} />}
                </div>

                <div className="flex flex-row justify-center items-center text-center">
                    <Wallet />
                </div>
            </div>

            <div>
                {showMenu && (
                    <div className="flex lg:hidden flex-col space-y-2 justify-center items-center text-center mx-auto mt-4 -ml-8 sm:-ml-32 md:-ml-32 text-lg font-semibold">
                        <Link href="/">Home</Link>
                        <Link href="#">Tokenize</Link>
                        <div className="relative" onMouseEnter={() => setShowSolutions(true)} onMouseLeave={() => setShowSolutions(false)}>
                            <button type="button" className="flex flex-row items-center text-center">Solutions <MdKeyboardArrowDown /></button>
                            {showSolutions && (
                                <div className="resources flex flex-col absolute top-full left-0 bg-white text-left w-52">
                                    <Link href="#" className="hover:bg-sky-400 p-2">Asset Tokenization</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">Borrowing &amp; Lending</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">eCommerce Platform</Link>
                                </div>
                            )}
                        </div>
                        <div className="relative" onMouseEnter={() => setShowResources(true)} onMouseLeave={() => setShowResources(false)}>
                            <button type="button" className="flex flex-row items-center text-center">Resources <MdKeyboardArrowDown /></button>
                            {showResources && (
                                <div className="resources flex flex-col absolute top-full left-0 bg-white text-left w-52">
                                    <Link href="#" className="hover:bg-sky-400 p-2">About Us</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">Mobile App</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">API Documentation</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">FAQs</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">Blog</Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2">Contact Us</Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};