import { Bus, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import blvckSheepLogo from "@/assets/images/blvck-sheep-new.png"; 

const content = {
  en: {
    heading: "Blvck Sheep Services",
    compareBtn: "Compare Options",
    navAria: "Service options navigation",
    tiers: [
      {
        name: "Shared Shuttle",
        icon: Bus,
        description:
          "Shared transit designed for the budget-conscious traveler. Operates on fixed daily schedules, with designated pick-up and drop-off areas in each town. Expect variable wait.\n\nFleet: Microbuses - Minivans",
        textRest: "text-yellow-600",
        bgRest: "bg-zinc-950",
        borderRest: "border-zinc-700",
        bgHover:
          "bg-gradient-to-b from-[#85714D]/40 via-[#85714D]/10 to-transparent",
        borderHover: "group-hover:border-[#85714D]",
        isLogo: false,
      },
      {
        name: "Private Ride",
        icon: Car,
        description:
          "Our most efficient, 24/7 direct service. Engineered for convenience, offering door-to-door transit, absolute privacy, and total flexibility over your departure times and route.\n\nFleet: Sedans and SUVs.",
        textRest: "text-zinc-400",
        bgRest: "bg-zinc-950",
        borderRest: "border-zinc-700",
        bgHover:
          "bg-gradient-to-b from-zinc-700/30 via-zinc-700/10 to-transparent",
        borderHover: "group-hover:border-zinc-400",
        isLogo: false,
      },
      {
        name: "The Blvck Sheep Standard",
        isLogo: true,
        icon: null,
        description:
          "Curated itineraries, tailored design, and total comfort. We don't just offer rides; we design unique travel experiences across Guatemala to match your time and budget.",
        textRest: "text-white",
        bgRest: "bg-zinc-950",
        borderRest: "border-zinc-700",
        bgHover: "bg-gradient-to-b from-zinc-900 via-black to-black",
        borderHover: "group-hover:border-zinc-500",
      },
    ],
  },
  es: {
    heading: "Servicios Blvck Sheep",
    compareBtn: "Comparar Opciones",
    navAria: "Navegación de opciones de servicio",
    tiers: [
      {
        name: "Viaje Compartido",
        icon: Bus,
        description:
          "Transporte compartido diseñado para el viajero con presupuesto. Opera en horarios fijos diarios, con áreas designadas de recogida y llegada en cada ciudad. Espera variable.\n\nFlota: Microbuses - Minivans",
        textRest: "text-yellow-600",
        bgRest: "bg-zinc-950",
        borderRest: "border-zinc-700",
        bgHover:
          "bg-gradient-to-b from-[#85714D]/40 via-[#85714D]/10 to-transparent",
        borderHover: "group-hover:border-[#85714D]",
        isLogo: false,
      },
      {
        name: "Viaje Privado",
        icon: Car,
        description:
          "Nuestro servicio directo más eficiente, 24/7. Diseñado para tu conveniencia, ofreciendo transporte de puerta a puerta, privacidad absoluta y total flexibilidad sobre tus horarios de salida y ruta.\n\nFlota: Sedanes y SUVs.",
        textRest: "text-zinc-400",
        bgRest: "bg-zinc-950",
        borderRest: "border-zinc-700",
        bgHover:
          "bg-gradient-to-b from-zinc-700/30 via-zinc-700/10 to-transparent",
        borderHover: "group-hover:border-zinc-400",
        isLogo: false,
      },
      {
        name: "The Blvck Sheep Standard",
        isLogo: true,
        icon: null,
        description:
          "Itinerarios curados, diseño a medida y comodidad total. No solo ofrecemos viajes; diseñamos experiencias únicas por toda Guatemala adaptadas a tu tiempo y presupuesto.",
        textRest: "text-white",
        bgRest: "bg-zinc-950",
        borderRest: "border-zinc-700",
        bgHover: "bg-gradient-to-b from-zinc-900 via-black to-black",
        borderHover: "group-hover:border-zinc-500",
      },
    ],
  },
};

export default function ServiceTiers({
  activeLanguage = "en",
}: {
  activeLanguage?: "en" | "es";
}) {
  const data = content[activeLanguage];
  return (
    <>
      <section
        className="relative bg-black py-24 w-full overflow-hidden"
        id="services"
        aria-labelledby="services-heading"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <header>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-light tracking-tight text-white mb-16 text-center"
            >
              {data.heading}
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.tiers.map((tier) => (
              <article
                key={tier.name}
                className={`group relative aspect-[4/5] ${tier.bgRest} border ${tier.borderRest} ${tier.borderHover} overflow-hidden rounded-xl transition-all duration-500 ease-in-out cursor-pointer`}
                aria-labelledby={`tier-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Hover Background overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ${tier.bgHover}`}
                  aria-hidden="true"
                />

                {/* Content Layer */}
                <div className="relative z-10 w-full h-full p-8 md:p-4 lg:p-8 flex flex-col justify-center items-center">
                  {/* Resting block */}
                  <header className="flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform group-hover:-translate-y-24 md:group-hover:-translate-y-16 lg:group-hover:-translate-y-24 group-hover:scale-95 origin-top w-full">
                    
                    {tier.isLogo ? (
                      <div className="relative w-24 h-24 mb-8 md:w-16 md:h-16 md:mb-4 lg:w-24 lg:h-24 lg:mb-8 transition-all duration-500 ease-in-out group-hover:scale-75 opacity-70 group-hover:opacity-100">
                        <Image 
                          src={blvckSheepLogo} 
                          alt="Blvck Sheep" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      tier.icon && (
                        <tier.icon
                          strokeWidth={1}
                          className={`w-24 h-24 mb-8 md:w-16 md:h-16 md:mb-4 lg:w-24 lg:h-24 lg:mb-8 ${tier.textRest} transition-all duration-500 ease-in-out group-hover:scale-75 group-hover:text-white`}
                          aria-hidden="true"
                          focusable="false"
                        />
                      )
                    )}

                    <h3
                      id={`tier-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-3xl md:text-xl md:mb-8 lg:text-3xl font-normal text-white tracking-tight text-center"
                    >
                      {tier.name}
                    </h3>
                  </header>

                  {/* Revealed block */}
                  <div className="absolute left-8 right-8 md:left-4 md:right-4 lg:left-8 lg:right-8 top-1/2 md:top-[42%] lg:top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 translate-y-12 pointer-events-none">
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

      <nav aria-label={data.navAria} className="flex justify-center bg-black">
        <Link
          href="/services"
          className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors rounded-full mb-20"
          aria-label={data.navAria}
        >
          {data.compareBtn}
        </Link>
      </nav>
    </>
  );
}
