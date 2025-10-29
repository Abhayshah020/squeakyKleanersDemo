"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Example images
import residentialImg from "@/assets/cleaningImage2.jpg";
import officeImg from "@/assets/officeCleaning.jpg";
import childCareImg from "@/assets/childCareCleaning.png";
import constructionImg from "@/assets/commercialCleaning.jpg";

const services = [
    {
        title: "Residential Cleaning",
        description:
            "Comprehensive home cleaning services customized to your specific requirements.",
        image: residentialImg,
    },
    {
        title: "Office & Commercial",
        description:
            "Professional cleaning for workplaces that promotes productivity and wellbeing.",
        image: officeImg,
    },
    {
        title: "Childcare Cleaning",
        description:
            "Safe and thorough cleaning for childcare centers with child-friendly products.",
        image: childCareImg,
    },
    {
        title: "Construction Cleaning",
        description:
            "Thorough cleanup services tailored to remove debris and dust, post-construction.",
        image: constructionImg,
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-gray-50 flex flex-col items-center">
            {/* Main Title */}
            <div className="flex flex-col w-[90%] sm:w-[85%] md:w-[70%] items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
                >
                    We Always Provide The{" "}
                    <span className="bg-yellow-300 px-2 rounded-md">Best Service</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-600 text-center mb-12 max-w-full sm:max-w-lg md:max-w-xl"
                >
                    While we can customize your cleaning plan to suit your needs.
                </motion.p>

                {/* Services Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-102 cursor-pointer transition-transform"
                        >
                            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    quality={80}
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <h3
                                style={{ lineHeight: 1.1 }}
                                className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 mb-2"
                            >
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
