import Button from "@/components/Button";
import Link from "next/link";

const content = {
  en: {
    badge: "Explore Guatemala in Comfort",
    title: "Blvck Sheep",
    subtitle: "Tourist Services,",
    highlight: " just got Better",
    cta: "Book Your Ride Now"
  },
  es: {
    badge: "Explora Guatemala con Comodidad",
    title: "Blvck Sheep",
    subtitle: "Tourist Services,",
    highlight: " just got Better",
    cta: "Reserva Tu Viaje Ahora"
  }
};

export default function Hero({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const whatsappLink =
    "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20shuttle!";

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            {content[activeLanguage].badge}
          </div>
        </div>
        <h1 className="text-[5.5rem] lg:text-[6.2rem] font-medium mt-10 leading-[4.3rem]">
          {content[activeLanguage].title}
        </h1>
        <p className="text-start text-xl lg:text-2xl text-white mt-4 md:mt-6 font-bold">
          {content[activeLanguage].subtitle}
          <span className="text-gray-400">{content[activeLanguage].highlight}</span>
        </p>
        <Button variant="secondary" className="mt-8 font-bold flex">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-blue-400"
            aria-label="WhatsApp contact for BlackSheep Shuttles"
          >
            {content[activeLanguage].cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
