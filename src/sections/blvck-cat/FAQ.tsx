"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    {
        question: "Is my luggage safe?",
        answer: "Absolutely. All our partner locations are verified and we provide insurance for every bag stored with us.",
    },
    {
        question: "Do I need to book in advance?",
        answer: "While we accept walk-ins, we highly recommend booking in advance to guarantee your spot, especially during peak season.",
    },
    {
        question: "Is there a size limit?",
        answer: "No! We charge a flat rate per item, regardless of its size or weight. Surfboards, backpacks, and suitcases are all welcome.",
    },
    {
        question: "Can I cancel my booking?",
        answer: "Yes, you can cancel your booking for a full refund up to 24 hours before your drop-off time.",
    },
];

export default function FAQ() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-br from-white to-white/50 text-transparent bg-clip-text text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-[700px] mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-white/10 last:border-b-0">
                            <div 
                                className="py-6 flex items-center justify-between cursor-pointer" 
                                onClick={() => setSelectedIndex(index)}
                            >
                                <span className="text-lg font-medium text-white">{item.question}</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className={`text-white transition-transform duration-300 ${selectedIndex === index ? "rotate-45" : ""}`}
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === index && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/70 pb-6">{item.answer}</p>
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
