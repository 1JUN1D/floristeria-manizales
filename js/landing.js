// ===================================
// LANDING PAGE JS - Petalos y Chocolates Manizales
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    {
        id: 14,
        name: "Detalle Encantador",
        price: 77050,
        image: "../assets/imagenes/14.webp",
        description: "Pequeño bouquet con rosas rojas y rosadas acompañado de gypsophila y eucalipto en papel translúcido con lazo dorado. Un obsequio sencillo y elegante para momentos espontáneos.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 15,
        name: "Sol y Rosas",
        price: 77050,
        image: "../assets/imagenes/15.webp",
        description: "Composición vertical que combina un girasol con rosas rojas y nubes blancas envuelta en papel blanco con tarjeta. Una propuesta luminosa que mezcla alegría y romanticismo.",
        categories: ["girasoles", "rosas", "precio-bajo"]
    },
    {
        id: 21,
        name: "Alegría Vibrante",
        price: 77050,
        image: "../assets/imagenes/21.webp",
        description: "Bouquet con girasoles y claveles en tonos rosados y fucsia envuelto en papel rosa con lazo. Una composición campestre y alegre que celebra la vida con frescura.",
        categories: ["girasoles", "bouquets", "precio-bajo"]
    },
    {
        id: 35,
        name: "Festival Tropical",
        price: 77050,
        image: "../assets/imagenes/35.webp",
        description: "Bouquet exuberante con girasol, rosas rojas, gerberas y heliconias en papel blanco con lazo fucsia. Una composición vibrante que evoca la energía y los colores del trópico.",
        categories: ["bouquets", "girasoles", "gerberas", "precio-bajo"]
    },
    {
        id: 36,
        name: "Tierno Capricho",
        price: 77050,
        image: "../assets/imagenes/36.webp",
        description: "Bouquet de rosas rosadas y rojas combinadas con gypsophila envuelto en papel rosa pálido. Una propuesta delicada y femenina que transmite ternura en cada pétalo.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 26,
        name: "Latido Floral",
        price: 83950,
        image: "../assets/imagenes/26.webp",
        description: "Bouquet de rosas rojas con flores amarillas tipo solidago envuelto en papel blanco con corazones rojos. Una composición que mezcla pasión y alegría en un solo gesto.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 57,
        name: "Sol Encendido",
        price: 83950,
        image: "../assets/imagenes/57.webp",
        description: "Bouquet con un girasol central rodeado de rosas rojas envuelto en papel blanco y malla roja con lazo. Una propuesta económica y vibrante para llevar luz a quien lo recibe.",
        categories: ["girasoles", "precio-bajo"]
    },
    {
        id: 37,
        name: "Jardín Romántico",
        price: 85100,
        image: "../assets/imagenes/37.webp",
        description: "Bouquet con rosas rosadas, rojas y flores blancas pequeñas con abundante follaje verde envuelto en papel rosa. Una composición campestre que recuerda un jardín en plena floración.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 38,
        name: "Sombras Carmesí",
        price: 87400,
        image: "../assets/imagenes/38.webp",
        description: "Bouquet de rosas rojas con gypsophila densa envuelto en papel negro con detalles dorados. Una composición que crea un contraste impactante entre el rojo, el blanco y el negro.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 64,
        name: "Para Ti Sol",
        price: 87400,
        image: "../assets/imagenes/64.webp",
        description: "Pequeña composición con un girasol y rosas rojas envuelta en papel gris con mensaje personalizado escrito a mano. Un detalle tierno y económico para una dedicatoria especial.",
        categories: ["girasoles", "precio-bajo"]
    },
    {
        id: 27,
        name: "Caricia de Amor",
        price: 88550,
        image: "../assets/imagenes/27.webp",
        description: "Bouquet de rosas rojas rodeadas de gypsophila envuelto en papel blanco con la palabra love y corazones dorados. Una declaración suave y elegante para enamorar nuevamente.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 16,
        name: "Elegancia Carmesí",
        price: 90850,
        image: "../assets/imagenes/16.webp",
        description: "Bouquet de rosas rojas con gypsophila abundante envuelto en papel blanco con lazos negros y blancos. Una propuesta clásica que destaca por su frescura y refinamiento.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 18,
        name: "Noche Roja",
        price: 95450,
        image: "../assets/imagenes/18.webp",
        description: "Bouquet de rosas rojas con abundante gypsophila envuelto en papel negro con sellos dorados. Una propuesta sofisticada y misteriosa para impresionar con elegancia.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 10,
        name: "Caja Sorpresa Roja",
        price: 96600,
        image: "../assets/imagenes/10.webp",
        description: "Caja redonda blanca con rosas rojas compactas acompañada de un globo transparente personalizado que flota sobre el arreglo. Un detalle moderno y festivo para celebrar momentos únicos.",
        categories: ["cajas", "rosas", "precio-bajo"]
    },
    {
        id: 19,
        name: "Corazón de Rosas",
        price: 97750,
        image: "../assets/imagenes/19.webp",
        description: "Bouquet con rosas rojas dispuestas en forma de corazón rodeadas de gypsophila y envuelto en papel translúcido. Una declaración romántica con forma simbólica para conmover.",
        categories: ["rosas", "novia", "precio-bajo"]
    },
    {
        id: 72,
        name: "Mariposa de Pasión",
        price: 100050,
        image: "../assets/imagenes/72.webp",
        description: "Ramo abundante de rosas rojas con gypsophila blanca envuelto en papel blanco con motivos negros y una mariposa dorada decorativa. Una pieza romántica y sofisticada que combina pasión con un detalle alado de gran encanto.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 7,
        name: "Sol Encantador",
        price: 100625,
        image: "../assets/imagenes/7.webp",
        description: "Pequeña composición que combina un girasol con rosas rojas envuelta en papel translúcido y un lazo rojo decorativo. Un detalle alegre y económico para sorprender con calidez.",
        categories: ["girasoles", "precio-bajo"]
    },
    {
        id: 23,
        name: "Mini Detalle Rojo",
        price: 103500,
        image: "../assets/imagenes/23.webp",
        description: "Mini bouquet de rosas rojas con gypsophila acompañado de tarjeta y lazo rojo. Un detalle compacto y emotivo para entregar un mensaje sincero sin gastar de más.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 33,
        name: "Suspiro Rosa",
        price: 103500,
        image: "../assets/imagenes/33.webp",
        description: "Bouquet de rosas rojas con follaje verde envuelto en papel rosa pálido con un gran moño rojo en la base. Una composición fresca con un envoltorio que aporta dulzura al conjunto.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 34,
        name: "Elegancia Mayor",
        price: 103500,
        image: "../assets/imagenes/34.webp",
        description: "Bouquet de rosas rojas con eucalipto envuelto en papel blanco con bordes dorados y lazo coral. Una propuesta limpia y elegante con un toque de modernidad.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 39,
        name: "Despertar Rojo",
        price: 103500,
        image: "../assets/imagenes/39.webp",
        description: "Bouquet de rosas rojas con follaje verde envuelto en papel blanco con bordes dorados y lazo rojo. Una propuesta luminosa y clásica para alegrar cualquier mañana.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 41,
        name: "Mezcla Encantada",
        price: 103500,
        image: "../assets/imagenes/41.webp",
        description: "Bouquet variado con rosas en tonos blancos, rosados, fucsias y rojos acompañado de gypsophila y follaje verde. Una composición vibrante que celebra la diversidad cromática de las rosas.",
        categories: ["rosas", "bouquets", "precio-bajo"]
    },
    {
        id: 62,
        name: "Misterio Rojo",
        price: 103500,
        image: "../assets/imagenes/62.webp",
        description: "Bouquet alto con rosas rojas y follaje verde envuelto en papel negro con bordes dorados y lazo rojo. Una composición elegante y sobria que destaca por su simplicidad refinada.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 63,
        name: "Mármol Carmesí",
        price: 103500,
        image: "../assets/imagenes/63.webp",
        description: "Bouquet de rosas rojas con follaje envuelto en papel con diseño marmolado en blanco, negro y dorado. Una propuesta sofisticada con un envoltorio que evoca el lujo de las superficies pulidas.",
        categories: ["rosas", "premium", "precio-bajo"]
    },
    {
        id: 65,
        name: "Sinfonía Solar",
        price: 104650,
        image: "../assets/imagenes/65.webp",
        description: "Bouquet abundante con varios girasoles y rosas rojas envuelto en papel blanco y dorado. Una composición luminosa que armoniza la calidez del amarillo con la pasión del rojo.",
        categories: ["girasoles", "rosas", "precio-bajo"]
    },
    {
        id: 9,
        name: "Amor Eterno",
        price: 106950,
        image: "../assets/imagenes/9.webp",
        description: "Bouquet de rosas rojas y blancas envuelto en papel negro con detalles tipográficos y corazones, rematado con un lazo rojo. Una declaración floral intensa para ocasiones románticas memorables.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 11,
        name: "Capullo Místico",
        price: 106950,
        image: "../assets/imagenes/11.webp",
        description: "Bouquet de rosas rojas rodeadas de gypsophila blanca envuelto en papel negro con motivos y rematado con una mariposa dorada decorativa. Una propuesta sofisticada que mezcla romanticismo y misterio.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 24,
        name: "Nieve Roja",
        price: 109250,
        image: "../assets/imagenes/24.webp",
        description: "Bouquet de rosas rojas rodeadas por una nube abundante de gypsophila envuelto en papel blanco con puntos dorados y lazo rojo. Una propuesta que evoca un campo nevado salpicado de pasión.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 40,
        name: "Tarde Romántica",
        price: 109250,
        image: "../assets/imagenes/40.webp",
        description: "Bouquet con rosas rojas y pompones rosados con follaje verde envuelto en papel beige con bordes amarillos y lazo rojo. Una composición romántica y campestre con encanto natural.",
        categories: ["rosas", "pompones", "precio-bajo"]
    },
    {
        id: 74,
        name: "Homenaje a Mamá",
        price: 109250,
        image: "../assets/imagenes/74.webp",
        description: "Ramo de rosas rojas con gypsophila adornado con banda dorada Feliz Día Madre en envoltura blanca y negra con motivos artísticos. Un homenaje elegante y conmovedor para la mujer más importante.",
        categories: ["rosas", "dia-madres", "precio-bajo"]
    },
    {
        id: 20,
        name: "Promesa de Amor",
        price: 111550,
        image: "../assets/imagenes/20.webp",
        description: "Bouquet de rosas rojas con eucalipto envuelto en papel blanco con tipografía romántica y lazo borgoña. Una propuesta moderna y cinematográfica para una ocasión memorable.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 25,
        name: "Cumpleaños Floral",
        price: 111550,
        image: "../assets/imagenes/25.webp",
        description: "Bouquet con rosas rojas y gypsophila coronado por un globo transparente con la palabra cumpleaños. Una idea festiva ideal para sorprender en una fecha especial.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 45,
        name: "Bouquet Provenzal",
        price: 111550,
        image: "../assets/imagenes/45.webp",
        description: "Bouquet rústico con rosas rojas, alstroemerias rosadas y statice morado envuelto en papel azul y vinotinto con lazo lila. Una composición campestre con aire europeo y mucho carácter.",
        categories: ["rosas", "bouquets", "precio-bajo"]
    },
    {
        id: 61,
        name: "Pasión Solar",
        price: 111550,
        image: "../assets/imagenes/61.webp",
        description: "Bouquet con girasoles centrales rodeados de rosas rojas y follaje envuelto en papel negro con la palabra love. Una composición intensa que combina romanticismo y alegría.",
        categories: ["girasoles", "rosas", "precio-bajo"]
    },
    {
        id: 48,
        name: "Pasión Multicolor",
        price: 121900,
        image: "../assets/imagenes/48.webp",
        description: "Bouquet circular con rosas rojas, fucsias, naranjas y lila acompañado de una tarjeta ilustrada con flores. Una composición que celebra la pasión en todos sus matices.",
        categories: ["rosas", "bouquets", "precio-bajo"]
    },
    {
        id: 13,
        name: "Romance Pastel",
        price: 123050,
        image: "../assets/imagenes/13.webp",
        description: "Bouquet con rosas rojas y rosadas combinadas con eucalipto y envueltas en papel rosado pastel con lazo. Una composición fresca y romántica que equilibra intensidad y delicadeza.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 12,
        name: "Burbuja de Cariño",
        price: 129950,
        image: "../assets/imagenes/12.webp",
        description: "Bouquet con rosas y follaje verde coronado por un globo transparente con mensaje personalizado. Una idea original y festiva para sorprender con un toque divertido y romántico.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 17,
        name: "Jardín Pastel",
        price: 129950,
        image: "../assets/imagenes/17.webp",
        description: "Bouquet en tonos pasteles con margaritas blancas, rosas rosadas y violetas envuelto en papel fucsia. Una composición primaveral que transmite ternura y vitalidad.",
        categories: ["bouquets", "precio-bajo"]
    },
    {
        id: 22,
        name: "Joya Carmesí",
        price: 129950,
        image: "../assets/imagenes/22.webp",
        description: "Bouquet de rosas rojas con gypsophila adornado con un hilo de perlas en papel negro mate y lazo rojo de seda. Una pieza distinguida con un detalle sofisticado que la convierte en una joya floral.",
        categories: ["rosas", "premium", "precio-bajo"]
    },
    {
        id: 28,
        name: "Caja Negra Clásica",
        price: 129950,
        image: "../assets/imagenes/28.webp",
        description: "Caja redonda negra con rosas rojas dispuestas en domo rodeadas de gypsophila y rematada con lazo rojo. Una propuesta clásica que conserva la frescura y la elegancia por más tiempo.",
        categories: ["rosas", "cajas", "precio-bajo"]
    },
    {
        id: 46,
        name: "Sol del Amor",
        price: 129950,
        image: "../assets/imagenes/46.webp",
        description: "Bouquet circular con un girasol central rodeado de rosas rojas, rosadas y abundante gypsophila envuelto en papel rosa. Una composición que mezcla la calidez del sol con la dulzura del amor.",
        categories: ["girasoles", "rosas", "precio-bajo"]
    },
    {
        id: 54,
        name: "Cúpula Carmesí",
        price: 129950,
        image: "../assets/imagenes/54.webp",
        description: "Bouquet circular abundante con rosas rojas y gypsophila envuelto en papel negro con bordes blancos en forma de pétalos. Una composición sofisticada con un envoltorio escultórico.",
        categories: ["rosas", "precio-bajo"]
    },
    {
        id: 2,
        name: "Amanecer Dorado",
        price: 130812,
        image: "../assets/imagenes/2.webp",
        description: "Bouquet luminoso en tonos amarillos que reúne gerberas, rosas y nubes blancas envuelto en papel beige con detalles dorados. Una propuesta vibrante perfecta para alegrar el día de quien recibe.",
        categories: ["gerberas", "bouquets", "precio-bajo"]
    },
    {
        id: 4,
        name: "Pasión Rosada",
        price: 130812,
        image: "../assets/imagenes/4.webp",
        description: "Bouquet compacto en tonalidades fucsia y rosado con margaritas y rosas envuelto en papel blanco con puntos dorados. Una pieza vivaz y femenina que captura la atención por su intensidad cromática.",
        categories: ["bouquets", "precio-bajo"]
    },
    {
        id: 5,
        name: "Manantial Maternal",
        price: 130812,
        image: "../assets/imagenes/5.webp",
        description: "Bouquet abundante con girasol central, rosas, margaritas y follaje variado acompañado de una tarjeta dedicada con mensaje especial. Perfecto para conmover a esa figura materna que llena la vida de luz.",
        categories: ["bouquets", "dia-madres", "precio-bajo"]
    },
    {
        id: 6,
        name: "Arcoíris de Rosas",
        price: 130812,
        image: "../assets/imagenes/6.webp",
        description: "Bouquet de rosas en tonos vibrantes que mezcla rojo, amarillo, naranja y rosado en una composición circular. Envuelto en papel blanco que resalta cada matiz con frescura y armonía.",
        categories: ["rosas", "bouquets", "precio-bajo"]
    },
    {
        id: 8,
        name: "Pureza Nupcial",
        price: 130812,
        image: "../assets/imagenes/8.webp",
        description: "Bouquet de rosas blancas presentado sobre una base decorativa con cinta roja y detalles dorados. Una propuesta elegante y atemporal que evoca pureza y serenidad.",
        categories: ["rosas", "novia", "precio-bajo"]
    },
    {
        id: 31,
        name: "Caja Premium Roja",
        price: 132250,
        image: "../assets/imagenes/31.webp",
        description: "Caja redonda alta en negro con rosas rojas y doble lazo rojo decorativo. Un detalle imponente que transforma cualquier ocasión en un momento especial.",
        categories: ["rosas", "cajas", "premium", "precio-bajo"]
    },
    {
        id: 53,
        name: "Detalle Gourmet",
        price: 132250,
        image: "../assets/imagenes/53.webp",
        description: "Bouquet de rosas rojas con eucalipto envuelto en papel negro con una caja de bombones en forma de corazón. Una propuesta elegante que combina lo floral con un dulce capricho.",
        categories: ["rosas", "chocolates", "precio-bajo"]
    },
    {
        id: 32,
        name: "Domo de Rosas",
        price: 135700,
        image: "../assets/imagenes/32.webp",
        description: "Caja redonda en terciopelo negro con rosas rojas en forma de domo y banda roja con bordes dorados. Una composición refinada que combina texturas y volumen con maestría.",
        categories: ["rosas", "cajas", "premium", "precio-bajo"]
    },
    {
        id: 49,
        name: "Caja Gourmet",
        price: 147200,
        image: "../assets/imagenes/49.webp",
        description: "Caja cuadrada negra con rosas rojas, gypsophila y una caja de bombones en la parte superior con lazo dorado. Una combinación gourmet que une lo floral con lo dulce con mucha elegancia.",
        categories: ["cajas", "chocolates", "rosas", "precio-bajo"]
    },
    {
        id: 77,
        name: "Sol Dorado Kraft",
        price: 155250,
        image: "../assets/imagenes/77.webp",
        description: "Ramo de girasoles con limonio acompañado de envoltura natural kraft y lazo dorado. Una propuesta luminosa y campestre que transmite calidez, serenidad y la energía del sol.",
        categories: ["girasoles", "bouquets", "precio-medio"]
    },
    {
        id: 30,
        name: "Caja Cubo Roja",
        price: 157550,
        image: "../assets/imagenes/30.webp",
        description: "Caja cuadrada negra con rosas rojas compactas y un gran lazo de seda roja al frente. Una pieza moderna y minimalista que combina geometría con romanticismo.",
        categories: ["rosas", "cajas", "precio-medio"]
    },
    {
        id: 29,
        name: "Caja Corazón Eterno",
        price: 163300,
        image: "../assets/imagenes/29.webp",
        description: "Caja en forma de corazón negra con rosas rojas preservadas dispuestas con simetría y cinta roja. Un símbolo de amor duradero pensado para perdurar en el tiempo.",
        categories: ["rosas", "cajas", "rosas-eternas", "precio-medio"]
    },
    {
        id: 73,
        name: "Fucsia Encantada",
        price: 166750,
        image: "../assets/imagenes/73.webp",
        description: "Ramo abundante de rosas fucsias envueltas en papel morado con corazones blancos y lazo rosado. Una propuesta intensa y femenina perfecta para enamorar a primera vista con su explosión de color.",
        categories: ["rosas", "bouquets", "precio-medio"]
    },
    {
        id: 75,
        name: "Madre Bicolor",
        price: 166750,
        image: "../assets/imagenes/75.webp",
        description: "Ramo redondo grande con rosas rojas y rosadas distribuidas en mosaico con banda blanca Feliz Día de las Madres en envoltura negra con detalles geométricos. Una pieza monumental para honrar a mamá en su día especial.",
        categories: ["rosas", "dia-madres", "premium", "precio-medio"]
    },
    {
        id: 76,
        name: "Esfera Carmesí",
        price: 166750,
        image: "../assets/imagenes/76.webp",
        description: "Ramo grande circular con rosas rojas y fucsias acompañadas de margaritas blancas en envoltura roja con bordes dorados. Una obra esférica que captura todas las miradas con su intensidad cromática.",
        categories: ["rosas", "bouquets", "premium", "precio-medio"]
    },
    {
        id: 47,
        name: "Caja Sentimiento",
        price: 169050,
        image: "../assets/imagenes/47.webp",
        description: "Caja redonda negra con rosas rojas compactas y gypsophila acompañada de un lazo rojo con detalle de flor. Una propuesta clásica y emotiva para guardar un sentimiento por más tiempo.",
        categories: ["rosas", "cajas", "precio-medio"]
    },
    {
        id: 56,
        name: "Latido Solar",
        price: 169050,
        image: "../assets/imagenes/56.webp",
        description: "Arreglo en caja con rosas rojas dispuestas alrededor de un girasol central y gypsophila amarilla con lazo rojo. Una propuesta que combina dos símbolos florales en perfecta armonía.",
        categories: ["rosas", "girasoles", "cajas", "precio-medio"]
    },
    {
        id: 55,
        name: "Sol y Amor",
        price: 170200,
        image: "../assets/imagenes/55.webp",
        description: "Caja en forma de corazón rosado con rosas rojas y girasoles distribuidos en el centro con gypsophila. Una pieza romántica que une la fuerza del sol con la pasión del amor.",
        categories: ["rosas", "girasoles", "cajas", "precio-medio"]
    },
    {
        id: 3,
        name: "Dulce Disculpa",
        price: 189750,
        image: "../assets/imagenes/3.webp",
        description: "Bouquet rosado con margaritas y rosas acompañado de bombones en presentación corazón y tarjeta con dedicatoria. Una combinación tierna y reconciliadora para expresar lo que las palabras no alcanzan.",
        categories: ["bouquets", "chocolates", "precio-medio"]
    },
    {
        id: 67,
        name: "Globo San Valentín",
        price: 189750,
        image: "../assets/imagenes/67.webp",
        description: "Composición en caja redonda con globo transparente decorado, claveles rosados y bombones dispuestos en la base. Una propuesta tierna y temática ideal para fechas románticas.",
        categories: ["cajas", "chocolates", "precio-medio"]
    },
    {
        id: 68,
        name: "Caja Aniversario",
        price: 189750,
        image: "../assets/imagenes/68.webp",
        description: "Caja redonda negra con rosas rojas y gypsophila coronada por un globo transparente con globos dorados en su interior. Una propuesta festiva para celebrar un aniversario inolvidable.",
        categories: ["rosas", "cajas", "precio-medio"]
    },
    {
        id: 52,
        name: "Trono del Sol",
        price: 190900,
        image: "../assets/imagenes/52.webp",
        description: "Arreglo grande con girasoles, rosas amarillas y fucsias acompañadas de aster blanco y abundante follaje verde. Una obra luminosa que transmite poder, alegría y vitalidad sin medida.",
        categories: ["girasoles", "premium", "precio-medio"]
    },
    {
        id: 42,
        name: "Pirámide Tropical",
        price: 201250,
        image: "../assets/imagenes/42.webp",
        description: "Arreglo vertical en forma piramidal con rosas rojas, gerberas, lirios blancos y heliconias sobre una base de madera. Una pieza imponente para ocasiones que merecen una presencia mayor.",
        categories: ["premium", "gerberas", "precio-medio"]
    },
    {
        id: 43,
        name: "Canasta Frutal",
        price: 201250,
        image: "../assets/imagenes/43.webp",
        description: "Canasta artesanal con lirios amarillos y naranjas, gerberas, rosas y frutas frescas como piña, peras, uvas y bananos. Un obsequio completo que une la belleza floral con la abundancia natural.",
        categories: ["canastas", "lirios", "precio-medio"]
    },
    {
        id: 51,
        name: "Corazón Pleno",
        price: 201250,
        image: "../assets/imagenes/51.webp",
        description: "Caja en forma de corazón rojo con rosas rojas dispuestas en domo y un pequeño lazo gris al centro. Una pieza simbólica perfecta para fechas románticas o aniversarios.",
        categories: ["rosas", "cajas", "precio-medio"]
    },
    {
        id: 60,
        name: "Encanto Rosa y Lirios",
        price: 201250,
        image: "../assets/imagenes/60.webp",
        description: "Bouquet circular con rosas en tonos rosados y blancos combinadas con lirios, acompañado de globos en forma de estrella y envoltura rosa. Una propuesta moderna y soñadora con un toque festivo.",
        categories: ["rosas", "lirios", "precio-medio"]
    },
    {
        id: 71,
        name: "Globo Rosado",
        price: 205850,
        image: "../assets/imagenes/71.webp",
        description: "Caja blanca con rosas fucsia, bombones y un globo transparente con globos rosados dorados en su interior. Una propuesta festiva y femenina para sorprender en grande.",
        categories: ["rosas", "cajas", "chocolates", "precio-medio"]
    },
    {
        id: 59,
        name: "Pirámide Rosada",
        price: 224250,
        image: "../assets/imagenes/59.webp",
        description: "Arreglo vertical con rosas rosadas, gerberas blancas y rosadas, un girasol y gladiolos fucsia. Una composición elevada y elegante perfecta para entregar belleza con grandeza.",
        categories: ["rosas", "gerberas", "premium", "precio-medio"]
    },
    {
        id: 58,
        name: "Selva Floral",
        price: 225400,
        image: "../assets/imagenes/58.webp",
        description: "Arreglo tropical de gran formato con girasoles, rosas rojas y rosadas, anturios, gerberas y aves del paraíso. Una composición exuberante que reúne lo mejor del jardín tropical en una sola pieza.",
        categories: ["premium", "girasoles", "gerberas", "precio-medio"]
    },
    {
        id: 1,
        name: "Encanto Carmesí",
        price: 236900,
        image: "../assets/imagenes/1.webp",
        description: "Composición clásica que reúne rosas rojas con lirios amarillos abiertos sobre un florero de cristal en tono rubí. La combinación irradia frescura y elegancia, ideal para regalar belleza con presencia.",
        categories: ["rosas", "lirios", "precio-medio"]
    },
    {
        id: 70,
        name: "Caja Solar Gourmet",
        price: 247250,
        image: "../assets/imagenes/70.webp",
        description: "Caja redonda verde con un girasol, alstroemerias, gypsophila, una botella de espumante y bombones. Una composición elegante que une lo gourmet con la luminosidad floral.",
        categories: ["girasoles", "cajas", "chocolates", "precio-medio"]
    },
    {
        id: 50,
        name: "Fiesta de Dulzura",
        price: 258750,
        image: "../assets/imagenes/50.webp",
        description: "Composición circular abundante con rosas rojas, girasoles y bombones distribuidos en el centro con una tarjeta de cumpleaños. Un obsequio festivo que reúne flores y dulces en partes iguales.",
        categories: ["girasoles", "rosas", "chocolates", "precio-alto"]
    },
    {
        id: 69,
        name: "Caja Familiar",
        price: 258750,
        image: "../assets/imagenes/69.webp",
        description: "Caja blanca con la frase Te Amamos que contiene rosas rojas, bombones, espumante y dos globos personalizados con fotos. Un obsequio completo y conmovedor para una celebración familiar especial.",
        categories: ["rosas", "cajas", "chocolates", "dia-madres", "precio-alto"]
    },
    {
        id: 66,
        name: "Caja Brindis",
        price: 281750,
        image: "../assets/imagenes/66.webp",
        description: "Caja rectangular negra con rosas rojas, aster blanco, una botella de espumante rosado y bombones acompañada de tarjeta. Un obsequio completo pensado para brindar por algo grande.",
        categories: ["rosas", "cajas", "chocolates", "precio-alto"]
    },
    {
        id: 44,
        name: "Imperial Floral",
        price: 477250,
        image: "../assets/imagenes/44.webp",
        description: "Arreglo monumental en cascada con rosas de todos los colores, girasoles, frutas y follaje exuberante. Una obra floral de gran impacto reservada para celebraciones extraordinarias.",
        categories: ["premium", "rosas", "girasoles", "precio-alto"]
    },
    {
        id: 78,
        name: "Detalle Bonita",
        price: 141250,
        image: "../assets/imagenes/78.webp",
        description: "Bouquet en tonos rojos con rosas, alstroemerias y pompones de pétalos morados, decorado con mariposas doradas y una tarjeta especial sobre envoltura kraft. Un detalle tierno y romántico para recordarle lo bonita que es.",
        categories: ["bouquets", "rosas", "precio-bajo"]
    },
    {
        id: 79,
        name: "Corazón de Ferrero",
        price: 330000,
        image: "../assets/imagenes/79.webp",
        description: "Caja en forma de corazón con borde de rosas rojas y centro colmado de chocolates Ferrero Rocher, rematada con un lazo rojo de satín. Una declaración de amor irresistible que une lo floral con lo dulce.",
        categories: ["cajas", "rosas", "chocolates", "premium", "precio-alto"]
    },
    {
        id: 80,
        name: "Abrazo de Rosas",
        price: 147500,
        image: "../assets/imagenes/80.webp",
        description: "Ramo compacto de rosas rojas rodeado de gypsophila y envoltura dorada con lazo rojo. Una composición clásica y apasionada, perfecta para expresar un amor profundo y sincero.",
        categories: ["bouquets", "rosas", "precio-medio"]
    },
    {
        id: 81,
        name: "Caja Negra Ferrero",
        price: 210000,
        image: "../assets/imagenes/81.webp",
        description: "Caja redonda negra con rosas rojas y gypsophila, coronada con una caja de chocolates Ferrero Rocher y lazo rojo. Una propuesta elegante y gourmet que combina romanticismo y sofisticación.",
        categories: ["cajas", "rosas", "chocolates", "premium", "precio-medio"]
    },
    {
        id: 82,
        name: "Lirios y Pasión",
        price: 168750,
        image: "../assets/imagenes/82.webp",
        description: "Ramo que combina lirios rosados con rosas rojas, gypsophila y eucalipto sobre envoltura kraft con lazo rojo. Una mezcla delicada y aromática que une la ternura y la pasión en un solo gesto.",
        categories: ["bouquets", "lirios", "rosas", "precio-medio"]
    },
    {
        id: 83,
        name: "Corazón Sol y Rosas",
        price: 312500,
        image: "../assets/imagenes/83.webp",
        description: "Bouquet en forma de corazón con girasoles al centro rodeados de rosas rojas, decorado con mariposas y acompañado de chocolates Ferrero Rocher. Una composición vibrante que celebra el amor y la alegría.",
        categories: ["bouquets", "girasoles", "rosas", "chocolates", "premium", "precio-alto"]
    },
    {
        id: 84,
        name: "Cumpleaños de Reina",
        price: 141250,
        image: "../assets/imagenes/84.webp",
        description: "Ramo de rosas rojas con gypsophila, corona y mariposas decorativas, acompañado de un globo de Feliz Cumpleaños y tarjeta personalizada. Un regalo majestuoso para celebrar a quien reina en tu corazón.",
        categories: ["bouquets", "rosas", "precio-bajo"]
    }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- GENERAR CÓDIGO DE PRODUCTO ---
function getProductCode(id) {
    return 'COD-' + String(id).padStart(3, '0');
}

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.filter(p => !p.hidden).forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    // Excluir productos ocultos
    let productsToDisplay = products.filter(p => !p.hidden);

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes, incluye código de producto, multi-palabra)
    if (currentSearchQuery) {
        const queryNorm = removeAccents(currentSearchQuery.trim());
        const queryWords = queryNorm.split(/\s+/);
        productsToDisplay = productsToDisplay.filter(p => {
            const text = removeAccents(p.name + ' ' + p.description + ' ' + (p.categories ? p.categories.join(' ') : '') + ' ' + getProductCode(p.id));
            return queryWords.every(word => text.includes(word));
        });
    }

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    // Orden final: ascendente por precio (los productos con la categoría prioritaria primero, luego el resto)
    if (LANDING_PRIORITY_TAG) {
        const priority = productsToDisplay.filter(p => p.categories && p.categories.includes(LANDING_PRIORITY_TAG));
        const rest = productsToDisplay.filter(p => !p.categories || !p.categories.includes(LANDING_PRIORITY_TAG));
        priority.sort((a, b) => a.price - b.price);
        rest.sort((a, b) => a.price - b.price);
        productsToDisplay = [...priority, ...rest];
    } else {
        productsToDisplay.sort((a, b) => a.price - b.price);
    }

    updateResultsCount(productsToDisplay.length);

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const code = getProductCode(product.id);
        const productHTML = `
            <div class="product-item">
                <div class="product-image" style="position:relative;">
                    <span class="product-code-badge" style="position:absolute;top:0.7rem;left:0.7rem;background:rgba(0,0,0,0.65);color:#fff;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;font-weight:700;letter-spacing:0.5px;z-index:2;font-family:'Poppins',sans-serif;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);">${code}</span>
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Manizales" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${code} - ${escapedName}', '${product.price}', '${product.image.replace(/'/g, "\\'")}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// --- FUNCIONES DE WHATSAPP ---
function contactWA() {
    const url = 'https://wa.me/573206696209?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price, image) {
    let message = `Hola, me interesa ${productName} (${formatCOP(parseFloat(price))}). ¿Podrías darme más información?`;
    if (image) {
        const photoUrl = 'https://floristeriamanizales.dondeseria.com/' + String(image).replace('../', '');
        message = `Hola, me interesa el producto: ${productName} - ${formatCOP(parseFloat(price))}\nFoto: ${photoUrl}`;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/573206696209?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17951767999/DlVjCIeAg_gbEL_7iPBC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function initCatalog() {
    window._catalogInitialized = true;
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    // Render inicial con todos los productos
    renderProducts();

    // Soporte #dia-madre en URL
    checkHashMadres();
}

// Animación de corazones al activar filtro Día de las Madres
function spawnHearts() {
    let container = document.querySelector('.hearts-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'hearts-container';
        document.body.appendChild(container);
    }
    const hearts = ['♥', '❤', '♡', '❣'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        heart.style.color = ['#e91e63', '#ec407a', '#f06292', '#ff4081', '#ff80ab'][Math.floor(Math.random() * 5)];
        container.appendChild(heart);
        setTimeout(function() { heart.remove(); }, 5000);
    }
}

// Soporte #dia-madre en URL
function checkHashMadres() {
    var madresBtn = document.querySelector('.filter-btn-madres');
    if (madresBtn) {
        madresBtn.addEventListener('click', function() {
            spawnHearts();
        });
    }
}

// Inicializar automáticamente si no se define LANDING_PRIORITY_TAG manualmente
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
