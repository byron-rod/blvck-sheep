import Link from "next/link";
import { journalData } from "@/data/journal";

export const metadata = {
  title: "The Travelogue - Blvck Sheep",
  description: "Read our latest articles, guides, and stories about exploring Guatemala.",
};

export default function JournalIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter">The Travelogue</h1>
          <p className="mt-6 text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
            Essays, guides, and logistical insights for navigating Guatemala with intent.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 z-10">
          {journalData.map((post) => (
            <Link key={post.id} href={`/journal/${post.id}`} className="group block">
              <article className="flex flex-col gap-6">
                <div className="w-full aspect-video overflow-hidden border border-transparent group-hover:border-zinc-800 transition-colors duration-500 rounded-none relative">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-3 border-b border-zinc-800 pb-2 self-start">
                    {post.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4 tracking-tight group-hover:text-zinc-300 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
