"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What cleaning services do you provide?",
        answer:
            "We offer a full range of professional cleaning services including office, commercial, residential, end-of-lease, carpet, window, strata, gym, medical centre, childcare, school, construction, industrial, hospitality, and more.",
    },
    {
        question: "Do you use safe and eco-friendly products?",
        answer:
            "Yes, We only use eco-friendly and non-toxic cleaning solutions that are safe for children, pets, staff, and sensitive environments like medical centres and childcare facilities.",
    },
    {
        question: "Can I customize the cleaning plan?",
        answer:
            "Absolutely! We understand every home and business is different, so we create a tailored cleaning plan based on your specific requirements, schedule, and budget.",
    },
    {
        question: "Do you clean after hours or on weekends?",
        answer:
            "Absolute Yes, We provide flexible scheduling, including evenings and weekends, to avoid disrupting your daily operations. We understand every home and business is different, so we create a tailored cleaning plan based on your specific requirements, schedule, and budget.",
    },
    {
        question: "Are your cleaners trained and insured?",
        answer:
            "Yes, Our team is fully trained, background-checked, and insured to ensure reliable, safe, and professional service.",
    },
    {
        question: "Do you guarantee your work?",
        answer:
            "Yes, Customer satisfaction is our top priority. If anything is missed, we’ll come back and make it right at no extra cost.",
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 bg-gray-50 flex justify-center w-full">
            <div className="w-[95%] sm:w-[90%] md:w-[70%]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 sm:p-5 md:p-6"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex cursor-pointer justify-between items-start w-full text-left"
                            >
                                <span className="font-semibold text-base sm:text-lg md:text-lg text-gray-800">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-2 flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="overflow-hidden mt-2 sm:mt-3"
                                    >
                                        <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
