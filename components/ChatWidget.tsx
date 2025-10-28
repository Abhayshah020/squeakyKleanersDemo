"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Icon */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-lg flex justify-center items-center z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <MessageCircle size={28} />
            </motion.button>

            {/* Chat Box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat-box"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-4 sm:right-6 w-[90%] sm:w-[300px] md:w-[350px] max-h-[70vh] bg-white rounded-xl shadow-xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
                            <h4 className="font-bold text-sm sm:text-base">Chat with us</h4>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer text-white font-bold text-lg sm:text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 overflow-y-auto">
                            <motion.div
                                className="bg-gray-100 text-gray-900 px-3 py-2 rounded-lg self-start max-w-[80%] text-xs sm:text-sm"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1.2 }}
                            >
                                Hi there! How can we help you today?
                            </motion.div>
                        </div>

                        {/* Input */}
                        <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-2.5">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 border placeholder:text-gray-400 text-gray-900 border-gray-300 rounded-full px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
                            />
                            <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base">
                                Send
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
