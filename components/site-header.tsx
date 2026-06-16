"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitch } from "@/components/language-switch";
import { cn } from "@/lib/utils";
import logo from "../public/favicon.svg";

export function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass  border border-border py-2.5"
              : "border border-transparent py-3",
          )}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span>
              <img
                src="/favicon.svg"
                alt="Logo Tymchuk Digital"
                width="40"
                className=""
              />
            </span>
            <span className="font-heading text-base font-extrabold tracking-tight sm:text-lg">
              TYMCHUK
              <span className="text-primary text-glow">.DIGITAL</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitch className="hidden sm:flex" />
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground btn-glow transition-transform hover:scale-[1.04] md:inline-flex"
            >
              {t.nav.cta}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="relative flex items-center justify-between px-6 py-5">
              <span className="font-heading text-lg font-extrabold">
                TYMCHUK<span className="text-primary">.DIGITAL</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  className="font-heading text-3xl font-bold tracking-tight text-foreground/90 transition-colors hover:text-primary"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="relative flex items-center justify-between gap-4 px-8 pb-10">
              <LanguageSwitch />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground btn-glow"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
