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

    function closeMenu() {
        setShowMenu(false);
    }

    return (
        <div className="sticky top-0 z-50 flex flex-col p-4 bg-white shadow-lg">
            <div className="flex flex-row max-w-7xl mx-auto space-x-14 sm:space-x-52 md:space-x-56 lg:space-x-16 xl:space-x-44 justify-center items-center">
                <Link href="/" className="text-black text-2xl sm:text-3xl font-extrabold">
                    REALIX
                </Link>

                <div className="hidden lg:flex flex-row space-x-12 font-semibold justify-center items-center text-center">
                    <Link href="/" onClick={closeMenu}>Home</Link>
                    <Link href="#" onClick={closeMenu}>Tokenize</Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setShowSolutions(true)}
                        onMouseLeave={() => setShowSolutions(false)}
                    >
                        <button
                            type="button"
                            className="flex flex-row items-center text-center"
                            aria-expanded={showSolutions}
                            aria-controls="solutions-dropdown"
                            tabindex="0"
                        >
                            Solutions <MdKeyboardArrowDown />
                        </button>
                        {showSolutions && (
                            <div
                                id="solutions-dropdown"
                                className="resources flex flex-col absolute top-full left-0 bg-white text-left w-52"
                            >
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    Asset Tokenization
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    Borrowing &amp; Lending
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    eCommerce Platform
                                </Link>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setShowResources(true)}
                        onMouseLeave={() => setShowResources(false)}
                    >
                        <button
                            type="button"
                            className="flex flex-row items-center text-center"
                            aria-expanded={showResources}
                            aria-controls="resources-dropdown"
                            tabindex="0"
                        >
                            Resources <MdKeyboardArrowDown />
                        </button>
                        {showResources && (
                            <div
                                id="resources-dropdown"
                                className="resources flex flex-col absolute top-full left-0 bg-white text-left w-52"
                            >
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    About Us
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    Mobile App
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    API Documentation
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    FAQs
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    Blog
                                </Link>
                                <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-row items-center space-x-4">
                    <Wallet />

                    <button onClick={toggleMenu} className="lg:hidden z-20">
                        {showMenu ? <AiOutlineClose size={36} /> : <AiOutlineMenu size={36} />}
                    </button>
                </div>
            </div>

            <div>
                {showMenu && (
                    <div className="flex lg:hidden flex-col space-y-2 justify-center items-center text-center mx-auto mt-4 text-lg font-semibold">
                        <Link href="/" onClick={closeMenu}>Home</Link>
                        <Link href="#" onClick={closeMenu}>Tokenize</Link>
                        <div
                            className="relative"
                            onClick={() => setShowSolutions(!showSolutions)}
                        >
                            <button
                                type="button"
                                className="flex flex-row items-center justify-center text-center"
                                aria-expanded={showSolutions}
                                aria-controls="solutions-dropdown-mobile"
                                tabindex="0"
                            >
                                Solutions <MdKeyboardArrowDown />
                            </button>
                            {showSolutions && (
                                <div
                                    id="solutions-dropdown-mobile"
                                    className="resources flex flex-col absolute top-full right-0 bg-white text-left w-52"
                                >
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        Asset Tokenization
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        Borrowing &amp; Lending
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        eCommerce Platform
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onClick={() => setShowResources(!showResources)}
                        >
                            <button
                                type="button"
                                className="flex flex-row items-center justify-center text-center"
                                aria-expanded={showResources}
                                aria-controls="resources-dropdown-mobile"
                                tabindex="0"
                            >
                                Resources <MdKeyboardArrowDown />
                            </button>
                            {showResources && (
                                <div
                                    id="resources-dropdown-mobile"
                                    className="resources flex flex-col absolute top-full right-0 bg-white text-left w-52"
                                >
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        About Us
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        Mobile App
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        API Documentation
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        FAQs
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        Blog
                                    </Link>
                                    <Link href="#" className="hover:bg-sky-400 p-2" onClick={closeMenu}>
                                        Contact Us
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
