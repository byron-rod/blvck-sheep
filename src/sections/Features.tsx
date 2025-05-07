import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Avatar from "@/components/Avatar";
import car from "@/assets/images/suzuki-xl7.webp";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import whatsapp from "@/assets/images/wa-logo.png";
// import background from "@/assets/images/wa-bg.png";
import Image from "next/image";

const features = [
  "Secure Payments",
  "Cool Vibes",
  "Curated Playlists",
  "Drink Coolers",
  "Air Conditioner",
  "Less Waiting",
];

export default function Features() {
  return (
    <section className="py-24" id="features">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-4xl lg:text-5xl text-center mt-6">
          More <span className="text-blue-400">Comfort</span>. Same Prices.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Comfortable Rides"
            description="Spacious SUVs with only five passengers, great music, and air conditioning."
            className="col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="group relative">
                <Image
                  src={car}
                  alt="Suzuki SUV"
                  className="transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Personalized Service"
            description="Flexible schedules and tailored journeys. We adapt to your needs."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center mt-6">
              <Avatar className="z-40">
                <Image
                  src={avatar1}
                  alt="Avatar"
                  className="rounded-full"
                ></Image>
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image
                  src={avatar3}
                  alt="Avatar"
                  className="rounded-full"
                ></Image>
              </Avatar>
              <Avatar className="-ml-6 border-purple-500 z-20">
                <Image
                  src={avatar2}
                  alt="Avatar"
                  className="rounded-full"
                ></Image>
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-blue-400 transition duration-400">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Private Ride Option"
            description="Total control of stops, music, and timeframes. Explore at your own pace."
            className="col-span-2 lg:col-span-1 mt-2"
          >
            <div className="aspect-video flex items-center justify-center hover:scale-105 transition duration-300">
              <p className="text-4xl md:text-[2.2rem] md:leading-[2.1rem] font-extrabold text-white/20 text-center">
                Exploring{" "}
                <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                  Guatemala
                </span>{" "}
                done{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110">
                  your way
                </span>
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Expert Guidance"
            description="We're more than just a ride. Travel like a local with our exclusive WhatsApp tips and destination guidance."
            className="col-span-2 lg:col-span-1 mt-1"
          >
            <div className="aspect-video relative flex items-center justify-center hover:scale-105 transition duration-500">
              <div>
                <Image
                  src={whatsapp}
                  alt="WhatsApp logo"
                  height={140}
                  width={140}
                ></Image>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-blue-400 inline-flex px-3 py-1.5 md:py-2 rounded-3xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-transparent text-nuetral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10032;
              </span>
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
