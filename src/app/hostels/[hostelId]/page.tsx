import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Features from "@/sections/Features";
import Link from "next/link";

// Define type for params
interface HostelPageProps {
  params: {
    hostelId: string;
  };
}

// Define hostel data
const hostels: Record<
  string,
  {
    name: string;
    description: string;
    whatsappCode: string;
    bookingLink: string;
  }
> = {
  "free-cerveza": {
    name: "Free Cerveza",
    description:
      "Blvck Sheep and Free Cerveza bring you a more comfortable shuttle experience to make your journey to Lake Atitlán more enjoyable.",
    whatsappCode: "Free%20Cerveza",
    bookingLink: "https://freecervezahostel.com/stay/",
  },
  "mellow-surf-hostel": {
    name: "Mellow Surf Hostel",
    description:
      "Blvck Sheep and Mellow Surf Hostel offer an easy way to travel to El Paredón from Guatemala City, Antigua, or Lake Atitlán.",
    whatsappCode: "Mellow%20Surf%20Hostel",
    bookingLink: "https://mellowsurfhostel.com/",
  },
  "zephyr-lodge": {
    name: "Zephyr Lodge",
    description:
      "Blvck Sheep and Zephyr Lodge offer an easy way to travel to Lanquin from Guatemala City, Antigua, or Lake Atitlán.",
    whatsappCode: "Zephyr%20Lodge",
    bookingLink: "https://zephyrlodgelanquin.com/",
  },
  "adra-hostel": {
    name: "Adra Hostel Antigua",
    description:
      "Blvck Sheep and Adra Hostel Antigua offer an easy way to travel to Antigua from Guatemala City, El Paredon, or Lake Atitlán.",
    whatsappCode: "Zephyr%20Lodge",
    bookingLink: "https://adrahostel.com/antigua-guatemala/",
  },
};

// Ensure params are correctly typed
const HostelPage = ({ params }: HostelPageProps) => {
  const hostel = hostels[params.hostelId];

  // If the hostel does not exist, return a 404 page
  if (!hostel) {
    return notFound();
  }

  const whatsappLink = `https://wa.me/50255116881?text=Hello,%20I%20am%20staying%20at%20${hostel.whatsappCode}%20and%20would%20like%20to%20book%20a%20shuttle!`;

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        {/* Badge */}
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Explore Guatemala in Comfort
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-medium mt-10 leading-[2.5rem]">
          Blvck Sheep & {hostel.name}
        </h1>

        {/* Description */}
        <p className="text-xl text-white/70 mt-4">{hostel.description}</p>

        {/* Booking Buttons */}
        <div className="mt-8 space-x-4">
          <Button variant="secondary">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-blue-400"
              aria-label={`WhatsApp contact for booking a shuttle from ${hostel.name}`}
            >
              Book Your Shuttle
            </Link>
          </Button>

          <Button variant="primary">
            <Link
              href={hostel.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-blue-400"
              aria-label={`Book a stay at ${hostel.name}`}
            >
              Book a Stay
            </Link>
          </Button>
        </div>
      </div>

      <Features />
    </section>
  );
};

export default HostelPage;

// Ensure Next.js generates static pages for all hostels
export async function generateStaticParams() {
  return Object.keys(hostels).map((hostelId) => ({
    hostelId,
  }));
}
