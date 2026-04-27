import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Blvck Sheep Shuttle Service",
  description:
    "Read the terms, conditions, and logistical policies for using Blvck Sheep's shared, private, and premium transit services in Guatemala.",
};

export default function TermsConditions() {
  return (
    <main className="container mx-auto max-w-4xl py-24 px-6 lg:px-0">
      {/* Botón para regresar a la versión en inglés */}
      <div className="flex justify-end mb-8">
        <Link 
          href="/terminos" 
          className="text-xs font-medium tracking-widest text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded-full px-4 py-2"
        >
          LEER EN ESPAÑOL
        </Link>
      </div>
      <h1 className="text-4xl font-light mb-6 text-center text-white tracking-tight">
        Blvck Sheep Terms & Conditions
      </h1>
      <p className="text-lg mb-10 text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
        Welcome to Blvck Sheep. We are committed to providing safe, reliable, and straightforward transit across Guatemala. By booking our services, you agree to the following policies.
      </p>

      {/* THE QUICK READ (TL;DR) */}
      <section className="mb-14 bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 md:p-8">
        <h2 className="text-xl font-medium mb-4 text-white">
          The Quick Read: Essential Policies
        </h2>
        <p className="text-zinc-400 mb-4 text-sm">
          Please review our core rules before traveling. Detailed explanations can be found in the sections below.
        </p>
        <ul className="list-disc pl-5 text-zinc-300 space-y-3 text-sm marker:text-blue-500">
          <li>
            <strong>Our Service:</strong> Blvck Sheep operates 5-passenger to 7-passenger vehicles SUVs or Sedans with limits on passenger capacity per trip for a more private and comfortable experience. For our <strong>shared services or larger groups (5+ passengers)</strong> we have partnerships with trusted providers, that assist us with vans, microbuses or buses services.
          </li>
          <li>
            <strong>Luggage Rule:</strong> Standard allowance is 1 large bag + 1 personal item per person. <strong>You must notify us in advance of any extra luggage</strong> so we can dispatch the correct vehicle size, otherwise, you may face delays or extra fees, read more below.
          </li>
          <li>
            <strong>Shared vs. Private:</strong> Shared shuttles operate on fixed routes with unpredictable wait times (10-60 mins). If you are on a tight schedule, we recommend booking Private transit.
          </li>
          <li>
            <strong>Cancellations:</strong> You must cancel or reschedule at least <strong>24 hours</strong> before departure for a refund or free change.
          </li>
          <li>
            <strong>Payments:</strong> All payments are securely processed via Recurrente.com under our parent company name, <strong>Inari Agency</strong>.
          </li>
          <li>
            <strong>External Factors:</strong> We are not liable for missed flights or delays caused by third-party factors (roadblocks, extreme weather, heavy traffic).
          </li>
        </ul>
      </section>

      {/* 1. Shared Shuttle Logistics */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          1. Shared Shuttle Logistics & Expectations
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Wait Times & Routing:</strong> Shared shuttles are a highly efficient, budget-friendly option operated in collaboration with our trusted local partners (using vans or microbuses). Because drivers must navigate multiple pick-up locations, <strong>departure and arrival times are estimates, not guarantees.</strong> Please expect pick-up wait windows ranging from 10 to 60 minutes, especially during peak seasons.
          </li>
          <li>
            <strong>Pick-up / Drop-off Zones:</strong> Shared routes only operate at specific hubs. In Antigua, pick-ups are limited to the central zone. In Guatemala City, drop-offs and pick-ups are strictly limited to the airport perimeter and select nearby zones. Door-to-door hotel service is not guaranteed for shared routes.
          </li>
          <li>
            <strong>Tight Schedules:</strong> If you have a strict flight departure, a time-sensitive itinerary, or prefer not to wait on other passengers, <strong>we strongly advise booking an earlier shared departure or upgrading to our Private Transit tiers.</strong>
          </li>
        </ul>
      </section>

      {/* 2. Private & Blvck Tier Policies */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          2. Private & Blvck Tier Policies
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Service Conditions & Fleet:</strong> For our Private and Blvck tiers, Blvck Sheep operates Sedans, 5-passenger SUVs, or 7-passenger SUVs. To ensure a comfortable experience, we allow a <strong>maximum of 4 clients per trip</strong> in these vehicles. For larger private groups, we utilize our trusted partner network for premium van services.
          </li>
          <li>
            <strong>Schedule Flexibility & Notice:</strong> While we offer total flexibility, any changes to your departure time or route must be requested at least <strong>24 hours in advance</strong> so we can properly manage driver logistics.
          </li>
          <li>
            <strong>Short-Notice Adjustments:</strong> Changes requested within 24 hours of your trip are strictly subject to availability. They may incur additional fees or be declined if they conflict with our drivers' overlapping schedules.
          </li>
        </ul>
      </section>

      {/* 3. Luggage Constraints */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          3. Luggage Constraints & Vehicle Capacity
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>The Standard Allowance (Golden Rule):</strong> The baseline allowance for all passengers is one (1) large suitcase and one (1) personal item (such as a backpack or purse). For shared shuttles, there are exceptions to this rule but depends on the number of passengers and the size of their luggage. Please notify if you bring any extras.
          </li>
          <li>
            <strong>Private Transit & Advance Notice:</strong> Because our Private and Blvck tier fleets range from Sedans to larger 7-passenger SUVs, total cargo capacity varies per trip. We can happily accommodate extra luggage on private routes, but <strong>you must notify us at the time of booking</strong> so we can dispatch the correct vehicle size.
          </li>
          <li>
            <strong>Failure to Disclose Excess Luggage:</strong> If you arrive at pick-up with undeclared extra baggage, Blvck Sheep is not liable if it cannot safely fit in your assigned vehicle. The client assumes full responsibility for any resulting consequences, which may include paying for a secondary vehicle, significant travel delays, or the possibility that a larger vehicle is not immediately available.
          </li>
          <li>
            <strong>Oversized Items:</strong> For exceptionally large items (e.g., surfboards, large instruments, or bicycles), please notify us in advance. Additional fees may apply.
          </li>
        </ul>
      </section>

      {/* 4. Third-Party Factors & Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          4. Third-Party Factors & Liability
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Out of Our Control:</strong> Traveling in Guatemala involves navigating unpredictable elements. Blvck Sheep is not liable for delays, missed flights, or cancellations caused by factors outside our direct control, including roadblocks, political protests, severe weather, mechanical issues, natural disasters, or unexpected heavy traffic. We encourage clients to plan accordingly, especially during high-demand seasons (e.g., Holy Week, Christmas, New Year). We can advise on timeframes but are not responsible for delays caused by third-party factors.
          </li>
          <li>
            <strong>Personal Belongings:</strong> Passengers are entirely responsible for their personal items. While we will assist in locating forgotten belongings, we cannot guarantee the recovery of lost items in our vehicles or partner vans.
          </li>
        </ul>
      </section>

      {/* 5. Booking, Payments & Cancellations */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          5. Payments & Cancellations
        </h2>
        <ul className="list-disc pl-6 text-zinc-400 space-y-4 leading-relaxed marker:text-zinc-600">
          <li>
            <strong>Secure Processing (Inari Agency):</strong> All payments for Blvck Sheep services are securely processed through Recurrente.com under the legal name of our parent company, <strong>Inari Agency</strong>. When you receive a payment link or confirmation, you will see Inari Agency listed as the payee. Rest assured, this is the legitimate and authorized business entity for Blvck Sheep.
          </li>
          <li>
            <strong>Refund Policy:</strong> Cancellations made 24 hours or more before the scheduled departure time qualify for a full refund. <strong>Cancellations made within 24 hours of the trip are strictly non-refundable.</strong>
          </li>
          <li>
            <strong>Late Bookings:</strong> Last-minute reservations (within 8 hours of departure) are subject to immediate availability and may incur expedited logistics charges.
          </li>
        </ul>
      </section>

      {/* 6. Contact Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-normal mb-6 text-white border-b border-zinc-800 pb-2">
          6. Contact & Support
        </h2>
        <p className="text-zinc-400 mb-4">
          For questions regarding your booking, logistical changes, or general inquiries, please reach out to our dispatch team:
        </p>
        <ul className="list-disc pl-6 text-zinc-400 space-y-2 marker:text-zinc-600">
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/50255116881"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              +502 5511 6881
            </a>
          </li>
          <li>
            Email:{" "}
            <a 
              href="mailto:connect@blvck-sheep.com" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              connect@blvck-sheep.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}