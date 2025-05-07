import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="relative bg-black ">
            <div className="absolute -bottom-16 left-0 right-0">
                <h1 className="font-bold bg-gradient-to-t from-[#e14b4b] via-[#2c1818] to-neutral-900 bg-clip-text text-transparent text-9xl sm:text-[14rem] md:text-[18rem] lg:text-[20rem] transition-all duration-500 ease-in-out text-center">
                    Rento
                </h1>
            </div> 
            <div className="relative mx-auto w-full max-w-screen-xl p-2 lg:py-24 z-10">
                <div className="md:flex md:justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <p className="text-white">Rento</p>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Resources</h2>
                            <div className="grid">
                                <Link to="/cars" className="text-gray-500 hover:underline">Cars</Link>
                                <Link to="/locations" className="text-gray-500 hover:underline">Locations</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Follow us</h2>
                            <div className="grid">
                                <Link to="/" className="text-gray-500 hover:underline">Discord</Link>
                                <Link to="/" className="text-gray-500 hover:underline">Twitter</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Legal</h2>
                            <div className="grid">
                                <Link to="#" className="text-gray-500 hover:underline">Privacy Policy</Link>
                                <Link to="#" className="text-gray-500 hover:underline">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="sm:flex sm:justify-between">
                    
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025
                        <a href="https://x.com/AryanBola101" className="hover:underline">Aryan Bola's work</a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    );
}
