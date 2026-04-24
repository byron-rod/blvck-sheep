"use client"; // Asegúrate de tener esto si el componente usa algo del cliente, aunque aquí no hay estados, es buena práctica si interactúa con animaciones o botones interactivos de tu UI.

import Image from "next/image";
import logoImage from "@/assets/images/blvcksheep.svg";
import Button from "@/components/Button";
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
    // SEMÁNTICA: Cambiamos <section> por <footer>
    <footer className="py-16 bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-12 border-b border-zinc-900 pb-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            {/* ACCESIBILIDAD: aria-label descriptivo para el logo */}
            <Link href="/" aria-label="Return to Blvck Sheep Home">
              <Image
                src={logoImage}
                alt="Blvck Sheep Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full md:w-auto mt-8 md:mt-0">
            {/* ACCESIBILIDAD: Diferenciamos este nav del principal */}
            <nav aria-label="Footer navigation" className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              
              {/* Column 1: Journeys */}
              <div className="flex flex-col">
                {/* SEO: Cambiamos h4 por h3 para no saltar niveles jerárquicos */}
                <h3 className="text-white font-semibold mb-4">Journeys</h3>
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
                <h3 className="text-white font-semibold mb-4">Stays</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/hotels" className="text-white/50 text-sm hover:text-white transition-colors">
                    Boutique Hotels
                  </Link>
                  <Link href="/hostels" className="text-white/50 text-sm hover:text-white transition-colors">
                    Social Hostels
                  </Link>
                </div>
              </div>

              {/* Column 3: Company */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <div className="flex flex-col gap-2">
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
          {/* ACCESIBILIDAD ÍCONOS: aria-hidden="true" para que los lectores no lean código basura, y el aria-label se queda en el link */}
          
          {/* Spotify */}
          <Button variant="secondary" className="mt-8 font-bold flex text-center justify-center">
            <Link
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify profile for Blvck Sheep"
            >
              <FaSpotify size={24} aria-hidden="true" focusable="false" />
            </Link>
          </Button>

          {/* Instagram */}
          <Button variant="secondary" className="mt-8 font-bold flex text-center justify-center">
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile for Blvck Sheep"
            >
              <FaInstagram size={24} aria-hidden="true" focusable="false" />
            </Link>
          </Button>

          {/* Facebook */}
          <Button variant="secondary" className="mt-8 font-bold flex text-center justify-center">
            <Link
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page for Blvck Sheep"
            >
              <FaFacebook size={24} aria-hidden="true" focusable="false" />
            </Link>
          </Button>

          {/* Tiktok */}
          <Button variant="secondary" className="mt-8 font-bold flex text-center justify-center">
            <Link
              href="https://www.tiktok.com/@blvcksheepgt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok profile for Blvck Sheep"
            >
              <FaTiktok size={24} aria-hidden="true" focusable="false" />
            </Link>
          </Button>
        </div>
        
        {/* Affiliate Disclaimer */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] text-zinc-600 font-light leading-relaxed max-w-3xl">
            Curated with purpose. Some of the stays and experiences featured on Blvck Sheep contain affiliate links. If you reserve through them, we may earn a small commission at no extra cost to you, which directly supports our local curation and operations. In compliance with IAB Guidelines, you can learn more about affiliate marketing <a href="http://paidforadvertising.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-700 hover:text-zinc-400 transition-colors" aria-label="Learn more about affiliate marketing guidelines">here</a>.
          </p>
          <p className="text-xs text-zinc-500 font-medium mt-4 tracking-widest uppercase">
            © {new Date().getFullYear()} BLVCK SHEEP. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        <div className="text-white/30 text-xs text-center justify-center mt-12">
          Website by{" "}
          <Link
            href="https://www.inari-agency.com"
            className="hover:cursor-pointer hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Inari Agency website"
          >
            www.inari-agency.com
          </Link>
        </div>
      </div>
    </footer>
  );
}