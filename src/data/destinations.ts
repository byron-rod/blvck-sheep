// src/data/destinations.ts

export type DestinationDetail = {
  id: string;
  language: "en" | "es";
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  sections: {
    heading: string;
    content: string;
    actionText?: string;
    actionLink?: string;
  }[];
  accommodationPortals: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
};

import quetzal from "@/assets/images/quetzal-hero.png";
import wellnessAtitlan from "@/assets/images/wellness-atitlan.png";
import social from "@/assets/images/social-hero.png";
import hotelMain from "@/assets/images/hotel-main.png";
import hostelMain from "@/assets/images/hostels-main.png";

export const destinationsData: DestinationDetail[] = [
  // --- LAKE ATITLAN ---
  {
    id: "lake-atitlan",
    language: "en",
    title: "Lake Atitlán",
    subtitle: "The Mystical Volcanic Caldera",
    heroImage: wellnessAtitlan.src,
    overview: "Encircled by three towering volcanoes and dotted with vibrant, diverse Mayan villages, Lake Atitlán is a place where time slows down. Whether you are seeking deep spiritual restoration in San Marcos or vibrant social energy in San Pedro or Panajachel, the lake demands to be experienced, not just visited.",
    sections: [
      {
        heading: "Navigating the Lake",
        content: "The primary way to hop between villages is via public 'lanchas' (small water taxis) that cross the water daily, usually depart every 30 minutes from the docks of each village. It is crucial to know that these boats operate on an unofficial schedule, generally running from 6:30 AM until about 5:00 PM or 7:30 PM at the absolute latest (Panajachel Dock called Muelle Tzanjuyu, is the one that runs until the latest). If you miss the last boat, you will need to hire a private lancha at a higher rate, we have private lanchas available if you require them please let us know and we can arrange them for you. We provide shared and private shuttles from anywhere in the country to arrive and leave Lake Atitlán without any hassle.",
        actionText: "Read Our Guide For the Villages in Lake Atitlan",
        actionLink: "/journal/lake-atitlan-villages-guide",
      },
      {
        heading: "Essential Experiences",
        content: "In San Juan La Laguna you can hike the Indian Nose (Rostro Maya) before dawn to witness one of the most spectacular sunrises on earth. For cultural immersion, visit the authentic textile weaving and organic coffee, and honey production. In San Marcos La Laguna you can go cliff diving and jump off the cliffs at the lake. One of our favorite activities is cooking with an authentic Mayan in San Pedro. End your days enjoying a traditional wood-fired sauna (Temazcal) to soothe your muscles after hiking the caldera. Reserva Atitlan in Panajachel is great day trip for ziplining, visiting the butterfly sanctuary, and hiking through the nature reserve.",
      },
      {
        heading: "Day Trips Near the Lake",
        content: "Discover the stunning natural beauty surrounding Sololá with our exclusive day trips. Explore the vibrant culture of indigenous villages, we have day trips to Chichicastenango Market (Thursday and Sunday), you can also visit Fuentes Georginas hot springs, located in Zunil.",
        actionText: "Book Your Day Trip",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20day%20trip%20to%20Lake%20Atitlan!",
      }
    ],
    accommodationPortals: [
      {
        title: "Curated Hostels",
        description: "Discover our hand-picked selection of high-energy social spaces, community hubs, and premium backpacker lodges.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Boutique Hotels",
        description: "Explore our exclusive collection of colonial sanctuaries, luxury retreats, and high-end design properties.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },
  {
    id: "lake-atitlan",
    language: "es",
    title: "Lago de Atitlán",
    subtitle: "La Mística Caldera Volcánica",
    heroImage: wellnessAtitlan.src,
    overview: "Rodeado por tres imponentes volcanes, salpicado de vibrantes y diversos pueblos mayas, el Lago de Atitlán es un refugio donde el tiempo se detiene. Ya sea que busques una profunda restauración espiritual en San Marcos o la vibrante energía social de San Pedro La Laguna o Panajachel, el lago exige ser experimentado, no solo visitado.",
    sections: [
      {
        heading: "Navegando el Lago",
        content: "La forma principal de trasladarse entre los pueblos es a través de lanchas públicas que cruzan el agua a diario, partiendo generalmente cada 30 minutos desde los muelles de cada pueblo. Es crucial saber que estas embarcaciones operan bajo un horario oficial, operando generalmente desde las 6:30 AM hasta las 5:00 PM o 7:30 PM como máximo (El muelle de Panajachel, llamado Muelle Tzanjuyú, es el que opera hasta más tarde). Si pierdes la última embarcación, tendrás que contratar una lancha privada con una tarifa mas elevada; disponemos de lanchas privadas si lo requieres, háznoslo saber y las organizaremos para ti. Proveemos traslados compartidos y privados desde cualquier lugar del país para llegar y salir del Lago de Atitlán sin ningún inconveniente.",
        actionText: "Lee Nuestra Guía Sobre el Lago de Atitlán",
        actionLink: "/journal/guia-pueblos-lago-atitlan",
      },
      {
        heading: "Experiencias Esenciales",
        content: "En San Juan La Laguna puedes hacer senderismo en el Rostro Maya antes del amanecer para presenciar uno de los amaneceres más espectaculares de la tierra. Para una inmersión cultural, visita el auténtico tejido textil y la producción orgánica de café y miel. En San Marcos La Laguna puedes saltar de acantilados hacia el lago. Una de nuestras actividades favoritas es cocinar con un auténtico maya en San Pedro, preguntanos por esta actvidad y la organizamos por ti. Termina tus días disfrutando de un sauna tradicional a leña (Temazcal) para relajar tus músculos tras explorar la caldera. La Reserva de Atitlán en Panajachel es una excelente excursión de un día para hacer canopy, visitar el santuario de mariposas y caminar por la reserva natural.",
      },
      {
        heading: "Excursiones de un Día Cerca del Lago",
        content: "Descubre la asombrosa belleza natural que rodea Sololá con nuestras exclusivas excursiones de un día. Explora la vibrante cultura de los pueblos indígenas; ofrecemos viajes al Mercado de Chichicastenango (jueves y domingos), también puedes visitar las aguas termales de Fuentes Georginas, ubicadas en el misterioso pueblo entre la niebla, Zunil.",
        actionText: "Reserva tu Excursión de un Día",
        actionLink: "https://wa.me/50255116881?text=¡Hola!,%20Me%20interesa%20reservar%20una%20excursión%20de%20un%20día%20al%20Lago%20de%20Atitlán!",
      }
    ],
    accommodationPortals: [
      {
        title: "Hostales Curados",
        description: "Descubre nuestra selección artesanal de espacios sociales de alta energía, centros comunitarios y refugios premium para viajeros.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Hoteles Boutique",
        description: "Explora nuestra colección exclusiva de santuarios coloniales, retiros de lujo y propiedades de diseño de alta gama.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },

  // --- ANTIGUA GUATEMALA ---
  {
    id: "antigua-guatemala",
    language: "en",
    title: "Antigua",
    subtitle: "The Colonial Crown Jewel",
    heroImage: social.src, 
    overview: "Wandering through Antigua is like stepping into a living museum framed by the volcanos. With its cobblestone streets, ruined 16th-century convents, and an explosion of modern gastronomy and specialty coffee, it is the undisputed cultural heart of the country. It effortlessly blends the ancient with the highly sophisticated.",
    sections: [
      {
        heading: "Arriving in the Colonial City",
        content: "Antigua is highly walkable, though tuk-tuks or Ubers are readily available for tired legs. As the main hub for travelers entering Guatemala, getting here from the airport or moving onward to the coast or lake is a breeze. Blvck Sheep offers direct routes in our comfortable fleet, you can get shared shuttles or private cars. Antigua is the starting point for exploring the rest of Guatemala.",
        actionText: "Book Your Ride to Antigua",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20Antigua!",
      },
      {
        heading: "The Culinary & Coffee Scene",
        content: "Antigua has quietly evolved into a world-class gastronomic hub. Behind unassuming colonial facades, you will find hidden speakeasies, farm-to-table tasting menus, and incredible rooftop bars with active volcano views. Spend your mornings cafe-hopping to taste some of the world's best shade-grown coffee, and reserve your evenings for high-end dining. To help you navigate, check out our exclusive travel blog for our top recommendations.",
        actionText: "Explore Our Restaurant Guides",
        actionLink: "/journal/where-to-eat-antigua-guatemala-part-1"
      },
      {
        heading: "Essential Experiences",
        content: "For the adventurous, the overnight hike to the erupting Acatenango Volcano is a non-negotiable rite of passage, we offer great options for reliable and well known tour operators. If you prefer to stay in the city, explore the intricate ruins of Santa Clara, or shop for high-quality jade and textiles at the local artisan markets.",
      }
    ],
    accommodationPortals: [
      {
        title: "Curated Hostels",
        description: "Discover our hand-picked selection of high-energy social spaces, community hubs, and premium backpacker lodges.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Boutique Hotels",
        description: "Explore our exclusive collection of colonial sanctuaries, luxury retreats, and high-end design properties.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },
  {
    id: "antigua-guatemala",
    language: "es",
    title: "Antigua",
    subtitle: "La Joya de la Corona Colonial",
    heroImage: social.src, 
    overview: "Deambular por Antigua es como adentrarse en un museo viviente enmarcado por volcanes. Con sus calles empedradas, conventos en ruinas del siglo XVI, una explosión de gastronomía moderna y café de especialidad, es el indiscutible corazón cultural del país. Combina sin esfuerzo lo antiguo con lo sumamente sofisticado.",
    sections: [
      {
        heading: "Llegando a la Ciudad Colonial",
        content: "Antigua es una ciudad transitable a pie, si tienes las piernas cansadas, hay disponibles tuk-tuks y Ubers. Como el principal centro de conexión para los viajeros que ingresan a Guatemala, llegar desde el aeropuerto o dirigirse a la costa o al lago es sumamente sencillo. Blvck Sheep ofrece rutas directas en nuestra cómoda flota, ya sea en shuttles compartidos o en vehículo privado. Antigua es el punto de partida para explorar el resto de Guatemala.",
        actionText: "Reserva tu Viaje a Antigua",
        actionLink: "https://wa.me/50255116881?text=¡Hola!,%20Me%20interesa%20reservar%20un%20viaje%20a%20Antigua!",
      },
      {
        heading: "La Escena Culinaria y del Café",
        content: "Antigua ha evolucionado silenciosamente hasta convertirse en un centro gastronómico de clase mundial. Detrás de sus discretas fachadas coloniales, encontrarás bares ocultos (speakeasies), menús de degustación de la granja a la mesa y espectaculares terrazas con vistas a volcanes activos. Pasa tus mañanas recorriendo cafeterías para degustar uno de los mejores cafés de sombra del mundo, y reserva tus noches para cenar en lugares de alta gama. Para ayudarte a navegar, consulta nuestro exclusivo blog de viajes con nuestras principales recomendaciones.",
        actionText: "Explora Nuestras Guías de Restaurantes",
        actionLink: "/journal/donde-comer-antigua-guatemala-parte-1"
      },
      {
        heading: "Experiencias Esenciales",
        content: "Para los más aventureros, la escalada del volcán Acatenango es un rito de iniciación no negociable; ofrecemos excelentes opciones de operadores turísticos confiables y reconocidos, por si aun no sabes con quienes subir el volcan. Si prefieres quedarte en la ciudad, explora las intrincadas ruinas de Santa Clara o compra jade y textiles de alta calidad en los mercados artesanales locales.",
      }
    ],
    accommodationPortals: [
      {
        title: "Hostales Curados",
        description: "Descubre nuestra selección artesanal de espacios sociales de alta energía, centros comunitarios y refugios premium para viajeros.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Hoteles Boutique",
        description: "Explora nuestra colección exclusiva de santuarios coloniales, retiros de lujo y propiedades de diseño de alta gama.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },

  // --- EL PAREDON ---
  {
    id: "el-paredon",
    language: "en",
    title: "El Paredón",
    subtitle: "The Pacific Surf Sanctuary",
    heroImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2500&auto=format&fit=crop", 
    overview: "Trade the altitude of the highlands for the relentless rhythm of the Pacific. El Paredón is Guatemala's premier surf village—a laid-back stretch of volcanic black sand where days are measured in swells and nights end under thatched-roof beach clubs. It is the ultimate space for coastal decompression.",
    sections: [
      {
        heading: "The Surf Culture",
        content: "El Paredón is famous for its consistent year-round beach breaks, making it a magnet for surfers of all skill levels. Mornings here are dictated by the tide. You will find numerous local surf schools offering board rentals and lessons for beginners, while experienced riders can paddle out at dawn to catch the best hollow waves before the midday wind picks up. Even if you don't surf, the culture is infectious—spend your days lounging in hammocks and watching the local pros.",
      },
      {
        heading: "Reaching the Coast",
        content: "Located just a couple of hours from Antigua, the descent to the coast brings a sudden shift in climate and energy. Skip the crowded, un-air-conditioned public transport and let Blvck Sheep deliver you straight to the sand with our premium, climate-controlled direct shuttle service.",
        actionText: "Book Your Ride to El Paredón",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20El%20Paredon!",
      },
      {
        heading: "Essential Experiences",
        content: "Aside from surfing, navigate the dense, vibrant mangrove forests on a paddleboard to spot local wildlife. As evening approaches, join the daily migration to the beach to witness the legendary Pacific sunsets before diving into the local barefoot nightlife. El Paredon boasts some of the best night life in Guatemala, so come ready to party.",
      }
    ],
    accommodationPortals: [
      {
        title: "Curated Hostels",
        description: "Discover our hand-picked selection of high-energy social spaces, community hubs, and premium backpacker lodges.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Boutique Hotels",
        description: "Explore our exclusive collection of colonial sanctuaries, luxury retreats, and high-end design properties.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },
  {
    id: "el-paredon",
    language: "es",
    title: "El Paredón",
    subtitle: "El Santuario del Surf del Pacífico",
    heroImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2500&auto=format&fit=crop", 
    overview: "Cambia la altitud de las tierras altas por el ritmo incesante del Pacífico. El Paredón es el principal destino de surf en Guatemala: una relajada franja de arena volcánica negra donde los días se miden en marejadas y las noches terminan bajo los techos de palma de los clubes de playa. Es el espacio definitivo para la descompresión costera.",
    sections: [
      {
        heading: "La Cultura del Surf",
        content: "El Paredón es famoso por sus consistentes olas durante todo el año, convirtiéndolo en un imán para surfistas de todos los niveles. Las mañanas aquí son dictadas por la marea. Encontrarás numerosas escuelas de surf locales que ofrecen alquiler de tablas y clases para principiantes, mientras que los más experimentados pueden remar al amanecer para atrapar las mejores olas antes de que el viento del mediodía comience a soplar. Incluso si no surfeas, la cultura es contagiosa: pasa tus días descansando en hamacas y observando a los profesionales locales.",
      },
      {
        heading: "Llegando a la Costa",
        content: "Ubicado a un par de horas de Antigua, el descenso hacia la costa trae consigo un cambio abrupto en clima y energía. Evita el transporte público atestado y sin aire acondicionado, y permite que Blvck Sheep te lleve directamente a la arena con nuestro servicio de transporte directo, ya sea en shuttle compartido o viajes privados.",
        actionText: "Reserva tu Viaje a El Paredón",
        actionLink: "https://wa.me/50255116881?text=¡Hola!,%20Me%20interesa%20reservar%20un%20viaje%20a%20El%20Paredón!",
      },
      {
        heading: "Experiencias Esenciales",
        content: "Además de surfear, navega en paddleboard por los densos y vibrantes bosques de manglares para observar la vida silvestre local. A medida que se acerca la noche, únete a la migración diaria hacia la playa para presenciar los legendarios atardeceres del Pacífico antes de sumergirte en la vida nocturna local. El Paredón presume de algunas de las mejores fiestas de Guatemala, así que ven listo para disfrutar.",
      }
    ],
    accommodationPortals: [
      {
        title: "Hostales Curados",
        description: "Descubre nuestra selección artesanal de espacios sociales de alta energía, centros comunitarios y refugios premium para viajeros.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Hoteles Boutique",
        description: "Explora nuestra colección exclusiva de santuarios coloniales, retiros de lujo y propiedades de diseño de alta gama.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },

  // --- SEMUC CHAMPEY ---
  {
    id: "semuc-champey",
    language: "en",
    title: "Semuc Champey",
    subtitle: "The Turquoise Jungle Gem",
    heroImage: quetzal.src, 
    overview: "Hidden deep within the lush, mountainous jungle of Alta Verapaz, Semuc Champey is a natural wonder. A series of cascading, crystal-clear turquoise limestone pools suspended over the rushing Cahabón River. It is remote, wild, and breathtakingly beautiful—a true reward for those willing to make the trek.",
    sections: [
      {
        heading: "Park Information & Logistics",
        content: "Accessing Semuc Champey requires a 30-minute ride in the back of a pickup truck from the town of Lanquin, we also offer tours to Semuc and the Caves. The national park is generally open daily from 8:00 AM to 4:00 PM. We highly recommend arriving early to beat the midday crowds and to experience the pools at their most tranquil. There is an entrance fee of 50 GTQ (approximately $6.50 USD) for foreign visitors, which must be paid in cash. Be sure to pack water shoes, eco-friendly sunscreen, and plenty of drinking water.",
      },
      {
        heading: "The Jungle Journey",
        content: "Getting to Lanquin (the gateway to Semuc Champey) from places like Antigua or the Lake is an adventure in itself, involving long, winding mountain roads. This is where comfort matters most. Blvck Sheep provides the most reliable transport to ensure you arrive refreshed and ready to explore the jungle, rather than exhausted from the road.",
        actionText: "Book Your Ride to Lanquin",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20Lanquin!",
      },
      {
        heading: "Essential Experiences",
        content: "Hike the steep, humid trail to the 'El Mirador' viewpoint for a panoramic, postcard-perfect shot of the pools, then descend to swim and slide down the natural tiered turquoise water. For pure adrenaline, wade through the flooded Kanba Caves by candlelight and tube down the Cahabón River.",
      }
    ],
    accommodationPortals: [
      {
        title: "Curated Hostels",
        description: "Discover our hand-picked selection of high-energy social spaces, community hubs, and premium backpacker lodges.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Boutique Hotels",
        description: "Explore our exclusive collection of colonial sanctuaries, luxury retreats, and high-end design properties.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  },
  {
    id: "semuc-champey",
    language: "es",
    title: "Semuc Champey",
    subtitle: "La Joya Turquesa de la Selva",
    heroImage: quetzal.src, 
    overview: "Oculto profundamente dentro de la exuberante y montañosa selva de Alta Verapaz, Semuc Champey es una maravilla natural. Una serie de cascadas y pozas cristalinas de color turquesa sobre roca caliza, suspendidas sobre el caudaloso Río Cahabón. Es remoto, salvaje y de una belleza asombrosa: una verdadera recompensa para aquellos dispuestos a realizar la travesía.",
    sections: [
      {
        heading: "Información del Parque y Logística",
        content: "Acceder a Semuc Champey requiere un viaje de 30 minutos en la parte trasera de un vehículo desde el pueblo de Lanquín; también ofrecemos recorridos a Semuc y las cuevas. El parque nacional generalmente está abierto todos los días de 8:00 AM a 4:00 PM. Recomendamos encarecidamente llegar temprano para evitar las multitudes del mediodía y experimentar las piscinas en su máximo esplendor. Existe una tarifa de entrada de 50 GTQ (aproximadamente $6.50 USD) para visitantes extranjeros, que debe pagarse en efectivo. Asegúrate de empacar zapatos para el agua, protector solar ecológico y abundante agua potable.",
      },
      {
        heading: "La Travesía en la Selva",
        content: "Llegar a Lanquín (la puerta de entrada a Semuc Champey) desde lugares como Antigua o el Lago es una aventura en sí misma, que implica largos y sinuosos caminos de montaña. Aquí es donde la comodidad más importa. Blvck Sheep proporciona el transporte más confiable para asegurar que llegues renovado y listo para explorar la selva, en lugar de exhausto por el viaje.",
        actionText: "Reserva tu Viaje a Lanquín",
        actionLink: "https://wa.me/50255116881?text=¡Hola!,%20Me%20interesa%20reservar%20un%20viaje%20a%20Lanquín!",
      },
      {
        heading: "Experiencias Esenciales",
        content: "Sube por el empinado y húmedo sendero hasta 'El Mirador' para obtener una vista panorámica perfecta de las pozas, luego desciende para nadar y deslizarte por las terrazas naturales de agua turquesa. Para pura adrenalina, atraviesa las inundadas Cuevas de iluminadas con velas o haz tubing por el caudaloso Río Cahabón.",
      }
    ],
    accommodationPortals: [
      {
        title: "Hostales Curados",
        description: "Descubre nuestra selección artesanal de espacios sociales de alta energía, centros comunitarios y refugios premium para viajeros.",
        image: hostelMain.src, 
        link: "/hostels"
      },
      {
        title: "Hoteles Boutique",
        description: "Explora nuestra colección exclusiva de santuarios coloniales, retiros de lujo y propiedades de diseño de alta gama.",
        image: hotelMain.src, 
        link: "/hotels"
      }
    ]
  }
];