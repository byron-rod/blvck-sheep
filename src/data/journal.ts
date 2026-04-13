// src/data/journal.ts

export type ContentBlock = {
  type: 'heading' | 'paragraph' | 'image' | 'cta';
  value: string;
  link?: string; // Used if type is 'cta'
};

export type JournalPost = {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  category: string;
  content: ContentBlock[];
};

import atitlanImage from "@/assets/images/atitlan.jpg";

export const journalData: JournalPost[] = [
  {
    id: "antigua-to-lake-atitlan-guide",
    title: "The Ultimate Guide: Traveling from Antigua to Lake Atitlán in 2026",
    excerpt: "Everything you need to know about navigating Guatemala's most popular route, from avoiding the chaotic chicken buses to finding the perfect lakeside sanctuary.",
    publishDate: "May 15, 2026",
    readTime: "4 MIN READ",
    heroImage: atitlanImage.src, 
    category: "Transit & Logistics",
    content: [
      {
        type: "paragraph",
        value: "Making the journey from the cobblestone streets of Antigua to the volcanic shores of Lake Atitlán is a rite of passage for anyone visiting Guatemala. However, the 2.5 to 3-hour (77km distance) drive through the highlands can quickly become overwhelming if you aren't prepared. The typical tourist shuttle is funneled through the winding, dizzying mountain roads of Patzún. At Blvck Sheep, we bypass this entirely in favor of the Tecpán route. It offers smoother asphalt and a chance to experience Guatemala's culinary heartland—famous for artisanal cheeses and smoked sausages. More importantly, this route grants access to the ancient Kaqchikel Mayan ruins of Iximché. For those looking to elevate their transit day, we offer an exclusive, detour through these ruins before descending to the lake."
      },
      {
        type: "heading",
        value: "The Reality of Public Transport"
      },
      {
        type: "paragraph",
        value: "While the brightly painted 'chicken buses' are an iconic piece of the landscape, navigating them with luggage is an extreme sport. A ticket might only cost $5 to $8, but the true cost is your time and energy. The journey requires four chaotic transfers: from the Antigua central hub to Chimaltenango, connecting to Los Encuentros, descending to Sololá, and finally dropping into Panajachel. It is a crowded, unpredictable transit that quickly eats up your first day at the lake."
      },
      {
        type: "heading",
        value: "The Premium Alternative"
      },
      {
        type: "paragraph",
        value: "Your vacation time is your most valuable asset. Blvck Sheep operates daily routes designed for absolute comfort and reliability. Whether you choose the social, budget-friendly atmosphere of our shared minivans that travel to Panajachel or the ultimate flexibility of a private door-to-door transfer, you will arrive in Panajachel, or a direct transfer to any other town in Atitlan (San Pedro, San Marcos, Santa Catarina Palopo, etc)."
      },
      {
        type: "cta",
        value: "Book Your Shuttle to Lake Atitlán",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20want%20to%20book%20a%20shuttle%20from%20Antigua%20to%20Atitlan!"
      },
      {
        type: "heading",
        value: "Where to Drop Your Bags"
      },
      {
        type: "paragraph",
        value: "Once you arrive, the lake offers entirely different energies depending on where you stay. If you are looking for high-energy social spaces, backpacker crowd, head toward San Pedro La Laguna, for something more hippie chic with yoga and meditaion, San Marcos La Laguna is the place. For more exclusivity and luxury, its Santa Catarina Palopo or Santa Cruz, and the main Tzutuil-Mayan town with the most authentic culture is San Juan La Laguna. If you require a bigger town with more options, then Panajachel is the choice."
      },
      {
        type: "cta",
        value: "Explore Our Curated Lake Atitlán Stays",
        link: "/destinations/lake-atitlan"
      }
    ]
  },
  {
    id: "guatemala-sim-card-esim-guide",
    title: "How to Get Data in Guatemala: eSIMs vs. Local SIM Cards",
    excerpt: "Navigating mobile data in Guatemala can be surprisingly frustrating due to strict registration laws. Here is the ultimate guide to bypassing the paperwork and getting online the moment you land.",
    publishDate: "April 15, 2026",
    readTime: "5 MIN READ",
    heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2500&auto=format&fit=crop", 
    category: "Travel Hacks",
    content: [
      {
        type: "paragraph",
        value: "Stepping off the plane at La Aurora International Airport and realizing you don't have internet access to pull up your hotel address or book a ride is a classic travel nightmare. While Guatemala has excellent mobile coverage, getting connected isn't as simple as just buying a SIM card at a convenience store."
      },
      {
        type: "heading",
        value: "The Reality of Guatemalan Mobile Networks"
      },
      {
        type: "paragraph",
        value: "The country runs on two major telecom giants: Tigo and Claro. Both offer excellent 4G/LTE coverage, with Tigo generally having a slight edge in remote areas like Semuc Champey or the smaller villages around Lake Atitlán. However, Guatemala enforces strict registration laws. To buy a physical SIM card, you must present your physical passport (copies often aren't accepted) and wait for a clerk to manually register your device in the national database. Doing this at the airport means waiting in massive lines, and doing it in town eats into your vacation time."
      },
      {
        type: "heading",
        value: "Option 1: The Instant Solution (eSIMs)"
      },
      {
        type: "paragraph",
        value: "If your phone is unlocked and eSIM compatible, you can bypass the physical paperwork entirely. You buy the plan online before your flight, install the digital profile, and activate it the second your plane touches the tarmac. It is incredibly convenient, though you will pay a premium for the data compared to local rates."
      },
      {
        type: "paragraph",
        value: "We recommend checking rates on the two most reliable global providers: Airalo and Yesim. Airalo is the industry standard for travelers, while Yesim often features highly competitive packages for Central America."
      },
      {
        type: "cta",
        value: "Check Guatemala Rates on Airalo",
        link: "https://airalo.tpx.gr/78RgcRmp" // TODO: Paste your Travelpayouts Airalo link here
      },
      {
        type: "cta",
        value: "Explore Data Plans on Yesim",
        link: "https://yesim.tpx.gr/5vRANpr6" // TODO: Paste your Travelpayouts Yesim link here
      },
      {
        type: "heading",
        value: "Option 2: The Blvck Sheep Concierge (The Ultimate Hack)"
      },
      {
        type: "paragraph",
        value: "While eSIMs are convenient, nothing beats the raw value and signal strength of a local Tigo or Claro physical SIM. Local data packages are incredibly cheap, making this the best option if you are staying in the country for more than a few days."
      },
      {
        type: "paragraph",
        value: "To get you the best of both worlds—local prices without the frustrating paperwork—we introduced the Blvck Sheep SIM Concierge. When you book a private shuttle with us, simply request a SIM card add-on. We handle the logistics ahead of time. When you step into our ride, your fully loaded local SIM card will be waiting for you. You get instant connectivity at local rates, zero queues required."
      },
      {
        type: "cta",
        value: "Book a Shuttle & Request Your Local SIM",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20want%20to%20book%20a%20shuttle%20and%20request%20a%20local%20SIM%20card!"
      }
    ]
  }
];