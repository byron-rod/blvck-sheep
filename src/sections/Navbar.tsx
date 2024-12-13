import Image from "next/image";
import logoImage from "@/assets/images/blvcksheep.svg";
import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Destinations", href: "#destinations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full px-4 md:px-2 items-center">
          <div className="p-2">
            <Image
              src={logoImage}
              alt="logo"
              className="h-12 md:h-14 lg:h-16 w-auto"
            />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
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
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Button variant="primary" className="hidden md:inline-flex">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
