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
      "You can book your ride directly by contacting us via WhatsApp or with our trusted hostels. Choose your destination, check availability for your date and time, make your payment to reserve your spot, and we'll handle the rest!",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "We work with Guatemalan Fintech company called Recurrente.com for easy and safe credit card link payments. We take Visa or Mastercard. We accept money transfers to our accounts. Or, if you book with one of our trusted hostels they will take care of your reservation. All the money is refundable up until 24-hours before your trip.",
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
      "Yes! We offer door-to-door pick-up and drop-off for all our rides within certain areas, this will depend on the location. Please provide your exact address and location when booking, if it is within our working parameters we will pick you up direclty, if not, we have specific pick-up and drop-off areas.",
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
