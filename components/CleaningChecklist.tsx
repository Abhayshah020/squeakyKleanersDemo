"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ChecklistItem {
    title: string;
    items: string[];
}

const checklist: ChecklistItem[] = [
    {
        title: "General Cleaning",
        items: [
            "Dust and wipe all surfaces",
            "Vacuum carpets and rugs",
            "Mop and clean hard floors",
            "Clean windows and mirrors",
            "Remove cobwebs and wall marks",
            "Clean high-touch areas",
        ],
    },
    {
        title: "Office & Commercial",
        items: [
            "Clean desks and workstations",
            "Clean meeting rooms and lobbies",
            "Clean kitchens and breakrooms",
            "Clean washrooms",
            "Vacuum and mop office floors",
            "Clean glass doors and partitions",
        ],
    },
    {
        title: "Residential & End of Lease",
        items: [
            "Deep clean kitchens and appliances",
            "Stove and rangehood cleaning",
            "Bathroom and toilet cleaning",
            "Skirting boards and doors cleaning",
            "Balcony and garage sweeping",
        ],
    },
    {
        title: "Industrial & Construction",
        items: ["Washing of surfaces", "Warehouse sweeping", "Surface dust cleaning"],
    },
    {
        title: "Specialized Cleaning",
        items: [
            "Window washing inside and out",
            "Washroom deep cleaning",
            "Hotel and hospitality cleaning",
            "Pub, gym, and retail cleaning",
            "Child care and school hygiene",
        ],
    },
    {
        title: "Healthcare & Sensitive Areas",
        items: [
            "Medical centre cleaning",
            "Hospital-grade cleaning",
            "Safe disposal of clinical waste",
            "Child care toy and play area cleaning",
            "School classroom and cafeteria hygiene",
        ],
    },
];

export default function CleaningChecklist() {
    return (
        <section className="py-16 sm:py-20 bg-gray-50 w-full flex flex-col items-center">
            <div className="w-[90%] sm:w-[85%] md:w-[70%] text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl capitalize sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10 sm:mb-12 text-center"
                >
                    We offers{" "}
                    <span className="text-yellow-500 underline decoration-yellow-300/60 decoration-[6px]">
                        21 commercial
                    </span>{" "}
                    and{" "}
                    <span className="text-yellow-500 underline decoration-yellow-300/60 decoration-[6px]">
                        9 residential{" "}
                    </span>
                    cleaning services.
                </motion.h2>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
                    {checklist.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6"
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="flex items-center gap-2 sm:gap-3 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base"
                                    >
                                        <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
