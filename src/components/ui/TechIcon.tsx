import { type IconType } from 'react-icons'
import { Code2 } from 'lucide-react'
import {
  SiTypescript, SiJavascript, SiRuby, SiPython, SiDotnet, SiCss,
  SiNodedotjs, SiNestjs, SiRubyonrails, SiDjango, SiSpringboot,
  SiReact, SiRedux, SiNextdotjs, SiAstro,
  SiPostgresql, SiSequelize, SiMongodb,
  SiGooglecloud, SiDocker, SiGithubactions, SiRedis, SiKubernetes,
  SiStripe, SiFirebase, SiShopify, SiAnthropic,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

const TECH_ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Ruby: SiRuby,
  Python: SiPython,
  'C#': SiDotnet,
  Java: FaJava,
  CSS: SiCss,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  'Ruby on Rails': SiRubyonrails,
  Django: SiDjango,
  'Spring Boot': SiSpringboot,
  React: SiReact,
  'React Native': SiReact,
  Redux: SiRedux,
  'Next.js': SiNextdotjs,
  Astro: SiAstro,
  PostgreSQL: SiPostgresql,
  Sequelize: SiSequelize,
  MongoDB: SiMongodb,
  'Google Cloud Platform': SiGooglecloud,
  'AWS (S3, EC2)': FaAws,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
  Redis: SiRedis,
  Kubernetes: SiKubernetes,
  Stripe: SiStripe,
  'Firebase Auth': SiFirebase,
  Shopify: SiShopify,
  'Claude Code': SiAnthropic,
}

export function TechIcon({ name, size = 13 }: { name: string; size?: number }) {
  const Icon = TECH_ICONS[name]
  if (!Icon) return <Code2 size={size} className="opacity-40" />
  return <Icon size={size} />
}
