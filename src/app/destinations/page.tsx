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
    "All the information about the destinations you can visit with Black Sheep's personalized shuttle services in Guatemala.",
  keywords:
    "panajachel, antigua, el paredon, semuc champey, guatemala, shuttle, service, black sheep, transportation, travel",
};

export default function Destinations() {
  return (
    <section className="py-16 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">Destinations</h1>
        </div>
        <div className="">
          <DestinationsSection
            tag="Lake Atitlan"
            featurePost={<FeatureAtitlan />}
            blogCards={[
              {
                title: "Best Towns to Visit",
                description:
                  "Panajachel, San Marcos, San Pedro, and Santa Cruz",
                imageSrc: smallPicAtitlan,
                imageAlt: "Restaurant",
              },
              {
                title: "Best Hostels",
                description: "Free Cerveza and Dreamboat Hostel",
                imageSrc: smallPicAtitlanFree,
                imageAlt: "Hostel",
              },
            ]}
          />
          <div>
            <DestinationsSection
              tag="Antigua Guatemala"
              featurePost={<FeatureAntigua />}
              blogCards={[
                {
                  title: "Best Hostels",
                  description:
                    "The Doozy Koala, Adra Hostel, and The Yellow House",
                  imageSrc: smallPicAntiguaDoozy,
                  imageAlt: "Restaurant",
                },
                {
                  title: "Best Restaurants",
                  description: "Hector's Bistro, Samsara, and Adra Kitchen",
                  imageSrc: smallPicAntigua,
                  imageAlt: "Hostel",
                },
              ]}
            />
            <DestinationsSection
              tag="El Paredon"
              featurePost={<FeatureElParedon />}
              blogCards={[
                {
                  title: "Best Hostels",
                  description:
                    "Cocori Lodge, Driftwood Surfer, and Mellow Hostel",
                  imageSrc: smallPicParedonHostel,
                  imageAlt: "Restaurant",
                },
                {
                  title: "Best Restuarants",
                  description:
                    "Delicias del Mar, Mellow Hostel, Bora El Paredon",
                  imageSrc: smallPicParedon,
                  imageAlt: "Hostel",
                },
              ]}
            />
            <DestinationsSection
              tag="Semuc Champey"
              featurePost={<FeatureSemuc />}
              blogCards={[
                {
                  title: "Day Trips in Lanquin",
                  description: "Semuc Champey, Kanba Caves, and Lanquin Caves",
                  imageSrc: smallPicSemucCaves,
                  imageAlt: "Restaurant",
                },
                {
                  title: "Best Hotels",
                  description: "Zephyr Lodge, El Retiro, and Greengo's",
                  imageSrc: smallPicSemuc,
                  imageAlt: "Hostel",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <CallToAction />
    </section>
  );
}
