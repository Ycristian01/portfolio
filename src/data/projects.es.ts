import type { Project } from "./projects";

export const projects: Project[] = [
  {
    name: "Trashie Rewards Platform",
    employer: "Katapult Labs",
    year: "2025",
    description:
      "Plataforma de recompensas sostenibles que permite a los consumidores reciclar ropa a cambio de TrashieCash. Desarrollé la gestión del ciclo de vida de cupones Stripe, integraciones con FedEx/UPS/Happy Returns y flujos de Firebase Auth en web y mobile.",
    stack: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Firebase",
      "GCP",
    ],
    liveUrl: "https://app.trashie.io",
    appUrl: "https://apps.apple.com/co/app/trashie/id6747362894",
    confidential: true,
  },
  {
    name: "Sistema Brilla",
    employer: "Horbath Technologies",
    year: "2022 – 2024",
    description:
      "Plataforma web de créditos no bancarios pagados a través de facturas de gas. Lideré la migración de Rails a NestJS, implementé firma digital de PDFs y reduje el tiempo de carga en un 30%.",
    outcome: "30% más rápido · 25% de aumento en satisfacción de usuarios",
    stack: [
      "TypeScript",
      "NestJS",
      "Ruby on Rails",
      "React",
      "Redux",
      "PostgreSQL",
      "AWS S3",
    ],
    liveUrl: "https://sistemabrilla.com",
    confidential: true,
    internal: true,
  },
  {
    name: "Doit-Center E-Commerce",
    employer: "Koombea",
    year: "2021 – 2022",
    description:
      "Backend de e-commerce integrado con Shopify para un retailer panameño. Desarrollé lógica de multi-pedido, sincronización de catálogo en tiempo real y actualizaciones automáticas de inventario.",
    stack: ["Ruby on Rails", "PostgreSQL", "Shopify", "Redis", "AWS EC2"],
    liveUrl: "https://www.doitcenter.com.pa",
    confidential: true,
  },
  {
    name: "Whole Exome Analysis Pipeline",
    employer: "Freelance · Universidad del Norte",
    year: "2020",
    description:
      "Aplicación de escritorio en Python que procesa datos del genoma humano a través de un pipeline bioinformático, desarrollada para el laboratorio de investigación de un profesor universitario.",
    stack: ["Python"],
    confidential: false,
  },
];
