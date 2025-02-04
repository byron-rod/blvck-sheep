import logoImage from "@/assets/images/blvcksheep.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import {
  FaSpotify, // Import Spotify icon
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  const spotifyLink = "https://open.spotify.com/user/kitsunemura"; // Replace with your Spotify user link
  // const emailLink = "mailto:connect@blvck-sheep.com";
  const instagramLink = "https://www.instagram.com/blvcksheepgt";
  const facebookLink = "https://www.facebook.com/blvcksheepgt";

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
              <Link
                href="/destinations"
                className="text-white/50 text-sm"
                aria-label="Link to information about our destinations"
              >
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
        <div className="flex gap-4 mt-4 justify-center">
          {/* Spotify */}
          <Button
            variant="secondary"
            className="mt-8 font-bold flex text-center justify-center"
          >
            <Link
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify profile for BlackSheep Shuttles"
            >
              <FaSpotify size={24} />
            </Link>
          </Button>

          {/* Email */}
          {/* <Button
            variant="secondary"
            className="mt-8 font-bold flex text-center justify-center"
          >
            <Link
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email contact for BlackSheep Shuttles"
            >
              <FaEnvelope size={24} />
            </Link>
          </Button> */}

          {/* Instagram */}
          <Button
            variant="secondary"
            className="mt-8 font-bold flex text-center justify-center"
          >
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile for BlackSheep Shuttles"
            >
              <FaInstagram size={24} />
            </Link>
          </Button>

          {/* Facebook */}
          <Button
            variant="secondary"
            className="mt-8 font-bold flex text-center justify-center"
          >
            <Link
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page for BlackSheep Shuttles"
            >
              <FaFacebook size={24} />
            </Link>
          </Button>
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
