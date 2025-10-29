"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Home", "Services", "Before After", "About Us", "Contact Us", "Book Online"];

    return (
        <>
            <nav className="absolute top-6 flex justify-between items-center w-full md:w-[70%] max-w-7xl px-4 md:px-0 z-20">
                {/* Phone - hidden on small screens */}
                <div className="hidden md:flex items-center gap-4 text-white">
                    <Phone size={24} />
                    <span className="font-medium">+61 28 111 5865</span>
                </div>

                {/* Logo */}
                <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-extrabold text-2xl sm:text-2xl md:text-3xl text-blue-400 tracking-wide"
                >
                    Squeaky Kleaners
                </motion.span>

                {/* Right side buttons */}
                <div className="flex items-center gap-4">
                    {/* Book Online button hidden on small screens */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden cursor-pointer md:inline bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-semibold transition-all"
                    >
                        BOOK ONLINE
                    </motion.button>

                    {/* Hamburger menu */}
                    <Menu
                        size={24}
                        className="text-white cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </nav>

            {/* Modal Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/75 gap-5 z-50 flex flex-col justify-center items-center"
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                        <X
                            size={32}
                            className="text-white z-10 absolute top-6 right-6 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Items */}
                        {menuItems.map((item, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white uppercase tracking-tighter cursor-pointer z-10 text-3xl md:text-4xl font-bold tracking-wide px-6 py-2 hover:text-yellow-400 transition-colors"
                                onClick={() => {
                                    setIsOpen(false);
                                    // Scroll to section logic can be added here
                                }}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
