import logoImage from "@/assets/images/blvcksheep.svg";
import Image from "next/image";
import Link from "next/link";

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
            <nav className="flex gap-4">
              <Link href="/destinations" className="text-white/50 text-sm">
                Destinations
              </Link>
              {/* Contact Us*/}
              <Link href="/contact" className="text-white/50 text-sm">
                Contact Us
              </Link>

              {/* Terms & Conditions Link */}
              <Link href="/terms-conditions" className="text-white/50 text-sm">
                Terms & Conditions
              </Link>
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
