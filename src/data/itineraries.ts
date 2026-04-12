export interface Itinerary {
  id: string;
  title: string;
  description: string;
  bookingUrl: string;
  visualHookKey: "wellness" | "adrenaline" | "culture" | string;
}

export const itinerariesData: Itinerary[] = [
  {
    id: "wellness-retreat",
    title: "Wellness Retreat",
    description: "Disconnect to reconnect. A curated journey of yoga, meditation, and healthy food designed to restore your inner balance. Rejuvenate your mind, body, and soul in tranquil sanctuaries.",
    bookingUrl: "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20wellness%20itinerary",
    visualHookKey: "wellness"
  },
  {
    id: "social-surf-summit",
    title: "Social, Surf & Summit",
    description: "A high-octane blend of surf, volcanos, and social connection. Conquer the active Fuego volcano, catch waves in El Paredon, and dive headfirst into Guatemala's electrifying nightlife from inside the best party hostels.",
    bookingUrl: "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20surf%20and%20social%20itinerary",
    visualHookKey: "adrenaline"
  },
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    description: "Dive deep into local traditions, learn to cook authentic cuisine, and discover hidden gems. A highly curated experience connecting you with the heart of Guatemala and its vibrant heritage.",
    bookingUrl: "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20cultural%20immersion%20itinerary",
    visualHookKey: "culture"
  }
];
