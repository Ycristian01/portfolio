"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";

const fadeIn = fadeInUp;

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn()}>
          <SectionHeading
            tag="06 / Contact"
            title="Let's work together"
            description="Open to senior full-stack / backend roles and selective freelance engagements. Best way to reach me is email."
            center
          />
        </motion.div>

        <motion.div
          {...fadeIn(0.15)}
          className="flex flex-col items-center gap-5"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-medium px-7 py-3 rounded-xl shadow-sm hover:shadow-md transition-all text-sm"
          >
            <Mail size={17} />
            {personal.email}
          </a>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground border border-border hover:border-accent/40 px-4 py-2 rounded-lg transition-all"
            >
              <GithubIcon className="w-[15px] h-[15px]" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground border border-border hover:border-accent/40 px-4 py-2 rounded-lg transition-all"
            >
              <LinkedinIcon className="w-[15px] h-[15px]" />
              LinkedIn
            </a>
          </div>

          {personal.calendly && (
            <a
              href={personal.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-hover font-medium underline underline-offset-4 transition-colors"
            >
              Or book a 20-min intro call →
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
