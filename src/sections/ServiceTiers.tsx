import { Bus, Car, Sparkle } from "lucide-react";
import Link from "next/link";

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
    description: "A quieter, more intentional way to travel. This tier pairs the smooth ride of our eco-conscious hybrid/electric vehicles with complimentary perks, our most refined service. \n\nFleet: Electric SUVs.",
    textRest: "text-zinc-700",
    bgRest: "bg-zinc-950",
    borderRest: "border-zinc-700",
    bgHover: "bg-gradient-to-b from-zinc-900 via-black to-black",
    borderHover: "group-hover:border-zinc-700",
  }
];

export default function ServiceTiers() {
  return (
    <>
      <section className="relative bg-black py-24 w-full overflow-hidden" id="services" aria-labelledby="services-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <header>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-light tracking-tight text-white mb-16 text-center">
              Blvck Sheep Services
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`group relative aspect-[4/5] ${tier.bgRest} border ${tier.borderRest} ${tier.borderHover} overflow-hidden rounded-xl transition-all duration-500 ease-in-out cursor-pointer`}
                aria-labelledby={`tier-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Hover Background overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ${tier.bgHover}`}
                  aria-hidden="true"
                />

                {/* Content Layer (Ajustamos padding: p-8 en móvil/desktop, p-4 en tablet) */}
                <div className="relative z-10 w-full h-full p-8 md:p-4 lg:p-8 flex flex-col justify-center items-center">
                  
                  {/* Resting block (Ajustamos el translate-y de la animación en hover) */}
                  <header className="flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform group-hover:-translate-y-24 md:group-hover:-translate-y-16 lg:group-hover:-translate-y-24 group-hover:scale-95 origin-top w-full">
                    <tier.icon
                      strokeWidth={1}
                      /* Reducimos el ícono y margen inferior en tablets */
                      className={`w-24 h-24 mb-8 md:w-16 md:h-16 md:mb-4 lg:w-24 lg:h-24 lg:mb-8 ${tier.textRest} transition-all duration-500 ease-in-out group-hover:scale-75 group-hover:text-white`}
                      aria-hidden="true"
                      focusable="false"
                    />
                    <h3 
                      id={`tier-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
                      /* Reducimos el título en tablets */
                      className="text-3xl md:text-xl md:mb-8 lg:text-3xl font-normal text-white tracking-tight text-center"
                    >
                      {tier.name}
                    </h3>
                  </header>

                  {/* Revealed block (Ajustamos márgenes laterales y top position) */}
                  <div className="absolute left-8 right-8 md:left-4 md:right-4 lg:left-8 lg:right-8 top-1/2 md:top-[42%] lg:top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-12 pointer-events-none">
                    {/* Reducimos el tamaño del texto descriptivo a 'text-xs' en tablets */}
                    <p className="text-white font-light text-[14px] md:text-xs lg:text-[14px] leading-relaxed whitespace-pre-line text-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform scale-95 group-hover:scale-100">
                      {tier.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Service options navigation" className="flex justify-center bg-black">
        <Link 
          href="/services" 
          className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors rounded-full mb-20"
          aria-label="Compare all service tier options"
        >
          Compare Options
        </Link>
      </nav>
    </>
  );
}