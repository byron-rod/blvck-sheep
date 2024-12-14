export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <div className="flex flex-none gap-16 text-5xl lg:text-6xl font-medium">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>&#10038;</span>
              <span>Book Your Ride</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
