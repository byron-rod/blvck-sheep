"use client";
import Tag from "@/components/Tag";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I book a ride?",
    answer:
      "You can book your ride directly through our website or by contacting us via WhatsApp. Choose your destination, select your preferred date and time, and we'll handle the rest!",
  },
  {
    question: "What's included in a shared ride?",
    answer:
      "Shared rides include a comfortable seat in one of our 7-passenger black SUVs, air conditioning, great music playlists, and flexible schedules designed to minimize wait times.",
  },
  {
    question: "Can I bring luggage?",
    answer:
      "Yes, our SUVs are spacious and can accommodate your luggage. However, we recommend limiting it to one large suitcase and one carry-on per person for optimal comfort.",
  },
  {
    question: "What are your cancellation or rescheduling policies?",
    answer:
      "We understand that plans can change. You can cancel or reschedule your booking up to 24 hours before departure at no extra charge. For last-minute changes, contact us, and we'll do our best to assist you.",
  },
  {
    question: "Do you provide door-to-door service?",
    answer:
      "Yes! We offer door-to-door pick-up and drop-off for all our rides. Please provide your exact address when booking.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="text-4xl lg:text-5xl mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve Got{" "}
          <span className="text-blue-500">Answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
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
                  className={twMerge(
                    "feather feather-plus text-blue-500 flex-shrink-0 transition duration-500",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
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
