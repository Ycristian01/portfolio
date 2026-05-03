"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";

const fadeIn = fadeInUp;

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn()}>
          <SectionHeading tag="01 / About" title="About me" />
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          {/* Left column */}
          <motion.div
            {...fadeIn(0.15)}
            className="flex flex-col items-center md:items-start gap-5"
          >
            <div className="relative w-44 h-64 md:w-52 md:h-72 rounded-2xl overflow-hidden border border-border bg-surface flex items-center justify-center">
              <Image
                src="/cristian.jpeg"
                alt={personal.name}
                fill
                className="object-cover object-top"
                priority
              />

            </div>

            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <MapPin size={14} className="text-accent shrink-0" />
                <span>{personal.location}</span>
              </div>

              <div className="flex flex-col gap-1">
                {personal.languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center gap-1.5 text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            {...fadeIn(0.25)}
            className="flex flex-col gap-5"
          >
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="#contact"
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
