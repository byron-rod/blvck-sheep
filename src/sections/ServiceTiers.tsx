import { Bus, Car, Key } from "lucide-react";

const tiers = [
  {
    name: "Shared Shuttle",
    icon: Bus,
    description: "High-end shared transit engineered for budget-friendly travelers. Longer wait times, specific drop-off points in certain locations, scheduled routes connecting major hubs.\n\nFleet: Toyota Hiace, Nissan Urvan, Hyundai H1.",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-900",
    bgHover: "bg-[#85714D]/80",
    borderHover: "group-hover:border-[#85714D]",
  },
  {
    name: "Private Ride",
    icon: Car,
    description: "Your personal timeline. Door-to-door direct service with absolute privacy and flexibility on your route.\n\nFleet: Sedans and SUVs.",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-900",
    bgHover: "bg-zinc-400/70",
    borderHover: "group-hover:border-zinc-400",
  },
  {
    name: "Blvck Sheep",
    icon: Key,
    description: "This is our more comfortable tier. Absolute luxury, complimentary concierge perks, and whisper-quiet rides.\n\nFleet: State-of-the-art Hybrids/Electric Powered Vehicles to travel with comfort while being eco-conscious.",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-900",
    bgHover: "bg-gradient-to-b from-zinc-900 to-black",
    borderHover: "group-hover:border-zinc-700",
  }
];

export default function ServiceTiers() {
  return (
    <section className="bg-black py-24 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-16 text-center">
          The Blvck Sheep Rides
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
                    className="w-20 h-20 text-zinc-400 mb-8 transition-all duration-500 ease-in-out group-hover:scale-75 group-hover:text-white"
                  />
                  <h3 className="text-2xl font-normal text-white tracking-tight text-center">
                    {tier.name}
                  </h3>
                </div>

                {/* Revealed block */}
                <div className="absolute left-8 right-8 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-12 pointer-events-none">
                  <p className="text-white font-light text-[16px] leading-relaxed whitespace-pre-line text-center">
                    {tier.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
