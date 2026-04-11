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
    bookingUrl: "",
    visualHookKey: "wellness"
  },
  {
    id: "surf-and-party",
    title: "Social, Surf & Summit",
    description: "A high-octane blend of surf, volcanos, and social connection. Conquer the active Fuego volcano, catch waves in El Paredon, and dive headfirst into Guatemala's electrifying nightlife from inside the best party hostels.",
    bookingUrl: "",
    visualHookKey: "adrenaline"
  },
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    description: "Dive deep into local traditions, learn to cook authentic cuisine, and discover hidden gems. A highly curated experience connecting you with the heart of Guatemala and its vibrant heritage.",
    bookingUrl: "",
    visualHookKey: "culture"
  }
];
