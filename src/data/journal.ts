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

import decodingJournalImage from "@/assets/images/decoding-journal.png";
import roadguideJournalImage from "@/assets/images/roadguide-journal.png";
import simJournalImage from "@/assets/images/sim-journal.png";

import atitlanImage from "@/assets/images/atitlan.jpg";


export const journalData: JournalPost[] = [
  {
    id: "antigua-to-lake-atitlan-guide",
    title: "The Ultimate Guide: Traveling from Antigua to Lake Atitlán in 2026",
    excerpt: "Everything you need to know about navigating Guatemala's most popular route. From surviving the chaotic 'chicken buses' to finding the perfect lakeside sanctuary.",
    publishDate: "April 15, 2026",
    readTime: "8 MIN READ",
    heroImage: roadguideJournalImage.src, 
    category: "Transit & Logistics",
    content: [
      {
        type: "paragraph",
        value: "Making the 77-kilometer journey from the cobblestone streets of Antigua to the volcanic shores of Lake Atitlán is a rite of passage for anyone visiting Guatemala. However, this 2.5 to 3-hour drive through the highlands is not a simple straight line. Depending on your budget, your timeline, and your tolerance for dizzying mountain curves, there are three distinct ways to make this transit. After half a decade of navigating these exact roads, here is the unfiltered truth about how to get to the lake."
      },
      {
        type: "heading",
        value: "Option 1: The 'Chicken Bus' (Camioneta) Reality"
      },
      {
        type: "paragraph",
        value: "These brightly painted, souped-up former North American school buses are an iconic piece of the Guatemalan landscape. Traveling this way is incredibly cheap, but the true cost is your time and energy. It requires four separate transfers. You begin at the Antigua bus terminal (located behind the central market near Pollo Campero). You catch a bus heading to Chimaltenango (approx. 20 GTQ) and ask the 'ayudante' (the driver's assistant) to drop you off at the highway corner for Los Encuentros. From there, you flag down a bus heading toward Quiché or Xela, taking it to the Los Encuentros crossroads (10-20 GTQ). Next, you catch a bus dropping down into the Sololá department (5 GTQ), and finally, take your last bus descending into Panajachel. If you are catching a public boat, get off at the very first stop in Pana—it is a short walk down to Muelle Tzanjuyú."
      },
      {
        type: "paragraph",
        value: "<strong>The Brutal Truth:</strong> There is a famous local saying: <em>'Donde caben 3, caben 4'</em> (Where three fit, four fit). This perfectly sums up the camioneta experience. Drivers maximize profits by cramming as many people as physically possible into the seats and aisles. Your luggage will likely go on the roof, you will have zero personal space, and the drivers take the winding mountain curves at alarming speeds. We highly recommend taking a chicken bus for a short, 15-minute trip just for the cultural experience, but for a 3-hour transit with heavy bags? It is an extreme sport."
      },
      {
        type: "heading",
        value: "Option 2: The Shared Tourist Shuttle"
      },
      {
        type: "paragraph",
        value: "This is the standard backpacker choice. For about 125 to 150 GTQ ($16 - $20 USD), you book a seat in a 15-passenger van (Toyota Hiace or Nissan Urvan). They leave at specific, scheduled times daily. Depending on the season and traffic in Antigua, they will either pick you up at your hotel, or require you to meet at central hubs like Café Condesa at Central Park or popular hostels like Bloom."
      },
      {
        type: "paragraph",
        value: "<strong>The Route:</strong> Shared shuttles almost exclusively take the Patzún route to save time. This road cuts through deep agricultural valleys, crosses a small river gorge, and drops down through San Andrés Semetabaj before arriving in Pana. It is highly efficient, but the roads are incredibly narrow and aggressively winding. If you are prone to motion sickness, this route can be tough."
      },
      {
        type: "heading",
        value: "Option 3: The Private Alternative (Blvck Sheep)"
      },
      {
        type: "paragraph",
        value: "Your vacation time is your most valuable asset. For those who want to avoid the dizziness of the Patzún curves and the strict schedules of shared vans, booking a private transfer changes the entire tone of your travel day. At Blvck Sheep, our private transit routes bypass Patzún entirely. Instead, we take the Tecpán route."
      },
      {
        type: "paragraph",
        value: "Tecpán is located on Guatemala's primary highways, the CA-1 (Pan-American Highway). While the total distance is slightly longer than the Patzún shortcut, this highway offers significantly more room to breathe. Instead of navigating tight, single-lane mountain passes, the CA-1 features two wide lanes in each direction and vastly superior road conditions, making for a much smoother ride. Furthermore, Tecpán happens to be a celebrated culinary destination, famous for its artisanal cheeses, smoked sausages, and highway steakhouses."
      },
      {
        type: "paragraph",
        value: "More importantly, this route grants immediate access to the ancient Kaqchikel Mayan ruins of Iximché, the entrance is only Q5, if you are lucky you can get to witness a traditional mayan ceremony while exploring the ruins. We highly recommend this quick detour on your way to or from the lake. Our private drivers can pause your transit, allowing you to explore the ruins and enjoy an authentic local lunch before making the final descent to the water via the 'Las Trampas' route. This specific approach offers breathtaking, high-altitude views of the lake, plus all three volcanos, from the mountains before winding down through San Andrés Semetabaj and into Pana."
      },
      {
        type: "cta",
        value: "Secure Your Transfer to the Lake",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20want%20to%20book%20a%20shuttle%20from%20Antigua%20to%20Atitlan!"
      },
      {
        type: "heading",
        value: "Where to Drop Your Bags"
      },
      {
        type: "paragraph",
        value: "While Panajachel is the main logistical hub, our private transfers offer direct routes to several other accessible villages around Atitlan. The lake offers entirely different energies depending on which shoreline you choose. If you want high-energy social spaces and the backpacker crowd, head to San Pedro La Laguna. For a 'hippie-chic' vibe centered on yoga and meditation retreats, San Marcos is the place. If authentic Tz'utujil Mayan culture and incredible textile arts are your priority, San Juan La Laguna is unmatched. Finally, for absolute exclusivity, world-class boutique hotels, and silence, look toward Santa Catarina Palopó or Santa Cruz. If you require stable infrastructure, fast internet, and the convenience of a larger town, making Panajachel your basecamp is the smartest move."
      },
      {
        type: "cta",
        value: "Explore Our Curated Lake Atitlán Stays",
        link: "/hostels" 
      }
    ]
  },
  {
    id: "guatemala-sim-card-esim-guide",
    title: "How to Get Data in Guatemala: eSIMs vs. Local SIM Cards",
    excerpt: "Navigating mobile data in Guatemala can be surprisingly frustrating due to strict registration laws. Here is the ultimate guide to bypassing the paperwork and getting online the moment you land.",
    publishDate: "April 13, 2026",
    readTime: "5 MIN READ",
    heroImage: simJournalImage.src, 
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
    heroImage: decodingJournalImage.src, 
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
        value: "Known locally as 'Pana,' this is the economic engine of the lake, the primary entry point, and the town Blvck Sheep proudly calls home. While it is the busiest town, it offers the best infrastructure: the most stable fiber-optic internet and power grid on the lake (other towns suffer from frequent blackouts), the largest farmers market in Sololá, reliable ATMs, and the main public docks. Since Pana is the main hub for transportation, the docks operate later than in any other town, until 7:30 PM. If you arrive after this time, we can arrange a private lancha that works 24/7—just request this service when booking your shuttle. For digital nomads and families, it is the safest and most convenient basecamp. It boasts a beautiful public beach (the only one on the lake), and a vibrant international community ensures there is always a curated dinner, event, or gathering happening. Pana feels less like an isolated retreat, or what locals know as 'pueblitos mágicos', and more like a fully functioning, dynamic lakeside town."
      },
      {
        type: "heading",
        value: "San Marcos La Laguna: The Holistic Sanctuary"
      },
      {
        type: "paragraph",
        value: "If your itinerary involves cacao ceremonies, yoga retreats, psychedelic mushrooms, and a deep dive into wellness, San Marcos is your sanctuary. It is a bohemian haven famous for its narrow, jungle-covered pathways and spiritual community. I call it 'hippie chic'. The vibe here is incredibly relaxed, making it one of the most sought-after spots for tourists seeking restoration. Be aware that the village goes completely dark and silent early in the evening—it is designed for healing, not for nightlife. The recent influx of international wellness tourism makes it one of the more premium-priced towns. It is important to note that this rapid gentrification has negatively affected the local community, creating an interesting dynamic between the deeply rooted locals and the transient tourist crowd."
      },
      {
        type: "heading",
        value: "San Juan La Laguna: The Mayan Heartbeat"
      },
      {
        type: "paragraph",
        value: "San Juan is arguably the most visually stunning and culturally preserved town on the lake. Governed by strong local cooperatives, the Mayan community stands together to maintain a town that is self-sustaining and deeply respectful of its indigenous roots. It is the absolute epicenter for authentic textile weaving, natural dyeing processes, and indigenous art galleries (you can explore more about their incredible community initiatives at <a href=\"https://www.sanjuanlalaguna.com.gt/\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">sanjuanlalaguna.com.gt</a>). It is cleaner, quieter, and highly recommended for a culturally immersive stay. San Juan is also the starting point for the <a href=\"https://www.sanjuanlalaguna.com.gt/es/atractivos-turisticos/rostro-maya\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Rostro Maya (Indian Nose) hike</a>—one of our absolute favorite guided treks to watch the sunrise."
      },
      {
        type: "heading",
        value: "Santa Cruz La Laguna: The Fancy Escape"
      },
      {
        type: "paragraph",
        value: "Accessible almost exclusively by boat, Santa Cruz is a quiet village built steeply into the cliffside. It offers gorgeous lakefront properties, great restaurants, and dramatic scenery. It is a town of brilliant contrasts: you can find absolute seclusion in private Airbnbs, or you can find high-energy connection at <a href=\"/hostels/free-cerveza\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Free Cerveza</a>, one of Guatemala's most legendary social hostels, famous for its summer-camp vibe and vibrant social atmosphere."
      },
      {
        type: "heading",
        value: "San Pedro La Laguna: The Backpacker Hub"
      },
      {
        type: "paragraph",
        value: "Known affectionately by the locals as 'San Pedro La Locura' (San Pedro the Madness), this is the undisputed epicenter for the younger backpacker crowd—the ultimate party town. It is a maze of narrow, vibrant streets covered in graffiti art, packed with social hubs, party hostels, and an energetic nightlife. Navigating its tight alleys in a tuk-tuk is a rite of passage, especially after a fun night out with newfound friends. Stay tuned—we will be dropping a dedicated journal entry soon detailing our favorite local-only food spots, hidden bars, and things to do that only locals know about in San Pedro."
      },
      {
        type: "heading",
        value: "Santiago Atitlán: The Cultural Epicenter"
      },
      {
        type: "paragraph",
        value: "As the largest indigenous community on the lake, Santiago offers a deeply authentic Guatemalan experience. If you want to witness the lake's true commercial heartbeat, visit during their massive market days on Thursdays and Sundays, where the streets explode with vibrant textiles, fresh produce, and local artisans. It is also home to the Maximón shrine, a fascinating blend of Mayan and Catholic traditions."
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
        value: "Santa Catarina Palopó and San Antonio Palopó sit on the eastern edge of the lake, far from the main tourist circuits. Santa Catarina is about a 15-minute drive from Panajachel, and San Antonio is about a 30-minute drive from Pana. Santa Catarina is famous for its vibrantly painted houses and thermal hot springs. It is also home to world-class luxury boutique stays like <a href=\"/stays/casa-palopo\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Casa Palopó</a>, making it perfect for a romantic, high-end getaway. Just down the road, San Antonio Palopó remains a quiet, authentic village globally renowned for its masterful ceramic pottery."
      },
      {
        type: "heading",
        value: "The Blvck Sheep Arrival Strategy"
      },
      {
        type: "paragraph",
        value: "While standard shuttles (and our shared options) will drop you at Muelle Tzanjuyú, the main dock in Pana, Blvck Sheep's private service operates differently. With our private shuttles, you can travel at any time. We can route you directly to almost any town on Lake Atitlán from anywhere in the country—whether you are coming from Antigua, Guatemala City, El Paredón, or Semuc Champey."
      },
      {
        type: "cta",
        value: "Secure Your Transfer to the Lake",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20need%20a%20shuttle%20to%20Lake%20Atitlan!"
      }
    ]
  }
];