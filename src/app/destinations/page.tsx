import Link from "next/link"; // Import Link from Next.js
import DestinationsSection from "@/components/DestinationsSection";
import FeatureAtitlan from "@/components/FeatureAtitlan";
import smallPicAtitlan from "@/assets/images/lake-atitlan.jpg";
import smallPicAtitlanFree from "@/assets/images/free-cerveza.jpg";
import smallPicAntigua from "@/assets/images/adra.jpg";
import smallPicAntiguaDoozy from "@/assets/images/the-doozy-koala.jpg";
import smallPicParedon from "@/assets/images/mellow.jpg";
import smallPicParedonHostel from "@/assets/images/cocori.jpg";
import smallPicSemuc from "@/assets/images/zephyr.avif";
import smallPicSemucCaves from "@/assets/images/lanquin.jpg";
import FeatureAntigua from "@/components/FeatureAntigua";
import FeatureElParedon from "@/components/FeatureElParedon";
import FeatureSemuc from "@/components/FeatureSemuc";
import CallToAction from "@/sections/CallToAction";

export const metadata = {
  title: "Our Destinations - Black Sheep Shuttle Service",
  description:
    "General information about the destinations you can visit with Black Sheep's personalized shuttle services in Guatemala.",
  keywords:
    "Panajachel, Antigua, El Paredon, Semuc Champey, Guatemala, shuttle, service, Black Sheep, transportation, travel",
};

export default function Destinations() {
  return (
    <section className="py-16 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">Destinations</h1>
        </div>
        <div className="">
          {/* Lake Atitlán Section */}
          <DestinationsSection
            tag="Lake Atitlan"
            featurePost={<FeatureAtitlan />}
            blogCards={[
              {
                title: "Best Towns to Visit",
                description: "Panajachel, San Marcos, San Pedro, and San Juan.",
                imageSrc: smallPicAtitlan,
                imageAlt: "Lake Atitlan",
              },
              {
                title: "Places to Stay",
                description: (
                  <>
                    Discover hostels like Free Cerveza or Amaranto.{" "}
                    <Link
                      href="/hostels"
                      className="text-blue-400 underline"
                      aria-label="See more information about hostels in Lake Atitlan"
                    >
                      More Information
                    </Link>
                  </>
                ),
                imageSrc: smallPicAtitlanFree,
                imageAlt: "Hostel at Lake Atitlan",
              },
            ]}
          />

          {/* Antigua Section */}
          <DestinationsSection
            tag="Antigua Guatemala"
            featurePost={<FeatureAntigua />}
            blogCards={[
              {
                title: "Best Hostels",
                description: (
                  <>
                    Stay at Adra Hostel or The Yellow House.{" "}
                    <Link
                      href="/hostels"
                      className="text-blue-400 underline"
                      aria-label="See more information about hostels in Antigua"
                    >
                      More Information
                    </Link>
                  </>
                ),
                imageSrc: smallPicAntiguaDoozy,
                imageAlt: "Hostel in Antigua",
              },
              {
                title: "Best Restaurants",
                description: "Hector's Bistro, Samsara, and Adra Kitchen",
                imageSrc: smallPicAntigua,
                imageAlt: "Restaurant in Antigua",
              },
            ]}
          />

          {/* El Paredón Section */}
          <DestinationsSection
            tag="El Paredon"
            featurePost={<FeatureElParedon />}
            blogCards={[
              {
                title: "Best Hostels",
                description: (
                  <>
                    Explore Cocori Lodge, or Mellow Hostel.{" "}
                    <Link
                      href="/hostels"
                      className="text-blue-400 underline"
                      aria-label="See more information about hostels in El Paredon"
                    >
                      More Information
                    </Link>
                  </>
                ),
                imageSrc: smallPicParedonHostel,
                imageAlt: "Hostel in El Paredon",
              },
              {
                title: "Best Restaurants",
                description: "Delicias del Mar, Mellow Hostel, Bora El Paredón",
                imageSrc: smallPicParedon,
                imageAlt: "Restaurant in El Paredon",
              },
            ]}
          />

          {/* Semuc Champey Section */}
          <DestinationsSection
            tag="Semuc Champey"
            featurePost={<FeatureSemuc />}
            blogCards={[
              {
                title: "Day Trips in Lanquin",
                description: "Semuc Champey, Kanba Caves, and Lanquin Caves",
                imageSrc: smallPicSemucCaves,
                imageAlt: "Semuc Champey",
              },
              {
                title: "Best Hostels",
                description: (
                  <>
                    Stay at Zephyr Lodge, or El Retiro.{" "}
                    <Link
                      href="/hostels"
                      className="text-blue-400 underline"
                      aria-label="See more information about hostels in Semuc Champey"
                    >
                      More Information
                    </Link>
                  </>
                ),
                imageSrc: smallPicSemuc,
                imageAlt: "Hostel in Semuc Champey",
              },
            ]}
          />
        </div>
      </div>
      <CallToAction />
    </section>
  );
}
