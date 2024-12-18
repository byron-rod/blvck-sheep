"use client";

import Image from "next/image";
import logoImage from "@/assets/images/blvcksheep.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Destinations", href: "/#destinations" },
  { label: "FAQs", href: "/#faqs" },
];

const whatsappLink =
  "https://wa.me/50255116881?text=Hi,%20I%20would%20like%20to%20book%20a%20ride!";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 px-4 md:px-2 items-center">
              <div className="p-1">
                <Link href="/">
                  <Image
                    src={logoImage}
                    alt="BlackSheep logo"
                    className="h-12 md:h-14 lg:h-16 w-auto cursor-pointer"
                  />
                </Link>
              </div>
              <div className="hidden lg:flex justify-center items-center relative z-50">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      scroll={true}
                      passHref
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
                <Button variant="primary" className="hidden md:inline-flex">
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-blue-400"
                    aria-label="WhatsApp contact for BlackSheep Shuttles"
                  >
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        className="text-white font-medium"
                        onClick={() => setIsOpen(false)} // Close menu on link click
                      >
                        {link.label}
                      </a>
                    ))}
                    <button className="border h-8 rounded-full px-4 font-medium items-center hover:bg-white hover:text-black">
                      <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:text-blue-400"
                        aria-label="WhatsApp contact for BlackSheep Shuttles"
                      >
                        Contact Us
                      </Link>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
  );
}
