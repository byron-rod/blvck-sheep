import ItineraryCard from "@/components/ItineraryCard";
import { itinerariesData } from "@/data/itineraries";
import { ArrowRight, Map, Home, Compass } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Curated Journeys - Black Sheep Tourist Services",
  description:
    "Explore our curated selection of Guatemala's most traveled journeys and let us handle your shuttle transportation.",
};

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Curated <br className="hidden md:block"/> Journeys
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Exclusive experiences tailored to your distinctive travel style. 
            Select your path and begin the adventure. Our team can also create custom itineraries for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itinerariesData.map((item, index) => (
            <ItineraryCard 
              key={item.id} 
              title={item.title} 
              description={item.description}
              bookingUrl={`/itineraries/${item.id}`} 
              visualHookKey={item.visualHookKey}
              index={index} 
            />
          ))}
        </div>

        <section className="mt-32 pt-24 border-t border-zinc-900">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">The Blvck Sheep Approach</h2>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-16">Beyond Transportation</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Map strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-6" />
              <h4 className="text-xl font-medium mb-4">Seamless Transit Logistics</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                More than just a ride. We engineer your entire logistical route across Guatemala, ensuring flawless, private transitions between destinations in our premium fleet.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Home strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-6" />
              <h4 className="text-xl font-medium mb-4">Curated Pacing & Stays</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Not sure how many nights to spend at the lake? We provide expert guidance on pacing your trip and unlock our hand-picked portfolio of boutique stays and eco-luxury lodges.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800/50 p-10 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors duration-500">
              <Compass strokeWidth={1} className="w-8 h-8 text-zinc-400 mb-6" />
              <h4 className="text-xl font-medium mb-4">The Express Detours</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Transform a transit day into an expedition. We customize your routes with strategic stops—from soaking in volcanic hot springs to exploring hidden Mayan ruins on the way to your next hotel.
              </p>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link 
              href="https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20help%20crafting%20a%20custom%20itinerary%20in%20Guatemala."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Craft Your Custom Route
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
