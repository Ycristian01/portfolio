"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import type { UiStrings, SiteContent } from "@/i18n/get-content";

const fadeIn = fadeInUp;

type Props = { experience: SiteContent["experience"]; ui: UiStrings };

export function Experience({ experience, ui }: Props) {
  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn()}>
          <SectionHeading tag={ui.experienceTag} title={ui.experienceTitle} />
        </motion.div>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          {experience.map((role, i) => (
            <motion.div
              key={`${role.company}-${i}`}
              {...fadeIn(0.1 + i * 0.1)}
              className="relative pl-9 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {role.title}
                  </h3>
                  {role.url ? (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent font-medium hover:text-accent-hover transition-colors"
                    >
                      {role.company}
                    </a>
                  ) : (
                    <p className="text-sm text-accent font-medium">{role.company}</p>
                  )}
                </div>
                <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
                  <span className="text-xs font-mono text-muted">{role.dates}</span>
                  <span className="text-xs text-subtle">{role.location}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-subtle shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
