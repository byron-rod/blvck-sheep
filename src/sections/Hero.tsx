import Button from "@/components/Button";
import Link from "next/link";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/50255116881?text=Hi,%20I%20would%20like%20to%20book%20a%20ride!";

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Explore Guatemala in Comfort
          </div>
        </div>
        <h1 className="text-[5.5rem] lg:text-[6.2rem] font-medium mt-10 leading-[4.3rem]">
          Blvck Sheep
        </h1>
        <p className="text-start text-xl lg:text-2xl text-white/50 mt-4 md:mt-6">
          Shuttles Services,
          <span className="font-bold"> just got Better</span>
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
    </section>
  );
}
