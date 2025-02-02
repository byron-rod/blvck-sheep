import Link from "next/link";

const HostelsPage = () => {
  return (
    <section className="py-16 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
          Best Places to Stay in Guatemala
        </div>

        {/* Header */}
        <h1 className="text-5xl lg:text-6xl font-medium mt-10 leading-[2.5rem]">
          Explore & Stay in Guatemala
        </h1>
        <p className="text-xl text-white/70 mt-4">
          We partner with top hostels to ensure you have the best experience in
          Guatemala. Book your stay and let us handle your shuttle
          transportation.
        </p>

        {/* Hostel Categories - Responsive Grid Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* First Row: Antigua & Atitlan */}
          <div>
            <h2 className="text-3xl font-semibold">Antigua Guatemala</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/hostels/adra-hostel"
                  className="text-blue-400 hover:underline"
                >
                  Adra Hostel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Lake Atitlan</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/hostels/free-cerveza"
                  className="text-blue-400 hover:underline"
                >
                  Free Cerveza
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Row: Paredon & Lanquin */}
          <div>
            <h2 className="text-3xl font-semibold">El Paredón</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/hostels/mellow-surf-hostel"
                  className="text-blue-400 hover:underline"
                >
                  Mellow Surf Hostel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Lanquin</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/hostels/zephyr-lodge"
                  className="text-blue-400 hover:underline"
                >
                  Zephyr Lodge
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelsPage;
