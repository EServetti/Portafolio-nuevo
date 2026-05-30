import type { UniversityCard } from "../components/UniversityCard.vue";

export const coursesCards: UniversityCard[] = [
  {
    title: "Curso de Introducción a la Programación Backend",
    description:
      "Curso introductorio a la programación backend con Node.js impartido por la Universidad Tecnológica Nacional (UTN).",
    location: "Remoto",
    duration: "30 horas",
    status: "Finalizado",
    startDate: "Ene 2024",
    logoUrl: "../assets/icons/utn-logo.png",
    diplomaUrl: "../assets/diplomas/utn-curso-diploma.jpg",
  },
  {
    title: "Programación backend en Coderhouse",
    description: "En este curso, aprenderás a desarrollar aplicaciones backend robustas, rápidas y escalables mediante el dominio de la gestión de datos en bases de datos NoSQL y la aplicación de técnicas avanzadas para la comunicación y el control de grandes volúmenes de datos. Integrarás sistemas de autenticación y autorización para gestionar usuarios de forma segura, utilizando arquitecturas profesionales y optimizando el rendimiento mediante simulacros, normalización y herramientas de depuración como registros, depuración y generación de perfiles. Además, explorarás prácticas de escalabilidad con clústeres y Kubernetes, centrándote en la configuración, la seguridad y la documentación REST de API.",
    seeMoreUrl: "https://www.coderhouse.com/",
    location: "Remoto",
    duration: "94 horas",
    status: "Finalizado",
    startDate: "Mar 2024",
    logoUrl: "../assets/icons/coderhouse-logo.png",
    diplomaUrl: "../assets/diplomas/coderhouse-backend-diploma.png"
  },
  {
    title: "SQL en Coderhouse",
    description: "En este curso aprenderás los conceptos básicos de las bases de datos relacionales, las cuales son implementadas por todas las organizaciones para tomar decisiones basadas en la información que generan en su modelo de negocio. Crearás una base de datos relacional desde cero, desde la generación de la estructura hasta la inserción de la información, e implementarás procesos de automatización para el mantenimiento de la base de datos. Implementarás consultas SQL avanzadas para generar informes y reportes para la toma de decisiones. Al finalizar el curso, estarás listo para analizar bases de datos e información de cualquier modelo de negocio.",
    seeMoreUrl: "https://www.coderhouse.com/ar/online/sql",
    location: "Remoto",
    duration: "24 horas",
    status: "Finalizado",
    startDate: "Oct 2024",
    logoUrl: "../assets/icons/coderhouse-logo.png",
    diplomaUrl: "../assets/diplomas/coderhouse-sql-diploma.png"
  },
   {
    title: "React js en Coderhouse",
    description: "En este curso desarrolla aplicaciones web modernas con React. Aprende a crear interfaces de usuario interactivas y eficientes, utilizando componentes, hooks y herramientas clave que optimizan el rendimiento y la experiencia del usuario.",
    seeMoreUrl: "https://www.coderhouse.com/ar/cursos/reactjs",
    location: "Remoto",
    duration: "16 horas",
    status: "Finalizado",
    startDate: "Feb 2025",
    logoUrl: "../assets/icons/coderhouse-logo.png",
    diplomaUrl: "../assets/diplomas/coderhouse-react-diploma.png"
  }
];
