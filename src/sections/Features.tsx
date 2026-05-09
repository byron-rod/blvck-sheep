import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Avatar from "@/components/Avatar";
import car from "@/assets/images/suzuki-xl7.webp";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import image0 from "@/assets/images/blvck-compass.webp";
import Image from "next/image";

const content = {
  en: {
    tag: "Features",
    headingPart1: "More ",
    headingHighlight: "Comfort",
    headingPart2: ". Seamless Journeys.",
    card1Title: "Comfortable Rides",
    card1Desc: "Spacious SUVs or comfortable sedans, great music, and air conditioning.",
    card2Title: "Personalized Service",
    card2Desc: "Flexible schedules and tailored journeys. Quality customer service that adapts to your needs.",
    card3Title: "Private Ride or Shared Options",
    card3Desc: "We got you covered if you are in a budget or looking for a more exclusive experience.",
    card4Title: "Tailored Itineraries",
    card4Desc: "Travel like a local with our curated experiences, we can help you plan your trip to Guatemala.",
    card3TextPart1: "Exploring ",
    card3TextPart2: "Guatemala",
    card3TextPart3: " done ",
    card3TextPart4: "your way",
    features: [
      "Secure Payments",
      "Cool Vibes",
      "Curated Playlists",
      "Drink Coolers",
      "Air Conditioner",
      "Less Waiting",
    ]
  },
  es: {
    tag: "Características",
    headingPart1: "Más ",
    headingHighlight: "Comodidad",
    headingPart2: ". Viajes Sin Problemas.",
    card1Title: "Viajes Cómodos",
    card1Desc: "Amplias SUVs o sedanes cómodos, buena música y aire acondicionado.",
    card2Title: "Servicio Personalizado",
    card2Desc: "Horarios flexibles y viajes a medida. Servicio al cliente de calidad que se adapta a tus necesidades.",
    card3Title: "Viaje Privado u Opciones Compartidas",
    card3Desc: "Te cubrimos ya sea que tengas un presupuesto ajustado o busques una experiencia más exclusiva.",
    card4Title: "Itinerarios a Medida",
    card4Desc: "Viaja como un local con nuestras experiencias curadas, podemos ayudarte a planificar tu viaje a Guatemala.",
    card3TextPart1: "Explorando ",
    card3TextPart2: "Guatemala",
    card3TextPart3: " a ",
    card3TextPart4: "tu manera",
    features: [
      "Pagos Seguros",
      "Cool Vibes",
      "Playlists Curadas",
      "Hieleras",
      "Aire Acondicionado",
      "Menos Espera",
    ]
  }
};

export default function Features({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  return (
    <section className="py-24" id="features">
      <div className="container">
        <div className="flex justify-center">
          <Tag>{content[activeLanguage].tag}</Tag>
        </div>
        <h2 className="text-4xl lg:text-5xl text-center mt-6">
          {content[activeLanguage].headingPart1}
          <span className="text-blue-400">{content[activeLanguage].headingHighlight}</span>
          {content[activeLanguage].headingPart2}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <FeatureCard
            title={content[activeLanguage].card1Title}
            description={content[activeLanguage].card1Desc}
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
            title={content[activeLanguage].card2Title}
            description={content[activeLanguage].card2Desc}
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
            title={content[activeLanguage].card3Title}
            description={content[activeLanguage].card3Desc}
            className="col-span-2 lg:col-span-1 mt-2"
          >
            <div className="aspect-video flex items-center justify-center hover:scale-105 transition duration-300">
              <p className="text-4xl md:text-[2.2rem] md:leading-[2.1rem] font-extrabold text-white/20 text-center">
                {content[activeLanguage].card3TextPart1}
                <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                  {content[activeLanguage].card3TextPart2}
                </span>{" "}
                {content[activeLanguage].card3TextPart3}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110">
                  {content[activeLanguage].card3TextPart4}
                </span>
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title={content[activeLanguage].card4Title}
            description={content[activeLanguage].card4Desc}
            className="col-span-2 lg:col-span-1 mt-1"
          >
            <div className="aspect-video relative flex items-center justify-center hover:scale-105 transition duration-500">
              <div>
                <Image
                  src={image0}
                  alt="Tailored Itineraries Map graphic"
                  height={150}
                  width={150}
                  className="rounded-xl opacity-90 drop-shadow-2xl"
                ></Image>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {content[activeLanguage].features.map((feature) => (
            <div
              key={feature}
              className="bg-black border border-blue-400 inline-flex px-3 py-1.5 md:py-2 rounded-3xl gap-3 items-center hover:scale-105 transition duration-500 group"
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
