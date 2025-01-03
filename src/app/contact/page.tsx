import Button from "@/components/Button";
import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us - Black Sheep Shuttle Service",
  description:
    "Contact Black Sheep Shuttle Service for all your transportation needs in Guatemala.",
  keywords:
    "panajachel, antigua, el paredon, semuc champey, guatemala, shuttle, service, black sheep, contact",
};

export default function Contact() {
  const whatsappLink = "https://wa.me/50255116881";
  const emailLink = "mailto:hello@blvck-sheep.com";
  const instagramLink = "https://www.instagram.com/blvcksheepgt";
  const facebookLink = "https://www.facebook.com/blvcksheepgt";

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Contact Information
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mt-10 leading-[4.3rem]">
          Contact Us
        </h1>
        <p className="text-start text-lg md:text-xl lg:text-2xl text-white/50 mt-4 md:mt-6 max-w-xl lg:max-w-3xl">
          For all your transportation needs in Guatemala, we're here to help.
          Reach out to us via WhatsApp, email, or social media.
        </p>
        <div className="flex gap-4 mt-8">
          {/* WhatsApp */}
          <Button
            variant="secondary"
            className="mt-8 font-bold flex text-center justify-center"
          >
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp contact for BlackSheep Shuttles"
            >
              <FaWhatsapp size={24} />
            </Link>
          </Button>

          {/* Email */}
          <Button
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
        </div>
      </div>
    </section>
  );
}
