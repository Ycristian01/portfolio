import type { Role } from "./experience";

export const experience: Role[] = [
  {
    company: "Katapult Labs",
    url: "https://www.katapultlabs.ai/",
    title: "Ingeniero Full-Stack",
    type: "Tiempo completo",
    dates: "Ago. 2025 – Presente",
    location: "Remoto",
    bullets: [
      "Trabajo en Trashie, una plataforma de recompensas sostenibles con sede en Nueva York; desarrollé la gestión del ciclo de vida de cupones Stripe que soporta la red de recompensas de marcas asociadas.",
      "Implementé integraciones logísticas con FedEx Easy Returns, UPS y Happy Returns que habilitan operaciones de Take Back Bag con código QR a escala.",
      "Mejoré los flujos de Firebase Authentication en web y mobile, aumentando la confiabilidad del login y la seguridad.",
      "Desarrollé funcionalidades full-stack en apps React web y React Native mobile respaldadas por servicios Node.js y PostgreSQL en GCP.",
    ],
  },
  {
    company: "Desarrollo Autodidacta",
    title: "Ingeniero de Software",
    type: "Proyectos personales",
    dates: "May. 2024 – Ago. 2025",
    location: "Remoto",
    bullets: [
      "Construí y mantuve aplicaciones personales para profundizar habilidades full-stack a lo largo del stack.",
      "Practiqué desarrollo backend con NestJS, Ruby on Rails y Python, enfocándome en arquitectura limpia y diseño robusto de APIs.",
      "Exploré Docker, Kubernetes, CI/CD, TDD y mejores prácticas de inyección de dependencias.",
    ],
  },
  {
    company: "Horbath Technologies",
    url: "https://horbath.com",
    title: "Desarrollador Full-Stack",
    type: "Tiempo completo",
    dates: "Jun. 2022 – May. 2024",
    location: "Barranquilla, Colombia",
    bullets: [
      "Colideré la migración del backend de Ruby on Rails a NestJS + Sequelize, mejorando la escalabilidad y el rendimiento.",
      "Lideré integraciones con servicios externos y desarrollé procesamiento de documentos PDF con firma digital mediante NestJS y AWS S3.",
      "Implementé optimizaciones de consultas DB logrando un 30% de mejora en la velocidad de carga en toda la plataforma.",
      "Contribuí a un aumento del 25% en la satisfacción de usuarios mediante mejoras de UX y reducción de tiempos de respuesta.",
    ],
  },
  {
    company: "Koombea",
    url: "https://www.koombea.com",
    title: "Desarrollador Backend",
    type: "Tiempo completo",
    dates: "Feb. 2021 – Jun. 2022",
    location: "Barranquilla, Colombia",
    bullets: [
      "Lideré el desarrollo backend de Doit-Center, una plataforma de e-commerce panameña, usando Ruby on Rails.",
      "Integré servicios Shopify para sincronización de catálogo en tiempo real, gestión de órdenes y automatización de inventario.",
      "Colideré el desarrollo de lógica multi-pedido que permite a los usuarios realizar múltiples órdenes de productos en una sola transacción.",
      "Lideré deployments a entornos de pruebas y producción usando AWS EC2.",
    ],
  },
];
