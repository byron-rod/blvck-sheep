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
import freeCerveza from "@/assets/images/free-cerveza.webp";

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
      "Disconnect to reconnect. A popular route idea blending yoga, meditation, and organic gastronomy designed to restore your inner balance across Guatemala's most tranquil sanctuaries.",
    bookingUrl:
      "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20advice%20on%20the%20Wellness%20Retreat%20route",
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
          "Begin your restoration with a sophisticated deep-dive into Guatemalan gastronomy. Explore colonial kitchens and hidden courtyards focusing on organic, farm-to-table ingredients that bridge ancient tradition and modern refinement.",
        image: arco.src,
      },
      {
        name: "The Lakeside Sanctuary",
        location: "Lake Atitlán",
        description:
          "The centerpiece of your journey. Spend your days in Atitlán's eco-luxury havens, completely removed from the noise of the outside world—anchored in deep meditation, yoga sessions, and traditional Mayan cacao ceremonies with the volcanic lake as your backdrop.",
        image: lakeRetreat.src,
      },
      {
        name: "The Coastal Hideaway",
        location: "El Paredón",
        description:
          "Conclude your retreat where the mangroves meet the Pacific. A beachfront sanctuary designed for ultimate decompression: trade the city rush for unscripted stillness, organic coastal cuisine, and the restorative power of the Pacific sun.",
        image: coastalHideaway.src,
      },
    ],
  },

  // --- WELLNESS RETREAT (ES) ---
  {
    id: "wellness-retreat",
    title: "Retiro de Bienestar",
    description:
      "Desconecta para reconectar. Una idea de ruta popular de yoga, meditación y gastronomía saludable pensada para restaurar tu equilibrio interior en los santuarios más tranquilos de Guatemala.",
    bookingUrl:
      "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20asesoría%20sobre%20la%20ruta%20de%20Retiro%20de%20Bienestar",
    visualHookKey: "wellness",
    language: "es",
    heroImage: wellnessAtitlan.src,
    duration: "7 Días / 6 Noches",
    highlights: [
      "Ceremonias Ancestrales de Cacao",
      "Santuario en Atitlán",
      "Restauración en la Costa",
    ],
    featuredStays: [
      {
        name: "Enclave Culinario en Antigua",
        location: "Antigua, Guatemala",
        description:
          "Comienza tu restauración con una inmersión en la gastronomía guatemalteca. Recorre cocinas coloniales y patios escondidos enfocados en ingredientes orgánicos de la granja a la mesa que unen la tradición ancestral con el refinamiento moderno.",
        image: arco.src,
      },
      {
        name: "El Santuario del Lago",
        location: "Lago de Atitlán",
        description:
          "El corazón de tu viaje. Pasa tus días en los refugios eco-luxury de Atitlán, apartado del ruido del mundo exterior: meditación profunda, sesiones de yoga y ceremonias tradicionales mayas de cacao con la majestuosa calma del lago volcánico como telón de fondo.",
        image: lakeRetreat.src,
      },
      {
        name: "El Refugio Costero",
        location: "El Paredón",
        description:
          "Concluye tu retiro donde el manglar se encuentra con el Pacífico. Un santuario frente al mar pensado para la desconexión total: cambia el ritmo urbano por la calma absoluta, cocina costera orgánica y el poder restaurador del sol del Pacífico.",
        image: coastalHideaway.src,
      },
    ],
  },

  // --- SOCIAL, SURF & SUMMIT (EN) ---
  {
    id: "social-surf-summit",
    title: "Social, Explore & Summit",
    description:
      "A 10-day high-energy route of volcanos, turquoise jungle pools, and social connection. Conquer the active Fuego volcano, experience Lake Atitlán's legendary Free Cerveza, and head into the jungle of Lanquín at Zephyr Lodge—connecting Guatemala's best social hostels.",
    bookingUrl:
      "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20advice%20and%20transport%20for%20the%2010-day%20Social%20Hostels%20route",
    visualHookKey: "adrenaline",
    language: "en",
    heroImage: social.src,
    duration: "10 Days / 9 Nights",
    highlights: [
      "Acatenango & Fuego Summit",
      "Free Cerveza at Lake Atitlán",
      "Zephyr Lodge & Semuc Champey",
    ],
    featuredStays: [
      {
        name: "Basecamp Antigua",
        location: "Antigua, Guatemala",
        description:
          "Drop your bags in the colonial heart of Guatemala. Kick off your 10-day adventure in Antigua's vibrant social hostel and rooftop scene, where colonial architecture meets crafted cocktails and an electrifying international crowd as Volcán de Agua fades into the night skyline.",
        image: arco.src,
      },
      {
        name: "Fuego Summit",
        location: "Acatenango Volcano",
        description:
          "Trade the colonial streets for a night above the clouds. Ascend to the Acatenango basecamp with your crew and witness the raw, cinematic power of Volcán de Fuego erupting under the stars—an unforgettable bucket-list milestone in Guatemala.",
        image: fuegoVolcan.src,
      },
      {
        name: "Lakefront Social Hub: Free Cerveza",
        location: "Lake Atitlán (Santa Cruz La Laguna)",
        description:
          "Next stop: the mystical caldera of Lake Atitlán. Accessible only by boat on the shores of Santa Cruz, Free Cerveza is the ultimate social hostel experience on the lake—famous for its lakefront glamping tents, morning swims, family-style dinners, and unmatched social energy facing the volcanoes.",
        image: freeCerveza.src,
      },
      {
        name: "Jungle Infinity: Zephyr Lodge",
        location: "Lanquín & Semuc Champey",
        description:
          "Take the adventure deep into the lush mountains of Alta Verapaz. Stay at Zephyr Lodge, widely recognized as the best hostel in Lanquín, featuring a world-famous infinity pool overlooking the jungle canopy and a legendary backpacker bar—the ultimate basecamp for exploring the turquoise pools of Semuc Champey.",
        image: quetzal.src,
      },
    ],
  },

  // --- SOCIAL, SURF & SUMMIT (ES) ---
  {
    id: "social-surf-summit",
    title: "Social, Explora y Cumbre",
    description:
      "Una ruta de 10 días de alto octanaje combinando volcanes, pozas turquesas en la selva y conexión social. Conquista el volcán activo Fuego, vive la energía del Lago de Atitlán en Free Cerveza y adéntrate en la selva de Lanquín en Zephyr Lodge, conectando los mejores hostales sociales de Guatemala.",
    bookingUrl:
      "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20asesoría%20y%20transporte%20para%20la%20ruta%20de%2010%20días%20Social,%20Surf%20y%20Cumbre",
    visualHookKey: "adrenaline",
    language: "es",
    heroImage: social.src,
    duration: "10 Días / 9 Noches",
    highlights: [
      "Cumbre Acatenango y Fuego",
      "Free Cerveza en Lago de Atitlán",
      "Zephyr Lodge en Lanquín",
    ],
    featuredStays: [
      {
        name: "Campamento Base Antigua",
        location: "Antigua, Guatemala",
        description:
          "Deja tus maletas en el corazón colonial de Guatemala. Comienza tu ruta de 10 días en la vibrante escena de hostales sociales y rooftops de Antigua, donde el diseño colonial se une con coctelería de autor y viajeros de todo el mundo mientras el Volcán de Agua se funde en el horizonte.",
        image: arco.src,
      },
      {
        name: "Cumbre de Fuego",
        location: "Volcán Acatenango",
        description:
          "Cambia las calles empedradas por una noche sobre las nubes. Un ascenso lleno de adrenalina hacia el campamento base en Acatenango para presenciar el poder cinematográfico del Volcán de Fuego haciendo erupción bajo las estrellas.",
        image: fuegoVolcan.src,
      },
      {
        name: "Energía Frente al Lago: Free Cerveza",
        location: "Lago de Atitlán (Santa Cruz La Laguna)",
        description:
          "Primera parada después del volcán: el Lago de Atitlán. Ubicado a orillas de Santa Cruz y accesible únicamente en lancha, Free Cerveza es el punto de encuentro social definitivo del lago: famoso por su glamping frente al agua, actividades en el muelle y una atmósfera social inigualable frente a los volcanes.",
        image: freeCerveza.src,
      },
      {
        name: "Paraíso en la Selva: Zephyr Lodge",
        location: "Lanquín y Semuc Champey",
        description:
          "Continúa la ruta hacia las montañas selváticas de Alta Verapaz. Hospédate en Zephyr Lodge, el mejor hostal en Lanquín, famoso en todo el mundo por su espectacular piscina infinita con vistas a la jungla y su vibrante ambiente de fiesta: el campamento base perfecto para explorar las pozas turquesas de Semuc Champey.",
        image: quetzal.src,
      },
    ],
  },

  // --- CULTURAL IMMERSION (EN) ---
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    description:
      "Dive deep into local traditions, authentic Mayan gastronomy, and ancient wonders. A popular 14-day route idea connecting you with the heart of Guatemala and its vibrant heritage.",
    bookingUrl:
      "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20advice%20on%20the%20Cultural%20Immersion%20route",
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
          "Your expedition begins deep within the Petén biosphere. Experience early-morning access to the towering pyramids of Tikal as the jungle wakes, and unwind at an eco-lodge on the shores of Lake Petén Itzá after touching ancient history.",
        image: tikalVertical.src,
      },
      {
        name: "Canyons & The Coast",
        location: "Semuc Champey to Livingston",
        description:
          "Traverse the limestone terraces and pristine turquoise pools of Semuc Champey before navigating the dramatic Rio Dulce gorge. Emerge on the Caribbean coast in Livingston to experience the vibrant rhythms and coconut-infused seafood of the Garifuna culture.",
        image: semuc.src,
      },
      {
        name: "The Mayan Heartbeat",
        location: "Lake Atitlán & Chichicastenango",
        description:
          "Witness the living colors of the Chichicastenango market before descending to Lake Atitlán. In San Juan La Laguna, source fresh ingredients at the local market to cook alongside a Mayan family, capped by a breathtaking sunrise summit of the Rostro Maya.",
        image: mayan.src,
      },
      {
        name: "The Grand Finale",
        location: "Antigua & Acatenango",
        description:
          "Return to colonial elegance. Dine at Antigua's finest culinary tables, experiencing modern Guatemalan gastronomy, and cap the journey with an ascent of Acatenango to witness Fuego's eruptions under the stars.",
        image: fuegoVolcan.src,
      },
    ],
  },

  // --- CULTURAL IMMERSION (ES) ---
  {
    id: "cultural-immersion",
    title: "Inmersión Cultural",
    description:
      "Sumérgete en las tradiciones locales, la auténtica gastronomía maya y maravillas ancestrales. Una idea de ruta de 14 días que te conecta con el corazón de Guatemala y su vibrante herencia.",
    bookingUrl:
      "https://wa.me/50255116881?text=¡Hola!,%20Me%20gustaría%20asesoría%20sobre%20la%20ruta%20de%20Inmersión%20Cultural",
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
          "Tu expedición comienza en lo profundo de la biosfera de Petén. Visita al amanecer las imponentes pirámides de Tikal mientras la selva despierta y descansa a orillas del Lago Petén Itzá tras conectar con la historia maya.",
        image: tikalVertical.src,
      },
      {
        name: "Cañones y el Caribe",
        location: "De Semuc Champey a Livingston",
        description:
          "Recorre las pozas turquesas de piedra caliza de Semuc Champey antes de navegar por el imponente cañón de Río Dulce. Llega a la costa caribeña en Livingston para sumergirte en los vibrantes ritmos y la gastronomía con coco de la cultura garífuna.",
        image: semuc.src,
      },
      {
        name: "El Latido Maya",
        location: "Lago de Atitlán y Chichicastenango",
        description:
          "Sé testigo de los colores vivos del mercado de Chichicastenango antes de descender al Lago de Atitlán. En San Juan La Laguna, descubre cooperativas textiles, cocina tradicional y el amanecer panorámico desde el Rostro Maya.",
        image: mayan.src,
      },
      {
        name: "El Gran Final",
        location: "Antigua y Volcán Acatenango",
        description:
          "Regresa a la elegancia colonial. Disfruta las mejores mesas culinarias de Antigua y cierra con broche de oro con el ascenso a Acatenango para presenciar las erupciones del Volcán de Fuego bajo las estrellas.",
        image: fuegoVolcan.src,
      },
    ],
  },
];
