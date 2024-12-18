import logoImage from "@/assets/images/blvcksheep.svg";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    href: "mailto:connect@inari-agency.com",
    label: "Email",
  },
  { href: "#", label: "WhatsApp" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Link href="/">
              <Image
                src={logoImage}
                alt="BlvckSheep Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/50 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="text-white/30 text-xs text-center justify-center mt-12">
          Website by{" "}
          <Link
            href="https://www.inari-agency.com"
            className="hover:cursor-pointer hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to inari-agency.com"
          >
            www.inari-agency.com
          </Link>
        </div>
      </div>
    </section>
  );
}
