import type { Service } from "./services";

export const services: Service[] = [
  {
    id: "fullstack",
    icon: "Monitor",
    title: "Aplicaciones Web Full-Stack",
    pitch: "Apps web listas para producción, de la idea al deploy.",
    bullets: [
      "Frontends Next.js / React con sistema de diseño tipado",
      "Backends NestJS o Rails con arquitectura limpia",
      "Auth, pagos, almacenamiento y deploys incluidos",
    ],
    bestFor: "Startups lanzando un MVP o v1",
    engagement: "Por proyecto · 4–10 semanas típico",
  },
  {
    id: "backend",
    icon: "Server",
    title: "Ingeniería de Backend y APIs",
    pitch: "Músculo backend senior sin el overhead de una contratación.",
    bullets: [
      "APIs REST en NestJS, Rails o Node.js",
      "Modelado de datos en PostgreSQL y optimización de consultas",
      "Jobs en background, webhooks y tareas programadas",
    ],
    bestFor: "Equipos con frontend pero sin backend senior",
    engagement: "Por proyecto o retainer semanal",
  },
  {
    id: "integrations",
    icon: "Plug",
    title: "Integraciones con Terceros",
    pitch: "Implemento las integraciones que otros equipos postergan.",
    bullets: [
      "Stripe (suscripciones, cupones, pagos a terceros)",
      "Logística y devoluciones (FedEx, UPS, Happy Returns)",
      "Firebase Auth, Shopify, webhooks personalizados",
    ],
    bestFor: "Equipos con una integración compleja contra el reloj",
    engagement: "Proyecto de alcance fijo · 2–6 semanas",
  },
  {
    id: "performance",
    icon: "Gauge",
    title: "Rendimiento y Mantenimiento",
    pitch: "Hago que las apps lentas sean rápidas y las mantengo así.",
    bullets: [
      "Optimización de consultas y caza de N+1 (30% de mejora en la última auditoría)",
      "Optimización de renders y bundles en el frontend",
      "Retainer mensual para correcciones, dependencias y soporte de deploy",
    ],
    bestFor: "Apps existentes que necesitan un ajuste o manos expertas",
    engagement: "Auditoría puntual o retainer mensual",
  },
];
