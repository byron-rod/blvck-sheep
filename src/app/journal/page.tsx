import JournalClient from "./JournalClient";

export const metadata = {
  title: "The Travelogue - Blvck Sheep",
  description: "Read our latest articles, guides, and stories about exploring Guatemala.",
};

export default function JournalIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <JournalClient />
      </div>
    </div>
  );
}
