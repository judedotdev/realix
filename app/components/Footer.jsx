"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-green-200">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 px-4 py-8 max-w-6xl mx-auto justify-between mt-8 mb-4">
                <Link href="/">
                    <Image
                        src="/tranzgoo.png"
                        alt="TranzGO Logo"
                        width={150}
                        height={36}
                    />
                </Link>
                <div className="px-4 flex flex-row space-x-40 sm:space-x-60">
                    <div className="flex flex-col text-left space-y-2 text-sm">
                        <p className="text-slate-800 font-bold">Products</p>
                        <Link href="#" className="text-black">Airtime</Link>
                        <Link href="#" className="text-black">Cable TV</Link>
                        <Link href="#" className="text-black">Data</Link>
                        <Link href="#" className="text-black">Airtime2Cash</Link>
                    </div>
                    <div className="flex flex-col text-left space-y-2 text-sm">
                        <p className="text-slate-800 font-bold">Company</p>
                        <Link href="#" className="text-black">About</Link>
                        <Link href="#" className="text-black">Blog</Link>
                        <Link href="#" className="text-black">FAQs</Link>
                        <Link href="#" className="text-black">Contact Us</Link>
                    </div>
                </div>
                <div className="px-4 flex flex-col text-left space-y-2 text-sm">
                    <p className="text-slate-800 font-bold">Legal</p>
                    <Link href="#" className="text-black">Terms</Link>
                    <Link href="#" className="text-black">Privacy</Link>
                    <Link href="#" className="text-black">Security</Link>
                </div>
                <div className="px-4 flex flex-col text-left md:text-right items-start md:items-end space-y-2 text-sm">
                    <div className="flex flex-row items-center space-x-3 font-extrabold text-md text-slate-700">
                        <Link href="#" ><FaFacebookF /></Link>
                        <Link href="#" ><FaInstagram /></Link>
                        <Link href="#" ><FaTwitter /></Link>
                        <Link href="#" ><FaLinkedin /></Link>
                        <Link href="#" ><FaTiktok /></Link>
                        <Link href="#" className="text-xl"><FaYoutube /></Link>
                    </div>
                    <div className="flex flex-col text-left md:text-right items-start md:items-end space-y-2 text-sm text-black">
                        <Link href="mailto:contact@tranzgoo.com">contact@tranzgoo.com</Link>
                    </div>
                </div>
            </div>
            <p style={{ "color": "#3D4F60" }} className="px-4 max-w-6xl mx-auto mb-8 pb-8 text-center">Copyright ©TranzGO. All rights reserved.</p>
        </div>
    );
};