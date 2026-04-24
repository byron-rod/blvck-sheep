import { Bus, Car, Key, Leaf, Sparkle } from "lucide-react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const tiers = [
  {
    name: "Shared Shuttle",
    icon: Bus,
    description: "Shared transit designed for the budget-conscious traveler. Operates on fixed daily schedules, with designated pick-up and drop-off areas in each town. Expect variable wait.\n\nFleet: Toyota Hiace, Nissan Urvan",
    textRest: "text-yellow-600",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-700",
    bgHover: "bg-gradient-to-b from-[#85714D]/40 via-[#85714D]/10 to-transparent",
    borderHover: "group-hover:border-[#85714D]",
  },
  {
    name: "Private Ride",
    icon: Car,
    description: "Our most efficient, 24/7 direct service. Engineered for convenience, offering door-to-door transit, absolute privacy, and total flexibility over your departure times and route.\n\nFleet:  Sedans and SUVs.",
    textRest: "text-zinc-400",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-700",
    bgHover: "bg-gradient-to-b from-zinc-700/30 via-zinc-700/10 to-transparent",
    borderHover: "group-hover:border-zinc-400",
  },
  {
    name: "Blvck Sheep",
    icon: Sparkle,
    description: "A quieter, more intentional way to travel. This tier pairs the smooth ride of our eco-conscious hybrid/electric vehicles with complimentary concierge perks, our most refined service. \n\nFleet: Electric SUVs.",
    textRest: "text-zinc-700",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-700",
    bgHover: "bg-gradient-to-b from-zinc-900 via-black to-black",
    borderHover: "group-hover:border-zinc-700",
  }
];

export default function ServiceTiers() {
  return (
    <section className="relative bg-black py-24 w-full overflow-hidden" id="services">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-16 text-center">
          Blvck Sheep Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group relative aspect-[4/5] ${tier.bgRest} border ${tier.borderRest} ${tier.borderHover} overflow-hidden rounded-xl transition-all duration-500 ease-in-out cursor-pointer`}
            >
              {/* Hover Background overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ${tier.bgHover}`}
              />

              {/* Content Layer */}
              <div className="relative z-10 w-full h-full p-8 flex flex-col justify-center items-center">
                {/* Resting block */}
                <div className="flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform group-hover:-translate-y-24 group-hover:scale-95 origin-top w-full">
                  <tier.icon
                    strokeWidth={1}
                    className={`w-24 h-24 ${tier.textRest} mb-8 transition-all duration-500 ease-in-out group-hover:scale-75 group-hover:text-white`}
                  />
                  <h3 className="text-3xl font-normal text-white tracking-tight text-center">
                    {tier.name}
                  </h3>
                </div>

                {/* Revealed block */}
                <div className="absolute left-8 right-8 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-12 pointer-events-none">
                  <p className="text-white font-light text-[14px] leading-relaxed whitespace-pre-line text-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform scale-95 group-hover:scale-100">
                    {tier.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center">
  <Link 
    href="/services" 
    className="group flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-white bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-sm"
  >
    Compare Details & Perks
    <IoArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
  </Link>
</div>
    </section>
  );
}
