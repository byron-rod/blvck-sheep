import Link from "next/link";
import { hotelsData } from "@/data/hotels";

export const metadata = {
  title: "Premium Hotels - Black Sheep Shuttle Service",
  description:
    "Explore our curated selection of Guatemala's most exclusive boutique hotels and premium sanctuaries.",
};

export default function HotelsIndexPage() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6 text-white">
            Curated Hotels
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
            A handpicked collection of Guatemala's most exclusive and beautifully designed properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {hotelsData.map((hotel) => (
            <div key={hotel.id} className="relative group block w-full overflow-hidden aspect-[4/5] md:aspect-square">
              <img 
                src={hotel.heroImage} 
                alt={hotel.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-300 mb-3 border-b border-white/30 pb-1">
                  {hotel.location}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  {hotel.name}
                </h2>
                
                <Link
                  href={`/hotels/${hotel.id}`}
                  className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-zinc-200 transition-colors translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100"
                >
                  Explore Property
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
