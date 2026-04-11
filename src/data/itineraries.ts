export interface Itinerary {
  id: string;
  title: string;
  description: string;
  bookingUrl: string;
}

export const itinerariesData: Itinerary[] = [
  {
    id: "wellness-retreat",
    title: "Wellness Retreat",
    description: "Disconnect to reconnect. A curated journey of yoga, meditation, and holistic healing designed to restore your inner balance. Rejuvenate your mind, body, and soul in tranquil sanctuaries.",
    bookingUrl: ""
  },
  {
    id: "surf-and-party",
    title: "Surf & Party",
    description: "Catch world-class waves by day and experience electrifying nightlife by the shore. The ultimate high-energy escape blending adrenaline, ocean breezes, and unforgettable celebrations.",
    bookingUrl: ""
  },
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    description: "Dive deep into local traditions, authentic cuisine, and hidden gems. A highly curated experience connecting you with the heart of the destination and its vibrant heritage.",
    bookingUrl: ""
  }
];
