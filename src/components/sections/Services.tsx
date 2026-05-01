"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Plug, Gauge, Check, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Plug,
  Gauge,
};

const fadeIn = fadeInUp;

export function Services() {
  return (
    <section id="services" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn()}>
          <SectionHeading
            tag="02 / Services"
            title="How I can help"
            description="I take on selective freelance engagements where I can genuinely move the needle. Here's where I'm most effective."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <motion.div
                key={service.id}
                {...fadeIn(0.1 + i * 0.08)}
                className={cn(
                  "group relative flex flex-col gap-5 p-6 rounded-2xl border border-border bg-background",
                  "hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg transition-all duration-200",
                  "before:absolute before:top-0 before:left-6 before:right-6 before:h-px before:bg-accent before:opacity-0",
                  "hover:before:opacity-100 before:transition-opacity"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-accent mt-0.5">{service.pitch}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={13} className="text-accent shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-4 border-t border-border text-xs text-subtle">
                  <span>
                    <span className="text-muted font-medium">Best for: </span>
                    {service.bestFor}
                  </span>
                  <span className="font-mono">{service.engagement}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...fadeIn(0.45)}
          className="mt-10 flex justify-center"
        >
          <a
            href={`mailto:${personal.email}?subject=Freelance%20inquiry`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover border border-accent/30 hover:border-accent px-5 py-2.5 rounded-xl hover:bg-accent/5 transition-all"
          >
            Book a free 20-min discovery call
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
