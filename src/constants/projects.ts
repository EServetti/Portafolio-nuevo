import type { Project } from "../views/Project.vue";

export const projectsList: Project[] = [
  {
    id: "fyb-app",
    title: "Find Your Books App",
    lang: "Typescript",
    description:
      "¿Estás cansado de pasar tiempo buscando un libro en lugar de leerlo? ¿Quieres una app que entienda tu estado de ánimo y tus gustos y te recomiende la lectura perfecta? ¡Si es así, no busques más! Tu próxima gran lectura está a solo una descripción de distancia con Find Your Books. Simplemente dile a la app qué tipo de historia quieres y la IA integrada encontrará en segundos justo lo que se ajusta a tu estado de ánimo, gustos y estilo de lectura. ¡Olvídate de las listas interminables y disfruta de una forma más inteligente de registrar, calificar y compartir los libros que te encantan con tus amigos de confianza!",
    tools: [
      { label: "Expo", countInStats: true, type: "frontend" },
      { label: "Supabase", countInStats: true, type: "database" },
      { label: "Open AI API", countInStats: false, type: "backend" },
      { label: "Google Books API", countInStats: false, type: "backend" },
    ],
    urls: [
      {
        type: "app_store",
        url: "https://apps.apple.com/ar/app/find-your-books-read-track/id6762493302",
      },
      { type: "web", url: "https://findyourbooks.app/", label: "Pagina del proyecto"}
    ],
    screenshots: [
        {
            type: "phone",
            url: "../assets/screenshots/fyb_app/home.png"
        },
        {
            type: "phone",
            url: "../assets/screenshots/fyb_app/library.png"
        },
        {
            type: "phone",
            url: "../assets/screenshots/fyb_app/streak.png"
        },
        {
            type: "phone",
            url: "../assets/screenshots/fyb_app/stats.png"
        }
    ]
  },
  {
    id: "gw",
    title: "GatherWell",
    lang: "Typescript",
    description: "GatherWell es una plataforma para crear y organizar fiestas, invitar a tus amigos y votar sobre la bebida, comida, temas de conversación y mucho más. Organiza reuniones juto a tus amigos, crea playlists de Spotify para tus fiestas y agregalas a tu calendario.",
    tools: [
      { label: "React", countInStats: true, type: "frontend"},
      { label: "n8n", countInStats: true, type: "backend"},
      { label: "Mongo DB", countInStats: true, type: "database"},
      { label: "CSS", countInStats: true, type: "frontend"}
    ],
    screenshots: [
      {type: "laptop", url: "../assets/screenshots/gw/home.jpg"},
      {type: "laptop", url: "../assets/screenshots/gw/create.png"}
    ],
    urls: [
      {
        type: "web",
        url: "https://gatherwell-adq1u.kinsta.app/"
      }
    ]
  },
  {
    id: "sc",
    title: "SmartChef",
    lang: "Typescript",
    description: "¿No sabes qué cocinar con lo que tienes en casa? ¿Quieres organizar tus recetas favoritas en un solo lugar? SmartChef es la app perfecta para ti. Ingresa los ingredientes que tienes disponibles y podras obtener recetas personalizadas, guarda las recetas en listas y compartilas todo en un lugar.",
    tools: [
      { label: "Expo", countInStats: true, type: "frontend"},
      { label: "Mongo DB", countInStats: true, type: "database"},
      { label: "Open AI API", countInStats: false, type: "backend"},
      { label: "Cloudinary", countInStats: false, type: "database"}
    ],
    screenshots: [
      {type: "phone", url: "../assets/screenshots/sc/home.jpg"},
      {type: "phone", url: "../assets/screenshots/sc/create.jpg"},
      {type: "phone", url: "../assets/screenshots/sc/lists.jpg"}
    ]
  },
  {
    id: "mf",
    lang: "Typescript",
    title: "My Flicks",
    description: "Mi primer proyecto en React Native, en el que creé una aplicación de busqueda de películas con filtrado por título y sistema de autenticación. Aqui aprendí las bases de la programación movíl.",
    tools: [
      {
        label: "React Native",
        countInStats: true,
        type: "frontend"
      }
    ],
    screenshots: [
      {type: "phone", url: "../assets/screenshots/mf/home.png"},
      {type: "phone", url: "../assets/screenshots/mf/personalization.png"},
      {type: "phone", url: "../assets/screenshots/mf/movie.png"}
    ],
    urls: [{type: "git_hub", url: "https://github.com/EServetti/My_flicks"}]
  },
  {
    id: "ait",
    title: "AI Trainer",
    lang: "Typescript",
    description: "Mi primer proyecto con TypeScript, tanto en front-end como en back-end. AITrainer es un entrenador virtual que te ofrece un plan de entrenamiento personalizado basado en tus datos personales con la opción de guardar cada plan. Ofrece una interfaz parecida a ChatGPT pero para tus planes de gim.",
    tools: [
      { label: "React", countInStats: true, type: "frontend"},
      { label: "Express", countInStats: true, type: "backend"},
      { label: "Mongo DB", countInStats: true, type: "database"},
      { label: "Open AI API", countInStats: false, type: "backend"},
      { label: "CSS", countInStats: true, type: "frontend"}
    ],
    screenshots: [
      {type: "laptop", url: "../assets/screenshots/ait/home_1.jpg"},
      {type: "laptop", url: "../assets/screenshots/ait/home_2.jpg"}
    ],
    urls: [
      {type: "git_hub", label: "GitHub (Front-end)", url: "https://github.com/EServetti/AITrainer_front"},
      {type: "git_hub", label: "GitHub (Back-end)", url: "https://github.com/EServetti/AITrainer"},
    ]
  },
  {
    id: "fyb",
    title: "Find Your Books",
    lang: "Javascript",
    description: "Mi segundo proyecto: ¿Alguna vez has querido leer sobre algo pero no sabías qué libro se ajustaba a esas características? Esto es Find your books, una página donde introduces la descripción de un libro y te da una lista de libros que coinciden con ella.",
    tools: [
      {label: "React", countInStats: true, type: "frontend"},
      {label: "Mongo DB", countInStats: true, type: "database"},
      {label: "Open AI API", countInStats: false, type: "backend"},
      {label: "Google Books API", countInStats: false, type: "backend"},
      {label: "Express", countInStats: true, type: "backend"},
      {label: "CSS", countInStats: true, type: "backend"}
    ],
    screenshots: [
      {type: "laptop", url: "../assets/screenshots/fyb/home.jpg"},
      {type: "laptop", url: "../assets/screenshots/fyb/friend.jpg"},
      {type: "laptop", url: "../assets/screenshots/fyb/list.jpg"},
      {type: "laptop", url: "../assets/screenshots/fyb/book.jpg"}
    ],
    urls: [{url: "https://github.com/EServetti/Find-my-books-front", type: "git_hub", label: "GitHub(Front-end)"},
      {url: "https://github.com/EServetti/Find-my-books", type: "git_hub", label: "GitHub(Back-end)"}
    ]
  },
  {
    id: "efyh",
    title: "Everything for your home",
    lang: "Javascript",
    description: "Este es mi primer proyecto, creado durante el curso de Coderhouse sobre desarrollo backend. Se trata de un e-commerce de muebles y otras cosas para el hogar, cuenta con un sistema de autenticación, carrito y ventas.",
    tools: [
      {label: "React", countInStats: true, type: "frontend"},
      {label: "Express", countInStats: true, type: "backend"},
      {label: "CSS", countInStats: true, type: "backend"},
      {label: "Stripe", countInStats: false, type: "backend"},
      {label: "Mongo DB", countInStats: true, type: "database"}
    ],
    screenshots: [
      {type: "laptop", url: "../assets/screenshots/efyh/home.jpg"},
      {type: "laptop", url: "../assets/screenshots/efyh/product.jpg"},
      {type: "laptop", url: "../assets/screenshots/efyh/cart.jpg"},
      {type: "laptop", url: "../assets/screenshots/efyh/purchases.jpg"}
    ],
    urls: [
      {label: "GitHub(Front-end)", type: "git_hub", url: "https://github.com/EServetti/server-front"},
      {label: "GitHub(Back-end)", type: "git_hub", url: "https://github.com/EServetti/server"}
    ]
  }
];
