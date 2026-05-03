"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

const fadeIn = fadeInUp;

export function TechStack() {
  return (
    <section id="tech" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn()}>
          <SectionHeading
            tag="04 / Skills"
            title="Tech stack"
            description="Tools I reach for daily and frameworks I can pick up fast."
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          {techStack.map((category, i) => (
            <motion.div
              key={category.name}
              {...fadeIn(0.08 + i * 0.06)}
              className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-6 items-start py-4 border-b border-border last:border-0"
            >
              <span className="text-sm font-medium text-foreground shrink-0">
                {category.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-mono transition-colors",
                      item.level === "proficient"
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "bg-surface text-subtle border border-border"
                    )}
                  >
                    <TechIcon name={item.name} size={12} />
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeIn(0.5)}
          className="mt-6 text-xs text-subtle font-mono"
        >
          <span className="inline-block w-2 h-2 rounded-sm bg-accent/10 border border-accent/20 mr-1.5 align-middle" />
          Proficient &nbsp;&nbsp;
          <span className="inline-block w-2 h-2 rounded-sm bg-surface border border-border mr-1.5 align-middle" />
          Familiar
        </motion.p>
      </div>
    </section>
  );
}
