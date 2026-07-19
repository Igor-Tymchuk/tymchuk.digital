"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();
  const [idx, setIdx] = useState(0);
  const words = t.hero.rotating;

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t.hero.titleA}{" "}
          <span className="relative block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[idx]}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                transition={{ duration: 0.45 }}
                className="text-gradient text-glow inline-block h-11 sm:h-17 md:h-20"
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground btn-glow transition-transform hover:scale-[1.04] sm:w-auto"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 sm:w-auto"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-9 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border glass md:grid-cols-3"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label} className="bg-card/40 px-4 py-6 text-center">
              <div className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
