import ItineraryCard from "@/components/ItineraryCard";

const itineraries = [
  {
    title: "Wellness Retreat",
    description: "Disconnect to reconnect. A curated journey of yoga, meditation, and holistic healing designed to restore your inner balance. Rejuvenate your mind, body, and soul in tranquil sanctuaries.",
  },
  {
    title: "Surf & Party",
    description: "Catch world-class waves by day and experience electrifying nightlife by the shore. The ultimate high-energy escape blending adrenaline, ocean breezes, and unforgettable celebrations.",
  },
  {
    title: "Cultural Immersion",
    description: "Dive deep into local traditions, authentic cuisine, and hidden gems. A highly curated experience connecting you with the heart of the destination and its vibrant heritage.",
  }
];

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
          {itineraries.map((item, index) => (
            <ItineraryCard 
              key={index} 
              title={item.title} 
              description={item.description} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
