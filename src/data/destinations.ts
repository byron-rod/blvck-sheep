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
  featuredStays: {
    name: string;
    hostelId: string; // Links to your existing hostel data
    description: string;
    image: string;
  }[];
};

import quetzal from "@/assets/images/quetzal-hero.png";
import wellnessAtitlan from "@/assets/images/wellness-atitlan.png";
import adra from "@/assets/images/adra.jpg";
import social from "@/assets/images/social-hero.png";
import mellow from "@/assets/images/mellow.png";
import freeCerveza from "@/assets/images/freecerveza.webp";

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
        content: "The primary way to hop between villages is via public 'lanchas' (small boats) that constantly cross the water. However, getting to the lake from the airport or the coast requires navigating winding mountain roads. We highly recommend booking a direct, comfortable shuttle to Panajachel to start your journey stress-free.",
        actionText: "Book Your Ride to Atitlán",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20Lake%20Atitlan!",
      },
      {
        heading: "Essential Experiences",
        content: "Hike the Indian Nose (Rostro Maya) before dawn to witness one of the most spectacular sunrises on earth. For cultural immersion, visit San Juan La Laguna to witness authentic textile weaving and organic coffee production.",
      }
    ],
    featuredStays: [
      {
        name: "Free Cerveza",
        hostelId: "free-cerveza",
        description: "The ultimate destination hostel nestled on the shores of Santa Cruz. Glamping, swimming, and an unmatched social atmosphere.",
        image: freeCerveza.src, // Replace with your smallPicAtitlanFree
      }
    ]
  },
  {
    id: "antigua-guatemala",
    title: "Antigua Guatemala",
    subtitle: "The Colonial Crown Jewel",
    heroImage: social.src, 
    overview: "Wandering through Antigua is like stepping into a living museum framed by three imposing volcanoes. With its cobblestone streets, ruined 16th-century convents, and an explosion of modern gastronomy and specialty coffee, it is the undisputed cultural heart of the country.",
    sections: [
      {
        heading: "Arriving in the Colonial City",
        content: "Antigua is highly walkable, though tuk-tuks are readily available for tired legs. As the main hub for travelers entering Guatemala, getting here from the airport or moving onward to the coast or lake is a breeze. Blvck Sheep offers premium, direct routes to keep you out of the chaotic public transit systems.",
        actionText: "Book Your Ride to Antigua",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20Antigua!",
      },
      {
        heading: "Essential Experiences",
        content: "Spend your mornings cafe-hopping to taste some of the world's best shade-grown coffee. By afternoon, explore the ruins of Santa Clara, and reserve your evening for a high-end culinary experience hidden behind unassuming colonial doors.",
      }
    ],
    featuredStays: [
      {
        name: "Adra Hostel",
        hostelId: "adra-hostel",
        description: "A Community Harmony Space located in a stunning colonial courtyard. Premium dorms, beautiful architecture, and an unbeatable central location.",
        image: adra.src, // Replace with your adra.jpg
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
        heading: "Reaching the Coast",
        content: "Located just a couple of hours from Antigua, the descent to the coast brings a sudden shift in climate and energy. Skip the crowded public transport and let Blvck Sheep deliver you straight to the sand with our air-conditioned, direct shuttle service.",
        actionText: "Book Your Ride to El Paredón",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20El%20Paredon!",
      },
      {
        heading: "Essential Experiences",
        content: "Paddle out at dawn for world-class surf breaks, or navigate the dense mangrove forests on a paddleboard. As evening approaches, join the daily migration to the beach to witness the legendary Pacific sunsets before diving into the local nightlife.",
      }
    ],
    featuredStays: [
      {
        name: "Mellow Surf Hostel",
        hostelId: "mellow-surf-hostel",
        description: "A premium surf and lifestyle hostel located just two blocks from the beach. Featuring a stunning pool, exclusive cocktails, and the best social atmosphere on the coast.",
        image: mellow.src, // Replace with your mellow.jpg
      }
    ]
  },
  {
    id: "semuc-champey",
    title: "Semuc Champey",
    subtitle: "The Turquoise Jungle Gem",
    heroImage: quetzal.src, 
    overview: "Hidden deep within the lush, mountainous jungle of Alta Verapaz, Semuc Champey is a natural wonder. A series of cascading, crystal-clear turquoise limestone pools suspended over the rushing Cahabón River. It is remote, wild, and breathtakingly beautiful.",
    sections: [
      {
        heading: "The Jungle Journey",
        content: "Getting to Lanquin (the gateway to Semuc Champey) is an adventure in itself, involving long, winding mountain roads. This is where comfort matters most. Blvck Sheep provides the most comfortable, reliable transport to ensure you arrive refreshed and ready to explore the jungle.",
        actionText: "Book Your Ride to Lanquin",
        actionLink: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20booking%20a%20shuttle%20to%20Lanquin!",
      },
      {
        heading: "Essential Experiences",
        content: "Hike to the El Mirador viewpoint for a panoramic shot of the pools, then descend to swim in the tiered turquoise water. For pure adrenaline, wade through the flooded Kanba Caves by candlelight and tube down the Cahabón River.",
      }
    ],
    featuredStays: [
      {
        name: "Zephyr Lodge",
        hostelId: "zephyr-lodge",
        description: "Perched high in the mountains of Lanquin, featuring a world-famous infinity pool with unobstructed jungle views and a legendary backpacker bar.",
        image: "https://images.unsplash.com/photo-1545201071-75f058ade69e?q=80&w=1000&auto=format&fit=crop", // Replace with your zephyr.avif
      }
    ]
  }
  
];