import Tag from "@/components/Tag";
import guate from "@/assets/images/guate.jpg";
import paredon from "@/assets/images/el-paredon.webp";
import antigua from "@/assets/images/antigua.webp";
import semuc from "@/assets/images/semuc.webp";
import atitlan from "@/assets/images/lake-atitlan.webp";
import DestinationsColumn from "@/components/DestinationsColumn";
import Button from "@/components/Button";
import Link from "next/link";

const content = {
  en: {
    tag: "Destinations",
    headingPart1: "Guatemala's Most Beautiful ",
    headingPart2: "Locations",
    button: "Destination Guide",
    ariaLabel: "Explore all destinations available with BlackSheep Shuttles",
    destinations: [
      {
        name: "Lake Atitlan",
        icon: atitlan,
        description: "Mayan villages, crystal-clear waters surrounded by majestic volcanoes.",
      },
      {
        name: "Semuc Champey",
        icon: semuc,
        description: "A tropical paradise of turquoise pools.",
      },
      {
        name: "Guatemala City",
        icon: guate,
        description: "The bustling heart of Guatemala, full of contrasts and culture.",
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
    ]
  },
  es: {
    tag: "Destinos",
    headingPart1: "Los Lugares Más Hermosos de ",
    headingPart2: "Guatemala",
    button: "Guía de Destinos",
    ariaLabel: "Explora todos los destinos disponibles con BlackSheep Shuttles",
    destinations: [
      {
        name: "Lago de Atitlán",
        icon: atitlan,
        description: "Pueblos mayas, aguas cristalinas rodeadas de volcanes majestuosos.",
      },
      {
        name: "Semuc Champey",
        icon: semuc,
        description: "Un paraíso tropical de piscinas turquesas.",
      },
      {
        name: "Ciudad de Guatemala",
        icon: guate,
        description: "El corazón bullicioso de Guatemala, lleno de contrastes y cultura.",
      },
      {
        name: "Antigua",
        icon: antigua,
        description: "El encanto colonial se encuentra con una vibrante vida nocturna.",
      },
      {
        name: "El Paredón",
        icon: paredon,
        description: "Donde el sol, el surf y las buenas vibras colisionan.",
      },
    ]
  }
};

export type DestinationsType = typeof content.en.destinations;

export default function Destinations({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const data = content[activeLanguage];
  return (
    <section className="py-24 overflow-hidden" id="destinations">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="flex justify-center items-center">
              <Tag>{data.tag}</Tag>
            </div>
            <h2 className="text-4xl lg:text-5xl text-center mt-6">
              {data.headingPart1}
              <span className="text-blue-500">{data.headingPart2}</span>
            </h2>
            <Link
              href="/destinations"
              aria-label={data.ariaLabel}
            >
              <Button
                variant="secondary"
                className="hidden lg:flex justify-center mt-12 m-auto"
              >
                {data.button}
              </Button>
            </Link>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden mask-destination-gradient grid md:grid-cols-2 gap-4">
              <DestinationsColumn destinations={data.destinations} />
              <DestinationsColumn
                destinations={data.destinations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
        <Link
          href="/destinations"
          aria-label={data.ariaLabel}
        >
          <Button
            variant="secondary"
            className="flex justify-center mt-16 lg:mt-20 m-auto lg:hidden"
          >
            {data.button}
          </Button>
        </Link>
      </div>
    </section>
  );
}
