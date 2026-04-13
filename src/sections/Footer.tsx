import logoImage from "@/assets/images/blvcksheep.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import {
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const spotifyLink = "https://open.spotify.com/user/kitsunemura"; // Replace with your Spotify user link
  // const emailLink = "mailto:connect@blvck-sheep.com";
  const instagramLink = "https://www.instagram.com/blvcksheepgt";
  const facebookLink = "https://www.facebook.com/blvcksheepgt";

  return (
    // Added bg-black to the outermost section
    <section className="py-16 bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-12 border-b border-zinc-900 pb-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logoImage}
                alt="BlvckSheep Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full md:w-auto mt-8 md:mt-0">
            <nav className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              {/* Column 1: Journeys */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold mb-4">Journeys</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/destinations" className="text-white/50 text-sm hover:text-white transition-colors">
                    Destinations
                  </Link>
                  <Link href="/itineraries" className="text-white/50 text-sm hover:text-white transition-colors">
                    Itineraries
                  </Link>
                </div>
              </div>

              {/* Column 2: Stays */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold mb-4">Stays</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/hotels" className="text-white/50 text-sm hover:text-white transition-colors">
                    Boutique Hotels
                  </Link>
                  <Link href="/hostels" className="text-white/50 text-sm hover:text-white transition-colors">
                    Curated Hostels
                  </Link>
                </div>
              </div>

              {/* Column 3: Company */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/about" className="text-white/50 text-sm hover:text-white transition-colors">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-white/50 text-sm hover:text-white transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/terms-conditions" className="text-white/50 text-sm hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
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

          {/* Tiktok */}
          <Button
            variant="secondary"
            className="mt-8 font-bold flex text-center justify-center"
          >
            <Link
              href="https://www.tiktok.com/@blvcksheepgt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok profile for BlackSheep Shuttles"
            >
              <FaTiktok size={24} />
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