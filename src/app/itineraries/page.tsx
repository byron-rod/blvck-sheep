import ItineraryCard from "@/components/ItineraryCard";
import { itinerariesData } from "@/data/itineraries";

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
            Select your path and begin the adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itinerariesData.map((item, index) => (
            <ItineraryCard 
              key={item.id} 
              title={item.title} 
              description={item.description}
              bookingUrl={item.bookingUrl} 
              visualHookKey={item.visualHookKey}
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
