export default function Pricing() {
  return (
    <section className="py-20 md:py-24 bg-neutral-900/10">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-br from-white to-white/50 text-transparent bg-clip-text text-center mb-12">
          Simple, Flat Pricing
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-neutral-900/80 border border-white/10 p-8 rounded-2xl flex flex-col items-center md:w-96 hover:scale-105 transition duration-300">
            <span className="text-white/50 uppercase tracking-widest text-sm font-semibold">
              Daily Rate
            </span>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">Q50</span>
              <span className="text-white/50">/bag</span>
            </div>
            <ul className="mt-8 space-y-4 text-white/70 w-full">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                No size limits
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Insurance included
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Open 7 days a week
              </li>
            </ul>
            <button className="mt-8 w-full bg-white text-neutral-950 py-3 rounded-full font-medium">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
