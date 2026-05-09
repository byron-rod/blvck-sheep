"use client";
import Tag from "@/components/Tag";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const content = {
  en: {
    tag: "Testimonials",
    headingPart1: "Client ",
    headingHighlight: "Reviews",
    button: "View All Reviews on Google",
    testimonials: [
      {
        id: 1,
        author: "Steven Taylor",
        review: "Excellent service and communication; in addition to better prices than most other options I saw. Drivers coordinated when plans had to change due to traffic problems and got us back to the airport on-time from el paredon. Highly reccomend.",
        rating: 5,
      },
      {
        id: 2,
        author: "Yashmeen Khan",
        review: "Im an elderly female who needed a solo private ride from the airport to Lake Atitlan and found the perfect shuttle service with Byron, the owner of Blvck Sheep. Byron not only made me feel safe but was such a caring and interesting companion for the few hours of the drive. He made stops to attend to my needs, helped me with cellphone data and recommended my hotel which I was happy with. He gave me a great deal of tips and advice for my stay in Atitlan and was always pleasant and friendly throughout the journey, making the time fly by. Byron is a kind soul and a good person to have at the helm of your journey of a few hours.",
        rating: 5,
      },
      {
        id: 3,
        author: "Paige Biencourt",
        review: "I can't recommend Blvck Sheep highly enough! From start to finish, our experience with Byron was exceptional. The car was spotless, comfortable, and perfect for exploring Guatemala, making the journey smooth and enjoyable. What truly set Byron apart was his wealth of local knowledge. He didn't just take us from place to place—he shared fascinating, unique insights that gave us a deeper appreciation for Guatemalan culture, history, and hidden gems. His recommendations were spot-on, and we felt like we were getting an insider's perspective that most tourists miss. Beyond that, Byron was professional, punctual, and a pleasure to be around. If you're looking for a reliable and knowledgeable driver in Guatemala, Blvck Sheep is the way to go! We will absolutely be booking with them again on our next visit.",
        rating: 5,
      },
      {
        id: 4,
        author: "Brad Corbett",
        review: "This is hands down the best way to get to panajchel from the capital and back. The service is new and just starting up so there aren't a ton of reviews yet, but they have been flexible and dependable. Arrived on time. Byron was our driver and speaks perfect English. There was a lot of traffic leaving the capital so it took a little while and we were so glad we weren't crammed in a van with a bunch of other tourists. The car was nice and clean. Can't recommend this service enough.",
        rating: 5,
      },
      {
        id: 5,
        author: "Paula Martinez Olmo",
        review: "100% recommended. They are very flexible with schedules and have very affordable prices for the high-quality service they offer. In my case, Byron, the driver, was very kind and attentive at all times, making recommendations and making me feel safe by waiting for me until they opened the hostel door, as it was early in the morning.",
        rating: 5,
      },
      {
        id: 6,
        author: "Fabiola Koloff",
        review: "To start, the driver was very kind, made the trip very pleasant, played great music, and drove safely. I highly recommend it as a very safe way to travel.",
        rating: 5,
      },
      {
        id: 7,
        author: "Irene Sander",
        review: "It was truly an excellent experience, great service from Byron. Apart from the transfer, he checked on us throughout the trip even when we weren't with him, gave us recommendations for restaurants, tours, and places to visit. Thank you for this pleasant experience that made us love Guatemala.",
        rating: 5,
      },
      {
        id: 8,
        author: "Noah Parks",
        review: "Byron was amazing! We rode from the airport in Guatemala City to Panajachel. His communication was excellent and his car was immaculate. Would definitely use Black Sheep in the future.",
        rating: 5,
      },
      {
        id: 9,
        author: "Tom Riggs",
        review: "Very punctual, reliable, and friendly service. Would definitely hire again.",
        rating: 5,
      },
      {
        id: 10,
        author: "Renatha Blonde",
        review: "Thank you very much to Blvck Sheep and Byron for being part of our trip to Guatemala. He was always on time for us and we always felt safe and confident.",
        rating: 5,
      },
      {
        id: 11,
        author: "Luis Miguel Torres",
        review: "Excellent person, very punctual and gave excellent recommendations during the trip. Highly recommended!",
        rating: 5,
      },
    ]
  },
  es: {
    tag: "Testimonios",
    headingPart1: "Reseñas de ",
    headingHighlight: "Clientes",
    button: "Ver Todas las Reseñas en Google",
    testimonials: [
      {
        id: 1,
        author: "Steven Taylor",
        review: "Excelente servicio y comunicación; además de mejores precios que la mayoría de opciones que vi. Los conductores se coordinaron cuando los planes tuvieron que cambiar debido a problemas de tráfico y nos llevaron de regreso al aeropuerto a tiempo desde el paredón. Muy recomendado.",
        rating: 5,
      },
      {
        id: 2,
        author: "Yashmeen Khan",
        review: "Soy una mujer mayor que necesitaba un viaje privado en solitario desde el aeropuerto hasta el Lago de Atitlán y encontré el servicio de transporte perfecto con Byron, el propietario de Blvck Sheep. Byron no solo me hizo sentir segura, sino que fue un compañero muy atento e interesante durante las pocas horas del viaje. Hizo paradas para atender mis necesidades, me ayudó con los datos del celular y me recomendó mi hotel con el cual quedé muy feliz. Me dio muchos consejos y recomendaciones para mi estadía en Atitlán y siempre fue agradable y amigable durante todo el trayecto, haciendo que el tiempo volara. Byron es un alma amable y una buena persona para tener al mando de tu viaje de unas pocas horas.",
        rating: 5,
      },
      {
        id: 3,
        author: "Paige Biencourt",
        review: "¡No puedo recomendar a Blvck Sheep lo suficiente! De principio a fin, nuestra experiencia con Byron fue excepcional. El auto estaba impecable, cómodo y perfecto para explorar Guatemala, haciendo el viaje suave y agradable. Lo que realmente distinguió a Byron fue su gran conocimiento local. No solo nos llevó de un lugar a otro, sino que compartió ideas fascinantes y únicas que nos dieron una mayor apreciación de la cultura guatemalteca, la historia y sus joyas ocultas. Sus recomendaciones fueron exactas y sentimos que estábamos obteniendo la perspectiva de un local que la mayoría de los turistas se pierden. Además de eso, Byron fue profesional, puntual y un placer estar cerca de él. Si buscas un conductor confiable y conocedor en Guatemala, ¡Blvck Sheep es la opción! Sin duda reservaremos con ellos nuevamente en nuestra próxima visita.",
        rating: 5,
      },
      {
        id: 4,
        author: "Brad Corbett",
        review: "Esta es sin duda la mejor manera de llegar a Panajachel desde la capital y de regreso. El servicio es nuevo y apenas está comenzando, por lo que aún no hay muchas reseñas, pero han sido flexibles y confiables. Llegó a tiempo. Byron fue nuestro conductor y habla un inglés perfecto. Había mucho tráfico saliendo de la capital, por lo que tomó un poco de tiempo y estuvimos muy contentos de no estar amontonados en una camioneta con un montón de otros turistas. El auto estaba bonito y limpio. No puedo recomendar este servicio lo suficiente.",
        rating: 5,
      },
      {
        id: 5,
        author: "Paula Martinez Olmo",
        review: "Recomendado 100%. Son muy flexibles con los horarios y precios muy económicos para el servicio de alta calidad que ofrecen. En mi caso, Byron, el conductor, fue en todo momento muy amable y atento, haciéndome recomendaciones y haciendome sentir segura al quedarse esperándome hasta que me abriesen la puerta del hostel, pues era de madrugada.",
        rating: 5,
      },
      {
        id: 6,
        author: "Fabiola Koloff",
        review: "Para empezar el piloto muy amable, hizo que el viaje fuera muy placentero, con muy buena música, precavido para manejar. Lo recomiendo muy seguro para viajar.",
        rating: 5,
      },
      {
        id: 7,
        author: "Irene Sander",
        review: "Realmente fue una experiencia excelente, servicio por parte de Byron, aparte del traslado, estuvo al pendiente de nosotras todo el viaje aunque no nos tocara estar con el, recomendaciones de restaurantes, de paseos o lugares que visitar, gracias por esta grata experiencia que hizo que nos encantara Guatemala.",
        rating: 5,
      },
      {
        id: 8,
        author: "Noah Parks",
        review: "¡Byron fue increíble! Viajamos desde el aeropuerto en la Ciudad de Guatemala a Panajachel. Su comunicación fue excelente y su auto estaba impecable. Definitivamente usaría Black Sheep en el futuro.",
        rating: 5,
      },
      {
        id: 9,
        author: "Tom Riggs",
        review: "Servicio muy puntual, confiable y amable. Definitivamente lo contrataría de nuevo.",
        rating: 5,
      },
      {
        id: 10,
        author: "Renatha Blonde",
        review: "Muchas gracias a Blvck Sheep y Byron por haber sido parte de nuestro viaje a Guatemala. Siempre estuvo a tiempo por nosotras y siempre nos sentimos seguras y en confianza",
        rating: 5,
      },
      {
        id: 11,
        author: "Luis Miguel Torres",
        review: "Excelente persona, muy puntual y dio excelentes recomendaciones durante el viaje. Altamente recomendado!",
        rating: 5,
      },
    ]
  }
};

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

export default function Reviews({ activeLanguage = "en" }: { activeLanguage?: "en" | "es" }) {
  const data = content[activeLanguage];
  // Google Reviews URL
  const googleReviewsUrl =
    "https://www.google.com/search?sca_esv=44785faec4b38403&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzRTyKwwlVPVvfhff3cuThV83efgYTZfIExpXi9I3WmPus2PlubctDAsiFYnMcU2GHMxW0MrJ1Mfe95iFyOwtCuF6XXQKdID-fj8tek3avuw0o3oGfg%3D%3D&q=Blvck+Sheep+Shuttles+Reviews&sa=X&ved=2ahUKEwj4h5HH45GNAxWXSjABHTY4EjcQ0bkNegQIMRAD&biw=1536&bih=702&dpr=1.25";

  return (
    <section className="py-24 lg:py-32 overflow-hidden" id="reviews">
      <div className="container">
        <div className="flex justify-center">
          <Tag>{data.tag}</Tag>
        </div>
        <h2 className="text-4xl lg:text-5xl text-center mt-6">
          {data.headingPart1}<span className="text-blue-400">{data.headingHighlight}</span>
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
                {data.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-black border border-white/10 rounded-3xl p-6"
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
            {data.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
