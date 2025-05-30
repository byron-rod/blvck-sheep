import Tag from "@/components/Tag";
import guate from "@/assets/images/guate.jpg";
import paredon from "@/assets/images/el-paredon.webp";
import antigua from "@/assets/images/antigua.webp";
import semuc from "@/assets/images/semuc.webp";
import atitlan from "@/assets/images/lake-atitlan.webp";
import DestinationsColumn from "@/components/DestinationsColumn";
import Button from "@/components/Button";
import Link from "next/link";

const destinations = [
  {
    name: "Lake Atitlan",
    icon: atitlan,
    description:
      "Mayan villages, crystal-clear waters surrounded by majestic volcanoes.",
  },
  {
    name: "Semuc Champey",
    icon: semuc,
    description: "A tropical paradise of turquoise pools.",
  },
  {
    name: "Guatemala City",
    icon: guate,
    description:
      "The bustling heart of Guatemala, full of contrasts and culture.",
  },
  {
    name: "Antigua",
    icon: antigua,
    description: "Colonial charm meets vibrant nightlife.",
  },
  {
    name: "El Paredon",
    icon: paredon,
    description: "Where sun, surf, and laid-back vibes collide.",
  },
];

export type DestinationsType = typeof destinations;

export default function Destinations() {
  return (
    <section className="py-24 overflow-hidden" id="destinations">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="flex justify-center items-center">
              <Tag>Destinations</Tag>
            </div>
            <h2 className="text-4xl lg:text-5xl text-center mt-6">
              Guatemala&apos;s Most Beautiful{" "}
              <span className="text-blue-500">Locations</span>
            </h2>
            <Link
              href="/destinations"
              aria-label="Explore all destinations available with BlackSheep Shuttles"
            >
              <Button
                variant="secondary"
                className="hidden lg:flex justify-center mt-12 m-auto"
              >
                Destination Guide
              </Button>
            </Link>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden mask-destination-gradient grid md:grid-cols-2 gap-4">
              <DestinationsColumn destinations={destinations} />
              <DestinationsColumn
                destinations={destinations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
        <Link
          href="/destinations"
          aria-label="Explore all destinations available with BlackSheep Shuttles"
        >
          <Button
            variant="secondary"
            className="flex justify-center mt-16 lg:mt-20 m-auto lg:hidden"
          >
            Destination Guide
          </Button>
        </Link>
      </div>
    </section>
  );
}
