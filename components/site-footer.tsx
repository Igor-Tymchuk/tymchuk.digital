"use client";

import { Mail, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#reviews", label: t.nav.reviews },
  ];

  return (
    <footer className="relative border-t border-border px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          {" "}
          <span>
            <img
              src="/favicon.svg"
              alt="Logo Tymchuk Digital"
              width="70"
              className="inline mr-1"
            />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight">
            {" "}
            TYMCHUK<span className="text-primary text-glow">.DIGITAL</span>
          </span>
          <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.nav}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.contact}
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:tymchuk.developer@gmail.com"
              className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              tymchuk.developer@gmail.com
            </a>
            <div className="mt-1 flex gap-2.5">
              <a
                href="https://t.me/Tymchuk_Developer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="Social link"
                noopener-noreferrer="true"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="Social link"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="neon-line mx-auto mt-12 max-w-6xl opacity-60" />

      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <span>
          &copy; {new Date().getFullYear()} TYMCHUK.DIGITAL. {t.footer.rights}
        </span>
        <span>Designed &amp; engineered with precision.</span>
      </div>
    </footer>
  );
}
