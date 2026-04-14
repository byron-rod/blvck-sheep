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
import wellnessAtitlanImage from "@/assets/images/wellness-atitlan.png";

export const journalData: JournalPost[] = [
  {
    id: "antigua-to-lake-atitlan-guide",
    title: "The Ultimate Guide: Traveling from Antigua to Lake Atitlán in 2026",
    excerpt: "Everything you need to know about navigating Guatemala's most popular route, from avoiding the chaotic chicken buses to finding the perfect lakeside sanctuary.",
    publishDate: "March 26, 2026",
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
    publishDate: "April 13, 2026",
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
        value: "We recommend checking rates on the two most reliable global providers: Airalo and Yesim. Airalo is the industry standard for travelers, Yesim is another good option."
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
  },
  {
    id: "lake-atitlan-villages-guide",
    title: "Decoding Lake Atitlán: Which Village is Right for You?",
    excerpt: "Lake Atitlán is not a single destination; it is a complex network of distinct micro-cultures. Here is the insider’s guide to choosing the perfect shoreline for your aesthetic and energy.",
    publishDate: "April 20, 2026",
    readTime: "8 MIN READ",
    heroImage: wellnessAtitlanImage.src, 
    category: "Insider Guides",
    content: [
      {
        type: "paragraph",
        value: "One of the most common mistakes travelers make when booking their Guatemala itinerary is treating Lake Atitlán as a single, uniform destination. The reality is that the lake is a massive caldera surrounded by a dozen distinct villages, each fiercely independent and vibrating with a completely different energy. After half a decade of hosting and navigating these waters, we've seen countless travelers book the wrong village for their vibe—ending up in a loud backpacker hub when they wanted silent luxury, or vice versa."
      },
      {
        type: "heading",
        value: "Panajachel: The Strategic Gateway"
      },
      {
        type: "paragraph",
        value: "Known locally as 'Pana,' this is the economic engine of the lake, the primary entry point, and the town Blvck Sheep proudly calls home. While it is the busiest town, it offers the absolute best infrastructure: the most stable fiber-optic internet and power grid on the lake, the largest farmers market in Sololá, reliable ATMs, and the main public docks. For digital nomads and families, it is the safest and most convenient basecamp. It boasts a beautiful, and the only public beach in the lake. A vibrant international community that ensures there is always a curated dinner, event, or gathering happening. Pana feels less like an isolated retreat, or what locals know as Pueblitos Magicos, and more like a fully functioning, dynamic lakeside town."
      },
      {
        type: "heading",
        value: "San Marcos La Laguna: The Holistic Sanctuary"
      },
      {
        type: "paragraph",
        value: "If your itinerary involves cacao ceremonies, yoga retreats, psychedelic mushrooms, and a deep dive into wellness, San Marcos is your sanctuary. It is a bohemian haven famous for its narrow, jungle-covered pathways and spiritual community. I call it 'hippie chic'. The vibe here is incredibly relaxed, making it one of the most sought-after spots for tourists seeking restoration. Be aware that the village goes completely dark and silent early in the evening—it is designed for healing, not for nightlife. The recent influx of international wellness tourism makes it one of the more premium-priced towns, which is important to know, that this has affected negatively the local community due to gentrification, creating an interesting dynamic between the deeply rooted locals and the transient tourist crowd."
      },
      {
        type: "heading",
        value: "San Juan La Laguna: The Mayan Heartbeat"
      },
      {
        type: "paragraph",
        value: "San Juan is arguably the most visually stunning and culturally preserved town on the lake. Governed by strong local cooperatives, the Mayan community stands together to maintain a town that is self-sustaining and deeply respectful of its indigenous roots. It is the absolute epicenter for authentic textile weaving, natural dyeing processes, and indigenous art galleries (you can explore more about their incredible community initiatives at <a href=\"https://www.sanjuanlalaguna.com.gt/\" target=\"_blank\" className=\"underline decoration-zinc-500 hover:text-white\">SanJuanLaLaguna.com.gt</a>). It is cleaner, quieter, and highly recommended for a culturally immersive stay. San Juan is also the starting point for the <a href=\"https://www.sanjuanlalaguna.com.gt/es/atractivos-turisticos/rostro-maya\" target=\"_blank\" className=\"underline decoration-zinc-500 hover:text-white\">Rostro Maya (Indian Nose) hike</a>—one of our absolute favorite guided treks to watch the sunrise over the caldera."
      },
      {
        type: "heading",
        value: "Santa Cruz La Laguna: The Fancy Escape"
      },
      {
        type: "paragraph",
        value: "Accessible almost exclusively by boat, Santa Cruz is a quiet village built steeply into the cliffside. It offers gorgeous lakefront properties, great restaurants, and dramatic scenery. It is a town of brilliant contrasts: you can find absolute seclusion in private Airbnbs, or you can find high-energy connection at <a href=\"/hostels/free-cerveza\" className=\"underline decoration-zinc-500 hover:text-white\">Free Cerveza</a>, one of Guatemala's most legendary social hostels, famous for its summer-camp vibe and vibrant social atmosphere."
      },
      {
        type: "heading",
        value: "San Pedro La Laguna: The Backpacker Hub"
      },
      {
        type: "paragraph",
        value: "Known affectionately by the locals as 'San Pedro La Locura' (San Pedro the Madness), this is the undisputed epicenter for the younger backpacker crowd. It is a maze of narrow, vibrant streets covered in graffiti art, packed with social hubs, party hostels, and an energetic nightlife. Navigating its tight alleys in a tuk-tuk is a rite of passage. Stay tuned—we will be dropping a dedicated journal entry soon detailing our favorite local-only street food spots and hidden bars in San Pedro."
      },
      {
        type: "heading",
        value: "Santiago Atitlán: The Cultural Epicenter"
      },
      {
        type: "paragraph",
        value: "As the largest indigenous community on the lake, Santiago offers a deeply authentic Guatemalan experience. If you want to witness the lake's true commercial heartbeat, visit during their massive market days on Thursdays and Sundays, where the streets explode with vibrant textiles, fresh produce, and local artisans."
      },
      {
        type: "heading",
        value: "Cerro de Oro: The Hidden Gem"
      },
      {
        type: "paragraph",
        value: "Tucked between San Lucas Tolimán and Santiago, Cerro de Oro is the lake's best-kept secret. If you are looking to completely opt-out of the social scene, this is where you go. It is home to some of the most spectacular, secluded Airbnbs on the water—think lush private gardens, jacuzzis, roaring fireplaces, and pristine, private swimming docks. It is the ultimate choice for a private retreat with family or close friends."
      },
      {
        type: "heading",
        value: "Los Palopos: The Artisanal & Luxury Coasts"
      },
      {
        type: "paragraph",
        value: "Santa Catarina Palopó and San Antonio Palopó sit on the eastern edge of the lake, far from the main tourist circuits. Santa Catarina is famous for its vibrantly painted houses and thermal hot springs bubbling right into the lake. It is also home to world-class luxury boutique stays like <a href=\"/stays/casa-palopo\" className=\"underline decoration-zinc-500 hover:text-white\">Casa Palopó</a>, making it perfect for a romantic, high-end getaway. Just down the road, San Antonio Palopó remains a quiet, authentic village globally renowned for its masterful ceramic pottery."
      },
      {
        type: "heading",
        value: "The Blvck Sheep Arrival Strategy"
      },
      {
        type: "paragraph",
        value: "While standard shuttles will drop you at the busy Pana docks and leave you to figure out the public boat schedules on your own, Blvck Sheep operates differently. Because we orchestrate private, premium transport, we can route you directly to almost any town from anywhere in the country—whether you are coming from Antigua, Guatemala City, El Paredón, or Semuc Champey. We remove the friction, ensuring your arrival is as beautiful as the destination itself."
      },
      {
        type: "cta",
        value: "Secure Your Premium Transfer to the Lake",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20need%20a%20premium%20shuttle%20to%20Lake%20Atitlan!"
      }
    ]
  }
];