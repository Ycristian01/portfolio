"use client";

import { motion } from "framer-motion";
import { Lock, ExternalLink, Smartphone } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";

const fadeIn = fadeInUp;

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn()}>
          <SectionHeading
            tag="03 / Work"
            title="Selected projects"
            description="A snapshot of production work. Most projects are under NDA. Context and results are what matter."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              {...fadeIn(0.1 + i * 0.08)}
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-subtle">{project.year}</span>
                    <span className="text-xs text-subtle">·</span>
                    <span className="text-xs text-muted">{project.employer}</span>
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {project.name}
                  </h3>
                </div>
                {project.confidential && (
                  <span
                    title="Under NDA"
                    className="shrink-0 p-1.5 rounded-lg bg-surface border border-border text-subtle"
                  >
                    <Lock size={13} />
                  </span>
                )}
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {project.description}
              </p>

              {project.outcome && (
                <p className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-3 py-1.5 rounded-lg">
                  {project.outcome}
                </p>
              )}

              {(project.liveUrl || project.appUrl) && (
                <div className="flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground border border-border hover:border-accent/40 px-3 py-1.5 rounded-lg transition-all"
                    >
                      <ExternalLink size={11} />
                      {project.internal ? "Visit (internal)" : "Live site"}
                    </a>
                  )}
                  {project.appUrl && (
                    <a
                      href={project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground border border-border hover:border-accent/40 px-3 py-1.5 rounded-lg transition-all"
                    >
                      <Smartphone size={11} />
                      iOS App
                    </a>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-md bg-surface border border-border text-muted font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
