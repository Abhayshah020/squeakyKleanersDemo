"use client";

import heroBg from "@/assets/heroBg.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import NavMenu from "./NavMenu";

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
            {/* Background Image */}
            <Image
                src={heroBg}
                alt="Clean home background"
                fill
                className="object-cover opacity-90"
                priority
                quality={50}
            />

            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <NavMenu />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[700px] px-4 md:px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight md:leading-tight tracking-tight"
                >
                    "Finally, a Cleaning Crew 
                    That <span className="text-blue-400">Gets It Right"</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-full"
                >
                    We’re here to make Aussie homes and workplaces shine — quicker, easier, and without the stress (or the mess).
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full shadow-xl font-semibold transition-all"
                    >
                        Get a Quotation
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full shadow-xl font-semibold transition-all"
                    >
                        Call Us 24/7
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
