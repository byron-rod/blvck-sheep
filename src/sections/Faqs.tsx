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
      "You can book your ride directly by contacting us via WhatsApp or with our trusted hostels. Choose your destination, confirm availability for your date and time, make your payment, and we'll send you a booking confirmation to finalize your reservation!",
  },
  {
    question: "How do I pay for my reservation?",
    answer:
      "We accept safe and secure payments through Recurrente.com via Visa or Mastercard. Money transfers to our accounts are also available for direct bookings. If you book through one of our trusted hostels, they will handle your payment. All payments are fully refundable if canceled at least 24 hours in advance.",
  },
  {
    question: "What are your cancellation or rescheduling policies?",
    answer:
      "Plans change—we get it! Cancel or reschedule up to 24 hours before departure at no extra charge for a full refund. Changes made less than 24 hours before departure or no-shows are non-refundable. For example, if your trip is on a Saturday at 10 AM, you must request changes or cancellations by Friday at 10 AM.",
  },
  {
    question: "How much luggage may I bring?",
    answer:
      "Our SUVs are spacious and can accommodate your luggage. For your comfort, we recommend one large suitcase and one personal item per passenger. If you have extra or oversized items, please let us know in advance as additional charges may apply.",
  },
  {
    question: "Do you provide door-to-door service?",
    answer:
      "Yes! We offer door-to-door pick-up and drop-off in most areas we service. When booking, provide your exact address, and we'll confirm if it's within our coverage. If not, we'll arrange the nearest convenient pick-up and drop-off point for you.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24" id="faqs">
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
