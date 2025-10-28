"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/companyLogo.png"; // replace with your logo

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12 sm:py-16 flex flex-col items-center">
            <div className="w-[95%] sm:w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 text-sm">
                {/* Logo + Social */}
                <div className="flex flex-col items-start gap-4 sm:gap-6">
                    <Image
                        src={logo}
                        alt="Squeaky Kleaners"
                        width={150}
                        height={50}
                        quality={80}
                        className="mb-2 sm:mb-4"
                    />
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Making Aussie homes and workplaces shine, one clean at a time.
                    </p>
                    <div className="flex gap-4 mt-2">
                        {[Facebook, Instagram, Linkedin, ExternalLink].map((Icon, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ scale: 1.2 }}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200"
                            >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links</h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Refund & Cancellation Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">About Us</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Squeaky Kleaners delivers professional cleaning services across
                        Australia, ensuring every home and office is spotless.
                    </p>
                </div>

                {/* Find Us */}
                <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Find Us</h4>
                    <div className="text-gray-400 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div>
                            <p className="font-medium">Call Us</p>
                            <p>+61 281 115 865</p>
                            <p>+61 451 220 844 (After Hour)</p>
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <p>info@squeakykleaners.com.au</p>
                        </div>
                        <div>
                            <p className="font-medium">Location</p>
                            <p>200A Marion Street, Bankstown, 2200</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 sm:mt-12 border-t w-[95%] sm:w-[90%] md:w-[70%] border-gray-800 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Squeaky Kleaners. All rights reserved.
            </div>
        </footer>
    );
}
