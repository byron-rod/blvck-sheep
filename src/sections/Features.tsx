import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import car from "@/assets/images/suzuki-xl7.png";
import Image from "next/image";

const features = [
  "Cool Vibes",
  "Curated Playlists",
  "Friendly Staff",
  "Air Conditioner",
  "Less Waiting",
  "No Kids",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-4xl text-center mt-6">
          More Comfort. More Freedom. Less Hassle.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8">
          <FeatureCard
            title="Comfortable Rides"
            description="Spacious SUVs with only 5-6 passangers."
          >
            <div>
              <div>
                <Image src={car} alt="Suzuki SUV"></Image>
              </div>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Personalized Service"
            description="Flexible schedules and tailored journeys."
          ></FeatureCard>
          <FeatureCard
            title="Private Ride Option"
            description="Total control of stops, music, and timeframes."
          ></FeatureCard>
          <FeatureCard
            title="Expert Recommendations"
            description="Travel like a local with our WhatsApp tips."
          ></FeatureCard>
        </div>
        <div>
          {features.map((feature) => (
            <div key={feature}>
              <span></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
