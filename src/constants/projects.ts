import type { Project } from "../views/Project.vue";

export const projectsList: Project[] = [
  {
    id: "fyb-app",
    title: "Find Your Books App",
    description:
      "¿Estás cansado de pasar tiempo buscando un libro en lugar de leerlo? ¿Quieres una app que entienda tu estado de ánimo y tus gustos y te recomiende la lectura perfecta? ¡Si es así, no busques más! Tu próxima gran lectura está a solo una descripción de distancia con Find Your Books. Simplemente dile a la app qué tipo de historia quieres y la IA integrada encontrará en segundos justo lo que se ajusta a tu estado de ánimo, gustos y estilo de lectura. ¡Olvídate de las listas interminables y disfruta de una forma más inteligente de registrar, calificar y compartir los libros que te encantan con tus amigos de confianza!",
    tools: [
      { label: "Expo", countInStats: true, type: "Frontend" },
      { label: "Supabase", countInStats: true, type: "Database" },
      { label: "Open AI API", countInStats: false, type: "Backend" },
      { label: "Google Books API", countInStats: false, type: "Backend" },
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
];
