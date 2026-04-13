import Link from "next/link";
import { hostelsData } from "@/data/hostels";

export const metadata = {
  title: "Premium Hostels - Black Sheep Shuttle Service",
  description:
    "Explore our curated selection of Guatemala's top premium hostels and let us handle your shuttle transportation.",
};

export default function HostelsPage() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-white">
            Explore & Stay in Guatemala
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
            These are our top curated properties to ensure you have the best experience in Guatemala. Select your stay and let us seamlessly handle your shuttle transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {hostelsData.map((hostel) => (
            <Link key={hostel.id} href={`/hostels/${hostel.id}`} className="group block">
              <div className="relative w-full overflow-hidden aspect-[4/3] border border-transparent group-hover:border-zinc-800 transition-colors duration-500">
                <img 
                  src={hostel.heroImage} 
                  alt={hostel.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                    {hostel.name}
                  </h2>
                  <span className="text-sm uppercase tracking-[0.2em] font-medium text-zinc-300 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    {hostel.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
