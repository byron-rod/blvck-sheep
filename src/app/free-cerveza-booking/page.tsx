import Button from "@/components/Button";
import Features from "@/sections/Features";
import Link from "next/link";

const page = () => {
  const whatsappLink =
    "https://wa.me/50255116881?text=Hello,%20I%20am%20staying%20at%20Free%20Cerveza%20and%20would%20like%20to%20book%20a%20shuttle!";

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Explore Guatemala in Comfort
          </div>
        </div>
        <h1 className="text-5xl lg:text-6xl font-medium mt-10 leading-[2.5rem]">
          Blvck Sheep Services
        </h1>
        <p className="text-start text-xl lg:text-xl text-white/70 mt-4 md:mt-6">
          Blvck Sheep and Free Cerveza bring you a more comfortable shuttle
          experience to make your journey to Lake Atitlan more enjoyable.
          Whether it&apos;s to or from the airport, Antigua, or El Paredon
          we&apos;ve got your ride covered.
        </p>
        <Button variant="secondary" className="mt-8 font-bold flex">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-blue-400"
            aria-label="WhatsApp contact for BlackSheep Shuttles"
          >
            Book Your Ride Now
          </Link>
        </Button>
      </div>
      <Features />
    </section>
  );
};

export default page;
