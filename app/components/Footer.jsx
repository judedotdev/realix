"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return (
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
    );
};