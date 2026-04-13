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

export const journalData: JournalPost[] = [
  {
    id: "antigua-to-lake-atitlan-guide",
    title: "The Ultimate Guide: Traveling from Antigua to Lake Atitlán in 2026",
    excerpt: "Everything you need to know about navigating Guatemala's most popular route, from avoiding the chaotic chicken buses to finding the perfect lakeside sanctuary.",
    publishDate: "May 15, 2026",
    readTime: "4 MIN READ",
    heroImage: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2500&auto=format&fit=crop", 
    category: "Transit & Logistics",
    content: [
      {
        type: "paragraph",
        value: "Making the journey from the cobblestone streets of Antigua to the volcanic shores of Lake Atitlán is a rite of passage for anyone visiting Guatemala. However, the 2.5 to 3-hour drive through the winding highlands can quickly become overwhelming if you aren't prepared."
      },
      {
        type: "heading",
        value: "The Reality of Public Transport"
      },
      {
        type: "paragraph",
        value: "While the brightly painted 'chicken buses' are an iconic part of the landscape, they are notoriously uncomfortable, crowded, and require multiple transfers. For travelers carrying luggage or seeking to maximize their time decompressing, relying on public transit is often a false economy."
      },
      {
        type: "heading",
        value: "The Premium Alternative"
      },
      {
        type: "paragraph",
        value: "Your vacation time is your most valuable asset. Booking a direct, air-conditioned shuttle ensures you arrive in Panajachel refreshed and ready to board a lancha to your final village. Blvck Sheep operates daily routes designed specifically for comfort and reliability, bridging the gap between the colonial capital and the lake."
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
        value: "Once you arrive, the lake offers entirely different energies depending on where you stay. If you are looking for high-energy social spaces, head toward Santa Cruz. If you require absolute luxury and panoramic infinity pools, Santa Catarina Palopó is your sanctuary."
      },
      {
        type: "cta",
        value: "Explore Our Curated Lake Atitlán Stays",
        link: "/destinations/lake-atitlan"
      }
    ]
  }
];