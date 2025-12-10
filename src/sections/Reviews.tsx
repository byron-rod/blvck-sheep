"use client";
import Tag from "@/components/Tag";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

// Mock data for testimonials (will be replaced with dynamic data)
const mockTestimonials = [
  {
    id: 1,
    author: "Steven Taylor",
    review:
      "Excellent service and communication; in addition to better prices than most other options I saw. Drivers coordinated when plans had to change due to traffic problems and got us back to the airport on-time from el paredon. Highly reccomend.",
    rating: 5,
  },
  {
    id: 2,
    author: "Yashmeen Khan",
    review:
      "Im an elderly female who needed a solo private ride from the airport to Lake Atitlan and found the perfect shuttle service with Byron, the owner of Blvck Sheep. Byron not only made me feel safe but was such a caring and interesting companion for the few hours of the drive. He made stops to attend to my needs, helped me with cellphone data and recommended my hotel which I was happy with. He gave me a great deal of tips and advice for my stay in Atitlan and was always pleasant and friendly throughout the journey, making the time fly by. Byron is a kind soul and a good person to have at the helm of your journey of a few hours.",
    rating: 5,
  },
  {
    id: 3,
    author: "Paige Biencourt",
    review:
      "I can't recommend Blvck Sheep highly enough! From start to finish, our experience with Byron was exceptional. The car was spotless, comfortable, and perfect for exploring Guatemala, making the journey smooth and enjoyable. What truly set Byron apart was his wealth of local knowledge. He didn&apost just take us from place to place—he shared fascinating, unique insights that gave us a deeper appreciation for Guatemalan culture, history, and hidden gems. His recommendations were spot-on, and we felt like we were getting an insider's perspective that most tourists miss. Beyond that, Byron was professional, punctual, and a pleasure to be around. If you're looking for a reliable and knowledgeable driver in Guatemala, Blvck Sheep is the way to go! We will absolutely be booking with them again on our next visit.",
    rating: 5,
  },
  {
    id: 4,
    author: "Brad Corbett",
    review:
      "This is hands down the best way to get to panajchel from the capital and back. The service is new and just starting up so there aren't a ton of reviews yet, but they have been flexible and dependable. Arrived on time. Byron was our driver and speaks perfect English. There was a lot of traffic leaving the capital so it took a little while and we were so glad we weren't crammed in a van with a bunch of other tourists. The car was nice and clean. Can't recommend this service enough.",
    rating: 5,
  },
  {
    id: 5,
    author: "Paula Martinez Olmo",
    review:
      "Recomendado 100%. Son muy flexibles con los horarios y precios muy económicos para el servicio de alta calidad que ofrecen. En mi caso, Byron, el conductor, fue en todo momento muy amable y atento, haciéndome recomendaciones y haciendome sentir segura al quedarse esperándome hasta que me abriesen la puerta del hostel, pues era de madrugada.",
    rating: 5,
  },
  {
    id: 6,
    author: "Fabiola Koloff",
    review:
      "Para empezar el piloto muy amable, hizo que el viaje fuera muy placentero, con muy buena música, precavido para manejar. Lo recomiendo muy seguro para viajar.",
    rating: 5,
  },
  {
    id: 7,
    author: "Irene Sander",
    review:
      "Realmente fue una experiencia excelente, servicio por parte de Byron, aparte del traslado, estuvo al pendiente de nosotras todo el viaje aunque no nos tocara estar con el, recomendaciones de restaurantes, de paseos o lugares que visitar, gracias por esta grata experiencia que hizo que nos encantara Guatemala.",
    rating: 5,
  },
  {
    id: 8,
    author: "Noah Parks",
    review:
      "Byron was amazing! We rode from the airport in Guatemala City to Panajachel. His communication was excellent and his car was immaculate. Would definitely use Black Sheep in the future.",
    rating: 5,
  },
  {
    id: 9,
    author: "Tom Riggs",
    review:
      "Very punctual, reliable, and friendly service. Would definitely hire again.",
    rating: 5,
  },
  {
    id: 10,
    author: "Renatha Blonde",
    review:
      "Muchas gracias a Blvck Sheep y Byron por haber sido parte de nuestro viaje a Guatemala. Siempre estuvo a tiempo por nosotras y siempre nos sentimos seguras y en confianza",
    rating: 5,
  },
  {
    id: 11,
    author: "Luis Miguel Torres",
    review:
      "Excelente persona, muy puntual y dio excelentes recomendaciones durante el viaje. Altamente recomendado!",
    rating: 5,
  },
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-2xl ${
        index < rating ? "text-yellow-400" : "text-gray-400"
      }`}
    >
      ★
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default function Reviews() {
  // Google Reviews URL
  const googleReviewsUrl =
    "https://www.google.com/search?sca_esv=44785faec4b38403&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzRTyKwwlVPVvfhff3cuThV83efgYTZfIExpXi9I3WmPus2PlubctDAsiFYnMcU2GHMxW0MrJ1Mfe95iFyOwtCuF6XXQKdID-fj8tek3avuw0o3oGfg%3D%3D&q=Blvck+Sheep+Shuttles+Reviews&sa=X&ved=2ahUKEwj4h5HH45GNAxWXSjABHTY4EjcQ0bkNegQIMRAD&biw=1536&bih=702&dpr=1.25";

  return (
    <section className="py-24 lg:py-32 overflow-hidden" id="reviews">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Testimonials</Tag>
        </div>
        <h2 className="text-4xl lg:text-5xl text-center mt-6">
          Client <span className="text-blue-400">Reviews</span>
        </h2>
        <div className="h-[400px] lg:h-[500px] mt-12 overflow-hidden mask-destination-gradient">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-50%" }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-8"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-8">
                {mockTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-4">
                      <StarRating rating={testimonial.rating} />
                      <h3 className="text-2xl font-medium">
                        {testimonial.author}
                      </h3>
                    </div>
                    <p className="text-white/50 mt-4">{testimonial.review}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white rounded-full hover:bg-blue-500 transition-colors"
          >
            <FaGoogle className="h-6 w-6 mr-2" /> {/* Use the Google icon */}
            View All Reviews on Google
          </Link>
        </div>
      </div>
    </section>
  );
}
