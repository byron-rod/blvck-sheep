export interface Itinerary {
  id: string;
  title: string;
  description: string;
  bookingUrl: string;
  visualHookKey: "wellness" | "adrenaline" | "culture" | string;
  language: "en" | "es";
}

export const itinerariesData: Itinerary[] = [
  {
    id: "wellness-retreat",
    title: "Wellness Retreat",
    description: "Disconnect to reconnect. A curated journey of yoga, meditation, and healthy food designed to restore your inner balance. Rejuvenate your mind, body, and soul in tranquil sanctuaries.",
    bookingUrl: "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20wellness%20itinerary",
    visualHookKey: "wellness",
    language: "en"
  },
  {
    id: "wellness-retreat-es",
    title: "Retiro de Bienestar",
    description: "Desconecta para reconectar. Un viaje curado de yoga, meditación y comida saludable diseñado para restaurar tu equilibrio interior. Rejuvenece tu mente, cuerpo y alma en santuarios tranquilos.",
    bookingUrl: "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20reservar%20un%20itinerario%20de%20bienestar",
    visualHookKey: "wellness",
    language: "es"
  },
  {
    id: "social-surf-summit",
    title: "Social, Surf & Summit",
    description: "A high-octane blend of surf, volcanos, and social connection. Conquer the active Fuego volcano, catch waves in El Paredon, and dive headfirst into Guatemala's electrifying nightlife from inside the best party hostels.",
    bookingUrl: "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20surf%20and%20social%20itinerary",
    visualHookKey: "adrenaline",
    language: "en"
  },
  {
    id: "social-surf-summit-es",
    title: "Social, Surf y Cumbre",
    description: "Una mezcla de alto octanaje de surf, volcanes y conexión social. Conquista el volcán activo Fuego, atrapa olas en El Paredón y sumérgete de lleno en la electrizante vida nocturna de Guatemala desde los mejores hostales de fiesta.",
    bookingUrl: "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20reservar%20un%20itinerario%20de%20surf%20y%20social",
    visualHookKey: "adrenaline",
    language: "es"
  },
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    description: "Dive deep into local traditions, learn to cook authentic cuisine, and discover hidden gems. A highly curated experience connecting you with the heart of Guatemala and its vibrant heritage.",
    bookingUrl: "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20cultural%20immersion%20itinerary",
    visualHookKey: "culture",
    language: "en"
  },
  {
    id: "cultural-immersion-es",
    title: "Inmersión Cultural",
    description: "Sumérgete en las tradiciones locales, aprende a cocinar la auténtica gastronomía y descubre joyas escondidas. Una experiencia altamente curada que te conecta con el corazón de Guatemala y su vibrante herencia.",
    bookingUrl: "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20reservar%20un%20itinerario%20de%20inmersión%20cultural",
    visualHookKey: "culture",
    language: "es"
  }
];
