import type { Transition } from "framer-motion";

const base: Transition = { duration: 0.5, ease: "easeOut" };

/** For sections — triggers when the element scrolls into view */
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 },
  transition: { ...base, delay } as Transition,
});

/** For above-the-fold elements (Hero) — triggers on mount */
export const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { ...base, delay } as Transition,
});
