// src/data/journal.ts

export type ContentBlock = {
  type: 'heading' | 'paragraph' | 'image' | 'cta';
  value?: string;
  link?: string; // Used if type is 'cta'
  url?: string;     // <-- Agregamos esto
  caption?: string;
};

export type JournalPost = {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  category: string;
  language: "en" | "es";
  content: ContentBlock[];
};

import decodingJournalImage from "@/assets/images/decoding-journal.png";
import roadguideJournalImage from "@/assets/images/roadguide-journal.png";
import simJournalImage from "@/assets/images/sim-journal.png";
import acatenangoJournalImage from "@/assets/images/fuego-volcano.png";



export const journalData: JournalPost[] = [
  {
    id: "guia-pueblos-lago-atitlan",
    title: "Descifrando el Lago de Atitlán: ¿Qué pueblo es el ideal para ti?",
    excerpt: "El Lago de Atitlán no es un destino único; es una red compleja de microculturas distintas. Aquí tienes la guía de un experto local para elegir la orilla perfecta según tu estética y energía.",
    publishDate: "5 de mayo de 2026",
    readTime: "8 MIN DE LECTURA",
    heroImage: decodingJournalImage.src, 
    category: "Guías Exclusivas",
    language: "es",
    content: [
      {
        type: "paragraph",
        value: "Uno de los errores más comunes que cometen los viajeros al reservar su itinerario por Guatemala es tratar al Lago de Atitlán como un destino único y uniforme. La realidad es que el lago es una enorme caldera rodeada por una docena de pueblos distintos, cada uno ferozmente independiente y vibrando con una energía completamente diferente. Después de media década recibiendo y navegando por estas aguas, hemos visto a innumerables viajeros reservar el pueblo equivocado para su vibra—terminando en un ruidoso centro de mochileros cuando querían lujo silencioso, o viceversa."
      },
      {
        type: "heading",
        value: "Panajachel: La Puerta Estratégica"
      },
      {
        type: "paragraph",
        value: "Conocido localmente como 'Pana', este es el motor económico del lago, el punto de entrada principal y el pueblo al que Blvck Sheep llama orgullosamente su hogar. Si bien es el pueblo más concurrido, ofrece la mejor infraestructura: la red eléctrica y de internet de fibra óptica más estable del lago (otros pueblos sufren de apagones frecuentes), el mercado de agricultores más grande de Sololá, bancos para cambios de dolares, y los muelles públicos principales. Dado que Pana es el centro principal de transporte, los muelles operan hasta más tarde que en cualquier otro pueblo, hasta las 7:30 PM. Si llegas después de esta hora, podemos organizar una lancha privada que funciona las 24 horas del día, los 7 días de la semana; solo solicita este servicio al reservar tu traslado. Para los nómadas digitales y las familias, es el campamento base más seguro y conveniente. Cuenta con una hermosa playa pública (la única en el lago) y una vibrante comunidad internacional asegura que siempre haya una cena, evento o reunión curada en marcha. Pana se siente menos como un retiro aislado o lo lo que se le conocen como 'pueblitos mágicos', y más como un pueblo a orillas del lago completamente funcional y dinámico."
      },
      {
        type: "heading",
        value: "San Marcos La Laguna: El Santuario Holístico"
      },
      {
        type: "paragraph",
        value: "Si tu itinerario incluye ceremonias de cacao, retiros de yoga, hongos psicodélicos y una inmersión profunda en el bienestar, San Marcos es tu santuario. Es un paraíso bohemio famoso por sus senderos estrechos cubiertos de selva y su comunidad espiritual. Yo lo llamo 'hippie chic'. La vibra aquí es increíblemente relajada, lo que lo convierte en uno de los lugares más buscados por los turistas que buscan restauración. Ten en cuenta que el pueblo se queda completamente en silencio temprano en la noche; está diseñado para la sanación, no para la vida nocturna. La reciente afluencia de turismo de bienestar internacional lo convierte en uno de los pueblos con precios más premium. Es importante señalar que esta rápida gentrificación ha afectado negativamente a la comunidad local, creando una dinámica interesante entre los locales profundamente arraigados y la multitud de turistas transeúntes."
      },
      {
        type: "heading",
        value: "San Juan La Laguna: El Latido Maya"
      },
      {
        type: "paragraph",
        value: "San Juan es posiblemente el pueblo visualmente más impresionante y culturalmente mejor conservado del lago. Gobernado por fuertes cooperativas locales, la comunidad maya se mantiene unida para mantener un pueblo autosustentable y profundamente respetuoso de sus raíces indígenas. Es el epicentro absoluto del tejido textil auténtico, los procesos de teñido natural y las galerías de arte indígena (puedes explorar más sobre sus increíbles iniciativas comunitarias en <a href=\"https://www.sanjuanlalaguna.com.gt/\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">sanjuanlalaguna.com.gt</a>). Es más limpio, más tranquilo y muy recomendable para una estancia culturalmente inmersiva. San Juan también es el punto de partida para la caminata al <a href=\"https://www.sanjuanlalaguna.com.gt/es/atractivos-turisticos/rostro-maya\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Rostro Maya (Nariz del Indio)</a>, una de nuestras caminatas guiadas favoritas absolutas para ver el amanecer en Atitlan desde lo alto."
      },
      {
        type: "heading",
        value: "Santa Cruz La Laguna: El Escape Lujoso"
      },
      {
        type: "paragraph",
        value: "Accesible casi exclusivamente por bote, Santa Cruz es un pueblo tranquilo construido escarpado en el acantilado. Ofrece hermosas propiedades frente al lago, excelentes restaurantes y paisajes dramáticos. Es un pueblo de contrastes brillantes: puedes encontrar un aislamiento absoluto en Airbnbs privados, o puedes encontrar una conexión de alta energía en <a href=\"/hostels/free-cerveza\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Free Cerveza</a>, uno de los hostales sociales más legendarios de Guatemala, famoso por su ambiente de campamento de verano y su vibrante atmósfera social."
      },
      {
        type: "heading",
        value: "San Pedro La Laguna: El Centro Mochilero"
      },
      {
        type: "paragraph",
        value: "Conocido cariñosamente por los locales como 'San Pedro La Locura', este es el epicentro indiscutible para el público mochilero más joven: el mejor pueblo de fiesta. Es un laberinto de calles estrechas y vibrantes cubiertas de arte de grafiti, repletas de centros sociales, hostales de fiesta y una enérgica vida nocturna. Navegar por sus callejones estrechos en un tuk-tuk es un rito de iniciación, especialmente después de una noche divertida con nuevos amigos. Mantente atento: pronto publicaremos una entrada en el blog dedicada a detallar nuestros lugares favoritos de comida solo para locales, bares escondidos y cosas para hacer en San Pedro que solo los lugareños conocen."
      },
      {
        type: "heading",
        value: "Santiago Atitlán: El Epicentro Cultural"
      },
      {
        type: "paragraph",
        value: "Como la comunidad indígena más grande del lago, Santiago ofrece una experiencia guatemalteca profundamente auténtica. Si quieres presenciar el verdadero latido comercial del lago, visítalo durante sus enormes días de mercado los jueves y domingos, donde las calles explotan con textiles vibrantes, productos frescos y artesanos locales. También alberga el santuario de Maximón, una fascinante mezcla de tradiciones mayas y católicas."
      },
      {
        type: "heading",
        value: "Cerro de Oro: La Joya Escondida"
      },
      {
        type: "paragraph",
        value: "Escondido entre San Lucas Tolimán y Santiago, Cerro de Oro es el secreto mejor guardado del lago. Si buscas desconectarte completamente de la escena social, aquí es adonde debes ir. Alberga algunos de los Airbnbs más espectaculares y aislados sobre el agua: piensa en exuberantes jardines privados, jacuzzis, chimeneas rugientes y muelles para nadar prístinos y privados. Es la mejor opción para un retiro privado con familia o amigos cercanos. Dale un vistazo a este bello lugar: <a href=\"https://www.tiktok.com/@blvcksheepgt/video/7622522484465896711\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Cerro de Oro</a>."
      },
      {
        type: "heading",
        value: "Los Palopos: La Costa Artesanal y de Lujo"
      },
      {
        type: "paragraph",
        value: "Santa Catarina Palopó y San Antonio Palopó se encuentran en el extremo oriental del lago, lejos de los principales circuitos turísticos. Santa Catarina está a unos 15 minutos en coche de Panajachel, y San Antonio está a unos 30 minutos en coche de Pana. Santa Catarina es famosa por sus casas pintadas de colores vibrantes y sus aguas termales. También alberga estancias boutique de lujo de clase mundial como <a href=\"/hotels/casa-palopo\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Casa Palopó</a>, lo que la hace perfecta para una escapada romántica de alto nivel. Justo bajando por la calle, San Antonio Palopó sigue siendo un pueblo tranquilo y auténtico, mundialmente conocido por su magistral cerámica."
      },
      {
        type: "heading",
        value: "La Estrategia de Llegada de Blvck Sheep"
      },
      {
        type: "paragraph",
        value: "Mientras que los shuttles estándar (y nuestras opciones compartidas) te dejarán en el Muelle Tzanjuyú, el muelle principal en Pana, el servicio privado de Blvck Sheep opera de manera diferente. Con nuestros traslados privados, puedes viajar en cualquier momento. Podemos llevarte directamente a cualquier pueblo del Lago de Atitlán desde cualquier parte del país, ya sea que vengas de Antigua, la Ciudad de Guatemala, El Paredón o Semuc Champey."
      },
      {
        type: "cta",
        value: "Asegura tu Traslado al Lago",
        link: "https://wa.me/50255116881?text=¡Hola!,%20¡Necesito%20un%20shuttle%20al%20Lago%20de%20Atitlán!"
      }
    ]
},
  {
    id: "donde-comer-antigua-guatemala-parte-1",
    title: "Dónde Comer en Antigua, Parte 1: Mis 10 Lugares Favoritos",
    excerpt: "¿Con hambre en la ciudad colonial? Te ahorramos la búsqueda con nuestra selección personal de los 10 mejores spots en Antigua Guatemala: desde ceviches legendarios hasta alta cocina volcánica.",
    publishDate: "16 de Abril, 2026",
    readTime: "6 MIN DE LECTURA",
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop", 
    category: "Gastronomía y Cultura",
    language: "es",
    content: [
      {
        type: "paragraph",
        value: "Antigua ha sido mi lugar favorito para buscar nuevos restaurantes; cada semana hay algo nuevo, nuevos sabores y nuevos ambientes. En este pueblo colonial que cuenta con demasiadas opciones culinarias, a veces es dificil decidir a donde ir. "
      },
      {
        type: "paragraph",
        value: "Para la Parte 1 de nuestra guía gastronómica, les comparto 10 de mis lugares locales favoritos en Antigua Guatemala. Desde remedios casuales para la resaca, o como le decimos en Guate, la Goma, hasta fusión culinaria de alta gama, estos lugares ofrecen el servicio y la atmósfera, pero sobre todo el sabor."
      },
      {
        type: "heading",
        value: "Coffea Cafés"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Top 100 de Mejores Cafeterias del Mundo.</strong> Coffea Cafés Especiales es una cafetería de especialidad ubicada en el corazón de Antigua Guatemala. Sirven cafés de alta calidad y trazabilidad, obtenidos directamente de pequeños caficultores guatemaltecos, con procesos diversos como natural, lavado y honey. Estas en Guatemala, por favor hay mas opciones que Starbucks, somos reconocidos mundialmente por nuestro café, apoyemos a los caficultores locales. <br/><br/><a href='https://www.instagram.com/coffea.gt/' target='_blank' class='text-blue-400 hover:underline'>View on Instagram</a>"
      },
      {
        type: "heading",
        value: "Luna de Miel"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Antojos Dulces.</strong> Si tu cuerpo pide azúcar después de escalar un volcán, esta es la apuesta más segura de la ciudad. Luna de Miel es una institución en Antigua famosa por sus crepas masivas y perfectamente preparadas. Es un lugar relajado, consistentemente bueno e innegablemente reconfortante. <br/><br/><a href='https://www.instagram.com/lunademielantigua' target='_blank' class='text-blue-400 hover:underline'>Ver en Instagram</a>"
      },
      {
        type: "heading",
        value: "Hector's Deli & Bistro"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Comodidad Confiable de Alta Calidad y Deli.</strong> Cuando solo quieres un sándwich increíblemente bien hecho y una copa de vino sin una atmósfera rígida y demasiado formal. Hector's es íntimo, y ofrece comida que se siente como un abrazo cálido después de un largo día de viaje. <br/><br/><a href='https://www.instagram.com/hectorsbistro' target='_blank' class='text-blue-400 hover:underline'>Ver en Instagram</a>"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
        caption: "Encontrar una comida cómoda y confiable es la mejor manera de anclarte en una nueva ciudad."
      },
      {
        type: "heading",
        value: "Samsara"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Bienestar con Misticismo.</strong> Desde 2014, Samsara ha sido el santuario definitivo de Antigua para la nutrición funcional basada en plantas. Inspirado en la filosofía ayurvédica, su menú actúa como un botón de reinicio para el viajero cansado. Desde su kombucha de barril y fermentos caseros (como kimchi y tempeh) hasta sus tazones curativos de kitchary con especias, cada ingrediente se elige para restaurar tu energía y equilibrar tu sistema. Es el lugar ideal para nutrir tu cuerpo de manera limpia e intencional. <br/><br/><a href='https://www.samsara.com.gt/' target='_blank' class='text-blue-400 hover:underline'>Visitar Sitio Web</a>"
      },
      {
        type: "heading",
        value: "Arbol"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Japonés Auténtico.</strong> Puede que no esperes comida japonesa excepcional en las tierras altas de Centroamérica, pero Arbol cumple con creces. Es auténtico, minimalista y proporciona una experiencia gastronómica tranquila y enfocada cuando deseas un descanso de las cocinas locales más pesadas. <br/><br/><a href='https://www.instagram.com/arbol_coffee_gt/' target='_blank' class='text-blue-400 hover:underline'>Ver en Instagram</a>"
      },
      {
        type: "heading",
        value: "La Bruja"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Cocina Vegana Consciente.</strong> Construida sobre la filosofía de que la comida es una forma de conectar con un propósito, La Bruja aprovecha al máximo el rico suelo volcánico de Antigua y su eterna primavera. Ofrecen un menú premium, 100% vegano, repleto de ingredientes frescos de origen local. Es el santuario perfecto cuando deseas una comida que sea tan profundamente nutritiva como bellamente elaborada, dejándote lleno de energía en lugar de pesado después de un día de exploración. <br/><br/><a href='https://www.labrujaveganfood.com/' target='_blank' class='text-blue-400 hover:underline'>Visitar Sitio Web</a>"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop",
        caption: "Desde auténticos bocados en la calle hasta fusión elevada, la escena gastronómica de Antigua es dinámica."
      },
      {
        type: "heading",
        value: "Hugo's"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Ceviche y la Legendaria 'Picosita'.</strong> Este es tu curso intensivo sobre cultura local de calle. Hugo's es famoso por sus mariscos y micheladas, pero estás aquí por las <em>Picositas Originales</em>. ¿Qué es una Picosita? Es un salvavidas guatemalteco por excelencia—usualmente una cerveza local bien fría servida directamente en la lata, aderezada con limón, sal, pimienta, salsa inglesa, picante y coronada con jugos de ceviche fresco y especias. Es el máximo refresco de tarde o cura para la resaca. <br/><br/><a href='https://www.instagram.com/hugosrestauranteantigua/' target='_blank' class='text-blue-400 hover:underline'>Visitar Instagram</a>"
      },
      {
        type: "heading",
        value: "El Portón Típico"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: La Mejor Comida Guatemalteca a Buen Precio.</strong> Viajar de manera inteligente significa saber dónde comen los locales. El Portón Típico ofrece platos guatemaltecos ricos y tradicionales a precios que tienen sentido. Es una forma accesible, sin pretensiones y muy satisfactoria de explorar el paladar local."
      },
      {
        type: "heading",
        value: "7A Norte"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Pizzas en la Terraza y Cervezas Frías.</strong> Cuando se pone el sol y solo quieres descomprimir. 7A Norte ofrece excelente pizza, cerveza fría y una vista desde la terraza que te recuerda exactamente por qué viajaste a Antigua en primer lugar. Simple, efectivo y profundamente relajante. <br/><br/><a href='https://www.instagram.com/7anorte' target='_blank' class='text-blue-400 hover:underline'>Ver en Instagram</a>"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop",
        caption: "A veces, la tranquilidad se ve exactamente como una pizza en una terraza después de un largo día de viaje."
      },
      {
        type: "heading",
        value: "Itzam"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Fusión Elevada y Alta Cocina.</strong> Para las noches en las que quieres arreglarte y experimentar la vanguardia de la gastronomía guatemalteca. Itzam fusiona la cultura del café, ingredientes locales y coctelería de clase mundial en una experiencia culinaria sofisticada y altamente intencional. <br/><br/><a href='https://www.itzam.com.gt/' target='_blank' class='text-blue-400 hover:underline'>Visitar Sitio Web</a>"
      },
      {
        type: "heading",
        value: "Mesón Panza Verde"
      },
      {
        type: "paragraph",
        value: "<strong>Vibra: Excelencia Clásica y Atmosférica.</strong> Posiblemente el salón de alta cocina más romántico y consolidado de la ciudad. Si buscas el mejor corte de carne en Antigua, combinado con un ambiente colonial inigualable y música en vivo, Panza Verde es la opción premium definitiva. <br/><br/><a href='https://www.panzaverde.com' target='_blank' class='text-blue-400 hover:underline'>Visitar Sitio Web</a>"
      },
      {
        type: "cta",
        value: "Reserva tu viaje a Antigua",
        link: "https://wa.me/50255116881?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20reservar%20un%20viaje%20seguro%20a%20Antigua."
      }
    ]
  },
  {
    id: "itinerario-5-dias-volcan-acatenango",
    title: "El Itinerario de 5-6 Días para Conquistar el Volcán Acatenango",
    excerpt: "Si viajas a Guatemala para ver el Volcán de Fuego en erupción, este es el plan logístico perfecto. Cómo aclimatarte primero en Atitlán, qué esperar del ascenso y dónde recuperar tus piernas después de la montaña.",
    publishDate: "6 de mayo de 2026",
    readTime: "6 MIN DE LECTURA",
    heroImage: acatenangoJournalImage.src, 
    category: "Itinerarios",
    language: "es",
    content: [
      {
        type: "paragraph",
        value: "Sabemos por qué estás aquí. Una gran mayoría de los viajeros que llegan a Guatemala tienen un objetivo principal en mente: pararse en la cima del Volcán Acatenango a casi 4,000 metros de altura y ver al vecino Volcán de Fuego escupir lava bajo un cielo estrellado. Es una de las experiencias más crudas e impresionantes del planeta."
      },
      {
        type: "paragraph",
        value: "No es ningun secreto, pero por si no lo sabias: el Acatenango es físicamente extenuante. En lo personal yo al viajar camino bastante, me gusta caminar por las calles de los pueblos o ciudades, por lo que recomiendo dejar al volcan para el final, asi tienen sus dias de caminar para un calentamiento. Este es el itinerario perfecto de 5 a 6 días enfocado en el volcán, pero aclimatándote de la manera correcta."
      },
      {
        type: "heading",
        value: "Día 1: Aterrizaje y Aclimatación en el Lago"
      },
      {
        type: "paragraph",
        value: "El mayor error de los novatos es intentar subir al volcán el mismo día o al día siguiente de aterrizar. Tu cuerpo necesita adaptarse a la altitud progresivamente. Al llegar al Aeropuerto Internacional La Aurora (GUA), toma un transporte directo a Panajachel, Lago de Atitlán. Primero, hay que disfrutar de las bellezas de Guatemala."
      },
      {
        type: "paragraph",
        value: "Tenemos 3 horarios de salida disponibles desde el aeropuerto para viajes compartidos (6:00 a.m., 10:30 a.m. y 1:30 p.m.), y nuestros viajes privados salen al horario exacto que necesites. Atitlán tiene bastantes pueblos que recorrer, por lo que es mejor tener las piernas frescas y empezar a aclimatarte en el lago más lindo del mundo. Para decidir en qué pueblo hospedarte, revisa nuestra <a href=\"/journal/guia-pueblos-lago-atitlan\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Guía de Pueblos de Atitlán</a>."
      },
      {
        type: "heading",
        value: "Día 2: Conoce tus Pueblos Favoritos de Atitlán"
      },
      {
        type: "paragraph",
        value: "Aprovecha la mañana para moverte en lancha y explorar la magia del lago. Puedes buscar paz y bienestar en San Marcos La Laguna, sumergirte en el arte y el tejido tradicional en San Juan La Laguna, o disfrutar de la energía y los cafés en San Pedro La Laguna."
      },
      {
        type: "cta",
        value: "Reservar Shuttle de Panajachel a Antigua",
        link: "https://wa.me/50255116881?text=¡Hola!,%20Necesito%20un%20shuttle%20de%20Panajachel%20hacia%20Antigua."
      },
      {
        type: "heading",
        value: "Día 3: Ultimas horas de Atitlan y viaje a Antigua"
      },
      {
        type: "paragraph",
        value: "Lo ideal es aprovechar al máximo la mañana en el lago, si vienen desde San Marcos, San Juan o San Pedro, pueden pasar la manana en Panajachel, conocer Santa Catarina Palopó o visitar la Reserva Atitlan, y salir a mediodía o por la tarde hacia Antigua Guatemala, para así estar listo para la montaña. Los horarios de salida de nuestros shuttles compartidos desde Panajachel hacia Antigua son a las 5:00 a.m., 9:00 a.m., 12:00 p.m. y 4:00 p.m."
      },
      {
        type: "paragraph",
        value: "<strong>Opción B (El Detour Express):</strong> Si prefieres transformar un simple día de tránsito en una expedición cultural, puedes personalizar tu ruta hacia Antigua con nuestras paradas estratégicas. Desvíate hacia Zunil para sumergirte en sus místicas aguas termales volcánicas envueltas en la niebla de la montaña. Si viajas un jueves o domingo, el icónico y vibrante mercado de Chichicastenango es una parada obligatoria. Finalmente, puedes hacer una pausa para disfrutar de la alta gastronomía local en Tecpán y caminar entre la historia viva de las antiguas ruinas kaqchikeles de Iximché."
      },
      {
        type: "cta",
        value: "Planifica tu Detour Express hacia Antigua",
        link: "https://wa.me/50255116881?text=¡Hola!,%20Me%20interesa%20planificar%20un%20traslado%20privado%20con%20un%20Detour%20Express%20hacia%20Antigua."
      },
      {
        type: "paragraph",
        value: "Al llegar a la ciudad colonial de Antigua, tu único objetivo de hoy es ir por algo rico de comer y preparte para el ascenso de mañana. Renta ropa de frío si te hace falta, prepara tu mochila y, sobre todo, ten una cena rica en carbohidratos para cargar energías para mañana. La ciudad está llena de opciones gastronómicas increíbles; échale un vistazo a nuestra guía sobre <a href=\"/journal/donde-comer-antigua-guatemala-parte-1\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">dónde comer en Antigua</a>. Vete a dormir temprano, porque mañana empieza el reto."
      },
      {
        type: "heading",
        value: "Día 4: El Volcán Acatenango"
      },
      {
        type: "paragraph",
        value: "Las agencias te recogerán temprano para llevarte a La Soledad, el punto de inicio. El ascenso toma entre 5 y 6 horas, atravesando tierras de cultivo, un místico bosque nuboso y, finalmente, arena volcánica alpina. Un consejo de oro de los expertos: lleva contigo varios bananos y cómelos durante el trayecto. El potasio te ayudará enormemente a evitar que las piernas se te acalambren por el esfuerzo constante."
      },
      {
        type: "paragraph",
        value: "Una vez en el campamento base (a unos 3,600 metros de altura), tendrás la vista en primera fila de las erupciones del Volcán de Fuego. Si tus piernas aún responden y quieres la experiencia definitiva, puedes pagar un extra a tu guía local para realizar la caminata adicional a la 'horqueta' (la cresta que conecta al Volcán de Fuego). Esto suma unas 3 a 4 horas extra de ida y vuelta al atardecer, pero te permite ver la lava expulsada a una distancia asombrosamente cerca. Es brutalmente cansado, pero vale cada gota de sudor."
      },
      {
        type: "heading",
        value: "Día 5: La Cumbre, el Descenso y el Descanso"
      },
      {
        type: "paragraph",
        value: "Te despertarás a las 4:00 a.m. en el frío extremo para el último empujón hacia la cumbre del Acatenango y presenciar un amanecer por encima de las nubes. Después de las fotos, comienza el descenso. Bajar toma unas 3 horas y es destructivo para las rodillas, asi que baja con paciencia y ciudado. Regresarás a Antigua alrededor del mediodía: exhausto, polvoriento y con las piernas temblando, pero mas feliz que nunca."
      },
      {
        type: "paragraph",
        value: "Ahora toca decidir cómo quieres consentir a tu cuerpo destruido:<br><br><strong>Opción A (Relajación local):</strong> Quédate en Antigua, disfruta de ciudad, una noche de fiesta para celebrar sobrevivir al volcan, o date un merecido banquete en tus restaurantes favoritos antes de volar al día siguiente.<br><br><strong>Opción B (Descompresión tropical):</strong> Viaja hacia la costa del Pacífico a <a href=\"/destinations/el-paredon\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">El Paredón</a>. Cambia tus botas de montaña por sandalias, recuéstate en una hamaca en un club de playa y deja que el calor del nivel del mar relaje tus músculos por completo."
      },
      {
        type: "cta",
        value: "Shuttles Cómodos a tu Siguiente Destino",
        link: "https://wa.me/50255116881?text=¡Hola!,%20Acabo%20de%20bajar%20del%20volcán%20y%20necesito%20un%20viaje%20cómodo."
      },
      {
        type: "heading",
        value: "Día 6: El Regreso Inteligente"
      },
      {
        type: "paragraph",
        value: "Dependiendo de a qué hora sea tu vuelo, puedes organizar un traslado directo desde Antigua o desde la playa de El Paredón hacia el Aeropuerto Internacional La Aurora. Asegúrate de coordinar este viaje con suficiente anticipación para no tener estrés en tu último día. Debes de llegar al aeropuerto con al menos 2 horas de anticipacion."
      },
    ]
  },
  {
    id: "antigua-to-lake-atitlan-guide",
    title: "The Ultimate Guide: Traveling from Antigua to Lake Atitlán in 2026",
    excerpt: "Everything you need to know about navigating Guatemala's most popular route. From surviving the chaotic 'chicken buses' to finding the perfect lakeside sanctuary.",
    publishDate: "February 12, 2026",
    readTime: "8 MIN READ",
    heroImage: roadguideJournalImage.src, 
    category: "Transit & Logistics",
    language: "en",
    content: [
      {
        type: "paragraph",
        value: "Making the 77-kilometer journey from the cobblestone streets of Antigua to the volcanic shores of Lake Atitlán is a rite of passage for anyone visiting Guatemala. However, this 2.5 to 3-hour drive through the highlands is not a simple straight line. Depending on your budget, your timeline, and your tolerance for dizzying mountain curves, there are three distinct ways to make this transit. After half a decade of navigating these exact roads, here is the unfiltered truth about how to get to the lake."
      },
      {
        type: "heading",
        value: "Option 1: The 'Chicken Bus' (Camioneta) Reality"
      },
      {
        type: "paragraph",
        value: "These brightly painted, souped-up former North American school buses are an iconic piece of the Guatemalan landscape. Traveling this way is incredibly cheap, but the true cost is your time and energy. It requires four separate transfers. You begin at the Antigua bus terminal (located behind the central market near Pollo Campero). You catch a bus heading to Chimaltenango (approx. 20 GTQ) and ask the 'ayudante' (the driver's assistant) to drop you off at the highway corner for Los Encuentros. From there, you flag down a bus heading toward Quiché or Xela, taking it to the Los Encuentros crossroads (10-20 GTQ). Next, you catch a bus dropping down into the Sololá department (5 GTQ), and finally, take your last bus descending into Panajachel. If you are catching a public boat, get off at the very first stop in Pana—it is a short walk down to Muelle Tzanjuyú."
      },
      {
        type: "paragraph",
        value: "<strong>The Brutal Truth:</strong> There is a famous local saying: <em>'Donde caben 3, caben 4'</em> (Where three fit, four fit). This perfectly sums up the camioneta experience. Drivers maximize profits by cramming as many people as physically possible into the seats and aisles. Your luggage will likely go on the roof, you will have zero personal space, and the drivers take the winding mountain curves at alarming speeds. We highly recommend taking a chicken bus for a short, 15-minute trip just for the cultural experience, but for a 3-hour transit with heavy bags? It is an extreme sport."
      },
      {
        type: "heading",
        value: "Option 2: The Shared Tourist Shuttle"
      },
      {
        type: "paragraph",
        value: "This is the standard backpacker choice. For about 125 to 150 GTQ ($16 - $20 USD), you book a seat in a 15-passenger van (Toyota Hiace or Nissan Urvan). They leave at specific, scheduled times daily. Depending on the season and traffic in Antigua, they will either pick you up at your hotel, or require you to meet at central hubs like Café Condesa at Central Park or popular hostels like Bloom."
      },
      {
        type: "paragraph",
        value: "<strong>The Route:</strong> Shared shuttles almost exclusively take the Patzún route to save time. This road cuts through deep agricultural valleys, crosses a small river gorge, and drops down through San Andrés Semetabaj before arriving in Pana. It is highly efficient, but the roads are incredibly narrow and aggressively winding. If you are prone to motion sickness, this route can be tough."
      },
      {
        type: "heading",
        value: "Option 3: The Private Alternative (Blvck Sheep)"
      },
      {
        type: "paragraph",
        value: "Your vacation time is your most valuable asset. For those who want to avoid the dizziness of the Patzún curves and the strict schedules of shared vans, booking a private transfer changes the entire tone of your travel day. At Blvck Sheep, our private transit routes bypass Patzún entirely. Instead, we take the Tecpán route."
      },
      {
        type: "paragraph",
        value: "Tecpán is located on Guatemala's primary highways, the CA-1 (Pan-American Highway). While the total distance is slightly longer than the Patzún shortcut, this highway offers significantly more room to breathe. Instead of navigating tight, single-lane mountain passes, the CA-1 features two wide lanes in each direction and vastly superior road conditions, making for a much smoother ride. Furthermore, Tecpán happens to be a celebrated culinary destination, famous for its artisanal cheeses, smoked sausages, and highway steakhouses."
      },
      {
        type: "paragraph",
        value: "More importantly, this route grants immediate access to the ancient Kaqchikel Mayan ruins of Iximché, the entrance is only Q5, if you are lucky you can get to witness a traditional mayan ceremony while exploring the ruins. We highly recommend this quick detour on your way to or from the lake. Our private drivers can pause your transit, allowing you to explore the ruins and enjoy an authentic local lunch before making the final descent to the water via the 'Las Trampas' route. This specific approach offers breathtaking, high-altitude views of the lake, plus all three volcanos, from the mountains before winding down through San Andrés Semetabaj and into Pana."
      },
      {
        type: "cta",
        value: "Secure Your Transfer to the Lake",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20want%20to%20book%20a%20shuttle%20from%20Antigua%20to%20Atitlan!"
      },
      {
        type: "heading",
        value: "Where to Drop Your Bags"
      },
      {
        type: "paragraph",
        value: "While Panajachel is the main logistical hub, our private transfers offer direct routes to several other accessible villages around Atitlan. The lake offers entirely different energies depending on which shoreline you choose. If you want high-energy social spaces and the backpacker crowd, head to San Pedro La Laguna. For a 'hippie-chic' vibe centered on yoga and meditation retreats, San Marcos is the place. If authentic Tz'utujil Mayan culture and incredible textile arts are your priority, San Juan La Laguna is unmatched. Finally, for absolute exclusivity, world-class boutique hotels, and silence, look toward Santa Catarina Palopó or Santa Cruz. If you require stable infrastructure, fast internet, and the convenience of a larger town, making Panajachel your basecamp is the smartest move."
      },
      {
        type: "cta",
        value: "Explore Our Curated Lake Atitlán Stays",
        link: "/hostels" 
      }
    ]
  },
  {
    id: "guatemala-sim-card-esim-guide",
    title: "How to Get Data in Guatemala: eSIMs vs. Local SIM Cards",
    excerpt: "Navigating mobile data in Guatemala can be surprisingly frustrating due to strict registration laws. Here is the ultimate guide to bypassing the paperwork and getting online the moment you land.",
    publishDate: "March 16, 2026",
    readTime: "5 MIN READ",
    heroImage: simJournalImage.src, 
    category: "Travel Hacks",
    language: "en",
    content: [
      {
        type: "paragraph",
        value: "Stepping off the plane at La Aurora International Airport and realizing you don't have internet access to pull up your hotel address or book a ride is a classic travel nightmare. While Guatemala has excellent mobile coverage, getting connected isn't as simple as just buying a SIM card at a convenience store."
      },
      {
        type: "heading",
        value: "The Reality of Guatemalan Mobile Networks"
      },
      {
        type: "paragraph",
        value: "The country runs on two major telecom giants: Tigo and Claro. Both offer excellent 4G/LTE coverage, with Tigo generally having a slight edge in remote areas like Semuc Champey or the smaller villages around Lake Atitlán. However, Guatemala enforces strict registration laws. To buy a physical SIM card, you must present your physical passport (copies often aren't accepted) and wait for a clerk to manually register your device in the national database. Doing this at the airport means waiting in massive lines, and doing it in town eats into your vacation time."
      },
      {
        type: "heading",
        value: "Option 1: The Instant Solution (eSIMs)"
      },
      {
        type: "paragraph",
        value: "If your phone is unlocked and eSIM compatible, you can bypass the physical paperwork entirely. You buy the plan online before your flight, install the digital profile, and activate it the second your plane touches the tarmac. It is incredibly convenient, though you will pay a premium for the data compared to local rates."
      },
      {
        type: "paragraph",
        value: "We recommend checking rates on three reliable global providers: Airalo, Yesim and Drimsim. Airalo is the industry standard for travelers, they cover pretty much the entire world and it has competitive prices. Drimsim is a new option that has both international SIM cards, which they can deliver to your home address, this is the best option if you want to save some money in the long run, and they also have one of the best prices in the market for eSIMs. Yesim is another good option, although prices vary depending on the region."
      },
      {
        type: "cta",
        value: "Check Guatemala Rates on Airalo",
        link: "https://airalo.tpx.gr/78RgcRmp" // TODO: Paste your Travelpayouts Airalo link here
      },
      {
        type: "cta",
        value: "Explore eSIms Plans on Drimsim",
        link: "https://drimsim.tpx.gr/3y3U3LEX" // TODO: Paste your Travelpayouts Yesim link here
      },
      {
        type: "cta",
        value: "Explore Data Plans on Yesim",
        link: "https://yesim.tpx.gr/5vRANpr6" // TODO: Paste your Travelpayouts Yesim link here
      },
      {
        type: "heading",
        value: "Option 2: The Blvck Sheep Perks (The Ultimate Hack)"
      },
      {
        type: "paragraph",
        value: "While eSIMs are convenient, nothing beats the raw value and signal strength of a local Tigo or Claro physical SIM. Local data packages are incredibly cheap, making this the best option if you are staying in the country for more than a few days."
      },
      {
        type: "paragraph",
        value: "To get you the best of both worlds—local prices without the frustrating paperwork—we introduced the Blvck Sheep SIM Perk. When you book a private shuttle with us, simply request a SIM card add-on. We handle the logistics ahead of time. When you step into our ride, your fully loaded local SIM card will be waiting for you. You get instant connectivity at local rates, zero queues required."
      },
      {
        type: "cta",
        value: "Book a Shuttle & Request Your Local SIM",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20want%20to%20book%20a%20shuttle%20and%20request%20a%20local%20SIM%20card!"
      }
    ]
  },
  {
    id: "lake-atitlan-villages-guide",
    title: "Decoding Lake Atitlán: Which Village is Right for You?",
    excerpt: "Lake Atitlán is not a single destination; it is a complex network of distinct micro-cultures. Here is the insider’s guide to choosing the perfect shoreline for your aesthetic and energy.",
    publishDate: "April 15, 2026",
    readTime: "8 MIN READ",
    heroImage: decodingJournalImage.src, 
    category: "Insider Guides",
    language: "en",
    content: [
      {
        type: "paragraph",
        value: "One of the most common mistakes travelers make when booking their Guatemala itinerary is treating Lake Atitlán as a single, uniform destination. The reality is that the lake is a massive caldera surrounded by a dozen distinct villages, each fiercely independent and vibrating with a completely different energy. After half a decade of hosting and navigating these waters, we've seen countless travelers book the wrong village for their vibe—ending up in a loud backpacker hub when they wanted silent luxury, or vice versa."
      },
      {
        type: "heading",
        value: "Panajachel: The Strategic Gateway"
      },
      {
        type: "paragraph",
        value: "Known locally as 'Pana,' this is the economic engine of the lake, the primary entry point, and the town Blvck Sheep proudly calls home. While it is the busiest town, it offers the best infrastructure: the most stable fiber-optic internet and power grid on the lake (other towns suffer from frequent blackouts), the largest farmers market in Sololá, reliable ATMs, and the main public docks. Since Pana is the main hub for transportation, the docks operate later than in any other town, until 7:30 PM. If you arrive after this time, we can arrange a private lancha that works 24/7—just request this service when booking your shuttle. For digital nomads and families, it is the safest and most convenient basecamp. It boasts a beautiful public beach (the only one on the lake), and a vibrant international community ensures there is always a curated dinner, event, or gathering happening. Pana feels less like an isolated retreat, or what locals know as 'pueblitos mágicos', and more like a fully functioning, dynamic lakeside town."
      },
      {
        type: "heading",
        value: "San Marcos La Laguna: The Holistic Sanctuary"
      },
      {
        type: "paragraph",
        value: "If your itinerary involves cacao ceremonies, yoga retreats, psychedelic mushrooms, and a deep dive into wellness, San Marcos is your sanctuary. It is a bohemian haven famous for its narrow, jungle-covered pathways and spiritual community. I call it 'hippie chic'. The vibe here is incredibly relaxed, making it one of the most sought-after spots for tourists seeking restoration. Be aware that the village goes completely dark and silent early in the evening—it is designed for healing, not for nightlife. The recent influx of international wellness tourism makes it one of the more premium-priced towns. It is important to note that this rapid gentrification has negatively affected the local community, creating an interesting dynamic between the deeply rooted locals and the transient tourist crowd."
      },
      {
        type: "heading",
        value: "San Juan La Laguna: The Mayan Heartbeat"
      },
      {
        type: "paragraph",
        value: "San Juan is arguably the most visually stunning and culturally preserved town on the lake. Governed by strong local cooperatives, the Mayan community stands together to maintain a town that is self-sustaining and deeply respectful of its indigenous roots. It is the absolute epicenter for authentic textile weaving, natural dyeing processes, and indigenous art galleries (you can explore more about their incredible community initiatives at <a href=\"https://www.sanjuanlalaguna.com.gt/\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">sanjuanlalaguna.com.gt</a>). It is cleaner, quieter, and highly recommended for a culturally immersive stay. San Juan is also the starting point for the <a href=\"https://www.sanjuanlalaguna.com.gt/es/atractivos-turisticos/rostro-maya\" target=\"_blank\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Rostro Maya (Indian Nose) hike</a>—one of our absolute favorite guided treks to watch the sunrise."
      },
      {
        type: "heading",
        value: "Santa Cruz La Laguna: The Fancy Escape"
      },
      {
        type: "paragraph",
        value: "Accessible almost exclusively by boat, Santa Cruz is a quiet village built steeply into the cliffside. It offers gorgeous lakefront properties, great restaurants, and dramatic scenery. It is a town of brilliant contrasts: you can find absolute seclusion in private Airbnbs, or you can find high-energy connection at <a href=\"/hostels/free-cerveza\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Free Cerveza</a>, one of Guatemala's most legendary social hostels, famous for its summer-camp vibe and vibrant social atmosphere."
      },
      {
        type: "heading",
        value: "San Pedro La Laguna: The Backpacker Hub"
      },
      {
        type: "paragraph",
        value: "Known affectionately by the locals as 'San Pedro La Locura' (San Pedro the Madness), this is the undisputed epicenter for the younger backpacker crowd—the ultimate party town. It is a maze of narrow, vibrant streets covered in graffiti art, packed with social hubs, party hostels, and an energetic nightlife. Navigating its tight alleys in a tuk-tuk is a rite of passage, especially after a fun night out with newfound friends. Stay tuned—we will be dropping a dedicated journal entry soon detailing our favorite local-only food spots, hidden bars, and things to do that only locals know about in San Pedro."
      },
      {
        type: "heading",
        value: "Santiago Atitlán: The Cultural Epicenter"
      },
      {
        type: "paragraph",
        value: "As the largest indigenous community on the lake, Santiago offers a deeply authentic Guatemalan experience. If you want to witness the lake's true commercial heartbeat, visit during their massive market days on Thursdays and Sundays, where the streets explode with vibrant textiles, fresh produce, and local artisans. It is also home to the Maximón shrine, a fascinating blend of Mayan and Catholic traditions."
      },
      {
        type: "heading",
        value: "Cerro de Oro: The Hidden Gem"
      },
      {
        type: "paragraph",
        value: "Tucked between San Lucas Tolimán and Santiago, Cerro de Oro is the lake's best-kept secret. If you are looking to completely opt-out of the social scene, this is where you go. It is home to some of the most spectacular, secluded Airbnbs on the water—think lush private gardens, jacuzzis, roaring fireplaces, and pristine, private swimming docks. It is the ultimate choice for a private retreat with family or close friends."
      },
      {
        type: "heading",
        value: "Los Palopos: The Artisanal & Luxury Coasts"
      },
      {
        type: "paragraph",
        value: "Santa Catarina Palopó and San Antonio Palopó sit on the eastern edge of the lake, far from the main tourist circuits. Santa Catarina is about a 15-minute drive from Panajachel, and San Antonio is about a 30-minute drive from Pana. Santa Catarina is famous for its vibrantly painted houses and thermal hot springs. It is also home to world-class luxury boutique stays like <a href=\"/hotels/casa-palopo\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Casa Palopó</a>, making it perfect for a romantic, high-end getaway. Just down the road, San Antonio Palopó remains a quiet, authentic village globally renowned for its masterful ceramic pottery."
      },
      {
        type: "heading",
        value: "The Blvck Sheep Arrival Strategy"
      },
      {
        type: "paragraph",
        value: "While standard shuttles (and our shared options) will drop you at Muelle Tzanjuyú, the main dock in Pana, Blvck Sheep's private service operates differently. With our private shuttles, you can travel at any time. We can route you directly to almost any town on Lake Atitlán from anywhere in the country—whether you are coming from Antigua, Guatemala City, El Paredón, or Semuc Champey."
      },
      {
        type: "cta",
        value: "Secure Your Transfer to the Lake",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20need%20a%20shuttle%20to%20Lake%20Atitlan!"
      }
    ]
  },
  {
    id: "where-to-eat-antigua-guatemala-part-1",
    title: "Where to Eat in Antigua, Part 1: My Top 10 Favorite Spots",
    excerpt: "Navigating cobblestone streets to find new restaurants in Antigua is one of my favorite things to do. Here are 10 of my favorite spots to eat in this colonial city. From fancy dining to the best spots for a hangover cure, I've got you covered.",
    publishDate: "April 16, 2026",
    readTime: "6 MIN READ",
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop", 
    category: "Food & Culture",
    language: "en",
    content: [
      {
        type: "paragraph",
        value: "One of my favorite things to do is discover new restaurants in Antigua. This city is the culinary capital of Guatemala, and there are so many amazing places to eat. I've been through the trial and error search so you don't have to."
      },
      {
        type: "paragraph",
        value: "For Part 1 of our dining, and maybe some wining, guide, I'm sharing 10 of my favorite local spots. From the classic Guatemalan hangover cures, the Picositas, to high-end culinary fusion, these environments offer the service, atmosphere, and above all else, flavor."
      },
      {
        type: "heading",
        value: "Coffea Antigua"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Top 100 Coffee Shops in the World.</strong> Guatemala is well know of its world class coffee, this is one of the best spots to enjoy it. Support local coffee producers, we have some of the best coffee in the world. <br/><br/><a href='https://www.instagram.com/coffea.gt/' target='_blank' class='text-blue-400 hover:underline'>View on Instagram</a>"
      },
      {
        type: "heading",
        value: "Luna de Miel"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Sweet Cravings & Casual Comfort.</strong> If your body is asking for sugar after hiking a volcano, this is the safest bet in town. Luna de Miel is an Antigua institution famous for their massive, perfectly folded crepes. It&apos;s laid-back, consistently good, and undeniably comforting. <br/><br/><a href='https://www.instagram.com/lunademielantigua' target='_blank' class='text-blue-400 hover:underline'>View on Instagram</a>"
      },
      {
        type: "heading",
        value: "Hector's Deli & Bistro"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Reliable High-Quality Comfort - with killer sandwiches.</strong> When you just want an incredibly well-made meal and a glass of wine without a stiff, overly formal atmosphere. Hector's is intimate, deeply reliable, and offers food that feels like a warm hug. <br/><br/><a href='https://www.instagram.com/hectorsbistro' target='_blank' class='text-blue-400 hover:underline'>View on Instagram</a>"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
        caption: "Finding a comfortable, reliable meal is the best way to anchor yourself in a new city."
      },
      {
        type: "heading",
        value: "Samsara"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Ayurvedic Wellness & With a Dash of Mysticism.</strong> Since 2014, Samsara has been Antigua's definitive sanctuary for functional, plant-based nutrition. Inspired by Ayurvedic philosophy, their menu acts as a deliberate reset button for tired travelers. From their on-tap kombucha and house-made ferments (like kimchi and tempeh) to healing, spiced bowls of kitchary, every ingredient is chosen to restore your energy and balance your system. It is the ultimate spot to nourish your body cleanly and intentionally after days of heavy travel. This restuarant is one of my favorites spots. <br/><br/><a href='https://www.samsara.com.gt/' target='_blank' class='text-blue-400 hover:underline'>Visit Website</a>"
      },
      {
        type: "heading",
        value: "Arbol"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Authentic & Precise Japanese.</strong> You might not expect exceptional Japanese food in the colonial highlands of Central America, but Arbol delivers. It&apos;s authentic, minimalist, and provides a quiet, focused dining experience when you want a break from heavier local cuisines. <br/><br/><a href='https://www.instagram.com/arbol_coffee_gt/' target='_blank' class='text-blue-400 hover:underline'>View on Instagram</a>"
      },
      {
        type: "heading",
        value: "La Bruja"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Conscious, Elevated Plant-Based Dining.</strong> Built on the philosophy that food is a way to connect with purpose, La Bruja takes full advantage of Antigua's rich volcanic soil and eternal spring. They offer a premium, 100% vegan menu packed with fresh, locally sourced ingredients. It is the perfect sanctuary when you want a meal that is as deeply nourishing as it is beautifully crafted, leaving you energized rather than weighed down. <br/><br/><a href='https://www.labrujaveganfood.com/' target='_blank' class='text-blue-400 hover:underline'>Visit Website</a>"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop",
        caption: "From street-side authentic bites to elevated fusion, Antigua's food scene is dynamic."
      },
      {
        type: "heading",
        value: "Hugo's"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Ceviche & The Legendary 'Picosita'.</strong> This is your crash course in local street-level culture. Hugo's is famous for seafood and micheladas, but you are here for the <em>Picosita</em>. They are the pioneers of this drink. What is a Picosita? It is a quintessential Guatemalan lifesaver—usually an ice-cold local beer served right in the can, dressed heavily with lime, salt, pepper, Worcestershire sauce, hot sauce, and topped with fresh ceviche juices and spices. It is the ultimate afternoon refresher or hangover cure. <br/><br/><a href='https://www.instagram.com/hugosrestauranteantigua/' target='_blank' class='text-blue-400 hover:underline'>Visit Instagram</a>"
      },
      {
        type: "heading",
        value: "El Portón Típico"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Best Guatemalan Food on a Budget.</strong> Traveling smart means knowing where the locals eat. El Portón Típico offers rich, traditional Guatemalan plates at prices that make sense. It&apos;s an accessible, unpretentious, and highly satisfying way to explore the local palate."
      },
      {
        type: "heading",
        value: "7A Norte"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Rooftop Pizzas & Cold Beers.</strong> When the sun goes down and you just want to decompress. 7A Norte offers great pizza, cold beer, and a rooftop view that reminds you exactly why you traveled to Antigua in the first place. Simple, effective, and deeply relaxing. <br/><br/><a href='https://www.instagram.com/7anorte' target='_blank' class='text-blue-400 hover:underline'>View on Instagram</a>"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop",
        caption: "Sometimes, peace of mind looks exactly like a rooftop pizza after a long day of travel."
      },
      {
        type: "heading",
        value: "Itzam"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Elevated Fusion & High Cuisine.</strong> For the nights you want to dress up and experience the modern edge of Guatemalan gastronomy. Itzam blends coffee culture, local ingredients, and world-class cocktails into a sophisticated, highly intentional dining experience. <br/><br/><a href='https://www.itzam.com.gt/' target='_blank' class='text-blue-400 hover:underline'>Visit Website</a>"
      },
      {
        type: "heading",
        value: "Mesón Panza Verde"
      },
      {
        type: "paragraph",
        value: "<strong>Vibe: Classic, Atmospheric Excellence.</strong> Arguably the most romantic and established fine-dining room in the city. If you are looking for the best steak in Antigua, paired with an unmatched colonial ambiance and live music, Panza Verde is the definitive premium choice. <br/><br/><a href='https://www.panzaverde.com' target='_blank' class='text-blue-400 hover:underline'>Visit Website</a>"
      },
      {
        type: "cta",
        value: "Book your ride to Antigua",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20am%20ready%20to%20travel%20safely!"
      }
    ]
  },
  {
    id: "guia-sim-card-esim-guatemala",
    title: "Cómo obtener datos en Guatemala: eSIMs vs. Tarjetas SIM locales",
    excerpt: "Navegar por los datos móviles en Guatemala puede ser sorprendentemente frustrante debido a las estrictas leyes de registro. Aquí tienes la guía definitiva para evitar el papeleo y conectarte desde el momento en que aterrizas.",
    publishDate: "16 de marzo de 2026",
    readTime: "5 MIN DE LECTURA",
    heroImage: simJournalImage.src, 
    category: "Trucos de Viaje",
    language: "es",
    content: [
      {
        type: "paragraph",
        value: "Bajar del avión en el Aeropuerto Internacional La Aurora y darte cuenta de que no tienes acceso a internet para buscar la dirección de tu hotel o pedir un transporte es una clásica pesadilla de viaje. Aunque Guatemala tiene una excelente cobertura móvil, conectarse no es tan simple como comprar una tarjeta SIM en una tienda de conveniencia."
      },
      {
        type: "heading",
        value: "La realidad de las redes móviles guatemaltecas"
      },
      {
        type: "paragraph",
        value: "El país funciona con dos grandes gigantes de las telecomunicaciones: Tigo y Claro. Ambos ofrecen una excelente cobertura 4G/LTE, aunque Tigo generalmente tiene una ligera ventaja en áreas remotas como Semuc Champey o los pueblos más pequeños alrededor del Lago de Atitlán. Sin embargo, Guatemala aplica estrictas leyes de registro. Para comprar una tarjeta SIM física, debes presentar tu pasaporte físico original (a menudo no se aceptan copias) y esperar a que un empleado registre manualmente tu dispositivo en la base de datos nacional. Hacer esto en el aeropuerto significa esperar en filas enormes, y hacerlo en la ciudad consume tu valioso tiempo de vacaciones."
      },
      {
        type: "heading",
        value: "Opción 1: La solución instantánea (eSIMs)"
      },
      {
        type: "paragraph",
        value: "Si tu teléfono está desbloqueado y es compatible con eSIM, puedes evitar por completo el papeleo físico. Compras el plan en línea antes de tu vuelo, instalas el perfil digital y lo activas en el instante en que tu avión toca la pista. Es increíblemente conveniente, aunque pagarás un precio premium por los datos en comparación con las tarifas locales."
      },
      {
        type: "paragraph",
        value: "Recomendamos verificar las tarifas en tres proveedores globales confiables: Airalo, Yesim y Drimsim. Airalo es el estándar de la industria para los viajeros, cubren prácticamente todo el mundo y tienen precios muy competitivos. Drimsim es una excelente opción que ofrece tarjetas SIM internacionales que pueden enviar a la dirección de tu casa (ideal si quieres ahorrar dinero a largo plazo), y también tienen uno de los mejores precios en el mercado para eSIMs. Yesim es otra buena alternativa, aunque los precios varían dependiendo de la región."
      },
      {
        type: "cta",
        value: "Consulta las tarifas para Guatemala en Airalo",
        link: "https://airalo.tpx.gr/78RgcRmp" 
      },
      {
        type: "cta",
        value: "Explora los planes de eSIMs en Drimsim",
        link: "https://drimsim.tpx.gr/3y3U3LEX" 
      },
      {
        type: "cta",
        value: "Explora los planes de datos en Yesim",
        link: "https://yesim.tpx.gr/5vRANpr6" 
      },
      {
        type: "heading",
        value: "Opción 2: Los beneficios de Blvck Sheep (El mejor truco)"
      },
      {
        type: "paragraph",
        value: "Aunque las eSIMs son muy convenientes, nada supera el valor real y la fuerza de la señal de una tarjeta SIM física local de Tigo o Claro. Los paquetes de datos locales son increíblemente baratos, haciendo de esta la mejor opción si te vas a quedar en el país por más de unos pocos días."
      },
      {
        type: "paragraph",
        value: "Para ofrecerte lo mejor de ambos mundos—precios locales sin el frustrante papeleo—hemos creado el Blvck Sheep SIM Perk. Cuando reservas un traslado privado con nosotros, simplemente solicita una tarjeta SIM como servicio adicional. Nosotros nos encargamos de la logística con anticipación. Cuando subas a nuestro vehículo, tu tarjeta SIM local completamente cargada y lista para usarse estará esperándote. Obtienes conectividad instantánea con tarifas locales y sin hacer ni una sola fila."
      },
      {
        type: "cta",
        value: "Reserva un traslado y solicita tu SIM local",
        link: "https://wa.me/50255116881?text=¡Hola!,%20¡Quiero%20reservar%20un%20shuttle%20y%20solicitar%20una%20tarjeta%20SIM%20local!"
      }
    ]
  },
  {
    id: "5-6-day-acatenango-volcano-itinerary",
    title: "The 5-6 Day Itinerary to Conquer the Acatenango Volcano",
    excerpt: "If you are traveling to Guatemala to see the Fuego Volcano erupt, this is the perfect logistical plan. How to acclimatize first in Atitlán, what to expect from the ascent, and where to recover your legs after the mountain.",
    publishDate: "May 12, 2026",
    readTime: "6 MIN READ",
    heroImage: acatenangoJournalImage.src, 
    category: "Itineraries",
    language: "en",
    content: [
      {
        type: "paragraph",
        value: "We know why you are here. A vast majority of travelers coming to Guatemala have one main goal in mind: standing at the summit of the Acatenango Volcano at nearly 4,000 meters high and watching the neighboring Fuego Volcano spit lava under a starry sky. It is one of the most raw and breathtaking experiences on the planet."
      },
      {
        type: "paragraph",
        value: "It's no secret, but just in case you didn't know: Acatenango is very physically demanding. Personally, when I travel I walk a lot, I like walking through the streets of towns or cities, so I recommend leaving the volcano for the end, that way your legs will get warmed up exploring the beautiful villages in Atitlán. This is the perfect 5 to 6-day itinerary focused on the volcano, but acclimatizing the right way."
      },
      {
        type: "heading",
        value: "Day 1: Landing and Acclimatization at the Lake"
      },
      {
        type: "paragraph",
        value: "The biggest mistake rookies make is trying to hike the volcano the same day or the day after landing. Your body needs to adapt to the altitude progressively. Upon arriving at La Aurora International Airport (GUA), take a direct transport to Panajachel, Lake Atitlán. First, you must enjoy the beauties of Guatemala."
      },
      {
        type: "paragraph",
        value: "We have 3 departure times available from the airport for shared shuttles (6:00 a.m., 10:30 a.m., and 1:30 p.m.), and our private transit departs at the exact time you need. Atitlán has plenty of villages to explore, so it is better to have fresh legs and start acclimatizing in the most beautiful lake in the world. To decide which village to stay in, check out our <a href=\"/journal/lake-atitlan-villages-guide\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">Lake Atitlán Villages Guide</a>."
      },
      {
        type: "heading",
        value: "Day 2: Get to Know Your Favorite Atitlán Villages"
      },
      {
        type: "paragraph",
        value: "Take advantage of the morning to move around by boat and explore the magic of the lake. You can seek peace and wellness in San Marcos La Laguna, immerse yourself in art and traditional weaving in San Juan La Laguna, or enjoy the energy and cafes in San Pedro La Laguna."
      },
      {
        type: "cta",
        value: "Book your Shuttle from Panajachel to Antigua",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20need%20a%20shuttle%20from%20Panajachel%20to%20Antigua."
      },
      {
        type: "heading",
        value: "Day 3: Final Hours in Atitlán and Journey to Antigua"
      },
      {
        type: "paragraph",
        value: "The ideal plan is to make the most of your morning at the lake. If you are coming from San Marcos, San Juan, or San Pedro, you can spend the morning in Panajachel, visit Santa Catarina Palopó or the Atitlán Nature Reserve, and leave around noon or in the afternoon for Antigua Guatemala, so you are ready for the mountain. The departure times for our shared shuttles from Panajachel to Antigua are 5:00 a.m., 9:00 a.m., 12:00 p.m., and 4:00 p.m."
      },
      {
        type: "paragraph",
        value: "<strong>Option B (The Express Detour):</strong> If you prefer to transform a simple transit day into a cultural expedition, you can customize your route to Antigua with our strategic stops. Detour to Zunil to soak in its mystical volcanic hot springs enveloped in mountain mist. If you are traveling on a Thursday or Sunday, the iconic and vibrant Chichicastenango market is a must-stop. Finally, you can take a break to enjoy high-end local gastronomy in Tecpán and walk through the living history of the ancient Kaqchikel ruins of Iximché."
      },
      {
        type: "cta",
        value: "Plan your Express Detour to Antigua",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20am%20interested%20in%20planning%20a%20private%20transfer%20with%20an%20Express%20Detour%20to%20Antigua."
      },
      {
        type: "paragraph",
        value: "Upon arriving at the colonial city of Antigua, your only goal today is to go out for a nice meal and prepare for tomorrow's ascent. Rent warm clothes if you need them, pack your backpack, and above all, have a carb-rich dinner to load up on energy for tomorrow. The city is full of incredible dining options; check out our guide on <a href=\"/journal/where-to-eat-antigua-guatemala-part-1\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">where to eat in Antigua</a>. Go to sleep early, because tomorrow the challenge begins."
      },
      {
        type: "heading",
        value: "Day 4: The Acatenango Volcano"
      },
      {
        type: "paragraph",
        value: "The agencies will pick you up early to take you to La Soledad, the starting point. The ascent takes between 5 and 6 hours, passing through farmlands, a mystical cloud forest, and finally, alpine volcanic sand. A golden tip from the experts: take several bananas with you and eat them along the way. The potassium will help you enormously to prevent your legs from cramping due to the constant effort."
      },
      {
        type: "paragraph",
        value: "Once at base camp (at about 3,600 meters high), you will have a front-row seat to the Fuego Volcano eruptions. If your legs are still responding and you want the ultimate experience, you can pay an extra fee to your local guide to do the additional hike to the 'horqueta' (the ridge connecting to the Fuego Volcano). This adds about 3 to 4 extra hours round trip at sunset, but it allows you to see the erupting lava from an astonishingly close distance. It is brutally exhausting, but worth every drop of sweat."
      },
      {
        type: "heading",
        value: "Day 5: The Summit, the Descent, and the Rest"
      },
      {
        type: "paragraph",
        value: "You will wake up at 4:00 a.m. in the extreme cold for the final push to the Acatenango summit to witness a sunrise above the clouds. After taking photos, the descent begins. Going down takes about 3 hours and is destructive to the knees, so hike down with patience and care. You will return to Antigua around noon: exhausted, dusty, and with trembling legs, but happier than ever."
      },
      {
        type: "paragraph",
        value: "Now it's time to decide how you want to pamper your destroyed body:<br><br><strong>Option A (Local Relaxation):</strong> Stay in Antigua, enjoy the city, have a party night to celebrate surviving the volcano, or treat yourself to a well-deserved feast at your favorite restaurants before flying out the next day.<br><br><strong>Option B (Tropical Decompression):</strong> Travel to the Pacific coast to <a href=\"/destinations/el-paredon\" className=\"text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-4 transition-colors font-medium\">El Paredón</a>. Trade your hiking boots for sandals, lie back in a hammock at a beach club, and let the sea-level heat completely relax your muscles."
      },
      {
        type: "cta",
        value: "Comfortable Shuttles to your Next Destination",
        link: "https://wa.me/50255116881?text=Hello!,%20I%20just%20came%20down%20from%20the%20volcano%20and%20need%20a%20comfortable%20ride."
      },
      {
        type: "heading",
        value: "Day 6: The Smart Return"
      },
      {
        type: "paragraph",
        value: "Depending on what time your flight is, you can arrange a direct transfer from Antigua or from the beach in El Paredón to La Aurora International Airport. Make sure to coordinate this trip well in advance to avoid any stress on your last day. You should arrive at the airport at least 2 hours in advance."
      }
    ]
  },
];