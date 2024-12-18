import Tag from "@/components/Tag";
import guate from "@/assets/images/guate.jpg";
import paredon from "@/assets/images/el-paredon.jpg";
import antigua from "@/assets/images/antigua.jpg";
import semuc from "@/assets/images/semuc.jpg";
import atitlan from "@/assets/images/lake-atitlan.jpg";
import DestinationsColumn from "@/components/DestinationsColumn";

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
      </div>
    </section>
  );
}
