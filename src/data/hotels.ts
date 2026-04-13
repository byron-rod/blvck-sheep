// src/data/hotels.ts

export type HotelDetail = {
  id: string;
  name: string;
  location: string;
  heroImage: string;
  description: string;
  vibe: string;
  whatsappCode: string;
  bookingLink: string;
};

import convento from "@/assets/images/convento.png";
import casaPalopo from "@/assets/images/palopo.png";
import swell from "@/assets/images/swell.png";
import lasLagunas from "@/assets/images/lagunas.png";

export const hotelsData: HotelDetail[] = [
  {
    id: "el-convento",
    name: "El Convento Boutique Hotel",
    location: "Antigua Guatemala",
    heroImage: convento.src, 
    description: "Located on a cobblestone street facing the iconic Capuchinas convent. El Convento offers an atmosphere of absolute serenity and colonial elegance. With private courtyards, vaulted brick ceilings, and world-class gastronomy, it is the premier luxury sanctuary in the heart of Antigua.",
    vibe: "Colonial Luxury, Romantic Sanctuary, Fine Dining",
    whatsappCode: "El%20Convento%20Antigua",
    bookingLink: "https://www.elconventoantigua.com/", // Placeholder for future Booking.com affiliate link
  },
  {
    id: "casa-palopo",
    name: "Casa Palopó",
    location: "Lake Atitlán",
    heroImage: casaPalopo.src, 
    description: "Perched on the hills surrounding Santa Catarina Palopó, this exclusive boutique hotel offers breathtaking, uninterrupted views of Lake Atitlán and its three majestic volcanoes. Featuring curated indigenous artwork, a spectacular infinity pool, and an onsite helipad, it redefines high-end travel in Guatemala.",
    vibe: "Exclusive Retreat, Panoramic Views, Relais & Châteaux",
    whatsappCode: "Casa%20Palopo",
    bookingLink: "https://www.casapalopo.com/",
  },
  {
    id: "swell-surf",
    name: "Swell Surf Lifestyle Hotel",
    location: "El Paredón",
    heroImage: swell.src, 
    description: "A masterclass in tropical 'barefoot luxury' design. Swell features thatched-roof suites, polished concrete aesthetics, and a stunning 20-meter pool surrounded by lush lounge areas. It is a highly curated, sophisticated oasis for surfers and coastal wanderers alike.",
    vibe: "Barefoot Luxury, Tropical Design, Surf Boutique",
    whatsappCode: "Swell%20El%20Paredon",
    bookingLink: "https://swellelparedon.com/",
  },
  {
    id: "las-lagunas",
    name: "Las Lagunas Boutique Hotel",
    location: "Petén (Near Tikal)",
    heroImage: lasLagunas.src, 
    description: "Suspended over the water of the Quexil Lagoon within a private 300-acre jungle reserve. This is the ultimate luxury basecamp for your Northern Expedition. After exploring the ancient pyramids of Tikal, retreat to your private overwater bungalow featuring a personal deck and jacuzzi.",
    vibe: "Jungle Luxury, Overwater Bungalows, Eco-Reserve",
    whatsappCode: "Las%20Lagunas%20Peten",
    bookingLink: "https://www.laslagunashotel.com/",
  }
];