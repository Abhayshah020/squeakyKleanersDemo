"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import a1 from '@/assets/companyWorkedWith/amcCommercial.webp'
import a2 from '@/assets/companyWorkedWith/kfc.jpg'
import a3 from '@/assets/companyWorkedWith/strathfieldPartners.webp'
import a4 from '@/assets/companyWorkedWith/raineAndHorne.webp'
import a5 from '@/assets/companyWorkedWith/rayWhite.webp'
import a6 from '@/assets/companyWorkedWith/ducati.png'
import a7 from '@/assets/companyWorkedWith/mcdonalds.png'

const companies = [
    { name: "AMC Commercials", logo: a1 },
    { name: "KFC", logo: a2 },
    { name: "Strathfield Partners", logo: a3 },
    { name: "Raine And Horne", logo: a4 },
    { name: "Ray White", logo: a5 },
    { name: "Ducati", logo: a6 },
    { name: "Mc Donald's", logo: a7 },
];

export default function CompaniesWorkedWith() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
                >
                    Companies We’ve Worked With
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-center">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center space-y-2 sm:space-y-3"
                        >
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    quality={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium text-center">
                                {company.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
