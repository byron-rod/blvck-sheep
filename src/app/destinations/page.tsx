import DestinationsSection from "@/components/DestinationsSection";
import FeatureAtitlan from "@/components/FeatureAtitlan";
import smallPicAtitlan from "@/assets/images/lake-atitlan.webp";
import smallPicAntigua from "@/assets/images/antigua.webp";
import smallPicParedon from "@/assets/images/el-paredon.webp";
import smallPicSemuc from "@/assets/images/semuc.webp";
import FeatureAntigua from "@/components/FeatureAntigua";
import FeatureElParedon from "@/components/FeatureElParedon";
import FeatureSemuc from "@/components/FeatureSemuc";

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
                title: "Yoga Experience",
                description: "The best yoga retreats in San Marcos La Laguna",
                imageSrc: smallPicAtitlan,
                imageAlt: "Restaurant",
              },
              {
                title: "Best Hostels",
                description: "Find the best hostels in Panajachel",
                imageSrc: smallPicAtitlan,
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
                  title: "Volcanos to Hike",
                  description: "Climb Acatenango and Fuego",
                  imageSrc: smallPicAntigua,
                  imageAlt: "Restaurant",
                },
                {
                  title: "Fine Dining",
                  description: "The best restaurants in Antigua",
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
                  title: "Fresh Seafood",
                  description: "Find the best seafood in El Paredon",
                  imageSrc: smallPicParedon,
                  imageAlt: "Restaurant",
                },
                {
                  title: "Best Airbnbs",
                  description: "Find the best places to stay in El Paredon",
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
                  description: "Caves and waterfalls to explore",
                  imageSrc: smallPicSemuc,
                  imageAlt: "Restaurant",
                },
                {
                  title: "Best Hotels",
                  description: "Find the best places to stay in Lanquin",
                  imageSrc: smallPicSemuc,
                  imageAlt: "Hostel",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
