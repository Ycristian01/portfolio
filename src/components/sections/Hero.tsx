"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ChevronDown } from "lucide-react";
import { personal } from "@/data/personal";
import { heroFade } from "@/lib/animations";

const fade = heroFade;

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          {...fade(0.1)}
          className="text-muted font-mono text-sm tracking-widest uppercase mb-4"
        >
          {personal.eyebrow}
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-none mb-4"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className="text-lg md:text-xl font-medium text-accent mb-6"
        >
          {personal.title}
          <span className="text-subtle mx-2">·</span>
          <span className="text-muted">{personal.subtitle}</span>
        </motion.p>

        <motion.p
          {...fade(0.4)}
          className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-lg mx-auto"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          {...fade(0.5)}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            Hire me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-surface hover:bg-border text-foreground text-sm font-medium px-5 py-2.5 rounded-xl border border-border transition-all"
          >
            View work
          </a>
        </motion.div>

        <motion.button
          {...fade(0.6)}
          onClick={copyEmail}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
          aria-label="Copy email address"
        >
          <span className="font-mono">{personal.email}</span>
          <span className="p-1 rounded-md bg-surface border border-border group-hover:border-accent/40 transition-colors">
            {copied ? (
              <Check size={12} className="text-green-500" />
            ) : (
              <Copy size={12} />
            )}
          </span>
        </motion.button>

        <motion.div
          {...fade(0.8)}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll down"
            className="text-subtle hover:text-muted transition-colors animate-bounce"
          >
            <ChevronDown size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
