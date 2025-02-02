import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Features from "@/sections/Features";
import Link from "next/link";

// Define the type for hostels
type Hostel = {
  name: string;
  description: string;
  whatsappCode: string;
  bookingLink: string;
};

// Define the hostel data object
const hostels: Record<string, Hostel> = {
  "free-cerveza": {
    name: "Free Cerveza",
    description:
      "Free Cerveza is a popular hostel in Santa Cruz La Laguna, a 10 minute boat ride from Panajachel. The ultimate destination hostel nestled on the shores of Lake Atitlan, with fun activities and amazing people from all over the world. Blvck Sheep brings you a more comfortable shuttle experience to make your journey to Lake Atitlán more enjoyable. Whether it's to or from the airport, Antigua, or El Paredón, we've got your ride covered.",
    whatsappCode: "Free%20Cerveza",
    bookingLink: "https://freecervezahostel.com/stay/",
  },
  "mellow-surf-hostel": {
    name: "Mellow Surf Hostel",
    description:
      "Mellow is a surf and lifestyle hostel located in a unique surf town on the pacific coast of Guatemala, only 2 blocks from the beach. Book your beach getaway now and come surf, swim, kayak and tan in our beautiful hostel, where the vibes are always excellent. Blvck Sheep offers an easy way to travel to El Paredón from Guatemala City, Antigua, or Lake Atitlán. Book your shuttle directly and experience a more comfortable ride.",
    whatsappCode: "Mellow%20Surf%20Hostel",
    bookingLink: "https://mellowsurfhostel.com/",
  },
  "zephyr-lodge": {
    name: "Zephyr Lodge",
    description:
      "Zephyr Lodge is located in Lanquin, a place with a world famous infinity pool with unobstructed mountain views that has been known to melt more than one Instagramers heart. Their lively backpackers bar, equipped with cocktails on tap, is the perfect spot to meet fellow travelers with whom you will be able to enjoy unique river tubing and Semuc Champey tours. Blvck Sheep offer an easy way to travel to Lanquín from Guatemala City, Antigua, or Lake Atitlán. Book your shuttle directly and experience a more comfortable ride.",
    whatsappCode: "Zephyr%20Lodge",
    bookingLink: "https://zephyrlodgelanquin.com/",
  },
  "adra-hostel": {
    name: "Adra Hostel Antigua",
    description:
      "Adra Hostel was founded in 2017 in Antigua Guatemala. Its founders opened the doors with a concept of Community Harmony Space, where travelers from all over the world can meet, share stories and create unforgettable memories in the center of Antigua Guatemala. Blvck Sheep offers an easy way to travel to Antigua from Guatemala City, El Paredon, or Lake Atitlán. Book your shuttle directly and experience a more comfortable ride.",
    whatsappCode: "Adra%20Hostel%20Antigua",
    bookingLink: "https://adrahostel.com/antigua-guatemala/",
  },
};

export default async function HostelPage({
  params,
}: {
  params: Promise<{ hostelId: string }>;
}) {
  const { hostelId } = await params;
  const hostel = hostels[hostelId];

  // If the hostel does not exist, return a 404 page
  if (!hostel) {
    return notFound();
  }

  const whatsappLink = `https://wa.me/50255116881?text=Hello,%20I%20am%20staying%20at%20${hostel.whatsappCode}%20and%20would%20like%20to%20book%20a%20shuttle!`;

  return (
    <section className="py-10 px-5 md:px-0">
      <div className="container max-w-5xl">
        {/* Badge */}
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Explore Guatemala in Comfort
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-medium mt-10 leading-[2.5rem]">
          {hostel.name}
        </h1>

        {/* Description */}
        <p className="text-xl text-white/70 mt-4">{hostel.description}</p>

        {/* Booking Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <Button
            variant="secondary"
            className="mt-2 md:mt-8 flex text-center justify-center"
          >
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp contact for booking a shuttle from ${hostel.name}`}
            >
              Book Now
            </Link>
          </Button>

          <Button
            variant="secondary"
            className="mt-2 md:mt-8 flex text-center justify-center"
          >
            <Link
              href={hostel.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-blue-400"
              aria-label={`Book a stay at ${hostel.name}`}
            >
              {hostel.name} Website
            </Link>
          </Button>
        </div>
        {/* Back Button */}
        <div className="flex justify-start mb-8 mt-8">
          <Link href="/hostels">
            <Button variant="primary" className="flex items-center text-md">
              &larr; Back
            </Button>
          </Link>
        </div>
      </div>

      <Features />
    </section>
  );
}
