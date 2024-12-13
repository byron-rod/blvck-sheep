import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="py-20 px-5 md:px-0 lg:py-20">
      <div className="container max-w-6xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Explore Guatemala in Comfort
          </div>
        </div>
        <h1 className="text-[5.5rem] lg:text-[6rem] font-medium mt-10 leading-[4.3rem]">
          Blvck Sheep
        </h1>
        <p className="text-start text-xl lg:text-2xl text-white/50 mt-4 md:mt-6">
          Shuttles Services,
          <span className="font-bold"> just got Better</span>
        </p>
        <Button variant="secondary" className="mt-8 font-bold flex">
          Book Your Ride Now
        </Button>
      </div>
    </section>
  );
}
