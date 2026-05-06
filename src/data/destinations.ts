// src/data/destinations.ts

export type DestinationDetail = {
  id: string;
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
  {
    id: "lake-atitlan",
    title: "Lake Atitlán",
    subtitle: "The Mystical Volcanic Caldera",
    heroImage: wellnessAtitlan.src,
    overview: "Encircled by three towering volcanoes and dotted with vibrant, diverse Mayan villages, Lake Atitlán is a place where time slows down. Whether you are seeking deep spiritual restoration in San Marcos or vibrant social energy in Panajachel, the lake demands to be experienced, not just visited.",
    sections: [
      {
        heading: "Navigating the Lake",
        content: "The primary way to hop between villages is via public 'lanchas' (small water taxis) that cross the water daily, usually depart every 30 minutes from the docks of each village. It is crucial to know that these boats operate on an unofficial schedule, generally running from 6:30 AM until about 5:00 PM or 7:30 PM at the absolute latest (Panajachel Dock called Muelle Tzanjuyu, is the one that runs until the latest). If you miss the last boat, you will need to hire a private lancha at a premium rate, we have private lanchas available if you require them please let us know and we can arrange them for you. We provide shared and private shuttles from anywhere in the country to arrive and leave Lake Atitlán without any hassle.",
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
    id: "antigua-guatemala",
    title: "Antigua",
    subtitle: "The Colonial Crown Jewel",
    heroImage: social.src, 
    overview: "Wandering through Antigua is like stepping into a living museum framed by three imposing volcanoes. With its cobblestone streets, ruined 16th-century convents, and an explosion of modern gastronomy and specialty coffee, it is the undisputed cultural heart of the country. It effortlessly blends the ancient with the highly sophisticated.",
    sections: [
      {
        heading: "Arriving in the Colonial City",
        content: "Antigua is highly walkable, though tuk-tuks are readily available for tired legs. As the main hub for travelers entering Guatemala, getting here from the airport or moving onward to the coast or lake is a breeze. Blvck Sheep offers premium, direct routes in our comfortable fleet, including our signature black SUVs, to keep you out of the chaotic public transit systems.",
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
    id: "el-paredon",
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
    id: "semuc-champey",
    title: "Semuc Champey",
    subtitle: "The Turquoise Jungle Gem",
    heroImage: quetzal.src, 
    overview: "Hidden deep within the lush, mountainous jungle of Alta Verapaz, Semuc Champey is a natural wonder. A series of cascading, crystal-clear turquoise limestone pools suspended over the rushing Cahabón River. It is remote, wild, and breathtakingly beautiful—a true reward for those willing to make the trek.",
    sections: [
      {
        heading: "Park Information & Logistics",
        content: "Accessing Semuc Champey requires a 30-minute ride in the back of a 4x4 pickup truck from the town of Lanquin, we also offer tours to Semuc and the Caves. The national park is generally open daily from 8:00 AM to 4:00 PM. We highly recommend arriving early to beat the midday crowds and to experience the pools at their most tranquil. There is an entrance fee of 50 GTQ (approximately $6.50 USD) for foreign visitors, which must be paid in cash. Be sure to pack water shoes, eco-friendly sunscreen, and plenty of drinking water.",
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
}
];