"use client";

import {
  Gift,
  Layout,
  Megaphone,
  PenTool,
  Printer,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = [Layout, Code2, PenTool, Printer, Megaphone, Gift];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.nav.services}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={item.title}>
                <div className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-7">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all group-hover:glow-border">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  {/* <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
                  >
                    {t.nav.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a> */}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
