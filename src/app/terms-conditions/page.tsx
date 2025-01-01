export const metadata = {
  title: "Terms and Conditions - Black Sheep Shuttle Service",
  description:
    "Read the terms and conditions for using Black Sheep's personalized shuttle services in Guatemala.",
};

export default function TermsConditions() {
  return (
    <main className="container mx-auto max-w-4xl py-8 px-6 lg:px-0">
      <h1 className="text-4xl font-bold mb-6 text-center text-neutral-700">
        Blvck Sheep Shuttle Service Terms and Conditions
      </h1>
      <p className="text-lg mb-6 text-neutral-400">
        Welcome to Blvck Sheep! We provide a personalized and exclusive shuttle
        service in Guatemala, designed for comfort and convenience. By using our
        services, you agree to the following terms and conditions:
      </p>

      {/* General Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-700">
          1. General Terms
        </h2>
        <ul className="list-disc pl-6 text-neutral-400 space-y-4">
          <li>
            <strong>Service Conditions:</strong> Black Sheep operates
            7-passenger SUVs with a maximum of 5 clients per trip for a more
            private and comfortable experience. Delays or schedule adjustments
            may occur due to traffic, weather, or other unforeseen
            circumstances. We&apos;ll always strive to minimize disruptions and
            keep you informed.
          </li>
          <li>
            <strong>Personal Responsibility:</strong> Passengers are responsible
            for their belongings. While we&apos;ll do our best to assist, we
            cannot guarantee recovery of lost items.
          </li>
          <li>
            <strong>Third-Party Factors:</strong> Black Sheep is not liable for
            delays or cancellations caused by roadblocks, mechanical issues,
            traffic, or natural disasters. We encourage clients to plan
            accordingly, especially during high-demand seasons (e.g., Holy Week,
            Christmas, New Year).
          </li>
          <li>
            <strong>Payment Processing Information:</strong> All payments for
            Black Sheep services are securely processed through Recurrente.com,
            under the legal name of our parent company, Inari Agency. When you
            receive a payment link or confirmation, you may see Inari Agency
            listed as the payee. Rest assured, this is the legitimate and
            authorized business entity for Black Sheep. If you have any
            questions or concerns regarding your payment, please contact us
            immediately.
          </li>
        </ul>
      </section>

      {/* Booking and Payment Policies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-700">
          2. Booking and Payment Policies
        </h2>
        <ul className="list-disc pl-6 text-neutral-400 space-y-4">
          <li>
            <strong>How to Book:</strong> Reservations can be made via WhatsApp
            or through our trusted hostel partners at least 48 hours prior your
            departure time. Choose your destination, check availability, make
            your payment, and secure your spot.
          </li>
          <li>
            <strong>Payment Methods:</strong> We accept payments via credit card
            (Visa or Mastercard) through our partner, Recurrente.com. Bank
            transfers and payments through our trusted hostel partners are also
            accepted. Payments are refundable up to 24 hours before your trip.
          </li>
          <li>
            <strong>Late Bookings:</strong> We can manage last-minute bookings
            with at least 24 hour prior your departure, but are subject to
            availability and may incur additional charges.
          </li>
        </ul>
      </section>

      {/* Cancellation and Rescheduling */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-700">
          3. Cancellation and Rescheduling Policies
        </h2>
        <ul className="list-disc pl-6 text-neutral-400 space-y-4">
          <li>
            <strong>General Cancellations:</strong> Cancellations made 24 hours
            or more before departure qualify for a full refund. Cancellations
            made within 24 hours of the trip will not be refunded.
          </li>
          <li>
            <strong>Rescheduling:</strong> Trips can be rescheduled up to 24
            hours before departure at no extra cost. Changes within 24 hours may
            be accommodated but could incur additional fees and are subject to
            availability.
          </li>
          <li>
            <strong>Private Services:</strong> Rescheduling private services is
            free if notified 24 hours in advance. Additional stops or route
            adjustments may incur extra costs.
          </li>
        </ul>
      </section>

      {/* Luggage Policies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-700">
          4. Luggage Policies
        </h2>
        <ul className="list-disc pl-6 text-neutral-400 space-y-4">
          <li>
            <strong>Standard Luggage:</strong> Each passenger is allowed one
            large suitcase and one personal item. Excess luggage must be
            disclosed at booking to ensure space availability.
          </li>
          <li>
            <strong>Oversized or Special Luggage:</strong> For oversized items
            (e.g., surfboards), please notify us in advance. Additional fees may
            apply.
          </li>
          <li>
            <strong>Unapproved Luggage:</strong> Black Sheep reserves the right
            to refuse unapproved luggage at pick-up, and no refunds will be
            given in such cases.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-700">
          8. Contact Us
        </h2>
        <p className="text-neutral-400">
          For questions, changes, or additional information, contact us via:
        </p>
        <ul className="list-disc pl-6 text-neutral-400 space-y-2">
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/50255116881"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +502 5511 6881
            </a>
          </li>
          <li>Email: hello@blvck-sheep.com</li>
        </ul>
      </section>
    </main>
  );
}
