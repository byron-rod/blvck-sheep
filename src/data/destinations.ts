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

export const destinationsData: DestinationDetail[] = [
  {
    id: "lake-atitlan",
    title: "Lake Atitlán",
    subtitle: "The Mystical Volcanic Caldera",
    heroImage: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2500&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop", // Replace with your smallPicAtitlanFree
      }
    ]
  }
];