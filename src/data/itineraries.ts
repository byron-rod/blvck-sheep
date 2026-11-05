import fuegoVolcan from "@/assets/images/fuego-volcano.png";
import wellnessAtitlan from "@/assets/images/wellness-atitlan.png";
import quetzal from "@/assets/images/quetzal-hero.png";
import tikalVertical from "@/assets/images/tikal.png";
import semuc from "@/assets/images/semuc.png";
import mayan from "@/assets/images/mayan-heartbeat.png";
import social from "@/assets/images/social-hero.png";
import arco from "@/assets/images/arco-antigua.png";
import lakeRetreat from "@/assets/images/lake-retreat.png";
import coastalHideaway from "@/assets/images/coastal-hideaway.png";
import elParedon from "@/assets/images/el-paredon.webp";

export interface FeaturedStay {
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  bookingUrl: string;
  visualHookKey: "wellness" | "adrenaline" | "culture" | string;
  language: "en" | "es";
  heroImage: string;
  duration: string;
  highlights: string[];
  featuredStays: FeaturedStay[];
}

export const itinerariesData: Itinerary[] = [
  // --- WELLNESS RETREAT (EN) ---
  {
    id: "wellness-retreat",
    title: "Wellness Retreat",
    description:
      "Disconnect to reconnect. A curated journey of yoga, meditation, and healthy food designed to restore your inner balance. Rejuvenate your mind, body, and soul in tranquil sanctuaries.",
    bookingUrl:
      "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20wellness%20itinerary",
    visualHookKey: "wellness",
    language: "en",
    heroImage: wellnessAtitlan.src,
    duration: "7 Days / 6 Nights",
    highlights: [
      "Ancestral Cacao Rites",
      "Private Atitlán Sanctuary",
      "Coastal Restoration",
    ],
    featuredStays: [
      {
        name: "Antigua Culinary Enclave",
        location: "Antigua, Guatemala",
        description:
          "Begin your restoration with a sophisticated deep-dive into Guatemalan gastronomy. This isn't a standard food tour; it's a curated culinary journey through private colonial kitchens and hidden courtyards, focusing on organic, farm-to-table ingredients that bridge the gap between ancient tradition and modern refinement.",
        image: arco.src,
      },
      {
        name: "The Lakeside Sanctuary",
        location: "Lake Atitlán",
        description:
          "The centerpiece of your journey. We secure your stay in one of Atitlán's premier eco-luxury havens, completely removed from the noise of the outside world. Your days are anchored in deep meditation, bespoke yoga sessions, and traditional Mayan cacao ceremonies, all performed with the majestic stillness of the volcanic lake as your backdrop.",
        image: lakeRetreat.src,
      },
      {
        name: "The Coastal Hideaway",
        location: "El Paredón",
        description:
          "Conclude your retreat where the jungle meets the Pacific. We have selected a boutique beachfront sanctuary designed for ultimate decompression. Trade the social energy of the village for unscripted stillness, organic coastal cuisine, and the restorative power of the equatorial sun. This is wellness in its purest, most relaxed form.",
        image: coastalHideaway.src,
      },
    ],
  },

  // --- WELLNESS RETREAT (ES) ---
  {
    id: "wellness-retreat",
    title: "Retiro de Bienestar",
    description:
      "Desconecta para reconectar. Un viaje curado de yoga, meditación y comida saludable diseñado para restaurar tu equilibrio interior. Rejuvenece tu mente, cuerpo y alma en santuarios tranquilos.",
    bookingUrl:
      "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20reservar%20un%20itinerario%20de%20bienestar",
    visualHookKey: "wellness",
    language: "es",
    heroImage: wellnessAtitlan.src,
    duration: "7 Días / 6 Noches",
    highlights: [
      "Ceremonias Ancestrales de Cacao",
      "Santuario Privado en Atitlán",
      "Restauración en la Costa",
    ],
    featuredStays: [
      {
        name: "Enclave Culinario en Antigua",
        location: "Antigua, Guatemala",
        description:
          "Comienza tu restauración con una inmersión sofisticada en la gastronomía guatemalteca. No es un tour gastronómico convencional; es un recorrido culinario curado por cocinas coloniales privadas y patios escondidos, enfocado en ingredientes orgánicos de la granja a la mesa que unen la tradición ancestral con el refinamiento moderno.",
        image: arco.src,
      },
      {
        name: "El Santuario del Lago",
        location: "Lago de Atitlán",
        description:
          "El corazón de tu viaje. Aseguramos tu estadía en uno de los refugios eco-luxury más exclusivos de Atitlán, completamente apartado del ruido del mundo exterior. Tus días se anclan en meditación profunda, sesiones de yoga a medida y ceremonias tradicionales mayas de cacao, todo con la majestuosa calma del lago volcánico como telón de fondo.",
        image: lakeRetreat.src,
      },
      {
        name: "El Refugio Costero",
        location: "El Paredón",
        description:
          "Concluye tu retiro donde el manglar se encuentra con el Pacífico. Hemos seleccionado un santuario boutique frente al mar diseñado para la desconexión total. Cambia el ritmo urbano por la calma absoluta, cocina costera orgánica y el poder restaurador del sol ecuatorial. Bienestar en su forma más pura y relajada.",
        image: coastalHideaway.src,
      },
    ],
  },

  // --- SOCIAL, SURF & SUMMIT (EN) ---
  {
    id: "social-surf-summit",
    title: "Social, Surf & Summit",
    description:
      "A high-octane blend of surf, volcanos, and social connection. Conquer the active Fuego volcano, catch waves in El Paredon, and dive headfirst into Guatemala's electrifying nightlife from inside the best party hostels.",
    bookingUrl:
      "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20surf%20and%20social%20itinerary",
    visualHookKey: "adrenaline",
    language: "en",
    heroImage: social.src,
    duration: "5 Days / 4 Nights",
    highlights: [
      "Volcanic Crater Basecamp",
      "Pacific Swell Sessions",
      "Curated Colonial Nightlife",
    ],
    featuredStays: [
      {
        name: "Basecamp Antigua",
        location: "Antigua, Guatemala",
        description:
          "Drop your bags in the colonial heart of Guatemala. We've secured access to Antigua's premier boutique stay, where high-end design meets an electrifying social scene. Pre-game with crafted cocktails on a private rooftop while the Volcán de Agua fades into the night skyline.",
        image: arco.src,
      },
      {
        name: "Fuego Summit",
        location: "Acatenango Volcano",
        description:
          "Trade the boutique suite for a night above the clouds. This is a fully guided, high-octane ascent to our private Acatenango basecamp. Witness the raw, cinematic power of Volcán de Fuego erupting under the stars—completely off the grid, yet anchored in elevated comfort.",
        image: fuegoVolcan.src,
      },
      {
        name: "Driftwood Oasis",
        location: "El Paredón",
        description:
          "Chase the adrenaline with world-class Pacific swells. Step directly onto the volcanic black sand of El Paredon. By day, it's surf and coastal recovery; by night, we plug you into an exclusive open-air pool club featuring strictly curated DJ sets and an unmatched coastal energy. Or switch the beach for the mountains and head to Lake Atitlan.",
        image: elParedon.src,
      },
    ],
  },

  // --- SOCIAL, SURF & SUMMIT (ES) ---
  {
    id: "social-surf-summit",
    title: "Social, Surf y Cumbre",
    description:
      "Una mezcla de alto octanaje de surf, volcanes y conexión social. Conquista el volcán activo Fuego, atrapa olas en El Paredón y sumérgete de lleno en la electrizante vida nocturna de Guatemala desde los mejores hostales de fiesta.",
    bookingUrl:
      "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20reservar%20un%20itinerario%20de%20surf%20y%20social",
    visualHookKey: "adrenaline",
    language: "es",
    heroImage: social.src,
    duration: "5 Días / 4 Noches",
    highlights: [
      "Campamento Base frente al Volcán",
      "Sesiones de Surf en el Pacífico",
      "Vida Nocturna Colonial Curada",
    ],
    featuredStays: [
      {
        name: "Campamento Base Antigua",
        location: "Antigua, Guatemala",
        description:
          "Deja tus maletas en el corazón colonial de Guatemala. Te damos acceso a la mejor estancia social y boutique de Antigua, donde el diseño se encuentra con una escena vibrante. Empieza la noche con coctelería de autor en un rooftop privado mientras el Volcán de Agua se funde con el horizonte nocturno.",
        image: arco.src,
      },
      {
        name: "Cumbre de Fuego",
        location: "Volcán Acatenango",
        description:
          "Cambia la habitación por una noche sobre las nubes. Un ascenso guiado lleno de adrenalina hacia nuestro campamento base en Acatenango. Presencia el poder cinematográfico del Volcán de Fuego haciendo erupción bajo las estrellas, desconectado del mundo pero con toda la comodidad y logística cubierta.",
        image: fuegoVolcan.src,
      },
      {
        name: "Oasis en el Pacífico",
        location: "El Paredón",
        description:
          "Sigue la adrenalina con olas de clase mundial en el Pacífico. Pisa directamente la arena negra volcánica de El Paredón. De día, surf y recuperación frente al mar; de noche, fiestas junto a la piscina al aire libre con DJ sets curados y una energía costera inigualable. O cambia la playa por las montañas y dirígete al Lago de Atitlán.",
        image: elParedon.src,
      },
    ],
  },

  // --- CULTURAL IMMERSION (EN) ---
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    description:
      "Dive deep into local traditions, learn to cook authentic cuisine, and discover hidden gems. A highly curated experience connecting you with the heart of Guatemala and its vibrant heritage.",
    bookingUrl:
      "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20cultural%20immersion%20itinerary",
    visualHookKey: "culture",
    language: "en",
    heroImage: quetzal.src,
    duration: "14 Days / 13 Nights",
    highlights: [
      "Ancient Petén Jungle",
      "Highland Gastronomy",
      "Caribbean & Canyons",
    ],
    featuredStays: [
      {
        name: "The Northern Expedition",
        location: "Flores & Tikal",
        description:
          "Your expedition begins deep within the Petén biosphere. We bypass the standard tours to grant you intimate, early-access to the towering pyramids of Tikal as the jungle wakes. Retreat to a luxury eco-lodge suspended above Lake Petén Itzá to decompress after touching ancient history.",
        image: tikalVertical.src,
      },
      {
        name: "Canyons & The Coast",
        location: "Semuc Champey to Livingston",
        description:
          "Traverse the limestone terraces and pristine turquoise pools of Semuc Champey before navigating the dramatic Rio Dulce gorge. Emerge on the Caribbean coast in Livingston, where we immerse you in the vibrant rhythms and rich, coconut-infused seafood of the indigenous Garifuna culture.",
        image: semuc.src,
      },
      {
        name: "The Mayan Heartbeat",
        location: "Lake Atitlán & Chichicastenango",
        description:
          "Witness the living colors of the Chichicastenango market before descending to Lake Atitlán. Here, we trade the tourist trail for deep authenticity in San Juan La Laguna. Source fresh ingredients at the local market to cook alongside a Mayan matriarch, capped by a breathtaking panoramic summit of the Rostro Maya.",
        image: mayan.src,
      },
      {
        name: "The Grand Finale",
        location: "Antigua & Acatenango",
        description:
          "Return to colonial elegance. Dine at Antigua's most exclusive culinary tables, experiencing the absolute pinnacle of modern Guatemalan gastronomy. For the final act, a fully-guided, premium ascent of Acatenango to witness Fuego's eruptions under the stars—ensuring you sleep all the way home. Live the definitive Guatemala experience.",
        image: fuegoVolcan.src,
      },
    ],
  },

  // --- CULTURAL IMMERSION (ES) ---
  {
    id: "cultural-immersion",
    title: "Inmersión Cultural",
    description:
      "Sumérgete en las tradiciones locales, aprende a cocinar la auténtica gastronomía y descubre joyas escondidas. Una experiencia altamente curada que te conecta con el corazón de Guatemala y su vibrante herencia.",
    bookingUrl:
      "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20reservar%20un%20itinerario%20de%20inmersión%20cultural",
    visualHookKey: "culture",
    language: "es",
    heroImage: quetzal.src,
    duration: "14 Días / 13 Noches",
    highlights: [
      "Selva Ancestral de Petén",
      "Gastronomía del Altiplano",
      "Caribe y Cañones Turquesa",
    ],
    featuredStays: [
      {
        name: "La Expedición del Norte",
        location: "Flores y Tikal",
        description:
          "Tu expedición comienza en lo profundo de la biosfera de Petén. Evitamos los tours estándar para brindarte acceso temprano e íntimo a las imponentes pirámides de Tikal mientras la selva despierta. Retírate a un eco-lodge sobre el Lago Petén Itzá para descansar tras tocar la historia ancestral.",
        image: tikalVertical.src,
      },
      {
        name: "Cañones y el Caribe",
        location: "De Semuc Champey a Livingston",
        description:
          "Recorre las pozas turquesas de piedra caliza de Semuc Champey antes de navegar por el imponente cañón de Río Dulce. Llega a la costa caribeña en Livingston, donde te sumergimos en los vibrantes ritmos y la rica gastronomía con coco de la cultura garífuna.",
        image: semuc.src,
      },
      {
        name: "El Latido Maya",
        location: "Lago de Atitlán y Chichicastenango",
        description:
          "Sé testigo de los colores vivos del mercado de Chichicastenango antes de descender al Lago de Atitlán. Aquí cambiamos la ruta turística por autenticidad profunda en San Juan La Laguna: elige ingredientes frescos en el mercado local para cocinar junto a una matriarca maya y culmina con el amanecer panorámico desde el Rostro Maya.",
        image: mayan.src,
      },
      {
        name: "El Gran Final",
        location: "Antigua y Volcán Acatenango",
        description:
          "Regresa a la elegancia colonial. Cena en las mesas culinarias más exclusivas de Antigua, experimentando la cúspide de la gastronomía guatemalteca contemporánea. Para el acto final, un ascenso guiado a Acatenango para presenciar las erupciones del Volcán de Fuego bajo las estrellas: la experiencia definitiva de Guatemala.",
        image: fuegoVolcan.src,
      },
    ],
  },
];
