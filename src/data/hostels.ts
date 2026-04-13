// src/data/hostels.ts

export type HostelDetail = {
  id: string;
  name: string;
  location: string;
  heroImage: string;
  description: string;
  vibe: string;
  whatsappCode: string;
  bookingLink: string;
};

import zephyr from "@/assets/images/zephyr.webp";
import mellow from "@/assets/images/mellow.png";
import adra from "@/assets/images/adra.jpg";
import freeCerveza from "@/assets/images/free-cerveza.webp";


export const hostelsData: HostelDetail[] = [
  {
    id: "free-cerveza",
    name: "Free Cerveza",
    location: "Lake Atitlán (Santa Cruz)",
    heroImage: freeCerveza.src, // Replace with your smallPicAtitlanFree
    description: "Nestled on the shores of Santa Cruz La Laguna, accessible only by boat. Free Cerveza is the ultimate destination hostel on Lake Atitlán, famous for its glamping tents, lakefront swimming, and an unmatched social atmosphere that draws travelers from all over the world.",
    vibe: "Social, Lakefront Glamping, High Energy",
    whatsappCode: "Free%20Cerveza",
    bookingLink: "https://freecervezahostel.com/stay/",
  },
  {
    id: "mellow-surf-hostel",
    name: "Mellow Surf Hostel",
    location: "El Paredón",
    heroImage: mellow.src, // Replace with your mellow.jpg
    description: "Located in Guatemala's unique surf town on the Pacific coast, just two blocks from the black sand beach. Enjoy their stunning pool, exclusive cocktails, and delicious food. It is the definitive space to decompress after catching waves.",
    vibe: "Surf, Chill, Tropical Oasis",
    whatsappCode: "Mellow%20Surf%20Hostel",
    bookingLink: "https://mellowsurfhostel.com/",
  },
  {
    id: "zephyr-lodge",
    name: "Zephyr Lodge",
    location: "Lanquín",
    heroImage: zephyr.src, // Replace with your zephyr.avif
    description: "Perched high in the mountains of Lanquin, Zephyr Lodge features a world-famous infinity pool with unobstructed jungle views that has melted more than one Instagrammer's heart. Equipped with a lively backpacker bar, it is the perfect basecamp for your Semuc Champey tours.",
    vibe: "Jungle Party, Infinity Pool, Backpacker Hub",
    whatsappCode: "Zephyr%20Lodge",
    bookingLink: "https://zephyrlodgelanquin.com/",
  },
  {
    id: "adra-hostel",
    name: "Adra Hostel",
    location: "Antigua Guatemala",
    heroImage: adra.src, // Replace with your adra.jpg
    description: "Founded in 2017 with the concept of a 'Community Harmony Space.' Set inside a beautifully restored colonial courtyard in the center of Antigua, it is where high-end design meets an environment designed for travelers to share stories and create unforgettable memories.",
    vibe: "Colonial Elegance, Digital Nomad, Community",
    whatsappCode: "Adra%20Hostel%20Antigua",
    bookingLink: "https://adrahostel.com/",
  }
];