"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import type { UiStrings } from "@/i18n/get-content";

type Props = { ui: UiStrings };

export function ResumeCTA({ ui }: Props) {
  return (
    <section className="relative z-10 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          {...fadeInUp()}
          className="rounded-2xl border border-border bg-surface px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {ui.resumeCtaHeading}
            </h3>
            <p className="text-sm text-muted mt-1">{ui.resumeCtaBody}</p>
          </div>
          <a
            href={ui.resumeUrl}
            download
            className="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <FileDown size={16} />
            {ui.resumeCtaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
